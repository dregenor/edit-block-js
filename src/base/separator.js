import {EventEmitter} from "./event_emitter"
import {Block} from "./block.js"

export class Separator extends EventEmitter{


    static EVENTS = {
        addNewBlock:'add-new-block.separator'
    };

    possibleButtons = {};
    $el = document.createElement('div');

    constructor(){
        super();

        this.init();
        this.initView();
    }

    init(){
        Object.keys(Block.TYPES).forEach((type)=>{
            var typedBlock = Block.TYPES[type];

            if (typedBlock.BUTTON){
                this.possibleButtons[type] = typedBlock;
            }
        });

    }

    initView(){
        Object.keys(this.possibleButtons).forEach((type)=>{
            var button = this.possibleButtons[type].BUTTON.getButton();

            this.$el.appendChild(button);
            button.addEventListener('click',this.fire.bind(this,Separator.EVENTS.addNewBlock,[type]))
        })
    }
}