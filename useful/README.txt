 1. Build and run app.
 1.1. To start the app first you will need:
 1.1.1. a running MySQL server;
 1.1.2. 'application.properties' filled correctly regarding your MySQL server (url, username and password).

 1.2. Execute to build whole project (also deploys the ui in the server's static folder so Spring can use it):
    ~in project directory~
    mvn clean install

 1.3. To start the app:
 1.3.1. Execute:
      ~in server directory~
      mvn spring-boot:run
 1.3.2. Go to localhost:8080.

 2. While working on the ui, (having the server running) you can execute:
       ~ in ..\ui\src\main\ui directory ~
       npm start
    and see your changes going to localhost:4200. This will keep a server running and will
    update files as you develop them. After updating the files it will automatically
    refresh all browsers that have loaded it.

 3. Please import the code_style.xml file in your IntellijIdea Settings so we submit files with similarly written code.
    (File > Settings... > Editor > Code Style > Scheme > ~gear drop down~ > Import Scheme > Intellij IDEA code style XML)
