const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const LocationSchema=new Schema({
	location:{type:String,lowercase:true},
	venues:Array
});

module.exports =mongoose.model('Location',LocationSchema)

