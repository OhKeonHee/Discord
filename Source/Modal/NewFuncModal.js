
NewFuncModal = class NewFuncModal extends AView
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

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onTwitterClick(comp, info, e)
	{

		window.open('https://x.com/discord', '_blank')

	}

	onFacebookClick(comp, info, e)
	{

		window.open('https://www.facebook.com/discord/', '_blank')

	}

	onInstaClick(comp, info, e)
	{

		window.open('https://www.instagram.com/discord/', '_blank')

	}

	onBlogClick(comp, info, e)
	{

		window.open('https://discord.com/blog/discord-update-december-19-2024-changelog?utm_source=changelog&utm_medium=in-product&utm_campaign=performance&utm_content=dec-changelog-reblog', '_blank')

	}

	onCloseClick(comp, info, e)
	{

		this.getContainer().close();

	}
}

