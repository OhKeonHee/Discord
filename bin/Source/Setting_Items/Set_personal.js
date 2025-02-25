
set_personal = class set_personal extends AView
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

    onlinkClick(comp, info, e) {

        window.open('https://support.discord.com/hc/ko/articles/7931156448919-%ED%99%9C%EB%8F%99-%EC%83%81%ED%83%9C-%EC%B5%9C%EA%B7%BC-%ED%99%9C%EB%8F%99', '_blank');

    }

    onTermClick(comp, info, e) {
        
        window.open('https://discord.com/terms', '_blank');

    }

    onPrivacyClick(comp, info, e) {
        
        window.open('https://discord.com/privacy', '_blank');

    }
}

