// jshint esversion: 6
const fs = require("fs");
const axios = require('axios');
 
axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
    fs.writeFile(
        './result/posts.json', 
        JSON.stringify(response.data, null, 2),
        function (err) {
            console.log(err);
        });
    // console.log(response.data);
})
.catch(err => console.log(err));
