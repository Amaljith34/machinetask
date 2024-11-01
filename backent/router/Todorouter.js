import express from 'express'
import { add, deleted, getdata, updatetitle } from '../controller/Todo.js'
export const Todorouter=express.Router()

Todorouter.post('/add',add)
Todorouter.delete('/delete/:id',deleted)
Todorouter.put('/edit/:id',updatetitle)
Todorouter.get('/get',getdata)