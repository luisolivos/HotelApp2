
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
        $("#btnFoto").click(mc.start);
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
        {
           // alert(nom + " - " + mail + " - " + tel);
            fn.enviarRegistro(nom, mail, tel, foto);
        }
        else
            navigator.notification.alert("Todos los campos son requeridos.", null,"Registro","Aceptar");
        
    },
    
    enviarRegistro: function(nombre, mai, telefono, fotografia)
    {
        $.ajax({
          method: "POST",
          url: "http://carlos.igitsoft.com/apps/test.php",
          data: { nom: nombre, mail: mai, tel: telefono },
          error: function(){
              alert("ajax connection error");
          }
        }).done(function( msg ) {
            if(msg == 1){
                fr.start(fotografia);
            }
            else {
                navigator.notification.alert("Error al enviar los datos", null, "Enviar datos", "Aceptar");
            }
          });
    }
}

$(fn.deviceready);
