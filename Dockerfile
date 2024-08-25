FROM node:18.18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN yarn

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build:storybook