const express= require("express");

const mongoose= require("mongoose");

const app= express();
app.use(express.json());

const Connect=()=> mongoose.connect(
    "mongodb+srv://Akash:Akash_7492@cluster0.doylh.mongodb.net/Bank?retryWrites=true&w=majority"
)
// User -------------------------------------------------------------------------
const UserSchema= new mongoose.Schema({
    "firstName": {type:String, required:true},
  "middleName": {type:String, required:false},
  "lastName": {type:String, required:true},
  "age": {type:Number, required:true},
  "email": {type:String, required:true},
  "address": {type:String, required:true},
  "gender": {type:String, required:false, default:"Female"},
  "type": {type:String, required:false,}
},{
    versionKey:false,
    timestamps: true
});

const User= mongoose.model("user", UserSchema);

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

const BankDetailSchema= new mongoose.Schema({
    "name": {type:String, required:true},
  "address": {type:String, required:false},
  "IFSC": {type:String, required:true},
  "MICR": {type:Number, required:true}
},{
    versionKey:false,
    timestamps: true
});

const BankDetail= mongoose.model("detail", BankDetailSchema);

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
const MasterAccountSchema= new mongoose.Schema({
    "balance": {type:Number, required:true},
    "User_Id": {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    "Branch_Id":{type: mongoose.Schema.Types.ObjectId, ref:"detail", required:true}
},{
    versionKey:false,
    timestamps: true
});

const MasterAccount= mongoose.model("master", MasterAccountSchema);

// ---------------------------------------->>>>
// get, getAll, post, patch, delete

app.get("/master/:id", async(req, res)=>{
    try{
        const master= await MasterAccount.findById(req.params.id).populate({path: "user"}).lean().exec();

        return res.send(master);
    }
    catch(e){
        console.log(e.massage);
    }
});

app.get("/master", async(req, res)=>{
    try{
        const master= await MasterAccount.find().lean().exec();

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

const SavingsAccountSchema= new mongoose.Schema({
    "account_number": {required:true, type:Number, unique:true},
    "balance":{required:true, type: Number},
    "interestRate":{type:Number, required:true},
    "Master_Id": {type:mongoose.Schema.Types.ObjectId, ref:"master", required:true}
},
{
    versionKey:false,
    timestamps:true
});

const SavingsAccount= mongoose.model("saving", SavingsAccountSchema);

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

const FixedAccountSchema= new mongoose.Schema({
    "account_number": {required:true, type:Number, unique:true},
    "balance":{required:true, type: Number},
    "interestRate":{type:Number, required:true},
    "startDate":{type:String, required:true},
    "maturityDate": {type:String, required:true},
    "Master_Id": {type:mongoose.Schema.Types.ObjectId, ref:"master", required:true}
},
{
    versionKey:false,
    timestamps:true
});

const FixedAccount= mongoose.model("fixed", FixedAccountSchema);

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