import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const user = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    mobile:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    time:{
        type: DataTypes.STRING
    },
    payment:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default user;
 