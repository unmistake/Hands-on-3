const sequelize = require ('sequelize');
const { Psicologos } = require('.');
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
            type: sequelize.DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id_psicologo",
            },
        },
        fk_paciente: {
            type: sequelize.DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id_paciente",
            },
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);

module.exports = Atendimentos;