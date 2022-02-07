const express= require("express");

const router= express.Router();

router.get("/bank/:id", async(req, res)=>{
    try{
        const bank= await BankDetail.findById(req.params.id).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.get("/bank", async(req, res)=>{
    try{
        const bank= await BankDetail.find().lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.post("/bank", async(req,res)=>{
    try{
        const bank= await BankDetail.create(req.body);

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.patch("/bank/:id", async(req,res)=>{
    try{
        const bank= await BankDetail.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

router.delete("/bank/:id", async(req,res)=>{
    try{
        const bank= await BankDetail.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});