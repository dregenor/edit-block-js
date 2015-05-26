import {Block} from "../base/block"

import {DomHelpers as dh} from "../helpers/dom"

/**
 * @export
 * @class
 * @extends Block
 */
export class TextBlock extends Block{

    /**
     * @type {Node}
     */
    $view;

    /**
     * @type {Node}
     */
    $edit;

    static EVENTS = Object.mixin({

    },Block.EVENTS);

    init(){}


    initView(){
        super.initView();

        var $view = document.createElement('div'),
            $edit = document.createElement('textarea');

        dh.addClass($view,'block-text__view');
        dh.addClass($edit,'block-text__edit');
        dh.toggle($view,false);
        dh.toggle($edit,false);

        this.$edit = $edit;
        this.$view = $view;

        this.$el.appendChild($edit);
        this.$el.appendChild($view);

        this.$view.addEventListener('click',this.fire.bind(this, TextBlock.EVENTS.start_edit  ));
        this.$edit.addEventListener('blur',this.fireAsync.bind(this, TextBlock.EVENTS.finish_edit ));
    }

    onFinishEdit(){
        var val = this.$edit.value;
        if (val != this.content.data){
            this.content.data = val;
            this.fire(TextBlock.EVENTS.data_changed,[val,this])
        }
        super.onFinishEdit();
    }

    onStartEdit(){
        super.onStartEdit();
        this.$edit.focus()
    }

    remove(){
        this.$view.removeEventListener('click');
        this.$edit.removeEventListener('click');
        super.remove();
    }

    render(){
        var isEdit = this.state == Block.STATE_EDIT,
            isView = this.state == Block.STATE_VIEW;
        if (isEdit){
            this.$edit.value = this.content.data || '';
        } else if (isView) {
            this.$view.textContent = this.content.data || '';
        }

        dh.toggle(this.$edit,isEdit);
        dh.toggle(this.$view,isView);

    }
}

//todo decorator bind

Block.registerBlock('text-block', TextBlock)