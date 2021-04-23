# Spring Cloud project

## Table of contents
* [About project](#about-project)
* [Architecture diagram](#architecture-diagram)
* [Technologies](#technologies)
* [Used dependencies](#used-dependencies)
* [Used plugins](#used-plugins)
* [Starting the application](#starting-the-application)
* [Example screenshots](#example-screenshots)

## About project
Spring Cloud project with different Spring Boot services and React frontend. Cookie-service gets 
response from feign clients such as activity-service and decision-service, then it connects both
responses into ConnectedResponse model that includes both services' names and random value from
their arrays declared in their configurations .yml files from below link's repository. Then it sends
the response to the frontend application where it's being displayed in styled components divs.

* [Server configuration](https://github.com/Rocik764/fortune-cookie)
* [Docker images pulling from Docker hub: rocik764/image](https://hub.docker.com/)

_Master branch for local enviroment. Deploymentready branch for my VPS enviroment_

## Architecture diagram
![spring_cloud_project](https://user-images.githubusercontent.com/63047043/115928446-657a0300-a486-11eb-9b18-ee41776ff777.png)

## Technologies
* Spring Boot
* Spring Cloud
* React
* Docker
* Java 11
* JavaScript
* HTML & CSS

## Used dependencies
* spring-boot-starter-web
* spring-cloud-starter-netflix-eureka-client
* spring-cloud-starter-netflix-eureka-server
* spring-cloud-config-server
* spring-cloud-starter-config
* spring-cloud-starter-netflix-hystrix
* spring-cloud-starter-openfeign
* spring-cloud-starter-netflix-ribbon
## Used plugins
* jib-maven-plugin

## Starting the application
#### jib plugin - command to create docker images in maven
```
mvn package com.google.cloud.tools:jib-maven-plugin:dockerBuild
```
#### inside frontend directory, command to create react frontend image from Dockerfile
```
$ cd frontend
$ npm install
$ docker build .
``` 
#### start the application inside main project's directory
```
$ cd ..
$ docker-compose up -d
``` 

[first]: ./readme_images/random_value_first.JPG "First"
[second]: ./readme_images/random_value_second.JPG "Second"

## Example screenshots
(in case anyone wants to see it without downloading)
### First random values
![alt text][first]
### Second random values
![alt text][second]
