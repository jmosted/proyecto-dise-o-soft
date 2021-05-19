import {Event} from './event.model.js';

export const createEvent = async (req, res) => {
    const {tittle, description, typeWork, ubication, nameClient, emailClient, time, status} = req.body;
    console.log(req.body)
    try {
        const event = await Event.create({
            tittle,
            description,
            typeWork,
            ubication,
            nameClient,
            emailClient,
            time,
            status
        }, {
            fields: [
                "tittle",
                "description",
                "typeWork",
                "ubication",
                "nameClient",
                "emailClient",
                "time",
                "status"
            ]
        });
        await event.save();
        res.status(200).json({
            error: false,
            message: "Evento creado exitosamente",
            data: null,
            code: 200
        });
    } catch (error) {
        console.log(error);
        res.status(202).json({
            error: true,
            message: "Error al crear el evento",
            data: null,
            code: 202
        })
    }
}

export const updateEvent = async (req, res) => {
    const {id, tittle, description, typeWork, ubication, nameClient, emailClient, time, status} = req.body;
    try {
        const event = await Event.update({
                tittle,
                description,
                typeWork,
                ubication,
                nameClient,
                emailClient,
                time,
                status
            }, {
                fields: [
                    "tittle",
                    "description",
                    "typeWork",
                    "ubication",
                    "nameClient",
                    "emailClient",
                    "time",
                    "status"
                ],
                where: {
                    id
                }
            },
        );
        res.status(200).json({
            error: false,
            message: "Event update",
            data: {event},
            code: 200,
        })
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al actualizar el evento",
            data: null,
            code: 202,
        })
    }
}

export const deleteEvent = async (req, res) => {
    const {id} = req.body;
    try {
        const event = await Event.destroy({
            where: {
                id
            }
        });
        if (event === 0) {
            res.status(202).json({
                error: true,
                message: "El ID no coincide con ninguna Evento registrado.",
                data: null,
                code: 202,
            });
        } else {
            res.status(200).json({
                error: false,
                message: "Evento borrado correctamente",
                data: null,
                code: 200,
            });
        }
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al eliminar el Evento",
            data: null,
            code: 202,
        })
    }
}

export const getEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await Event.get({
            where: {
                id
            }
        });
        res.status(200).json({
            error: false,
            message: "procesado correctamente",
            data: {event},
            code: 200,
        });
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al obtener el evento",
            data: null,
            code: 202,
        })
    }
}

export const getAllEvents = async (req, res) => {
    
    try {
        const event = await Event.findAll();
        res.status(200).json({
            error: false,
            message: "procesado correctamente",
            data: {event},
            code: 200,
        });
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al obtener el evento",
            data: null,
            code: 202,
        })
    }
}

