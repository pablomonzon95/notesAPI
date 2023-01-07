const { selectUserByEmail } = require("../../repositories/users");
const { userSchema } = require("../../schemas/users");
const { generateError } = require("../../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Función que valida el body de la petición , comprueba que haya un usuario con esos datos en nuestra Db , de ser así compara la contraseña encriptada con la recibida. Si todo va bien genera el token identificativo para el usuario y lo devuelve en la respuesta.
 */

const loginUser = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
    const { email, password } = req.body;
    const user = await selectUserByEmail(email);
    if (!user) {
      generateError("Incorrect email or password ", 400);
    }
    if (user.registrationCode) {
      generateError("User not activated. Please check your email", 400);
    }
    const isPasswordOk = await bcrypt.compare(password, user.password);
    if (!isPasswordOk) {
      generateError("Incorrect email or password ", 400);
    }
    const tokenPayload = { id: user.id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.status(200).send({ status: "ok", data: { token } });
  } catch (error) {
    next(error);
  }
};
module.exports = loginUser;
