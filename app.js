const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const axios = require("axios");



let content;

const readFile = () => {
    fs.readFile("./data.txt", (err, data) => {
        if (err) {
            console.log('ERR');
        }
        content = data.toString();
        console.log(content);
    });
};

const writeFile = () => {
    fs.writeFile(
        './data.txt',
        `Hello Bayan`,
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log('DONE WRITE OVER THAT FILE');
        }
      );
};

app.listen(PORT, () => {
    console.log("OK");    
});