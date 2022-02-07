const express= require("express");

const mongoose= require("mongoose");

const User= require("./modules/user.module");
const BankDetail= require("./modules/bank.module");
const MasterAccount= require("./modules/master.module");
const SavingsAccount= require("./modules/saving.module");
const FixedAccount= require("./modules/fixed.module");

const app= express();
app.use(express.json());

const Connect=()=> mongoose.connect(
    "mongodb+srv://Akash:Akash_7492@cluster0.doylh.mongodb.net/Bank?retryWrites=true&w=majority"
)
// User -------------------------------------------------------------------------

// ---------------------------------------->>>>

// get, getAll, post, patch, delete

app.get("/user/:id", async(req, res)=>{
    try{
        const users= await User.findById(req.params.id).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/user", async(req, res)=>{
    try{
        const users= await User.find().lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.post("/user", async(req,res)=>{
    try{
        const users= await User.create(req.body);

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.patch("/user/:id", async(req,res)=>{
    try{
        const users= await User.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.delete("/user/:id", async(req,res)=>{
    try{
        const users= await User.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
});

// BankDetails -------------------------------------------------------------------------

// ---------------------------------------->>>>
// get, getAll, post, patch, delete

app.get("/bank/:id", async(req, res)=>{
    try{
        const bank= await BankDetail.findById(req.params.id).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/bank", async(req, res)=>{
    try{
        const bank= await BankDetail.find().lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.post("/bank", async(req,res)=>{
    try{
        const bank= await BankDetail.create(req.body);

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.patch("/bank/:id", async(req,res)=>{
    try{
        const bank= await BankDetail.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.delete("/bank/:id", async(req,res)=>{
    try{
        const bank= await BankDetail.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(bank);
    }
    catch(e){
        console.log(e.massage);
    }
});

// Master Account -----------------------------------------------------------------------------

// ---------------------------------------->>>>
// get, getAll, post, patch, delete

app.get("/master/:id", async(req, res)=>{
    try{
        const master= await MasterAccount.findById(req.params.id).populate({type:mongoose.Schema.Types.ObjectId, path: "user"}).lean().exec();

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/master", async(req, res)=>{
    try{
        const master= await MasterAccount.find().populate({type:mongoose.Schema.Types.ObjectId, path: "user"}).lean().exec();

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.post("/master", async(req,res)=>{
    try{
        const master= await MasterAccount.create(req.body);

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.patch("/master/:id", async(req,res)=>{
    try{
        const master= await MasterAccount.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.delete("/master/:id", async(req,res)=>{
    try{
        const master= await MasterAccount.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});


// SavingsAccount -------------------------------------------------------------------------------------

// ---------------------------------------->>>>
// get, getAll, post, patch, delete

app.get("/saving/:id", async(req, res)=>{
    try{
        const saving= await SavingsAccount.findById(req.params.id).lean().exec();

        return res.send(saving);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/saving", async(req, res)=>{
    try{
        const saving= await SavingsAccount.find().lean().exec();

        return res.send(saving);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.post("/saving", async(req,res)=>{
    try{
        const saving= await SavingsAccount.create(req.body);

        return res.send(saving);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.patch("/saving/:id", async(req,res)=>{
    try{
        const saving= await SavingsAccount.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(saving);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.delete("/saving/:id", async(req,res)=>{
    try{
        const saving= await SavingsAccount.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(saving);
    }
    catch(e){
        console.log(e.massage);
    }
});


// FixedAccount ---------------------------------------------------------------------------------

// ---------------------------------------->>>>
// get, getAll, post, patch, delete

app.get("/fixed/:id", async(req, res)=>{
    try{
        const fixed= await FixedAccount.findById(req.params.id).lean().exec();

        return res.send(fixed);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/fixed", async(req, res)=>{
    try{
        const fixed= await FixedAccount.find().lean().exec();

        return res.send(fixed);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.post("/fixed", async(req,res)=>{
    try{
        const fixed= await FixedAccount.create(req.body);

        return res.send(fixed);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.patch("/fixed/:id", async(req,res)=>{
    try{
        const fixed= await FixedAccount.findByIdAndUpdate(req.params.id , req.body).lean().exec();

        return res.send(fixed);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.delete("/fixed/:id", async(req,res)=>{
    try{
        const fixed= await FixedAccount.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(fixed);
    }
    catch(e){
        console.log(e.massage);
    }
});


// #################################################################################################################

app.listen(7492, ()=>{
    Connect();
    console.log("listening on port 7492");
})