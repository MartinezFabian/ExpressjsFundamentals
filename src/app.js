const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.set('port', 3000);
app.set('appName', 'Express Server');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware personalizado
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] - method: ${req.method}, url: ${req.url}`);
  next(); // Llama a la función next() para pasar al siguiente middleware o ruta
};

// Registra el middleware a nivel de aplicación
app.use(loggerMiddleware);

// Middleware para comprobar autenticación
const isAuthenticated = (req, res, next) => {
  const authenticated = true;

  if (authenticated) {
    // Si el usuario está autenticado, pasa al siguiente middleware o ruta
    next();
  } else {
    // Si el usuario no está autenticado, devuelve un mensaje de "Acceso denegado"
    res.status(401).json({ message: 'Not authorized ' });
  }
};

// Registra el middleware a nivel de aplicación
app.use(isAuthenticated);

// Ruta base para productRoutes
app.use('/products', productRoutes);

app.listen(app.get('port'), () => {
  console.log(
    `${app.get('appName')} listening on port ${app.get('port')}: http://localhost:${app.get(
      'port'
    )}`
  );
});
