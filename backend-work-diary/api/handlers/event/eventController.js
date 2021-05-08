import { Event } from './event.model.js';

export const createEvent= async(req,res)=>{
    const {tittle,description,typeWork,ubication,nameClient,emailClient,time,status} = req.body;
    try{
        const event = await Event.create({
            tittle,
            description,
            typeWork,
            ubication,
            nameClient,
            emailClient,
            time,
            status  
        });
        res.json({
            message:'Event create'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al crear el Evento'
        })
    }
}

export const UpdateEvent= async(req,res)=>{
    const {tittle,description,typeWork,ubication,nameClient,emailClient,time,status} = req.body;
    try{
        const event = await Event.update({
            tittle,
            description,
            typeWork,
            ubication,
            nameClient,
            emailClient,
            time,
            status
        },{
            where:{
                id
            }
        },
        );
        res.json({
            message:'Event update'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al actualizar el evento'
        })
    }
}

export const deleteEvent= async(req,res)=>{
    const {id} = req.body;
    try{
        const event = await Event.destroy({
            where:{
                id 
            }
        });
        res.json({
            message:'Event deleted'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al eliminar el evento'
        })
    }
}

export const getEventById= async(req,res)=>{
    const id = req.params.id;
    try{
        const event = await Event.get({
            where:{
                id 
            }
        });
        res.json({
            event 
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al obtener el evento'
        })
    }
}

