
Set_Key_Arr = class Set_Key_Arr extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

    setData(data) {
        this.data = data;

        this.data.keys.forEach((key) => {
            const keyBtn = new AButton();

            keyBtn.init();
            keyBtn.addClass('shortcutKey');
            
            keyBtn.setText(key);

            keyBtn.addEventListener('mousedown', (e) => {
                console.log('down 호출')
                keyBtn.removeClass('shortcutKey');
		        keyBtn.addClass('shortcutKey_active');
		        keyBtn.addClass('down_transparent');
            });

            keyBtn.addEventListener('mouseup', (e) => {
                keyBtn.removeClass('shortcutKey_active')
		        keyBtn.addClass('shortcutKey')
                keyBtn.removeClass('down_transparent');
            });

            this.keyArr.layComponent(keyBtn);
        });

        this.action.setText(this.data.action);
    }

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

