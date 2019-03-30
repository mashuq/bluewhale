# Getting Nodejs v11
FROM node:11
# Creating app directory
WORKDIR /usr/src/app
# Copying Application
COPY node ./
# Getting node libraries
RUN npm install
# Exposing Port
EXPOSE 80
# Running App
CMD [ "npm", "start" ]
