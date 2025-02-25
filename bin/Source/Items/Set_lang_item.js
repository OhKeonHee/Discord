
Set_lang_item = class Set_lang_item extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

    setData(data) {
        this.data = data;
        this.lang.setText(this.data.lang);
        this.lang_ko.setText(this.data.lang_ko);
        this.flag.setImage(this.data.flag); 

        this.setComponentId(this.data.id);
        this.checkBtn.setComponentId('checkBtn_' + this.data.id);
    }

	init(context, evtListener)
	{
		super.init(context, evtListener)            
	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here
        this.checkBtn.hide();

        if (this.getComponentId() == 'korea') {
            this.checkBtn.show();    
        }

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)
	}


	onLangClick(comp, info, e)
	{
        const items = this.owner.getItems();

        for (var i = 0; i < items.length; i++) {
            let checkBtn = items[i].querySelector('button[id*="checkBtn_"]');
            checkBtn.style.display = 'none';
        }

        this.checkBtn.show();
        AToast.show(this.lang_ko.getText() + ' 로 언어를 변경했습니다!', 1.5);
    }
}

