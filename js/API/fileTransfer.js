//Transferir archivos

var ft = {
    win: function (r) {
        //r.Response Valor que el servidor revuelve
        if( r.response){
            navigator.vibrate(2000);
            navigator.notification.beep(1);
            navigator.notification.alert("Registrado correctamente",
                                        function(){
                window.location.href("#home");
            }, "Bienvenido", "Finalizar");
        }
        else{
            alert("Error al subir la foto");
        }
        
    },

    fail: function (error) {
        alert("An error has occurred: Code = " + error.code);
        //console.log("upload error source " + error.source);
        //console.log("upload error target " + error.target);
    },
    
    start: function(path){
        navigator.notification.alert(path, null, "Enviar datos", "Aceptar");
        
        var options= new FileUploadOptions();
        options.fileKey = "foto";//variable con la que se recibe en el codigo servidor
        options.fileName = "PP";//fnombre con se guarda el archivo
        options.mimeType = "image/jpeg";

        var ft2 = new FileTransfer();
        ft2.upload(path, encodeURI("http://carlos.igitsoft.com/apps/test.php"), ft.win, ft.fail, options);
    }
}

