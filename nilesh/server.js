const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());

app.get("/hello", (request, response)=>{

    response.write("myapp");
    response.end();
});

app.listen(9099, '0.0.0.0');
console.log("Running on http://localhost:9099");
