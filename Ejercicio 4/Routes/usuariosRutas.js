const ruta=require("express").Router();
const Usuario=require("../Clases/Usuario")

ruta.post("/", (req, res)=>{
    console.log(req.body.nombre);
    var usuario1= new Usuario(req.body);
    console.log(usuario1.obtenerDatos);
    res.render("usuariosVista", usuario1.obtenerDatos);
});

ruta.get("/agregarUsuario", (req,res)=>{
    res.render("formulario");
});

module.exports=ruta;