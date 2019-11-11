const express = require(`express`);
const projectRouter = require("./routes/projectRouter");


const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);


server.get (`/`,(req,res,next) => {
    const nameInsert = (req.name) ?  `${req.name}` : ``;
    res.send(` 
    <h2>Lambda Sprint Challange - API</hr>
    <p> Welcome ${nameInsert} to the Lambda API sit! </p>`
    );
});


module.exports = server;