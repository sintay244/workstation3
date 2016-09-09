var mongoose=require('mongoose');

var memberSchema= new mongoose.Schema({
	name:{type:String},
	weight:{type:String},
	allergy:{type:Array,default:[]},	
	bday:{type:Date},
	gender:{type:String},
	description:{type:String},
	medName:{type:String},
	drAppt:{type:Date},
    strength:{type:String},
    dosage:{type:Number},
    direction:{type:String},
	
});






module.exports=mongoose.model('member',memberSchema,'kidMember')



