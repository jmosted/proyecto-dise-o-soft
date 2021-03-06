import {Sequelize} from 'sequelize';
import {sequelize} from '../../../config/db/db.js';

export const Event = sequelize.define('event',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    tittle:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    typeWork:{
        type:Sequelize.STRING
    },
    ubication:{
        type:Sequelize.STRING
    },
    nameClient:{
        type:Sequelize.STRING
    },
    emailClient:{
        type:Sequelize.STRING
    },
    time:{
        type:Sequelize.DATE
    },
    status:{
        type:Sequelize.STRING
    }

})




