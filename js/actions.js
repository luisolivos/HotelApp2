
//window.addEventListener("load", function(){
//    alert()
//}, true);

//jQuery(document).ready(function(){
    
//});

//$(init);

//function init()
//{
//    alert("kljlkj");
//}

var fn = {
    init: function (){
        if(!fn.estadoRegistro())
            window.location.href = "#reg";
        else
            window.location.href = "#home";
        
       // $("#reg div[data-role = footer] a").click(mc.start)//funcion como parámetro no lleva parentesis
        $("#reg div[data-role = footer] a").click(fn.registrarClick);
        $("#btnFoto").click(fn.start);
    },
    
    deviceready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    
    estadoRegistro: function(){
        return false;
    },
    
    registrarClick: function(){
        var nom  = $("#regNom").val();
        var mail = $("#regMail").val();
        var tel  = $("#regTel").val();
        var foto = $("#fotoTomada").attr("rel");
        
        if(nom != "" && mail != "" && tel != "" && foto != undefined && foto != '')
            navigator.notification.alert(nom + " - " + mail + " - " + tel);
        else
            navigator.notification.alert("Todos los campos son requeridos.", null,"Registro","Aceptar");
        
    },
    // capture callback
    captureSuccess: function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
        //    $("#fotoTomada").html('<img src="' + path +'" width="100%"'>);
        //    $("#fototomada").attr("rel", path);
        }
        navigator.notification.alert('Error code: OK', null, 'Capture Error');
    },

    // capture error callback
    captureError: function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    },
        
    start: function()
    {
        navigator.device.capture.captureImage(fn.captureSuccess, fn.captureError, {limit:2});
    }
    
}

$(fn.deviceready);
