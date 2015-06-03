import {Block} from "../base/block"

import {DomHelpers as dh} from "../helpers/dom"

/**
 * @export
 * @class
 * @extends Block
 */
export class ImageBlock extends Block{

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


    static BUTTON = {
        getButton(){
            var el = document.createElement('a');
            el.textContent = 'ImageBlock';

            return el;
        }
    };

    init(){}


    initView(){
        super.initView();

        var $view = document.createElement('img'),
            $edit = document.createElement('input');

        $edit.type = 'Url';
        dh.addClass($view,'block-image__view');
        dh.addClass($edit,'block-image__edit');
        dh.toggle($view,false);
        dh.toggle($edit,false);

        this.$edit = $edit;
        this.$view = $view;

        this.$el.appendChild($edit);
        this.$el.appendChild($view);

        this.$view.addEventListener('click',this.fire.bind(this, ImageBlock.EVENTS.start_edit  ));
        this.$edit.addEventListener('blur',this.fireAsync.bind(this, ImageBlock.EVENTS.finish_edit ));
    }

    onFinishEdit(){
        var val = this.$edit.value;
        if (val != this.content.data){
            this.content.data = val;
            this.fire(ImageBlock.EVENTS.data_changed,[val,this])
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
            this.$view.src = this.content.data || 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150';
        }

        dh.toggle(this.$edit,isEdit);
        dh.toggle(this.$view,isView);

    }
}

//todo decorator bind

Block.registerBlock('image-block', ImageBlock)