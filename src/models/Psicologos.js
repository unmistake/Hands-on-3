const sequelize = require ('sequelize');
const db = require ('../database/index')

const Psicologos = db.define ("Psicologos",{
        id_psicologo: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: sequelize.DataTypes.STRING,
        },
        email: {
            type: sequelize.DataTypes.STRING,
            unique: true,
        },
        senha: {
            type: sequelize.DataTypes.STRING
        },
        apresentacao: {
            type: sequelize.DataTypes.TEXT,
        },
    },
    {
        tableName: "psicologos",
        timestamps: false
    }
);

module.exports = Psicologos;