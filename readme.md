# Nursery Application Backend

Project live link:
https://nursery-app-backend.vercel.app

It's a Node.js application built with Node.js, Express.js and TypeScript.


## Set up application

First of all you need to clone the repository. Here is the repository link:
https://github.com/Mehedi556/online-nursery-app-backend

In the command prompt you have to write this command. The full command is ( git clone https://github.com/Mehedi556/online-nursery-app-backend.git )

Then go to the downloaded repository by cd (repository name) or manually.

Secondly install all the dependencies by write in the terminal

    npm install 


## It will be helpful for you if you add product data and category data to your MongoDB compass that I have added in products.json and categories.json


To run the application in development mode, use the following command: 

    npm run start:dev




This will start the server using ts-node-dev, which will automatically restart the server when code changes are detected.

To run the application in production mode, you need to build the project first and then start the server: 

    npm run build 

for build.


    npm run start:prod 


for start the server.



Important Environment Variables are:

    DATABASE_URL=mongodb://127.0.0.1:27017/nursery-app

    PORT=5000

    NODE_ENV=development



### For any questions about this project, just send me a message to salam.mehedi99@gmail.com. I will try my best to reply as early as possible. Thank you..
