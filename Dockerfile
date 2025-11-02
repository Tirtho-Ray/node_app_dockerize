# Step 1: Use Node official image
FROM node:20

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy files
COPY . .

# Step 4: Install dependencies
RUN npm install

# Step 5: Start the app
CMD ["npm", "start"]
