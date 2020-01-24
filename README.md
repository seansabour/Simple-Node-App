# Questions 
1. What is a hypervisor?
2. How would you go about installing a new package on a linux machine (assume we are using CentOS)? 
   1. What if that repo is not configured on that machine, what file would you need to create?
3. Provide a detailed design of how you would design a CI pipeline for when you check in code? (Whiteboard)


# Docker knowledge
1. Clone the repo to your local laptop
   1. Take some time to look at server.js to understand what this application is doing
2. Create a Docker image with the following requirements:
   1. Centos 7 Base image (You can use this image if you are using an interviewer's laptop: docker-dev-artifactory.workday.com/centos_base:latest)
   2. Nodejs installed via package manager
   3. Expose ports 8080
NOTE: If you are not familiar with node, all you need to do is copy package*.json over, run an npm install to install all dependencies, then copy the src code over, then to start the app run npm start.
3. Create a container and visit your browser to show your work.


# Troubleshooting
1. Can you show me more detail information about the container, i.e what network it's on, what bindings are attached, etc.
2. How would I troubleshoot a Systemd Service that is not coming up on CentOS(7)?
