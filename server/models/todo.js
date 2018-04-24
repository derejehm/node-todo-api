var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',
{

  text:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  completed :{
    type:Boolean,
    default:false
  },
  compltedAt:{
    type:Number,
    default:null
  }
});

var newTodo=new Todo({
  text:'cook dinner'
});

module.exports={Todo};
