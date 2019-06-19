FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy app source
COPY . ./

# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
