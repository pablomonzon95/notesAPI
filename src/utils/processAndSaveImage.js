const sharp = require("sharp");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs").promises;

// Generamos el path donde queremos que se guarden las imágenes de los posts. Queremos que sea en la carpeta src, dentro de la "UPLOADS_DIR" indicada en el .env y dentro de la carpeta posts. Por ejemplo, si la UPLOADS_DIR se llama "uploads", la ruta donde queremos que se guarden las fotos de los posts será así: "src/uploads/posts"
const uploadsPath = path.join(__dirname, "../../docs", process.env.UPLOADS_DIR);

// Un buffer almacena datos binarios. Esta función, recibe un buffer con los datos binarios de una imagen, la procesa y la guarda
const processAndSaveImage = async (imageBuffer) => {
  // Creamos la carpeta de uploads si no existe
  await fs.mkdir(uploadsPath, { recursive: true });

  // Procesamos la imagen con sharp
  const image = sharp(imageBuffer);

  // Obtenemos los metadatos de la imagen (witdh, height, format, etc)
  const imageMetadata = await image.metadata();

  // Si el width de la imagen es mayor que 1000px, la resizeamos a 1000px de width
  if (imageMetadata.width > 1000) {
    image.resize(1000);
  }

  // Generamos un nombre para la imagen. Como no pueden existir dos imágenes con el mismo nombre, generamos un id aleatorio con el módulo uuid. El nombre de la imagen, va a estar compuesto por el id generado y el formato de esta (ejemplo: "123abc.png")
  const imageName = `${uuid.v4()}.${imageMetadata.format}`;

  // Generamos el path donde vamos a crear la imagen
  const imagePath = path.join(uploadsPath, imageName);

  // Creamos la imagen en dicho path
  await image.toFile(imagePath);

  // Retornamos el nombre de la imagen
  return imageName;
};

module.exports = processAndSaveImage;
