var express=require("express");

var cors=require("cors");

// CRUD stands for create read update delete

// GET: It is a the default method of http.It is used to request data from the server.
//POST: It is used to send data to the server and adds the data as an new entry into the database.
//PUT: It is used to send data to server and update some data in the database using that data.
//DELETE: It is used to send data to server and using that data it deletes some data in the database.



var server=express();


var middleware1=(req,res,next)=>{

    console.log("middleware 1");
    next();
}
// server.use(middleware1);
server.use(cors());


server.get("/",middleware1,(req,res)=>{
    res.send("suuccess");
    res.sendStatus(200);
})

server.post("/user",(req,res)=>{
    res.send(req.query);
})

server.post("/user/:num",(req,res)=>{
    res.send(req.params.num)
})

server.listen(3000);