# Use an official Node.js runtime as a parent image
FROM node:18
# Set the working directory to /app
WORKDIR /app
# Copy both package.json and package-lock.json into the container at /app
COPY package*.json ./
# Disable strict SSL checking
RUN npm config set strict-ssl false
# Update npm to the latest version
RUN npm install -g npm@latest
# Install dependencies using package-lock.json
RUN npm ci --force
# Copy the current directory contents into the container at /app
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run npm when the container launches
CMD ["npm", "start"]