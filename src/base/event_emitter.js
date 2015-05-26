/**
 * @class
 * @name EventEmitter
 */
export class EventEmitter{
    /**
     * @type {Object.<string, function>}
     * @private
     */
    _bindings={};

    /**
     * return array of bind callbacks
     * @param eventName {string}
     * @returns {Array.<function>}
     * @private
     */
    _getNS(eventName){
        if (!this._bindings[eventName]){
            this._bindings[eventName] = [];
        }
        return  this._bindings[eventName]
    }

    /**
     * Unbind cb from event
     * @param eventName {string}
     * @param cb {function}
     */
    off(eventName,cb){
        var arr = this._getNS(eventName),
            ind = arr.indexOf(cb);
        if (ind>=0){
            arr.splice(ind,1)
        }
    }

    /**
     * @destructor
     */
    destroy(){
        this._bindings = {}; // kill all bindings
    }

    /**
     * bind callback to event
     * @param eventName {string}
     * @param cb {function}
     * @returns {function(this:EventEmitter)} unbind function
     */
    on(eventName,cb){
        var arr = this._getNS(eventName);

        if (arr.indexOf(cb)<0){
            arr.push(cb)
        }
        return this.off.bind(this,eventName,cb);
    }

    /**
     * fire callbacks synchronious
     * @param eventName {string}
     * @param [data] {Array}
     */
    fire(eventName,data){
        var callbacks = this._getNS(eventName);
        callbacks.forEach(
            /**
             * @param cb {function}
             */
            function(cb){ cb.apply(null,data) }
        )
    }

    /**
     * fire callbacks asynchronious
     * @param eventName {string}
     * @param [data] {Array}
     */
    fireAsync(eventName,data){
        var callbacks = this._getNS(eventName).slice();
        function repeat(){
            var cb = callbacks.shift();
            if(cb){
                cb.apply(null,data);
                setTimeout(repeat,0)
            }
        }
        setTimeout(repeat,0)
    }

}
