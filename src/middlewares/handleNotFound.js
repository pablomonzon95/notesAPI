const handleNotFound = (req, res) => {
  res.status(404).send({ status: "error", message: "Not found" });
};

module.exports = handleNotFound;
