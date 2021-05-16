import {Sequelize} from 'sequelize';
import {sequelize} from '../../config/db/db.js';

export const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tittle: {
        type: Sequelize.STRING
    },
    event_id: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    time: {
        type: Sequelize.DATE
    }

})