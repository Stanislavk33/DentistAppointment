_,-;*'`How to run DentistAppointment project`'*;-,_
Made the steps (step 1 excluded) while writing them so it should be considered as tested.
1. Download and install:
		JDK 1.8
		Maven 3.5.2
		Node v8.8.1
		NPM 5.4.2
		MySQL 1.4 - download link https://dev.mysql.com/downloads/installer/
		*While installing MySQL keep track of the ports, user names and passwords that you pick.

2. Get a copy of the project. Unzip the downloaded copy somewhere ( <unzipped project folder> ).

3. Prepare MySQL server:
3.1 Pick a <schema name> .
3.2 Create a schema named <schema name> .

4. Edit project's backend properties file so that it can successfully connect with your MySQL server
4.1 Open <unzipped project folder>\DentistAppointment\server\src\main\resources\application.properties
4.2 Edit the following lines:
		spring.datasource.url=jdbc:mysql://localhost:3306/new
		spring.datasource.username=root
		spring.datasource.password=root
	to:
		spring.datasource.url=jdbc:mysql://localhost:<your port from MySQL setup>/<schema name>
		spring.datasource.username=<your username from MySQL setup>
		spring.datasource.password=<your password from MySQL setup>
	*Default port for MySQL server is 3306.

5. Build the project
5.1 Open cmd
5.2 Change directory to the unzipped project (<unzipped project folder>\DentistAppointment\)
	The directory should contain 
					   .gitignore
					   pom.xml
					   README.md
		<DIR>          server
		<DIR>          ui
		<DIR>          useful
5.3 Use maven to build the project using command:
		mvn clean install

6. Run the project
6.1 Change directory to <unzipped project folder>\DentistAppointment\server\
6.2 Use mvn to run the app on port 8080:
		mvn spring-boot:run

7. Open the app using a *modern* browser at localhost:8080 .