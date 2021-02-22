# downloads the required image in which you are going to make the essential changes
FROM node:14 
# a new docker conatiner is create and in side that it switches the directory to 
# /usr/src/app
WORKDIR  /usr/src/app
# copy you dependecy management file to the target container 
COPY  package.json  ./
# install the reqruied dependencies  /express and /cors 
RUN   npm install 
# what are you copyin 
COPY .  . 
# which port is going get exposed 
EXPOSE 9099 
CMD ["node" , "Server.js"]
# docker build -t <yourtag>  .  (. means find the Dockerfile in the currentfolder)
# you should have your own docker image 
#  which now you can launch , run the test ,,  and once done publish to nexus 
# docker run --name <yourcontainername> -phostport:targetport   <imagename> 







