
set_MyAccount_Security = class set_MyAccount_Security extends AView
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

        this.bgCol.setStyle('background-color', theApp.UserInfo.color)
        this.profileImg.setStyle('background-color', theApp.UserInfo.color)
        this.nickname1.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.nickname2.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.name.setText(theApp.UserInfo.username);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

