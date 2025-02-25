
set_family = class set_family extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		this.active.addClass('setting_tab_btn_clicked');

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

    onActiveClick(comp, info, e)
	{

        this.tabview.selectTabById('active');
        this.active.addClass('setting_tab_btn_clicked');
        this.family.removeClass('setting_tab_btn_clicked');
        this.set.removeClass('setting_tab_btn_clicked');

	}

	onFamilyClick(comp, info, e)
	{

		this.tabview.selectTabById('family');
        this.active.removeClass('setting_tab_btn_clicked');
        this.family.addClass('setting_tab_btn_clicked');
        this.set.removeClass('setting_tab_btn_clicked');

	}

    onSetClick(comp, info, e)
	{

		this.tabview.selectTabById('set');
        this.active.removeClass('setting_tab_btn_clicked');
        this.family.removeClass('setting_tab_btn_clicked');
        this.set.addClass('setting_tab_btn_clicked');

	}

}

