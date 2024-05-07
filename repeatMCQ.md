<!-- TOC -->

- [MCQ Questions](#mcq-questions)
  - [Angular and Ng-Content](#angular-and-ng-content)
  - [Shadow](#shadow)
  - [Form Validation of a Text Input Type Correct](#form-validation-of-a-text-input-type-correct)
  - [Dynamic Template Correct](#dynamic-template-correct)
  - [Field Creation Correct](#field-creation-correct)
  - [CSS3 Transform Correct](#css3-transform-correct)
  - [Unique Tokens Incorrect](#unique-tokens-incorrect)
  - [CSS Resize Correct](#css-resize-correct)
  - [CSS3 Attribute Selector Partially correct](#css3-attribute-selector-partially-correct)
  - [Weather](#weather)
    - [ANSWER:-](#answer-)
  - [Dog API](#dog-api)
  - [Sell API](#sell-api)
    - [other set](#other-set)

# MCQ Questions

## Angular and Ng-Content

Multiple Choice Angular Easy
Question description
Use ng-content as a part of the content project in a component. The code shows the logic of the directive, and changes are made
in sample.html.
@Component({
selector: 'app-card',
template: `

<div class="card">
<ng-content select=".header"></ng-content>
</div>
`,
styles: [
` .card { min- width: 280px; margin: 5px; float:left }
.header { color: blue}
`
]
})
Use this component in another component to load ng-content once the application starts. Which option is correct?
Interviewer guidelines
The ng-content is used when we want to insert the content dynamically inside the component that helps to increase component
reusability. This can be done by selectors i.e. class, id and element

> Answer

- <p>&lt;app-card&gt;</p> <p>&lt;div class=&quot;header&quot;&gt;&lt;h1&gt;Angular&lt;/h1&gt;&lt;/div&gt;
  </p> <p>&lt;/app-card&gt;</p> <p>&nbsp;</p>

## Shadow

Multiple Choice Front-End Development Web Development HTML CSS Easy
Question description
Which is the correct way to add shadow to a text in CSS3?
Candidate's Solution

> Answer

- h1 { text-shadow: 5px 5px; }

## Form Validation of a Text Input Type Correct

Multiple Choice Web Development HTML Medium HTML5 Syntax Front-End Development
Question description
Consider the following line of HTML5 code:

<form method="post" action="">
<input type="text" required>
<button type="submit">Submit</button>
</form>
Which of the following statements are correct?
Candidate's Solution

> Answer

- The &quot;Required&quot; attribute will check if the text field is empty on the client side when the form is
  submitted
- The submit button can be clicked even if the text field is empty.

## Dynamic Template Correct

Multiple Choice Easy Angular
Question description
There have an Angular application with a set of tabs. In each tab, it should render different data and
template. The component is tab.component.ts. The objective is to render dynamic data and template
using the objects in the code snippet.
export class TabComponent {
@Input() template;
@Input() dataContext;
}
Which is the best option to pass the data to the template?
Interviewer guidelines
The <ng-container> allows us to use structural directives without any extra element, making sure that the
only DOM changes being applied are those dictated by the directives themselves. The NgTemplateOutlet
and NgTemplateOutletContext directives can be applied to <ng-container>. By combining the two, we get a
very clear and easy to follow HTML DOM structure and the context in which no extra elements are
necessary and template views are instantiated where requested.
Candidate's Solution

> Answer

- <p>&lt;ng-container</p> <p>*ngIf=&quot;template&quot;</p> <p>
  [ngTemplateOutlet]=&quot;template&quot;</p> <p>[ngTemplateOutletContext]=&quot;
  {data: dataContext}&quot;</p> <p>&gt;&lt;/ng-container&gt;</p> <p>&nbsp;</p>

## Field Creation Correct

Multiple Choice Easy HTML5 CSS Front-End Development
Question description
Which code produces the following? Width and height are 100px.
Revanth Raman
Candidate Report Page 10 of 11
Candidate's Solution

> Answer

- &lt;fieldSet style=&quot;height:100px; width:100px&quot;&gt; &lt;Legend&gt;Coding is
  Fun&lt;/Legend&gt; &lt;/fieldSet&gt;

## CSS3 Transform Correct

Multiple Choice CSS Medium
Question description
Select the valid CSS3 transformation statement(s).
Candidate's Solution

> Answer

- matrix()
- rotate()

## Unique Tokens Incorrect

Multiple Choice Easy Angular
Question description
You have a requirement to define a token such that it is the same as a string token but generates a unique value every time,
so there are no same token conflicts. Here is the sample code snippet:
import { Injector } from '@angular/core;
class DirectMessageService {};
class ErrorMessageService {};
let MessageToken = ""DMServicestoken1"";
let ErrorToken = ""EMServicestoken1"";
let injector = **\*\*\*\***\_\_\_\_**\*\*\*\***([
{ provide: MessageToken, useClass: DirectMessageService },
{ provide: ErrorToken, useClass: ErrorMessageService },
]);
Mohammed Kashif Mohideen S
Candidate Report Page 6 of 8
Which option should fill in the blank to define the required token.
Interviewer guidelines
At the core of the DI framework is an injector.
An injector is passed a token and returns a dependency which means an injector resolves a token into a dependency.
The dependencies returned from injectors are cached. So multiple calls to the same injector for the same token will return
the same instance
Candidate's Solution

> Answer

- <p>Injector.create</p>

## CSS Resize Correct

Multiple Choice HTML CSS Easy
Question description
div {
border: 2px solid;
resize: horizontal;
Mohammed Kashif Mohideen S
Candidate Report Page 7 of 8
overflow: auto;
}
What is the function of the resize attribute?
Candidate's Solution

> Answer

- It makes the div resizable by the user.

## CSS3 Attribute Selector Partially correct

Multiple Choice CSS Medium
Question description
Select the valid statements to select an element by its attribute.
Candidate's Solution

> Answer

- a[href^=&quot;#&quot;] { background-color: gold; }
- a[href] { background-color: gold; }

## Weather

Question description : -

A team is building a travel company platform. One requirement is for a REST API service to provide weather information. Add functionality to add and delete the information as well as to perform some queries. It must handle typical information for weather data like latitude, longitude, temperature, etc.

The definitions and detailed requirements list follow. The submission is graded on whether the application performs data retrieval and manipulation based on given use cases exactly as described in the requirements.

Each weather data is a JSON object describing daily temperature recorded at a given location on a given date. Each such object has the following properties:

id: the unique integer ID of the object

date: the date, in YYYY-MM-DD format, denoting the date of the record

lat: the latitude (up to 4 decimal places) of the location of the record

lon: the longitude (up to 4 decimal places) of the location of the record

city: the name of the city of the record

state: the name of the state of the record

temperature: a Double value, up to one decimal place, denoting the daily temperature of the record

in Celsius

Here is an example of a weather data JSON object:

```
{

"id": 1,

"date": "1985-01-01",

"lat": 36.1189,

"lon":-86.6892,

"city": "Nashville",

"state": "Tennessee",

"temperature": 17.3

}
```

The REST service must expose the /weather endpoint, which allows for managing the collection of weather records in the following way:

> POST request to /weather:

creates a new weather data record

expects a valid weather data object as its body payload, except that it does not have an id

property; assume that the given object is always valid

adds the given object to the database and assigns a unique integer id to it

the response code is 201, and the response body is the created record, including its unique id

> GET request to /weather:

the response code is 200

the response body is an array of matching records, ordered by their ids in increasing order

> GET request to /weather/<id>:

returns a record with the given id

if the matching record exists, the response code is 200 and the response body is the matching object

if there is no record in the database with the given id, the response code is 404

> DELETE request to /weather/<id>:

deletes the record with the given id from the database

if a matching record existed, the response code is 204

if there was no record in the database with the given id, the response code is 404

Complete the project so that it passes all the test cases when running the provided unit tests. By default it supports the use of the H2 database. Implement the POST request to /weather first because testing the other methods requires POST to work correctly.

▼ EXAMPLE REQUESTS AND RESPONSES

> POST request to /weather

```
Request body:

"date": "2019-06-11",

"lat": 41.8818,

"lon": -87.6231,

"city": "Chicago",

"state": "Illinois",

temperature": 24.0

}
```

```
The response code is 201, and when converted to JSON, the response body is:

(

Revanth Raman

"id": 1,

"date": "2019-06-11",

"lat": 41.8818,

"lon": -87.6231,

"city": "Chicago",

"state": "Illinois",

"temperature": 24.0

}
```

This adds a new object to the database with the given properties and id 1.

> GET request to /weather

```
The response code is 200, and when converted to JSON, the response body (assuming that the below objects are all objects in the database) is as follows:

[

{ "id": 1, "date": "2019-06-11", "lat": 41,8818, "lon": -87.6231, "city": "Chicago",

"state": "Illinois",

"temperature": 24.0

{

"id": 2,

"date": "2019-06-12",

"lat": 37.8043, "state": "California",

"lon":-122.2711, "city": "Oakland",

"temperature": 24.0

}
```

> GET request to /weather/1

Assuming that the object with id 1 exists, then the response code is 200 and the response body, when converted to JSON, is as follows:

```
{

"id": 1,

"date": "2019-06-11",

}

"lat": 41.8818, "lon": -87.6231,

"city": "Chicago",

"state": "Illinois",

"temperature": 24.0
```

When an object with id 1 doesn't exist, then the response code is 404 and there are no particular requirements for the response body.

> DELETE request to /weather/1

Assuming that the object with id 1 exists, then the response code is 204 and there are no particular requirements for the response body. This causes the object with id 1 to be removed from the database.

When an object with id 1 doesn't exist, then the response code is 404 and there are no particular requirements for the response body.

### ANSWER:-

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/weather")
public class WeatherController {
    @Autowired
    private WeatherRepository weatherRepository;
    @PostMapping
    public ResponseEntity<Weather> createWeatherData(@RequestBody Weather weather) {
        WeatherData createdWeather = weatherRepository.save(weather);
        return new ResponseEntity<>(createdWeather, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Weather>> getAllWeather() {
        List<WeatherData> weatherList = weatherRepository.findAll();
        return new ResponseEntity<>(weatherList, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Weather> getWeatherById(@PathVariable Long id) {
        Optional<Weather> weather = weatherRepository.findById(id);
        if (weather.isPresent()) {
            return new ResponseEntity<>(weather.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWeather(@PathVariable Long id) {
        if (weatherRepository.existsById(id)) {
            weatherRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
```

## Dog API

```java
Private List<Dog>  dogsMap=new ArrayList<>();


public ResponseEntity<List<Dog>> getAllDog(){
  return ResponseEntity.status(HttpStatus.ok).body(dogsMap);
}


public ResponseEntity<Dog> getDogById(@pathvarable String id){
  try{
    long idDog=Long.parseLong(id);
    if(idDog>0){
      return ResponseEntity.status(HttpStatus.ok).body(null);
    }

    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
  catch (NumberFormatException e){
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
  }
}

public ResponseEntity <String> createDog(@RequestBody Dog dogs){
  if(dogs.getId ==null){
    return ResponseEntity.status(HttpStatus.CREATED).body("need to put success message");
  }
  dogsMap.add(dogs)
  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("need to put Required message");
}
```

## Sell API

```java
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Sell {
    private long id;

    @NotEmpty(message = "Product name is mandatory")
    private String productName;

    @Email(message = "Invalid customer email")
    private String customerEmail;

    @Positive(message = "Value should be none negative")
    private int sellingPrice;

    @Positive(message = "Value should be none negative")
    private int buyingPrice;
}
```

```java
@RestController
@RequestMapping("/sell")
public class SellController {

    @PostMapping
    public ResponseEntity<?> createSell(@Valid @RequestBody Sell sell) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sell> getSellById(@PathVariable long id) {
        // Retrieve the sell entry with given id
        Sell sell = new Sell(); // Replace this with actual logic to retrieve data
        return ResponseEntity.ok(sell);
    }

    @GetMapping
    public ResponseEntity<String> getAllSells() {
        // Retrieve all the sell entries
        return ResponseEntity.ok("All sells retrieved successfully");
    }
}
```

#### other set

```java

@Test
@DisplayName("testCreatedWithValidData")
public void testCreatedWithValidData()throws Exceptions{
	Sell expectedRecord = Sell.builder()
			          .productName("Test Country")
				  .customerEmail("test@email.com")
				  .buyingPrice(23)
				  .sellingPrice(25).build();
	mockMvc.perform(post("/sell")
		.contentType("application/json")
		.content(om.writeValueAsString(expectedRecord)))
		.andDo(print())
		.andExpect(status().isCreated());
}

@Test
@DisplayName("statusCode400WhenInvalidSellingPriceProvided")
public void statusCode400WhenInvalidSellingPriceProvided()throws Exceptions{
	Sell expectedRecord = Sell.builder()
			          .productName("Test Country")
				  .customerEmail("test@email.com")
				  .buyingPrice(40)
				  .sellingPrice(-40).build();
	mockMvc.perform(post("/sell")
		.contentType("application/json")
		.content(om.writeValueAsString(expectedRecord)))
		.andDo(print())
		.andExpect(status().isBadRequest())
		.andExpect(MockMvcResultMatchers.jsonPath("$.sellingPrice",Is.is("Value should be none negative")));
}

@Test
@DisplayName("statusCode400WhenInvalidEmailProvided")
public void statusCode400WhenInvalidEmailProvided()throws Exceptions{
	Sell expectedRecord = Sell.builder()
			          .productName("Test Country")
				  .customerEmail("test@email.com")
				  .buyingPrice(40)
				  .sellingPrice(35).build();
	mockMvc.perform(post("/sell")
		.contentType("application/json")
		.content(om.writeValueAsString(expectedRecord)))
		.andDo(print())
		.andExpect(status().isBadRequest())
		.andExpect(MockMvcResultMatchers.jsonPath("$.customerEmail",Is.is("Invalid customer email")));
}



@Test
@DisplayName("statusCode400WhenInvalidDataProvided")
public void statusCode400WhenInvalidDataProvided()throws Exceptions{
	Sell expectedRecord = Sell.builder()
			          .productName("Test Country")
				  .customerEmail("test@email.com")
				  .buyingPrice(-40)
				  .sellingPrice(35).build();
	mockMvc.perform(post("/sell")
		.contentType("application/json")
		.content(om.writeValueAsString(expectedRecord)))
		.andDo(print())
		.andExpect(status().isBadRequest())
		.andExpect(MockMvcResultMatchers.jsonPath("$.buyingPrice",Is.is("Value should be none negative")))
		andExpect(MockMvcResultMatchers.jsonPath("$.productName",Is.is("Product name is mandatory")));
}
```

---

---

Question

---

Data
Example of a Sell data JSON object:
{
"id": 1,
"productName": "product1",
"customerEmail": "cust@gmail.com",
"sellingPrice": 200,
"buyingPrice": 100
}

Requirements
In this project, sell data are provided for many countries with API endpoints for fetching specific information. Note that all the
data are virtual.
The following REST endpoints have been implemented.
POST request to /sell :
accepts a sell object, returns status code 201 if the object is valid
all the properties are validated using the following rules:
productName cannot be empty, if empty, then returns status code 400 and message "Product name is mandatory"
customerEmail should be a valid email, if invalid, returns status code 400 and message "Invalid customer email"
sellingPrice should be positive integer, if invalid, returns status code 400 and message "Value should be none negative"
buyingPrice should be positive integer, if invalid, returns status code 400 and message "Value should be none negative"
GET request to /sell/{id} :
returns the sell entry with given id and status code 200
GET request to /sell :
returns all the sell entries with status code 200
There are 4 tests already written but some are failing due to bugs in the implementation of those endpoints. Find the bugs and
fix them so that all the tests pass.

---

Answer:

---

```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SellController {

    @PostMapping("/sell")
    public ResponseEntity<?> createSellEntry(@RequestBody Sell sell) {
        // Validate the sell object
        if (sell.getProductName() == null || sell.getProductName().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product name is mandatory");
        }
        if (!isValidEmail(sell.getCustomerEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid customer email");
        }
        if (sell.getSellingPrice() < 0 || sell.getBuyingPrice() < 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Value should be none negative");
        }

        // If all validations pass, return status code 201 (Created)
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/sell/{id}")
    public ResponseEntity<Sell> getSellEntryById(@PathVariable("id") int id) {
        // Logic to fetch sell entry by id
        Sell sell = new Sell(); // Example: fetch sell entry from database
        return ResponseEntity.ok(sell);
    }

    @GetMapping("/sell")
    public ResponseEntity<?> getAllSellEntries() {
        // Logic to fetch all sell entries
        // Example: List<Sell> sellEntries = sellService.getAllSellEntries();
        // return ResponseEntity.ok(sellEntries);
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Not implemented");
    }

    // Utility method to validate email
    private boolean isValidEmail(String email) {
        // Logic to validate email format
        // Example: Use regular expressions or libraries for email validation
        return email != null && email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    }
}
```
