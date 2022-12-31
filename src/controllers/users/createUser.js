const { createUserSchema } = require("../../schemas/users");

const { generateError, sendMail } = require("../../utils");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { insertUser, selectUserByEmail } = require("../../repositories/users");
const { restart } = require("nodemon");
const createUser = async (req, res, next) => {
  try {
    //Validamos el body de la peticion con Joi
    await createUserSchema.validateAsync(req.body);

    const { email, password } = req.body;

    //Comprobamos que no haya un usuario con el mismo email.
    const user = await selectUserByEmail(email);
    if (user) {
      generateError("Already exists an user with that email", 400);
    }
    //Encriptamos la contraseña del usuario
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Generamos un codigo de registro aleatorio
    const registrationCode = uuid.v4();

    //Insertamos los datos en la BD
    const insertId = await insertUser({
      email,
      encryptedPassword,
      registrationCode,
    });
    //Enviamos un email con un codigo de registro para activar la cuenta
    await sendMail(
      "Welcome to api_notes!!",
      `<p>Here you have your activation link for api_notes!</p> 
      <a href = "http://localhost:8080/activate/${registrationCode}">Activate your account</a>`,
      email
    );
    res.status(201).send({ status: "ok", data: { id: insertId, email } });
  } catch (error) {
    next(error);
  }
};
module.exports = createUser;
