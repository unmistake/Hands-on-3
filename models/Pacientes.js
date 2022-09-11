
const sequelize = require ('sequelize');
const db = require ('../database/index')

const Pacientes = db.define ("Pacientes",{
        id_paciente: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.DataTypes.STRING
        },
        email: {
            type: sequelize.DataTypes.STRING,
            unique: true
        },
        idade: {
            type: sequelize.DataTypes.DATE
        } 
    },
    {
        tableName: "pacientes",
        timestamps: false
    }
);

module.exports = Pacientes;