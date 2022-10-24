const express = require("express");
const app = express();
const path = require("path"); // Aqui tenemos el modulo nativo para manejar las rutas de los archivos


app.use(express.static("public")); // En esta parte usamos recursos estáticos.
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Ponemos a escuchar el servidor
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor funcionando');
})


/* app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
}); */

// Definimos las rutas a los distintos pedidos que nuestro sitio 
/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
}); */
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

// NO OLVIDAR LEVANTAR EL PROYECTO CON: npm start


app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
});
/* app.get('/register', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});
app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})    */