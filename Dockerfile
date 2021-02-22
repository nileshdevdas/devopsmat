FROM openjdk:11

WORKDIR  /usr/src/app

COPY ../target/poc-0.0.1-SNAPSHOT.jar  myapp.jar

ENTRYPOINT [ "java -jar myapp.jar" ]