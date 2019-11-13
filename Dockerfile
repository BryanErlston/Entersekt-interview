# Based off of an existing image of offical Node using alpine as a linux distro, 
# see https://hub.docker.com/_/node for more info.
FROM node:10.13-alpine

# Environment variables
ENV NODE_ENV=production port=3000

# Directory where you can expect to find the application in the container.
WORKDIR /usr/src/app

# Expose the service to listen to port 8080, NOTE: this doesn't set the service up to listen to this port,
# you will still need to pass the -p/--publish flag.
EXPOSE 3000

# Copy the package files over.
COPY package*.json ./

# Copy all the remaining files over, see the .dockerignore for info on ingored files.
COPY . .

# Build the NodeJs service inside the container
RUN npm cache clean --force && npm install --production

# Start the service
CMD npm start