# Business Production System Suite

<meta-info>
<meta-title>Business Production System Suite</meta-title>
<meta-desc>BPS it is a management software for the client Keywords Studios.</meta-desc>
<meta-author>Stefano Pisano</meta-author>
<meta-date>2023-01-21</meta-date>
</meta-info>

## General Description

BPS it is a management software for the client Keywords Studios.
It allows to manage translation/localization projects.
Using this tool, Keywords will be able to:

* Create projects which represents the requested work from a company (ES. Sony)
* Split projects in different tasks (Transactions)
* Assign work to internal/external translator
* Manage the invoicing phase of the above

---

## Local development environment configuration

### Stuff to install

* Docker
* IDE (Eclipse STS / IntelliJ IDEA)
* Maven (bundled in Eclipse STS & IntelliJ IDEA)
* GIT (bundled in Eclipse STS)
* JDK8 (downloadable inside IntelliJ IDEA)
* Lombok (bundled in IntelliJ IDEA)
* Database Tool that supports MSSQL (bundled in IntelliJ IDEA, DBeaver Ultimate)
* Sonar Lint (optional, downloadable IDE plugin)
* JasperSoft Studio (optional)

1. Prepare the IDE:<br>
   **Eclipse STS**: setup the JDK8 from _Window | Preferences | Java | Installed JREs_, then make sure to have a perfect
   match with _JavaSE-1.8_ in _Window | Preferences | Java | Installed JREs | Execution Environments_; setup Lombok (
   see https://projectlombok.org/setup/eclipse)<br>
   **IntelliJ IDEA**: configure git from: _File | Settings | Version Control | Git | Path to Git executable_; Enable
   annotation processing from _File | Settings | Build, Execution, Deployment | Compiler | Annotation Processors |
   Enable annotation processing_
2. Create the project inside the IDE:<br>
   **Eclipse STS**: follow the procedure from _File | Import... | Git | Projects from Git (with smart import)_; during
   the procedure select only the _dev_ branch<br>
   **IntelliJ IDEA**: follow the procedure from _Git | Clone..._; after the new project has been opened, switch on _dev_
   branch from _Git | Branches..._ then reload all project POMs (pressing _shift_ twice in rapid succession then write
   _reload maven projects_)
3. Follow the instruction in _docker_/_readme_ file in order to up and run the docker environment
4. Wait until all the maven dependencies has been downloaded and the IDE is idle
5. Setup module runners:<br>
   **Eclipse STS**: if not already displayed, open the _Boot Dashboard_ from _Window | Show View_; now you should have
   all project modules ready to be started<br>
   **IntelliJ IDEA**: when requested, click on _Use Services_ for letting the IDE scanning for spring boot apps and
   automatically create their runners. if not: open the _Run/Debug Configurations_ dialog (pressing _shift_ twice in
   rapid succession then write _edit configurations_) and add a new _Spring Boot_ configuration; in any case, in order
   to make JSPs working you need to edit the _VmsApp_ runner configuration, click on _Modify options_ then _Working
   directory_ and put the following string: _$MODULE_WORKING_DIR$_

---

## Modules

* **api-gateway**: used for integrating BPS with ContentQUO (external application), it uses API inside the module
  bps-api.
* **bps-api**: contains a list of api used by external applications.
* **bpslib**: contains the business logics (used by bps-api & Vms).
* **FileIndexer**: indexes the files uploaded into the application and it is used to search into those files from BPS.
* **Vms**: main module, it contains the sessioned (non-stateless) MVC API and the frontend.
* **Vms-api**: it contains the stateless REST API.
* **Scheduler**: Scheduled jobs, it calls VMS api.

---

## Profiles

1. **Prod**: this is the live system for Production.
2. **Mirror**: this is the copy of Production, we update it with the same version in order to be able to check for bugs
   on a real environment. We use it also to release fixes on dirty data.
3. **Training**: environment used mainly by Keywords in order to train new users.
4. **Test**: where we put new releases before Production.
5. **Staging**: actually the bleeding edge demo/test environment
6. **Dev**: integration environment for developers.
7. **Local**: local environment for developers.

---

## Emails

**Local** uses _Mailpit_ (a _Mailhog_ fork) as fake SMTP server, with Web UI accessible from http://localhost:8025/ <br>
**Production** and **Training** are the only environments that send outs emails to the real users.
The other ones use an online service that intercept emails, it is mailtrap.io and it is organized in mailbox by
environment.


---

## Browser Support

BPS is developed to support:

* Firefox
* Chrome

Other browser has not been tested and their support is not guaranteed

---

## Coding styles

### Backend / Frontend communication

1. Backend and frontend should communicate between each other only using **D**ata **T**ransfer **O**bjects and the
   should extract only essential data in order to not slow down the performances.
2. Do not use 2xxx HTTP status when software fails.
3. PATCH should return 204 HTTP Status (NO CONTENT)
4. Controller should use the right HTTP Methods<br>
   **GET** for retrieving information without data manipulation<br>
   **POST** for saving into the database<br>
   **DELETE** for deleting entities on the database<br>
   **PATCH** for updating existing entities<br>
9. Error messages should be informative, avoid using general error messages like _Internal Error_, if you find them try
   to correct them

### Query Parameters

SQL Server could only accept 2100 parameters as input. When writing queries which use IN statement you should use
utility methods in the class DaoUtils (like _partitionToList_)

### Variables / Methods / Classes names

It is important to name correctly all variables when developing a new functionality inside the project. When creating a
variable you should always ask yourself which is the purpose of it and name it consequently.
This is valid for all type of variables, also the temporary one. Avoid names like _a, b, c, d, x, map, list_, they do
not describe their intentions.

### Indentation

Classes must use TAB as indentation character.

### Coverage & Code Analysis

1. Every development should be covered with at least 80% of unit tests
2. Before pushing you should look for new bugs using a tool like Sonar Lint

### Organization by functionality

Developments should be organized by functionality, we don't want to see anymore new classes into the packages:
controller/service/dao. They contains too much elements, it is confusing and it will lead to increase coupling between
classes.
The sample structure for a new development should be:<br>
Controller inside **VMS**: <br>
`it > bs >vms > backend > newfunctionality > api > NewFunctionalityApiController.java`<br><br>
Logic inside **bpslib**:<br>
`it > bs >vms > backend > newfunctionality` <br>
`> service > NewFunctionalityService.java` interface for the service<br>
`> service > impl > NewFunctionalityServiceImpl.java` implementation of the service<br>
`> dao > NewFunctionalityDao.java` interface for the dao<br>
`> dao > impl > NewFunctionalityDaoImpl.java` implementation of the dao<br>
`> model > MyNewEntity.java` The entity used by this new functionality<br>
`> dto > MyNewEntityDto.java` DTOs used by the new functionality<br>

### Single Responsibility Principle

Don't create methods or classes which do multiple things, they are error prone and also create confusion and
non-reusable code.

### Method / Classes Length

Methods / Classes should not be too long.

### Database

Do not create generic tables which contains multiple kind of entities, they make difficult creation of constraints.
Before starting a new development you should consider creating new tables or improving the current one.

### Comments

Avoid comments, they are misleading, if the code is updated the comment could become unuseful, replace them with unit
tests.
Use comments only in case of emergency.

### GIT

Don't do manual changes directly on the release branch to fix something, fix them inside the branch which contains the
error or in a new one if it is not related to any branch,

### ❗<span style="color:red">Always raise the bar</span>❗

This is an old project and we know that there are different areas which present lot of problems, when you find them
please try to improve them by refactoring the code, writing missing unit tests, extracting methods etc.