
set_profile = class set_profile extends AView
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

        this.tabView.selectTabById('user');
        this.user.addClass('setting_tab_btn_clicked');

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onServerClick(comp, info, e)
	{

		this.tabView.selectTabById('server');
        this.server.addClass('setting_tab_btn_clicked');
        this.user.removeClass('setting_tab_btn_clicked');

	}

	onUserClick(comp, info, e)
	{

		this.tabView.selectTabById('user');
        this.user.addClass('setting_tab_btn_clicked');
        this.server.removeClass('setting_tab_btn_clicked');

	}
}

