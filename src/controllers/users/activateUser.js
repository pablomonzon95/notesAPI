const {
  selectUserByRegistrationCode,
  deleteRegistrationCode,
} = require("../../repositories/users");
const { generateError } = require("../../utils");
/**
 * Función que se encarga de activar un usuario que acaba de registrarse.
 * Comprueba que el código de registro sea valido y de ser así lo elimina de la base de datos para que el usuario pueda posteriormente loguearse.
 */
const activateUser = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

    const user = await selectUserByRegistrationCode(registrationCode);

    if (!user) {
      generateError("Invalid registration code or user already activated", 400);
    }

    await deleteRegistrationCode(registrationCode);

    res
      .status(200)
      .send({ status: "ok", message: "User activated succesfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = activateUser;
