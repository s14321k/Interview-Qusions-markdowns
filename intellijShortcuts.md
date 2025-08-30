<!-- TOC -->
* [Shrotcuts](#shrotcuts)
  * [Basics To Know](#basics-to-know)
  * [intellij Settings](#intellij-settings)
    * [Shortcuts](#shortcuts)
    * [intellij Debug enable](#intellij-debug-enable)
      * [✅ What you should do to get changes reflected in debug mode:](#-what-you-should-do-to-get-changes-reflected-in-debug-mode)
    * [To Add all the project to intellij as spring boot](#to-add-all-the-project-to-intellij-as-spring-boot)
<!-- TOC -->

# Shrotcuts

- `Ctrl+Shift+R` -> Find and Replace
- `Ctrl+Shift+L` -> Format Code
- `Ctrl+Alt+L`   -> Reformat Format Code
- `Ctrl+J`     -> To see the list of suggestions
- `Ctrl+Shift+O` -> Organize Imports
- `Ctrl+Shift+P` -> Generate Getters and Setters
- `Ctrl+Shift+M` -> Generate Constructor
- `Ctrl+Shift+V` -> Select text you have previously copied
- `Ctrl+Shift+Enter` -> Make the declaration complete
- `Ctrl+Shift+E` -> Navigate to recent locations
- `Ctrl+Shift+I` -> Show Quick Definition


## Basics To Know
- Updating pom.xml, give run as Maven clean, then Maven install and then Run as spring boot application.

## intellij Settings

### Shortcuts

- Run as spring boot application: Ctrl+Shift+F10
- See the inherited members: Ctrl+F12
- See the overridden members: Ctrl+Shift+F12
- See the usages: Ctrl+F7


---
### intellij Debug enable

#### ✅ What you should do to get changes reflected in debug mode:

1. **Enable "Build project automatically"**:
  - **File > Settings > Build, Execution, Deployment > Compiler**
  - ✅ Check **Build project automatically**.

2. **Enable "HotSwap" when debugging**:
  - **File > Settings > Build, Execution, Deployment > Debugger > HotSwap**
  - Set it to **"Always reload classes"** (instead of "Ask" or "Never").

3. **(IMPORTANT)**: When you change Java files:
  - Save the file (`Ctrl+S` / `Cmd+S`).
  - Press **Ctrl+F9** (`Build Project`) to compile changes.
  - IntelliJ should **HotSwap** the modified classes automatically into the running debug session.

4. **If HotSwap doesn't happen automatically**:
  - In Debug mode, click on this icon in the toolbar: 🔄 (Reload Changed Classes).

---

**Still not reflecting?**


```properties
spring.devtools.restart.enabled=false
```


---
### To Add all the project to intellij as spring boot
- Right click on pom.xml on each project and select add to maven module
- For gradle, something similar to that.

### Build Cmds

**Remove unused dependency** 
- `./gradlew buildHealth` if we use `id 'com.autonomousapps.dependency-analysis' version '3.0.1'`
**Spotless check and apply**
- `./gradlew spotlessCheck`
- `./gradlew spotlessApply`
- `./gradlew clean build`
- `grep -i 'insecure' specs/product-service-openapi.yml`
- `grep -i 'security' specs/product-service-openapi.yml`
- `./gradlew dependencies --refresh-dependencies`
- `./gradlew dependencyCheckAnalyze --info`
- `grep -i 'security' specs/product-service-openapi.yml || grep -i 'insecure' specs/product-service-openapi.yml`
- `./gradlew dependencyCheckAnalyze --info || ./gradlew dependencies --refresh-dependencies`
- `./gradlew wrapper`
- `./gradlew tasks --no-daemon`
- `./gradlew sonar`
- `./gradlew build --scan`
- `./gradlew build --no-daemon --console=plain`
- `./gradlew tasks --all`
