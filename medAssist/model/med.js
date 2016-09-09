var mongoose=require('mongoose');
var medSchema= new mongoose.Schema({
	name:{type:String},
    strength:{type:String},
    dosage:{type:Number},
    frequency:{type:String},

})

module.exports=mongoose.model('Med',medSchema)


