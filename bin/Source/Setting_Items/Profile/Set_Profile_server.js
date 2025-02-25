
set_Profile_server = class set_Profile_server extends AView
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
        this.bgCol.setStyle('background-color', theApp.UserInfo.color)
        this.profileImg.setStyle('background-color', theApp.UserInfo.color)
        this.nickname.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.username.setText(theApp.UserInfo.username);

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


	onlinkClick(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/4409388345495-%EC%84%9C%EB%B2%84-%ED%94%84%EB%A1%9C%ED%95%84', '_blank')

	}
}

