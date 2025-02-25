
Register_Loading = class Register_Loading extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		setTimeout(() => {
            this.Loading.hide();
            this.success.show();
        }, 2000);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onGoToLoginClick(comp, info, e)
	{

		theApp.LoginWindow.show();
        theApp.RegisterWindow.hide();
		this.getContainer().close();

	}
}

