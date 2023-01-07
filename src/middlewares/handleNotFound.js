//Middleware que gestiona los errores 404 (not found)

const handleNotFound = (req, res) => {
  res.status(404).send({ status: "error", message: "Not found" });
};

module.exports = handleNotFound;
