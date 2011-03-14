function notify(){
if (/chrome/.test( navigator.userAgent.toLowerCase() ))
{
    console.log("chrome detected")
    //broken chrome notifications
    if (window.webkitNotifications.checkPermission() > 0) {
        RequestPermission(notify);
    } 
    else{
        notification = window.webkitNotifications.createNotification("../favicon.ico", "Photo Time!", "SHAKE AND BAKE");
        notification.show();
    }
}
}
function RequestPermission(callback) {
    window.webkitNotifications.requestPermission(callback);
}