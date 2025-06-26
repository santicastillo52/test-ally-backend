# Ally Backend

Un backend robusto y escalable construido con Node.js, Express y PostgreSQL que proporciona APIs para autenticación, gestión de usuarios, tareas y servicios meteorológicos.

## 🌐 Despliegue

El backend está desplegado en **Render** y está disponible en:
**https://test-ally-backend.onrender.com/**

## 🚀 Características

- **Autenticación JWT**: Sistema de login y registro seguro
- **Gestión de Usuarios**: CRUD completo con paginación
- **Sistema de Tareas**: API para gestión de tareas
- **Servicios Meteorológicos**: Integración con APIs externas para clima y datos de países
- **Base de Datos PostgreSQL**: Configurada con Sequelize ORM
- **Middleware de Autenticación**: Protección de rutas con JWT
- **CORS habilitado**: Para integración con frontends
- **Variables de Entorno**: Configuración segura con dotenv

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- PostgreSQL
- npm o yarn

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ally-backend
   ```

2. **Instala las dependencias**
   ```bash
   cd Backend
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la carpeta `Backend` con las siguientes variables:
   ```env
   PORT=3000
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
   JWT_SECRET=tu_clave_secreta_jwt
   ```

4. **Configura la base de datos**
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

5. **Inicia el servidor**
   ```bash
   npm start
   ```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
ally-backend/
├── Backend/
│   ├── config/
│   │   └── config.js
│   ├── migrations/
│   │   ├── 20250617225517-create-users.js
│   │   └── 20250618190509-create-tasks.js
│   ├── models/
│   │   └── index.js
│   ├── seeders/
│   │   └── 20250617230528-demo-user.js
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── passport.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   └── weather.controller.js
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── index.js
│   │   │   └── user.js
│   │   ├── providers/
│   │   │   ├── jwt.provider.js
│   │   │   └── user.provider.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── tasks.routes.js
│   │   │   ├── user.routes.js
│   │   │   └── weather.routes.js
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── user.service.js
│   │   │   └── weather.service.js
│   │   └── utils/
│   │       └── timezones.json
│   ├── index.js
│   └── package.json
└── README.md
```

## 🔌 Endpoints de la API

### Autenticación
- `POST /login` - Iniciar sesión
- `POST /register` - Registrar nuevo usuario

### Usuarios
- `GET /users` - Obtener usuarios con paginación (requiere autenticación)
- `GET /allUsers` - Obtener todos los usuarios (requiere autenticación)

### Tareas
- `GET /tasks` - Obtener lista de tareas (requiere autenticación)

### Clima
- `GET /weather/:city` - Obtener información meteorológica de una ciudad (requiere autenticación)
- `GET /country-data/:country` - Obtener datos de un país (requiere autenticación)

## 🔧 Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Base de datos relacional
- **Sequelize** - ORM para Node.js
- **JWT** - Autenticación basada en tokens
- **Passport.js** - Middleware de autenticación
- **bcrypt** - Encriptación de contraseñas
- **CORS** - Cross-Origin Resource Sharing
- **Axios** - Cliente HTTP para APIs externas

## 🚀 Scripts Disponibles

- `npm start` - Inicia el servidor en modo desarrollo con nodemon
- `npm test` - Ejecuta las pruebas (pendiente de implementar)

## 🔐 Autenticación

El sistema utiliza JWT (JSON Web Tokens) para la autenticación. Para acceder a rutas protegidas, incluye el token en el header de autorización:

```
Authorization: Bearer <tu_token_jwt>
```

## 📊 Base de Datos

El proyecto utiliza PostgreSQL con Sequelize como ORM. Las migraciones están configuradas para crear las tablas necesarias:

- **Users**: Almacena información de usuarios
- **Tasks**: Almacena las tareas del sistema

## 🌍 Variables de Entorno

Asegúrate de configurar las siguientes variables en tu archivo `.env`:

- `PORT`: Puerto del servidor (por defecto: 3000)
- `DATABASE_URL`: URL de conexión a PostgreSQL
- `JWT_SECRET`: Clave secreta para firmar JWT

## 🚀 Despliegue en Producción

El backend está desplegado en **Render** y está disponible en:
**https://test-ally-backend.onrender.com/**

### Endpoints de Producción

Todos los endpoints están disponibles en la URL de producción. Por ejemplo:
- `https://test-ally-backend.onrender.com/login`
- `https://test-ally-backend.onrender.com/users`
- `https://test-ally-backend.onrender.com/tasks`
- `https://test-ally-backend.onrender.com/weather/madrid`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

Desarrollado como parte del proyecto Ally Backend.

---
