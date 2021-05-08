import { Task } from './task.model.js';

export const createTask= async(req,res)=>{
    const {tittle,description,status,time} = req.body;
    try{
        const task = await Task.create({
            tittle,
            description,
            status,
            time
        });
        res.json({
            message:'Task create'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al crear la tarea'
        })
    }
}

export const UpdateTask= async(req,res)=>{
    const {tittle,description,status,time} = req.body;
    try{
        const task = await Task.update({
            tittle,
            description,
            status,
            time
        },{
            where:{
                id
            }
            
        });
        res.json({
            message:'Task update'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al actualizar la tarea'
        })
    }
}

export const deleteTask= async(req,res)=>{
    const {id} = req.body;
    try{
        const task = await Task.destroy({
            where:{
                id
            }
        });
        res.json({
            message:'Task deleted'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al eliminar la tarea'
        })
    }
}

export const getTaskById= async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await Task.findAll({
            where:{
                id
            }
        });
        res.json({
            task
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al obtener la tarea'
        })
    }
}