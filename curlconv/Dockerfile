# Use the official Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files to the container
COPY . .

EXPOSE 3001

# Specify the command to run the application
CMD ["node", "index.js"]

