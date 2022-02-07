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

app.get("/user", async(req, res)=>{
    try{
        const users= await User.find().lean().exec();

        return res.send(users);
    }
    catch(e){
        console.log(e.massage);
    }
})

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

// Master Account -----------------------------------------------------------------------------
const MasterAccountSchema= new mongoose.Schema({
    "balance": {type:Number, required:true}
},{
    versionKey:false,
    timestamps: true
});

const MasterAccount= mongoose.model("master", MasterAccountSchema);


// SavingsAccount -------------------------------------------------------------------------------------

const SavingsAccountSchema= new mongoose.Schema({
    "account_number": {required:true, type:Number, unique:true},
    "balance":{required:true, type: Number},
    "interestRate":{type:Number, required:true}
},
{
    versionKey:false,
    timestamps:true
});

const SavingsAccount= mongoose.model("saving", SavingsAccountSchema);


// FixedAccount ---------------------------------------------------------------------------------

const FixedAccountSchema= new mongoose.Schema({
    "account_number": {required:true, type:Number, unique:true},
    "balance":{required:true, type: Number},
    "interestRate":{type:Number, required:true},
    "startDate":{type:String, required:true},
    "maturityDate": {type:String, required:true}
},
{
    versionKey:false,
    timestamps:true
});

const FixedAccount= mongoose.model("fixed", FixedAccountSchema);

app.listen(7492, ()=>{
    Connect();
    console.log("listening on port 7492");
})