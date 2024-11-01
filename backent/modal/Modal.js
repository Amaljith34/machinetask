import mongoose from "mongoose";

const todoModal=new mongoose.Schema({
    title:{
        type:String,
        require:true
    }
})
const TodoModal=mongoose.model("TodoModal",todoModal)
export default TodoModal