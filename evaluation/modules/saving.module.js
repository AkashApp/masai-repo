const mongoose= require("mongoose");

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