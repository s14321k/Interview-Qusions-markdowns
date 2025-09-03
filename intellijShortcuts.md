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

### Build & Gradle Commands

Here's a collection of common Gradle and shell commands for building, analyzing, and managing your project.

---

#### 🛠️ Dependency Management & Analysis

| Command | Description |
|---|---|
| `./gradlew buildHealth` | Analyzes dependencies to find unused or misconfigured ones. Requires the `com.autonomousapps.dependency-analysis` plugin. |
| `./gradlew dependencies` | Displays the project's dependency tree. Add `--refresh-dependencies` to force a refresh from repositories. |
| `./gradlew dependencyCheckAnalyze` | Runs OWASP dependency-check to scan for known vulnerabilities in project dependencies. Use `--info` for more detailed logs. |

---

#### ✨ Code Quality & Formatting

| Command | Description |
|---|---|
| `./gradlew spotlessCheck` | Checks if the code formatting matches the rules defined by Spotless. |
| `./gradlew spotlessApply` | Automatically reformats the code to comply with Spotless rules. |
| `./gradlew sonar` | Executes a SonarQube analysis to find code quality issues, bugs, and vulnerabilities. |

---

#### 🏗️ Building & Compiling

| Command | Description |
|---|---|
| `./gradlew clean build` | Cleans the `build` directory and then compiles, tests, and assembles the project. |
| `./gradlew build --scan` | Builds the project and generates a **build scan**, providing deep insights into the build process for debugging and optimization. |
| `./gradlew build --no-daemon --console=plain` | Runs a build without using the Gradle Daemon, with simple, non-rich console output. |

---

#### 🔍 Auditing & Searching

| Command | Description |
|---|---|
| `grep -i 'security' specs/product-service-openapi.yml` | Searches for "security" (case-insensitive) within the OpenAPI spec. Useful for auditing security definitions. |
| `grep -E -i 'security\|insecure' specs/product-service-openapi.yml` | An efficient `grep` command to search for multiple patterns (e.g., "security" or "insecure") in the spec file at once. |

---

#### ⚙️ Gradle Tasks & Wrapper

| Command | Description |
|---|---|
| `./gradlew tasks` | Lists the main tasks available for the project. Use `--all` to see a complete list of all tasks. |
| `./gradlew tasks --no-daemon` | Lists tasks without starting or using the Gradle Daemon. |
| `./gradlew wrapper` | Generates or updates the Gradle wrapper scripts (`gradlew` and `gradlew.bat`). |

