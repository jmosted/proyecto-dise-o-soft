import {Sequelize} from 'sequelize';
import {sequelize as db} from '../../../config/db/db.js';

export const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    dni:{
        type:Sequelize.BIGINT,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    },
    password:{
        type:Sequelize.STRING
    },
    cellphone:{
        type:Sequelize.BIGINT,
        unique:true
    },
    direction:{
        type:Sequelize.STRING
    }


})


