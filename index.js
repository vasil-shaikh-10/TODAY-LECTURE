const express = require('express');
const app = express();
const dbconnect = require('./db');
const User = require('./user.schema');
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.get("/user", async (req, res) => {   
    let data = await User.find();
    res.send(data);
});

app.post("/create", async (req, res) => {
    let data = await User.create(req.body);
    res.send(data);
})
app.patch("/update/:id", async (req, res)=> {
    let {id} = req.params;
    let data = await User.findByIdAndUpdate(id, req.body);
    res.send(data);
});

app.delete("/:id", async (req, res)=> {
    let {id} = req.params;
    let data = await User.findByIdAndDelete(id, req.body);
    res.send(data);
});
app.get("/:id", async (req, res)=> {
    let {id} = req.params;
    let data = await User.findById(id);
    res.send(data);
});
app.listen(8090 , ()=> {
    console.log('SERVER RUNNING PORT IS:8090');
    dbconnect();
});
