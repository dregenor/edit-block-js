import {Assets as A} from "./assets"

var DH = {
    toggle(el,val){
        if(val){ el.style.display = 'block' }
        else { el.style.display = 'none' }
    },

    show(el){
        DH.toggle(el,false)
    },
    hide(el){
        DH.toggle(el,false)
    },
    addClass(el,className){
        DH.toggleClass(el,className,true)
    },
    remClass(el,className){
        DH.toggleClass(el,className,false)
    },
    hasClass(el,className){
        return !!el.classList.contains(className)
    },
    toggleClass(el,className, val){
        val = A.isUndefined(val)?!DH.hasClass(className):val;
        if(val){
            el.classList.add(className);
        } else {
            el.classList.remove(className)
        }
    }
};

export var DomHelpers = DH;