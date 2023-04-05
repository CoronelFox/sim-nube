const {sequelize}=require("../../config/mysql");
const {DataTypes}=require("sequelize");

const Cups =sequelize.define(
    "cups",
    {
        codigo:{
            type: DataTypes.STRING,
            allowNull: false,            
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        estado:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    }
)
module.exports = Cups;