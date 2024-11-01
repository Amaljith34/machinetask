import mongoose from "mongoose";
import TodoModal from "../modal/Modal.js";

export const add= async (req,res)=>{
    try {
        const title=req.body.title
        // console.log(title);
        const existing=await TodoModal.findOne({title})
        if(existing){
            return res.status(400).json({message:'alredy exxist'})
        }
        
        const newTitle= await TodoModal({
             title
        })
        
        // console.log(newTitle);

        
            await newTitle.save()
            res.status(200).json({sucess:true,message:'add to title',data:newTitle})
        
        
    } catch (error) {
        res.status(500).json({message:'serverside error'})
    }
}
export const deleted=async (req,res)=>{
    try {
        const id=req.params.id
        // console.log(id);
        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({sucess:false,message:'in valid id'})
        }
        const titleid=await TodoModal.findById(id)
        if(!titleid){
            res.status(404).json({message:'invalid id'})
        }
        // console.log(titleid)
            const deletedid=await TodoModal.findByIdAndDelete(id)
            res.status(200).json({message:'sucessfully deleted',data:deletedid})
        // console.log(deletedid);
        
        
    } catch (error) {
        res.status(500).json({message:'serverside error'})
    }
}
export const updatetitle=async (req,res)=>{
    try {
        const id=req.params.id
    const title=req.body.title
    console.log(title);
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({sucess:false,message:'in valid id'})
     }
     const validid=await TodoModal.findById(id)
     console.log(validid);
     const newTitle= await TodoModal({
        title
   })
   await newTitle.save()
   res.status(200).json({sucess:true,message:'update sucessfuly ',data:newTitle})
    } catch (error) {
        res.status(500).json({message:'servererror'})

    }
    

     
}

export const getdata= async (req,res) =>{
    try {
        const datas=await TodoModal.find()
    console.log(datas);
    if(!datas){
        res.status(404).json({message:'no title is empty'})
    }
    res.status(200).json({sucess:true,message:'sucessfully fetch',data:datas})
    } catch (error) {
        res.status(500).json({message:'servererror'})
    }
    
    
}