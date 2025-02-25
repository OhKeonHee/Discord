
set_link = class set_link extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

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


	onMoreClick(comp, info, e)
	{

		var wnd = new AWindow('LinkMoreModal');
        
        wnd.setWindowOption({
            isModal : true,
            isCenter: true,
            isFocusLostClose : true,
            modalBgOption : 'dark',
            isDraggable: false,
            isResizable: false,
        })
        
        wnd.open('Source/Modal/MoreLinkModal.lay', null, 0, 0, 472, 'auto');

	}
}

