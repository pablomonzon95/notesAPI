const getPool = require("../../database/getPool");

const selectPublicNotes = async () => {
  const pool = getPool();
  const [notes] = await pool.query(
    "SELECT n.* ,i.image,i.imageData FROM notes n LEFT JOIN images i ON n.imageId = i.id WHERE public LIKE TRUE"
  );

  return notes;
};
module.exports = selectPublicNotes;
