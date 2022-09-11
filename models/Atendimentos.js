
const sequelize = require ('sequelize');
const db = require ('../database/index')

const Atendimentos = db.define ("Atendimentos",{
        id_atendimento: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_atendimento: {
            type: sequelize.DataTypes.DATE,
        },
        observacao: {
            type: sequelize.DataTypes.TEXT,
        },
        fk_psicologo: {
            type: sequelize.DataTypes.INTEGER
        },
        fk_paciente: {
            type: sequelize.DataTypes.INTEGER
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);

module.exports = Atendimentos;