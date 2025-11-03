#base image
FROM node:24-alpine3.22
# set the working directory
WORKDIR /app

# copy packages 
COPY package.json .
COPY package-lock.json .

RUN npm install

# EXPOSE 8000-3001 or 8000 5000

COPY . .

CMD ["npm","start"]