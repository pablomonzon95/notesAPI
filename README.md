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
