HNG DEVOPS STAGE 1
ABOUT: The aim of this project is to make sure devops engineers understand what they are deploying. The project is a simple server with 3 endpoints; all “GET” requests. I wrote this with a simple express node/js server and copied the code into a Dockerfile to help build and run in server.

HOW TO RUN LOCALLY: To run locally, you must have node version 22 installed on your laptop. 
Clone the repository with “git clone https://github.com/Feeleep-lgtm/hng-devops.git” 
Run npm install to install the packages
Run npm run dev to start the server


Endpoints and responses:
curl --location 'http://feeleep.duckdns.org/me'/ 
 Response:  {
  "message": "API is running"
}

curl --location 'http://feeleep.duckdns.org/health': 
Response: {
  "message": "healthy"
}
curl --location 'http://feeleep.duckdns.org/me'
Response: {
  "name": "Philip Oluwaseun Aliu",
  "email": "aliup45@gmail.com",
  "github": "https://github.com/Feeleep-lgtm"
}



