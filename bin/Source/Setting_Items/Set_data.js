
set_data = class set_data extends AView
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


	onlink1Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/360004109911-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EB%B3%B4%ED%98%B8-%EA%B4%80%EB%A6%AC', '_blank');

	}

	onlink2Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/22225542459415-%EA%B2%8C%EC%9E%84-%EB%82%B4-%EB%B3%B4%EC%83%81%EC%97%90-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0', '_blank');

	}

	onlink3Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/21865322754327-Discord-%EC%82%AC%EC%9A%A9%EC%9E%90-%EB%A7%9E%EC%B6%A4-%EC%84%A4%EC%A0%95%EC%97%90-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0', '_blank');

	}

	onlink4Click(comp, info, e)
	{

		// console.log(this.owner)
        this.owner.selectTabById('set_myAccount');

	}

	onlink5Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/360004027692-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EB%B3%B8-%EC%9A%94%EC%B2%AD', '_blank');
	}
}

