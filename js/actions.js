
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
        
        $("#reg div[data-role = footer] a").click(mc.start)//funcion como parámetro no lleva parentesis
        $("#reg ul[data-role = listview] a").click(fn.registrarClick)
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
            alert(nom + " - " + mail + " - " + tel);
        else
            navigator.notification.alert("Todos los campos son requeridos.", null,"Registro","Acetar");
        
    }
    
}

$(fn.deviceready);