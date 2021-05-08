import {Sequelize} from 'sequelize';
import {sequelize as db} from '../../../config/db/db.js';

export const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER
    },
    nameWork:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.String
    },
    status:{
        type:Sequelize.BOOLEAN
    }
})
