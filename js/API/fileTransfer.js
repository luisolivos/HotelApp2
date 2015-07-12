//Transferir archivos

var ft = {
    win: function (r) {
        //r.Response Valor que el servidor revuelve
        if( r.response){
            navigator.notification.alert("Registrado correctamente",
                                        function(){
                                            navigator.vibrate(2000);
                                            navigator.notification.beep(1);
                                             window.location.href("#home");
                                             $.mobile.loading( "hide" );
                                        }
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
        var options= new FileUploadOptions();
        options.fileKey = "foto";//variable con la que se recibe en el codigo servidor
        options.fileName = "PP";//fnombre con se guarda el archivo
        options.mimeType = "image/jpeg";

        var ft2 = new FileTransfer();
        ft2.upload(path, encodeURI("http://carlos.igitsoft.com/apps/test.php"), ft.win, ft.fail, options);
    }
}

