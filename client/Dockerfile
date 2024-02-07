# Use official Node.js image as base
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining client application code
COPY . .

# Expose port 3000 for the React application
EXPOSE 3000

# Command to run the React application
CMD ["npm", "start"]
