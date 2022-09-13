const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


Atendimentos.belongsTo(Pacientes, {
  foreignKey: "pacientes_id",
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: "id_atendimento",
});

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologos_id",
});

Psicologos.hasMany(Atendimentos, {
  foreignKey: "id_atendimento",
});



module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos
}