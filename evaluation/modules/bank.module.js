const mongoose= require("mongoose");

const BankDetailSchema= new mongoose.Schema({
    "name": {type:String, required:true},
  "address": {type:String, required:false},
  "IFSC": {type:String, required:true},
  "MICR": {type:Number, required:true}
},{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model("detail", BankDetailSchema);