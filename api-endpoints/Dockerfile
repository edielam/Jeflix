# Use official Node.js image as base
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining backend application code
COPY . .

# Expose port 8800 (or any other available port) for the Express server
EXPOSE 8800

# Command to run the Express server
CMD ["node", "index.js"]
