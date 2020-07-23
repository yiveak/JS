/* function EventUtil(){
    return {
        addHandler: function (element, type, handler) {
            if(element.addEventListener){
                element.addEventListener(type, handler);
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
} */

/* class EventUtil {
    constructor(element, type, handler) {
        this.element = element
        this.type = type
        this.handler = handler

        // Object.assign(this, {element, type, handler})
    }
    addHandler() {
        if(this.element.addEventListener){
            this.element.addEventListener(this.type, this.handler);
        }else if(this.element.attchEvent){
            this.element.attchEvent('on' + this.type, this.handler);
        }else {
            this.element['on' + this.type] = this.handler;
        }
    }
} */


function Fn() {
    let a = 1;
    this.a = a;
}

Fn.prototype.say = function () {
    this.a = 2
}

Fn.prototype = new Fn;
let f1 = new Fn;

Fn.prototype.b = function () {
    this.a = 3
}

console.log(f1.a) // 1
console.log(f1.prototype) // undefined
console.log(f1.b) // function () { this.a = 3 }
console.log(f1.constructor === Fn) // true
console.log(f1.hasOwnProperty('b')) // false
console.log('b' in f1) // true

console.log('this:', this)