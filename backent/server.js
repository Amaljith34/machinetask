import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Todorouter } from './router/Todorouter.js'
// const app=express()


// app.use(cors())
// app.use(express.json())
// app.use('/api/todo')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/todo',Todorouter)


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://jith51541:VulugBcKmkteLjfI@cluster0.a6vsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

// mongodb+srv://jith51541:<db_password>@cluster0.a6vsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.listen(3000,()=>{
    console.log('ruuning');
    
})
// VulugBcKmkteLjfI