# Base image
FROM node:23

# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
# RUN npm run build

# Expose the port
EXPOSE 5050

# Start the application
CMD ["npm", "run", "dev"]