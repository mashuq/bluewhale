FROM maven:3.6.0-jdk-11
# Creating app directory
WORKDIR /usr/src/app
# Copying Application
COPY spring ./
# Getting .m2 libraries
RUN mvn install
# Exposing Port
EXPOSE 8080
# Running App
CMD [ "mvn", "spring-boot:run" ]
