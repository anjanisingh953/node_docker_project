FROM node:22.14.0

WORKDIR /node_container_project

# RUN npm install -g nodemon

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "start"]

