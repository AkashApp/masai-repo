const express= require("express");

const router= express.Router();

router.get("/user/:id", async(req, res)=>{
    try{
        const users= await User.findById(req.params.id).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.get("/user", async(req, res)=>{
    try{
        const users= await User.find().lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.post("/user", async(req,res)=>{
    try{
        const users= await User.create(req.body);

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.patch("/user/:id", async(req,res)=>{
    try{
        const users= await User.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.delete("/user/:id", async(req,res)=>{
    try{
        const users= await User.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

module.exports= router;