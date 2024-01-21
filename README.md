Step to run on your machine 

1. install docker
2. docker build
3.  go to vs download the docker extention
4. project root folder create docker file
5. in that file add this all information -
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm ci --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

6. create dockeringore file in root folder 
7. in that copy node_modules
8. open terminal and add docker build . commands
9. then wait for docker image is created
10. Then copy our docker img id
11. then run the cmd docker run -p 3000:3000 and img id 
12. here we go project is sucessfully dockerize.