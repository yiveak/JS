function EventUtil(element, type, handler){
    var eventUtil = {
        addHandler: function (element, type, handler) {
            if(element.addEventListener){
                return element.addEventListener(type, handler);
            }else if(element.attchEvent){
                element.attchEvent('on' + type, handler);
            }else {
                element['on' + type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if(element.removeEventListener){
                element.removeEventListener(type, handler);
            }else if(element.detachEvent){
                element.detachEvent('on' + type, handler);
            }else{
                element['on' + type] = null;
            }
        }
    }
}
