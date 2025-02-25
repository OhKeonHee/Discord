
set_myAccount = class set_myAccount extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		this.tabview.selectTabById('security');
        this.security.addClass('setting_tab_btn_clicked');

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


	onSecurityClick(comp, info, e)
	{

        this.tabview.selectTabById('security');
        this.security.addClass('setting_tab_btn_clicked');
        this.status.removeClass('setting_tab_btn_clicked');

	}

	onStatusClick(comp, info, e)
	{

		this.tabview.selectTabById('status');
        this.security.removeClass('setting_tab_btn_clicked');
        this.status.addClass('setting_tab_btn_clicked');

	}
}

