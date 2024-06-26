class Usuario{
    constructor(Usuario){
        this.id=Usuario.id;

        this.nombre=Usuario.nombre;
        this.celular=Usuario.celular;
        this.correo=Usuario.correo;
    }
    set id(id){this._id=id;}
    set nombre(nombre){
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
            this._nombre=nombre;
        }
        else{
            console.log("Error al asignar el nombre");
        }
    }
    set celular(celular){
        var regexTelefono = /^\d{10}$/;
        if(regexTelefono.test(celular)){
        this._celular=celular;
        }
        else{
            console.log("Error al asignar el telefono");
        }
    }
    set correo(correo){
        var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regexCorreo.test(correo)){
        this._correo=correo;
        }
        else{
            console.log("Error al asignar el correo");
        }
    }
    get nombre(){return this._nombre;}
    get celular(){return this._celular;}
    get correo(){return this._correo;}
    get id(){return this._id;}
    get obtenerDatos(){
        return {
        id:this.id,
        nombre:this.nombre,
        celular:this.celular,
        correo:this.correo
        }
    }
}


module.exports=Usuario;