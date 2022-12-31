const {
    selectUserByRegistrationCode,
    deleteRegistrationCode,
  } = require("../../repositories/users");
  const { generateError } = require("../../utils");
  
  const activateUser = async (req, res, next) => {
    try {
      // Recogemos el registrationCode de los params
      const { registrationCode } = req.params;
  
      // Buscamos en la DB si hay algun user con ese registrationCode
      const user = await selectUserByRegistrationCode(registrationCode);
  
      // Si no lo hay, quiere decir que o el código es inválido, o el usuario ya ha sido activado (es decir, que ya se ha borrado ese código). Lanzamos un error indicando lo dicho
      if (!user) {
        generateError("Invalid registration code or user already activated", 400);
      }
  
      // Procedemos a eliminar el código de registro para activar al usuario
      await deleteRegistrationCode(registrationCode);
  
      res
        .status(200)
        .send({ status: "ok", message: "User activated succesfully!" });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = activateUser;
  