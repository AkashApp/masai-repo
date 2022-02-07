const mongoose= require("mongoose");



const MasterAccountSchema= new mongoose.Schema({
    "balance": {type:Number, required:true},
    "User_Id": {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    "Branch_Id":{type: mongoose.Schema.Types.ObjectId, ref:"detail", required:true}
},{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model("master", MasterAccountSchema);