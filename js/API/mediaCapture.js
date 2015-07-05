var mc = {
     // capture callback
    captureSuccess: function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            $("#fotoTomada").html('<img src="' + path +'" width="100%">');
            $("#fotoTomada").attr("rel", path);
            
            //navigator.notification.alert('Error code: ' +  $("#fotoTomada").attr("rel"), null, 'Capture Error');
        }
       // navigator.notification.alert('Error code: OK', null, 'Capture Error');
    },

    // capture error callback
    captureError: function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    },
        
    start: function()
    {
        navigator.device.capture.captureImage(mc.captureSuccess, mc.captureError, {limit:1});
    }
}
