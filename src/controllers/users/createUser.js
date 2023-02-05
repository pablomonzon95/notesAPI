const { userSchema } = require("../../schemas/users");

const { generateError, sendMail } = require("../../utils");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { insertUser, selectUserByEmail } = require("../../repositories/users");
const { restart } = require("nodemon");
require("dotenv").config();
const { PORT } = process.env;

/**
 * Función que se encarga de validar los datos del usuario que recibimos en el body petición , después verifica que no haya un usuario con ese email en la base de datos, genera una contraseña encriptada y un codigo de registro que se envia por email al usuario para que pueda activar su cuenta.
 * Inserta los datos del nuevo usuario en la base de datos.
 * Devuelve un mensaje indicando que el usuario ha sido creado.
 */
const createUser = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);

    const { email, password } = req.body;

    const user = await selectUserByEmail(email);
    if (user) {
      generateError("Already exists an user with that email", 400);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuid.v4();

    const insertId = await insertUser({
      email,
      encryptedPassword,
      registrationCode,
    });

    await sendMail(
      "Welcome to api_notes!!",
      `<p>Here you have your activation link for api_notes!</p> 
      <a href = "http://localhost:${PORT}/activate/${registrationCode}">Activate your account</a>`,
      email
    );
    res.status(201).send({ status: "ok", data: { id: insertId, email } });
  } catch (error) {
    next(error);
  }
};
module.exports = createUser;
