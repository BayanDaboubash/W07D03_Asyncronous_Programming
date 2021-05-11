const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const axios = require("axios");
app.use(express.json());
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
        './text.txt',
        `A new file has been created`,
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log('DONE WRITE OVER THAT FILE');
        }
      );
};

const getPost = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`).then(response => {
        console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
};
// getPost(1);
// getPost(50);

const getPostAsync = async (data) => {
    try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${data}/comments`
        );
        console.log(response.data);
      } catch (err) {
        throw err;
      }
};
getPostAsync(1);
getPostAsync(50);


app.listen(PORT, () => {
    console.log("OK");    
});