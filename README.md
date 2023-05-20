SPANISH


Api_notes es el segundo proyecto en el bootcamp full-stack developer de Hack-a-boss.

Esta api permite a los usuarios que se han registrado y esten logueados crear,editar, consultar y eliminar sus propias notas.
Las notas pueden ir acompañadas o no por una imagen.
Para registrarse el usuario debe mandar en el body de la peticion un email y una password.
Al email de registro llegará un correo con un enlace para la activación de la cuenta.
Una vez la cuenta este activada el usuario podra loguearse y gestionar sus notas.

Estas son las diferentes rutas de la api:

-- RUTAS DE USUARIOS
POST "/users" => Crea un nuevo usuario (es obligatorio un email y una contraseña).
GET "/activate/:registrationCode" => Activa al usuario mediante un código generado aleatoriamente cuando se crea el usuario(es necesario activar la cuenta para poder hacer login).
POST "/login" => Loguea al usuario generando un token identificativo único (es necesario estar logueado para gestionar las notas).

-- RUTAS DE NOTAS
POST "/notes" => Crea una nueva nota para el usuario logueado, en la nota es obligatorio indicar:
-- "title" para el titulo.
-- "note" para el contenido de la nota.
-- "categoryId" hace referencia a la categoria a la que pertenece dicha nota, se indica con un número(que es el id de la categoría).
Opcionalmente se le puede agregar:
-- Una imagen
-- Un campo "public" en el que si su valor es true la nota queda marcada como pública (por defecto todas las notas son creada como privadas).
PUT "/note/:id" => Permite editar una nota ya creada, se puede editar cualquier campo de la nota (título, nota, categoria o imagen).
GET "/notes" => Devuelve la lista de notas del usuario logueado (sólo devuelve los títulos).
GET "/note/:id" => Devuelve la nota completa del id pasado como parámetro siempre y cuando esa nota sea del usuario logueado.
GET "/public" => Esta ruta devuelve todas las notas de todos los usuarios que hayan sido marcadas como públicas, (no es necesario estar registrado para consultar las notas públicas.)

Todos los datos que nos llegan del usuario son validados mediante JOI

Para el correcto funcionamiento de esta api se requiren los siguientes módulos:
bcrypt -> Para encriptar las contraseñas
dotenv -> Leer archivos .env
express -> Iniciar el servidor
express-fileupload -> Leer archivos enviados mediante form-data
joi -> Validación de datos enviados por el usuario
jsonwebtoken -> Nos sirve para generar el token identificativo de cada usuario
mysql2 -> Genera las conexiones con la base de datos
node-mailjet -> Se encarga de mandar un email al usuario registrado con el enlace para activar su cuenta
sharp -> Módulo encargado del procesamiento de las imágenes
uuid -> Genera cadenas aleatoria que usamos como identificador único de las imagenes

Todos los módulos necesarios estan referenciados en al apartado dependencies del package.json.
Es necesario hacer "npm install" para instalarlos.

-->> Esta api ha sido creado por Pablo Monzon & Fco Antonio Lorca <<--



ENGLISH



Api_notes is the second project in the Hack-a-boss full-stack developer bootcamp.

This REST API allows registered and logged in users to create, edit, view and delete their own notes. Notes may or may not be accompanied by an image.
To register, the user must send an email and a password in the body of the request. The registration email will receive an email with a link to activate the account. Once the account is activated, the user can log in and manage their notes.

Here are the different api routes:

-- USER ROUTES
  POST "/users" => Create a new user (an email and password are required).
GET "/activate/:registrationCode" => Activate the user using a randomly generated code when the user is created (it is necessary to activate the account to be able to login).
  POST "/login" => Logs in the user by generating a unique identification token (it is necessary to be logged in to manage the notes).

-- NOTE PATHS POST "/notes" => Create a new note for the logged in user, in the note it is mandatory to indicate: -- "title" for the title. -- "note" for the content of the note. -- "categoryId" refers to the category to which said note belongs, indicated by a number (which is the id of the category). Optionally, you can add: -- An image -- A "public" field in which, if its value is true, the note is marked as public (by default, all notes are created as private).
  PUT "/note/:id" => Allows you to edit a note already created, you can edit any field of the note (title, note, category or image). GET "/notes" => Returns the list of notes of the logged in user (only returns the titles).
  GET "/note/:id" => Returns the complete note of the id passed as a parameter as long as that note belongs to the logged in user. GET "/public" => This route returns all the notes of all the users that have been marked as public, (it is not necessary to be registered to consult the public notes.)

All the data that comes to us from the user is validated through JOI

For the correct operation of this api the following modules are required:
  bcrypt -> To encrypt passwords
  dotenv -> Read files.
env express -> Start the server
  express-fileupload -> Read files submitted via form-data
  joi -> Validation of data sent by the user
  jsonwebtoken -> It helps us to generate the identification token of each user
mysql2 -> Generates the connections with the node-mailjet database -> Is in charge of sending an email to the registered user with the link to activate their account
sharp -> Module in charge of processing the images uuid -> Generates random strings that we use as unique identifier of the images

All the necessary modules are referenced in the dependencies section of the package.json. It is necessary to do "npm install" to install them.

-->> This api has been created by Pablo Monzon & Fco Antonio Lorca <<--
