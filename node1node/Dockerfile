FROM node:11
# Create app directory
WORKDIR /usr/src/app
# Copy Application
COPY node ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
