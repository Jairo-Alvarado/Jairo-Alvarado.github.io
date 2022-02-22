function captura(){
    correo= document.getElementById("correo").value;
    contrasenia= document.getElementById("contraseña").value;
    nombrecompleto = document.getElementById("nombrecompleto").value;
    nombreusuario = document.getElementById("nombreusuario").value;

    if(document.form2.nombrecompleto.value== "" || document.form2.correo.value== "" || 
       document.form2.nombreusuario.value=="" || document.form2.contraseña.value==""){
        alert("Es obligatorio llenar todos los campos");
    }
    else{
        alert("Cuenta creada con exito, bienvenido " +  nombreusuario);
    }
    
}

function ir(){
    if(document.form.password.value== "" || document.form.login.value== ""){
        alert("Es obligatorio llenar todos los campos");
        
    }
    if(document.form.password.value== contrasenia && document.form.login.value==correo){
        alert("Acceso concedido");
        window.location="carrito.html";
    }
    else{
        alert("Acceso denegado, correo electrónico o contraseña incorrectas!");
    }
}

function fin(){
    //alert(nPrecio);    
    if(confirm('¿Estás seguro de enviar estos datos?')){
        alert("Transacción exitosa, su pedido esta en camino.");  
        window.location="index.html";
    }
    
}

function regresar(){ 
    window.location="index.html";
}
function ayudabtn(){ 
    window.location="Ayuda.html";
}