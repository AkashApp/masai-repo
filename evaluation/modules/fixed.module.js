const mongoose= require("mongoose");


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