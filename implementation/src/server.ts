import express from "express";

const server = express();


server.get("/", (request, response) => {
  return response.send("Welcome time allocation backend");
});


export default server;