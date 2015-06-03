import "./shim/object.mixin"

import {EventEmitter} from "./base/event_emitter"
import {Block} from "./base/block"
import {Separator} from "./base/separator.js"
export * from "./blocks/index"


/**
 * @class
 * @name EditBlockJS
 */
export class EditBlockJS extends EventEmitter{

    static EVENTS = {
        finish_edit_block:'finish_edit_block.editor',
        data_changed_block:'data_changed_block.editor'
    };

    /**
     * @type {Array.<Block>}
     * @private
     */
    _blocks;

    /**
     * @type {Node}
     */
    $root;

    /**
     * @type {{
     *  root:Node,
     *  [blocks]:Array
     * }}
     */
    config;

    /**
     * @constructor
     * @param config {}
     */
    constructor(config={}){
        super();

        this.config = config;
        this.$root = config.root;


        this._blocks = (config.blocks || []).map((content,index)=> {

            var block = Block.instantinateBlock(content);
            block.on(
                Block.EVENTS.data_changed,
                (val,block)=>this.fire(EditBlockJS.EVENTS.data_changed_block,[val,block,index])
            );
            return block
        });

        this.render();
    }

    render(){
        this.$root.innerHTML = '';
        this._blocks.forEach(this._addChild.bind(this))
    }

    /**
     * @param block {Block}
     * @private
     */
    _addChild(block,index){
        this.$root.appendChild(block.$el);
        var separator = new Separator();
        this.$root.appendChild(separator.$el);

        separator.on(Separator.EVENTS.addNewBlock,this.addNewBlock.bind(this,index+1))

    }


    addNewBlock(index,type){

        var block = Block.instantinateBlock({type:type, data:null});
        block.on(
            Block.EVENTS.data_changed,
            (val,block)=>this.fire(EditBlockJS.EVENTS.data_changed_block,[val,block,index])
        );

        this._blocks.splice(index,0,block);
        this.render();

        block.fire(Block.EVENTS.start_edit);
    }

    /**
     * @returns {Array.<{type:string,data:*}>}
     */
    getData(){
        return this._blocks.map((block)=>block.content)
    }
}

window.EditBlockJS = EditBlockJS;
