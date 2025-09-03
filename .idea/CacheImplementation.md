<details>
<summary>Cacheable</summary>

```java
@EnableCaching
@EnableScheduling
```

```java
import org.springframework.cache.CacheManager;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("userShops", "users");
    }
}
```


```java
package com.oreillyauto.profile.service;

import com.oreillyauto.ms.core.exception.FrameworkRuntimeException;
import com.oreillyauto.ms.core.utilities.MessageService;
import com.oreillyauto.profile.domain.Shop;
import com.oreillyauto.profile.enums.ErrorCode;
import com.oreillyauto.profile.model.Users;
import com.oreillyauto.profile.repository.UsersProfileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserCacheService {
    private final UsersProfileRepository usersProfileRepository;
    private final MessageService messageService;
    private final CacheManager cacheManager;
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    private volatile boolean evictionScheduled = false;

    @Cacheable(value = "userShops", key = "#userData.id")
    public List<Shop> mapShopsCache(Users userData) {
        List<Shop> shops = userData.getShopsUsers().stream()
                .map(shopUser -> {
                    Shop shop = new Shop();
                    shop.setShopId(shopUser.getShop().getId());
                    shop.setShopName(shopUser.getShop().getShopName());
                    return shop;
                })
                .toList();
        triggerEvictionIfNeeded();
        return shops;
    }

    @Cacheable(value = "users")
    public Users getCacheUser(String userName) {
        Users userData = usersProfileRepository.findByLoginNameWithShopsAndPreference(userName);
        if (userData == null) {
            log.info(messageService.getMessage("NO_DATA_FOUND", Locale.ENGLISH));
            throw new FrameworkRuntimeException(
                    messageService.getMessage(ErrorCode.USER_NOT_FOUND.name(), Locale.ENGLISH),
                    ErrorCode.USER_NOT_FOUND.getMessage(), HttpStatus.NOT_FOUND);
        }
        if (userData.getUserPreference() == null) {
            throw new FrameworkRuntimeException(
                    messageService.getMessage(ErrorCode.USER_PREFERENCES_NOT_FOUND.name(), Locale.ENGLISH),
                    ErrorCode.USER_PREFERENCES_NOT_FOUND.name(), HttpStatus.NOT_FOUND);
        }
        return userData;
    }

    private void triggerEvictionIfNeeded() {
        if (cacheManager == null || evictionScheduled) return;
        Cache userShopsCache = cacheManager.getCache("userShops");
        Cache usersCache = cacheManager.getCache("users");

        boolean hasData = (userShopsCache != null && userShopsCache.getNativeCache() instanceof Map<?, ?> m1 && !m1.isEmpty()) ||
                (usersCache != null && usersCache.getNativeCache() instanceof Map<?, ?> m2 && !m2.isEmpty());

        if (hasData && !evictionScheduled) {
            synchronized (this) {
                if (!evictionScheduled) { // double-check locking
                    evictionScheduled = true;
                    scheduler.schedule(this::evictAllUserShopsCache, 15, TimeUnit.SECONDS);
                }
            }
        }
    }

    public void evictAllUserShopsCache() {
        if (cacheManager != null) {
            Cache userShopsCache = cacheManager.getCache("userShops");
            Cache usersCache = cacheManager.getCache("users");
            if (userShopsCache != null) userShopsCache.clear();
            if (usersCache != null) usersCache.clear();
        }
        evictionScheduled = false;
    }
}

```

```java
@Component
@RequiredArgsConstructor
@Slf4j
public class SmsPartnerCache {

    private final SmsPartnerGateWayService smsPartnerGateWayService;

    @Cacheable("smsPartnerMapCache")
    public Map<String, SmsPartnerDTO> getSmsPartnersMap() {
        List<SmsPartnerDTO> smsPartners = smsPartnerGateWayService.callSmsPartnerGateWay();

        if (smsPartners == null || smsPartners.isEmpty()) {
            log.error("No SMS Partners received from gateway service");
            return Collections.emptyMap();
        }

        Map<String, SmsPartnerDTO> partnerMap = smsPartners.stream()
                .filter(partner -> partner != null && partner.identity() != null)
                .collect(Collectors.toMap(
                        partner -> partner.identity().toUpperCase(),
                        Function.identity())
                );

        log.info("Successfully cached {} SMS Partners", partnerMap.size());
        return partnerMap;
    }

    @CacheEvict(value = "smsPartnerMapCache", allEntries = true)
    @Scheduled(fixedRateString = "${partner.cache.refresh.time}")
    public void evictSmsPartnerMapCache() {
        log.info("Evicted all SMS Partner caches: smsPartnerMapCache");
    }
}
```

</details>
<details>
<summary>HTTP MettaData</summary>

```java
package com.oreillyauto.opchub.services.impl;

import com.oreillyauto.opchub.services.IHttpMetadataExtractorService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
@Slf4j
public class HttpMetadataExtractorService implements IHttpMetadataExtractorService {
    public HttpStatusCode extractStatusCode(Object result, HttpServletResponse response) {
        if (result instanceof ResponseEntity<?> responseEntity) {
            return responseEntity.getStatusCode();
        }

        // Check if we stored the status code from @ResponseStatus annotation
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null) {
            Integer storedStatus = (Integer) attributes.getRequest().getAttribute("ASPECT_STATUS_CODE");
            if (storedStatus != null) {
                return HttpStatusCode.valueOf(storedStatus);
            }
        }

        // Fallback to response status
        int statusCode = response.getStatus();
        return HttpStatusCode.valueOf(statusCode);
    }

    public HttpStatusCode extractResponseStatusFromMethod(ProceedingJoinPoint joinPoint) {
        try {
            if (joinPoint.getSignature() instanceof org.aspectj.lang.reflect.MethodSignature methodSignature) {
                org.springframework.web.bind.annotation.ResponseStatus responseStatus =
                        methodSignature.getMethod().getAnnotation(org.springframework.web.bind.annotation.ResponseStatus.class);
                if (responseStatus != null) {
                    return HttpStatusCode.valueOf(responseStatus.value().value());
                }
            }
        } catch (Exception e) {
            log.debug("Failed to extract @ResponseStatus from method", e);
        }
        return null;
    }

    public MediaType parseMediaType(String contentType) {
        try {
            return contentType != null ? MediaType.parseMediaType(contentType) : MediaType.APPLICATION_JSON;
        } catch (Exception e) {
            log.warn("Failed to parse media type: {}, defaulting to application/json", contentType);
            return MediaType.APPLICATION_JSON;
        }
    }
}

```

</details>
<details>
<summary>RESTCLIENT</summary>

```java
import com.oreillyauto.opchub.utils.JwtGatewayUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

import java.time.Duration;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class RestClientConfig {
    // RestClient Properties
    @Value("${services.opc-hub-gateway.url}")
    private String gatewayUrl;
    @Value("${services.opc-hub-gateway.connect-timeout}")
    private int connectTimeout;
    @Value("${services.opc-hub-gateway.read-timeout}")
    private int readTimeout;


    private final JwtGatewayUtil jwtGatewayUtil;

    @Bean
    public RestClient gatewayRestClient() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(connectTimeout));
        factory.setReadTimeout(Duration.ofSeconds(readTimeout));

        return RestClient.builder()
                .baseUrl(gatewayUrl)
                .requestInterceptor((request, body, execution) -> {
                    request.getHeaders().set(HttpHeaders.AUTHORIZATION, "Bearer " + jwtGatewayUtil.getJwt());
                    return execution.execute(request, body);
                })
                .requestFactory(factory)
                .build();
    }
}
```

```java
package com.oreillyauto.deepvault.config;

import com.oreillyauto.deepvault.service.LostSaleReportExchange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

import java.time.Duration;

@Configuration
@Slf4j
public class LegacyRestClientConfig {

    @Value("${restClient.url.connect-timeout}")
    private int connectTimeout;
    @Value("${restClient.url.read-timeout}")
    private int readTimeout;
    @Value("${app.legacy.base.url}")
    private String legacyBaseUrl;

    @Bean
    RestClient gatewayRestClient() {

        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(connectTimeout));
        factory.setReadTimeout(Duration.ofSeconds(readTimeout));

        log.info("Base URL: {}", legacyBaseUrl);

        return RestClient.builder()
                .baseUrl(legacyBaseUrl)
                .requestFactory(factory)
                .build();
    }

    @Bean
    public LostSaleReportExchange lostSalesReportExchange(RestClient legacyRestClient) {
        HttpServiceProxyFactory factory = HttpServiceProxyFactory
                .builderFor(RestClientAdapter.create(legacyRestClient))
                .build();
        return factory.createClient(LostSaleReportExchange.class);
    }
}
```

```java
package com.oreillyauto.deepvault.service.impl;

import com.oreillyauto.deepvault.exceptions.DataAccessException;
import com.oreillyauto.deepvault.exceptions.ValidationException;
import com.oreillyauto.deepvault.models.LostSalesReportSID;
import com.oreillyauto.deepvault.service.LostSaleReportExchange;
import com.oreillyauto.deepvault.service.LostSalesReportService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class LostSalesReportServiceImpl implements LostSalesReportService {

    private static final String SUCCESS_MESSAGE = "Successfully processed Lost Sales Report: ";
    private static final String CONTENT_TYPE_JSON = "application/json";
    private static final String LOST_SALES_CIRCUIT_BREAKER = "lostSalesCircuitBreaker";
    private static final String LOST_SALES_RETRY = "lostSalesRetry";

    private final LostSaleReportExchange lostSaleReportExchange;
    private final MeterRegistry meterRegistry;

    @Override
    @CircuitBreaker(name = LOST_SALES_CIRCUIT_BREAKER, fallbackMethod = "lostSaleReportExchangeFallback")
    @Retry(name = LOST_SALES_RETRY, fallbackMethod = "lostSaleReportExchangeFallback")
    public String lostSaleReportExchange(
            LostSalesReportSID lostSalesReportSID,
            String authorizationHeader) {

        log.info("LostSalesReportSID exchange payload: {}", lostSalesReportSID);
        log.info("Calling Lost Sales Report exchange service");

        // Start timer for metrics
        Timer.Sample sample = Timer.start(meterRegistry);

        ResponseEntity<String> responseEntity = lostSaleReportExchange.getLostSaleReport(
                lostSalesReportSID,
                authorizationHeader,
                CONTENT_TYPE_JSON);

        log.info("Received response from Lost Sales Report exchange service with status code: {}",
                responseEntity.getStatusCode());

        // Record the time taken for the request
        sample.stop(meterRegistry.timer("lost_sales_report.request.time"));

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            log.info("Exchange service call was successful");
            // Record successful call metric
            meterRegistry.counter("lost_sales_report.success").increment();
            return SUCCESS_MESSAGE + LocalDateTime.now();
        } else {
            log.error("Exchange service returned non-success status code: {}", responseEntity.getStatusCode());
            // Record failed call metric
            meterRegistry.counter("lost_sales_report.failure").increment();
            throw new DataAccessException("Exchange service returned non-success status: " + responseEntity.getStatusCode());
        }
    }

    @SuppressWarnings("squid:S1172")
    public String lostSaleReportExchangeFallback(
            LostSalesReportSID lostSalesReportSID,
            String authorizationHeader,
            Exception ex) {

        log.warn("Circuit breaker/retry triggered - Executing fallback for Lost Sales Report exchange. Error: {}", ex.getMessage());
        // Record fallback metric
        meterRegistry.counter("lost_sales_report.fallback").increment();

        // Handle different exception types appropriately
        return switch (ex) {
            case HttpClientErrorException clientEx -> {
                log.error("Client error in exchange service:\nStatus code: {}\nResponse body: {}\nResponse headers: {}",
                        clientEx.getStatusCode(),
                        clientEx.getResponseBodyAsString(),
                        clientEx.getResponseHeaders());

                // Record specific client error metric
                meterRegistry.counter("lost_sales_report.client_error").increment();

                yield "Client error occurred: " + clientEx.getStatusCode() +
                        " - Lost Sales Report request could not be processed due to invalid data.";
            }
            case HttpServerErrorException serverEx -> {
                log.error("Server error in exchange service:\nStatus code: {}\nResponse body: {}\nResponse headers: {}",
                        serverEx.getStatusCode(),
                        serverEx.getResponseBodyAsString(),
                        serverEx.getResponseHeaders());

                // Record specific server error metric
                meterRegistry.counter("lost_sales_report.server_error").increment();

                yield "Service temporarily unavailable - Lost Sales Report request has been recorded and will be processed later.";
            }
            case DataAccessException dataAccessException -> {
                log.error("Data access error during Lost Sales Report exchange: {}", ex.getMessage());
                // Record data access error metric
                meterRegistry.counter("lost_sales_report.data_access_error").increment();
                yield "Unable to access Lost Sales Report data - Please try again later.";
            }
            case ValidationException validationException -> {
                log.error("Validation error for Lost Sales Report request: {}", ex.getMessage());
                // Record validation error metric
                meterRegistry.counter("lost_sales_report.validation_error").increment();
                yield "Invalid Lost Sales Report request: " + ex.getMessage();
            }
            default -> {
                log.error("Unexpected error during lostSaleReportExchange call: {}", ex.getMessage(), ex);
                // Record unknown error metric
                meterRegistry.counter("lost_sales_report.unknown_error").increment();
                yield "Service temporarily unavailable - Lost Sales Report request has been recorded and will be processed later.";
            }
        };
    }
}
```

```java
package com.oreillyauto.deepvault.service;

import com.oreillyauto.deepvault.models.LostSalesReportSID;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.service.annotation.PostExchange;

public interface LostSaleReportExchange {

    @PostExchange("/feedback/product/lostsale")
    ResponseEntity<String> getLostSaleReport(
        @RequestBody LostSalesReportSID lostSalesReportSID,
        @RequestHeader("Authorization") String authenticationToken,
        @RequestHeader("Content-Type") String contentType
    );
}
```

```java
package com.oreillyauto.deepvault.service;

import com.oreillyauto.deepvault.models.LostSalesReportSID;

public interface LostSalesReportService {
    String lostSaleReportExchange(LostSalesReportSID lostSalesReportSID, String authorizationHeader);
}
```

```
restClient:
  url:
    read-timeout: ${LEGACY_AUTH_READ_TIMEOUT:15}
    connect-timeout: ${LEGACY_AUTH_CONNECT_TIMEOUT:2}

resilience4j:
  circuitbreaker:
    configs:
      default:
        failureRateThreshold: 50
        waitDurationInOpenState: 5s
        permittedNumberOfCallsInHalfOpenState: 3
        minimumNumberOfCalls: 10
        slidingWindowSize: 10
    instances:
      lostSalesCircuitBreaker:
        baseConfig: default
  retry:
    configs:
      default:
        maxAttempts: 3
        waitDuration: 500ms
        retryExceptions:
          - org.springframework.web.client.HttpServerErrorException
          - com.oreillyauto.deepvault.exceptions.DataAccessException
          - java.io.IOException
    instances:
      lostSalesRetry:
        baseConfig: default
```

`systemProperty 'spring.profiles.active', 'cloud-test'`

</details>
<details>
<summary>EXCEPTION</summary>

```java
package com.oreillyauto.opchub.exceptions;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.oreillyauto.opchub.exceptions.gateway.Gateway4xxException;
import com.oreillyauto.opchub.exceptions.gateway.GatewayServiceException;
import com.oreillyauto.opchub.exceptions.gateway.GatewayUnavailableException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ServerWebInputException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.time.Instant;

@Slf4j
@RestControllerAdvice
public class GlobalErrorHandler {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private static final String ERROR_INVALID_INPUT = "Invalid input : ";
    private static final String ERROR_ILLEGAL_ARGUMENT = "Illegal argument : ";
    private static final String ERROR_SMS_PARTNER_NOT_FOUND = "Sms Partner not found : ";
    private static final String ERROR_MESSAGE_NOT_READABLE = "Message not readable : ";


    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoResourceFoundException.class)
    public ErrorMessage handleNoResourceFoundException(NoResourceFoundException e, HttpServletRequest request) {
        return HttpErrorMessage.builder().timestamp(Instant.now()).apiPath(request.getRequestURL().toString()).message(HttpStatus.NOT_FOUND.getReasonPhrase()).statusCode(HttpStatus.NOT_FOUND).build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({AccountVerificationException.class,OrderPartsException.class})
    public ErrorMessage handleAccountVerificationAndOrderPartsException(Exception ex) {
        return HttpErrorMessage.builder()
                .message(ex.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorMessage handleMethodArgumentNotValid(MethodArgumentNotValidException e) {
        ObjectNode errors = OBJECT_MAPPER.createObjectNode();
        e.getFieldErrors().forEach(fe -> errors.put(fe.getField(), fe.getDefaultMessage()));

        return HttpErrorMessage.builder()
                .message(ERROR_INVALID_INPUT + e.getMessage())
                .errorData(errors)
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public ErrorMessage handleIllegalArgument(IllegalArgumentException e) {
        log.warn("IllegalArgumentException triggered: {}", e.getMessage(), e);
        return HttpErrorMessage.builder()
                .message(ERROR_ILLEGAL_ARGUMENT + e.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ErrorMessage handleHttpMessageNotReadable(HttpMessageNotReadableException e) {
        log.warn("Message not readable: {}", e.getMessage(), e);
        return HttpErrorMessage.builder()
                .message(ERROR_MESSAGE_NOT_READABLE + e.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(SMSPartnerNotFoundException.class)
    public ErrorMessage handleSmsPartnerNotFound(SMSPartnerNotFoundException e) {
        log.warn("SMS Partner not found: {}", e.getMessage(), e);
        return HttpErrorMessage.builder()
                .message(ERROR_SMS_PARTNER_NOT_FOUND + e.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ServerWebInputException.class)
    public ErrorMessage handleServerWebInput(ServerWebInputException e) {
        log.warn("ServerWebInputException: {}", e.getMessage(), e);
        return HttpErrorMessage.builder()
                .message(ERROR_INVALID_INPUT + e.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .timestamp(Instant.now())
                .build();
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler({AuthenticationCredentialsNotFoundException.class, Gateway4xxException.class})
    public ErrorMessage handleUnauthorized(Exception ex) {
        return HttpErrorMessage.builder().message(ex.getMessage()).errorData(ex).statusCode(HttpStatus.UNAUTHORIZED).timestamp(Instant.now()).build();
    }

    @ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ErrorMessage handleHttpMediaTypeNotSupportedException(HttpMediaTypeNotSupportedException ex) {
        return HttpErrorMessage.builder().message(ex.getMessage()).errorData(ex).statusCode(HttpStatus.UNSUPPORTED_MEDIA_TYPE).timestamp(Instant.now()).build();
    }

    @ExceptionHandler(GatewayException.class)
    public ResponseEntity<HttpErrorMessage> gatewayException(GatewayException e, HttpServletRequest request) {
        String requestURL = request.getRequestURL().toString();
        return ResponseEntity.status(e.getStatus()).body(HttpErrorMessage.builder()
                .message(e.getMessage())
                .statusCode(HttpStatus.valueOf(e.getStatus().value()))
                .timestamp(Instant.now())
                .apiPath(requestURL).build());
    }

    @ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
    @ExceptionHandler({GatewayMaxRetriesExceededException.class, GatewayUnavailableException.class,})
    public ErrorMessage handleGatewayMaxRetriesExceededException(Exception e) {
        return HttpErrorMessage.builder().message(e.getMessage())
                .statusCode(HttpStatus.SERVICE_UNAVAILABLE).timestamp(Instant.now()).build();
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ErrorMessage handleResourceNotFoundException(ResourceNotFoundException e) {
        return HttpErrorMessage.builder().message(e.getMessage())
                .statusCode(HttpStatus.NOT_FOUND).timestamp(Instant.now()).build();
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({Exception.class, FileReadException.class, GatewayServiceException.class})
    public ErrorMessage handleDefaultException(Exception e, HttpServletRequest request) {
        String requestURL = request.getRequestURL().toString();
        log.error("Request: {} failed.", requestURL, e);

        return HttpErrorMessage.builder().message(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase()).statusCode(HttpStatus.INTERNAL_SERVER_ERROR).timestamp(Instant.now()).apiPath(requestURL).build();
    }
}
```

```java
package com.oreillyauto.opchub.exceptions;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Builder;
import org.springframework.http.HttpStatus;

import java.time.Instant;

@Builder
@JacksonXmlRootElement(localName = "HttpErrorMessage")
public record HttpErrorMessage(
        @JacksonXmlProperty(localName = "message")
        String message,
        @JacksonXmlProperty(localName = "statusCode")
        HttpStatus statusCode,
        @JacksonXmlProperty(localName = "apiPath")
        String apiPath,
        @JacksonXmlProperty(localName = "timestamp")
        Instant timestamp,
        @JacksonXmlProperty(localName = "errorData")
        Object errorData
) implements ErrorMessage {
}

```

</details>
<details>
<summary>Spring Cloud</summary>

```
ext {
    springCloudVersion = '2024.0.2'
}

// Circuit breaker
    implementation 'org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j'

dependencyManagement {
    imports {
        mavenBom "org.springframework.cloud:spring-cloud-dependencies:${springCloudVersion}"
    }
}
```

</details>