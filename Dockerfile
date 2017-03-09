FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN git clone https://github.com/creativefull/latihan-docker
WORKDIR /usr/src/app/latihan-docker
ENV NODE_ENV production
RUN npm install --production

# Bind Port
EXPOSE 9000
EXPOSE 9001

CMD ["npm", "start"]
