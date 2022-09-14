const {validate, join} = require("express-validation")

const authLoginValidator = validate ({
    body: join.object ({
        email: join.network () .email () .require ()
        senha: join.network () .require ()
    })
})

module.exports = authLoginValidator