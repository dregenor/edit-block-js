import {EventEmitter} from "./event_emitter"
import {DomHelpers as dh} from "../helpers/dom"



/**
 * @class
 * @name Block
 * @extends EventEmitter
 */
export class Block extends EventEmitter{

    /**
     *
     * @type {{start_edit: string, finish_edit: string, remove: string}}
     */
    static EVENTS = {
        start_edit  : 'start_edit.block',
        finish_edit : 'finish_edit.block',
        remove      : 'remove.block',
        data_changed: 'data_changed.block'
    };

    /**
     * @type {number}
     * @const
     */
    static STATE_VIEW = 0;
    /**
     * @type {number}
     * @const
     */
    static STATE_EDIT = 1;

    /**
     * @type {Block.STATE_VIEW|Block.STATE_EDIT}
     */
    state;
    /**
     * @type {Node}
     */
    $el;
    /**
     * @type {*}
     */
    content;

    /**
     * @constructor
     * @param content
     */
    constructor(content){
        super();
        this.content = content;

        this.init();
        this.initBindings();
        this.initView();
        this.setState(Block.STATE_VIEW);
    }

    /**
     *
     * @abstract
     */
    init(){
        console.log(`Type ${content.type} not registered`);
    }

    /**
     *
     * @abstract
     */
    initView(){
        this.$el = document.createElement('div');
        dh.addClass(this.$el,'block');
    }

    /**
     * @abstract
     */
    initBindings(){
        this.on(Block.EVENTS.finish_edit,this.onFinishEdit.bind(this));
        this.on(Block.EVENTS.start_edit,this.onStartEdit.bind(this));

        this.on(Block.EVENTS.remove,      this.destroy.bind(this));
    }

    onStartEdit(){
        this.setState(Block.STATE_EDIT)
    }

    onFinishEdit(){
        this.setState(Block.STATE_VIEW)
    }


    /**
     *
     */
    setState(state){
        this.state = state;
        this.render();
    }

    /**
     * @abstract
     */
    render(){
        this.$el.text = ```
            Type ${this.content.type} not registered.
            State ${this.state}
            Content ${JSON.stringify(this.content,null,2)}
        ```;
    }

    /**
     * @abstract
     */
    _remove(){
        var parent = this.$el.parent;
        if(parent){
            parent.removeChild(this.$el)
        }
    }

    /**
     * destructor
     */
    destroy(){
        this._remove();
        this.$el = null;
        super.destroy();
    }

    /**
     * @type {Object.<string, Block.constructor>}
     */
    static TYPES = {};
    /**
     *
     * @param type {string}
     * @param cb {Block.constructor}
     */
    static registerBlock(type, cb){
        Block.TYPES[type] = cb;
        return cb
    }

    /**
     * @param type {string}
     * @returns {Block.constructor}
     */
    static getBlock(type){
        return Block.TYPES[type] || Block;
    }

    /**
     *
     * @param content
     * @returns {Block}
     */
    static instantinateBlock(content){
        /**
         * @type {Block.constructor}
         */
        var constructor = Block.getBlock(content.type);

        // dirty hack :)
        return new constructor(content)
    }
}