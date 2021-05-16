import {Task} from './task.model.js';

export const createTask = async (req, res) => {
    const {tittle, description, status, time, event_id} = req.body;
    try {
        const task = await Task.create({
            tittle,
            description,
            status,
            time,
            event_id,
        }, {
            fields: [
                "tittle",
                "description",
                "status",
                "time",
                "event_id"
            ]
        });
        await task.save()
        res.status(200).json({
            error: false,
            message: "Task create",
            data: null,
            code: 200,
        })
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al crear la tarea",
            data: null,
            code: 202,
        })
    }
}

export const UpdateTask = async (req, res) => {
    const {id, tittle, description, status, time} = req.body;
    try {
        const task = await Task.update({
            tittle,
            description,
            status,
            time
        }, {
            fields: [
                "tittle",
                "description",
                "status",
                "time"
            ],
            where: {
                id
            }

        });
        res.status(200).json({
            error: false,
            message: "Task update",
            data: {task},
            code: 200,
        })
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al actualizar la tarea",
            data: null,
            code: 202,
        })
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.body;
    try {
        const task = await Task.destroy({
            where: {
                id
            }
        });
        if (task === 0) {
            res.status(202).json({
                error: true,
                message: "El id no coincide con ninguna tarea registrada.",
                data: null,
                code: 202,
            });
        } else {
            res.status(200).json({
                error: false,
                message: "Tarea borrada correctamente",
                data: null,
                code: 200,
            });
        }
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al eliminar la tarea",
            data: null,
            code: 202,
        })
    }
}

export const getTaskById = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Task.findAll({
            where: {
                id
            }
        });
        res.status(200).json({
            error: false,
            message: "procesado correctamente",
            data: {task},
            code: 200,
        });
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al obtener la tarea",
            data: null,
            code: 202,
        })
    }
}