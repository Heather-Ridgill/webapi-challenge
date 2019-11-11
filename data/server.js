const express = require(`express`);


const server = express();


server.get (`/`,(req,res,next) => {
    const nameInsert = (req.name) ?  `${req.name}` : ``;
    res.send(` 
    <h2>Lambda Sprint Challange - API</hr>
    <p> Welcome ${nameInsert} to the Lambda API sit! </p>`
    );
});


module.exports = server;