const { selectUserById } = require("../repositories/users");
const { generateError } = require("../utils");

// Middleware que comprueba si el usuario logueado es admin o no
const checkAdmin = async (req, res, next) => {
  try {
    // Nos traemos el id del usuario logueado
    const loggedUserId = req.auth.id;

    // Seleccionamos el usuario de la DB que tiene ese id
    const user = await selectUserById(loggedUserId);

    // Si el usuario no es admin, tiramos un error
    if (user.role !== "admin") {
      generateError("You dont't have permissions to perform this action", 403);
    }

    // Si no salta ningún error, hacemos next() para ir al controller
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAdmin;
