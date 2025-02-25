
Set_content = class Set_content extends AView
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
        const friendDMLabel = this.friendDMLabel.getText();
        const otherDMLabel = this.otherDMLabel.getText();
        const serverLabel = this.serverLabel.getText();
        if (friendDMLabel == '보여주기') {
            this.friendDMOption_show.setStyle('background-color', '#404249');
            this.friendDMOption_show.setStyle('color', '#fafafb');
            this.friendDMOption_blur.setStyle('background-color', 'transparent');
            this.friendDMOption_blur.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_block.setStyle('background-color', 'transparent');
            this.friendDMOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else if (friendDMLabel == '흐리게') {
            this.friendDMOption_blur.setStyle('background-color', '#404249');
            this.friendDMOption_blur.setStyle('color', '#fafafb');
            this.friendDMOption_show.setStyle('background-color', 'transparent');
            this.friendDMOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_block.setStyle('background-color', 'transparent');
            this.friendDMOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else {
            this.friendDMOption_block.setStyle('background-color', '#404249');
            this.friendDMOption_block.setStyle('color', '#fafafb');
            this.friendDMOption_show.setStyle('background-color', 'transparent');
            this.friendDMOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_blur.setStyle('background-color', 'transparent');
            this.friendDMOption_blur.setStyle('color', 'rgb(51, 51, 51)');
        }
        if (otherDMLabel == '보여주기') {
            this.friendDMOption_show.setStyle('background-color', '#404249');
            this.friendDMOption_show.setStyle('color', '#fafafb');
            this.friendDMOption_blur.setStyle('background-color', 'transparent');
            this.friendDMOption_blur.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_block.setStyle('background-color', 'transparent');
            this.friendDMOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else if (otherDMLabel == '흐리게') {
            this.friendDMOption_blur.setStyle('background-color', '#404249');
            this.friendDMOption_blur.setStyle('color', '#fafafb');
            this.friendDMOption_show.setStyle('background-color', 'transparent');
            this.friendDMOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_block.setStyle('background-color', 'transparent');
            this.friendDMOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else {
            this.friendDMOption_block.setStyle('background-color', '#404249');
            this.friendDMOption_block.setStyle('color', '#fafafb');
            this.friendDMOption_show.setStyle('background-color', 'transparent');
            this.friendDMOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.friendDMOption_blur.setStyle('background-color', 'transparent');
            this.friendDMOption_blur.setStyle('color', 'rgb(51, 51, 51)');
        }
        if (serverLabel == '보여주기') {
            this.serverOption_show.setStyle('background-color', '#404249');
            this.serverOption_show.setStyle('color', '#fafafb');
            this.serverOption_blur.setStyle('background-color', 'transparent');
            this.serverOption_blur.setStyle('color', 'rgb(51, 51, 51)');
            this.serverOption_block.setStyle('background-color', 'transparent');
            this.serverOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else if (serverLabel == '흐리게') {
            this.serverOption_blur.setStyle('background-color', '#404249');
            this.serverOption_blur.setStyle('color', '#fafafb');
            this.serverOption_show.setStyle('background-color', 'transparent');
            this.serverOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.serverOption_block.setStyle('background-color', 'transparent');
            this.serverOption_block.setStyle('color', 'rgb(51, 51, 51)');
        } else {
            this.serverOption_block.setStyle('background-color', '#404249');
            this.serverOption_block.setStyle('color', '#fafafb');
            this.serverOption_show.setStyle('background-color', 'transparent');
            this.serverOption_show.setStyle('color', 'rgb(51, 51, 51)');
            this.serverOption_blur.setStyle('background-color', 'transparent');
            this.serverOption_blur.setStyle('color', 'rgb(51, 51, 51)');
        }

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onOptionActionenter(comp, info, e)
	{

		comp.setStyle('background-color', '#35373c');
		comp.setStyle('color', '#d6d9dc');

	}

	onOptionActionleave(comp, info, e)
	{

		comp.setStyle('background-color', 'transparent');
		comp.setStyle('color', 'rgb(51, 51, 51)');

	}

	onFriendDMSelectClick(comp, info, e)
	{

		if (this.friendDMOption.getStyle('display') == 'none') 
        {
            this.friendDMOption.show();
            this.friendDMChevron.setImage('Assets/Imgs/chevron-up-solid.svg');
        } else {
            this.friendDMOption.hide();
            this.friendDMChevron.setImage('Assets/Imgs/chevron-down-solid.svg');
        }

	}

	onfriendDMOption1Click(comp, info, e)
	{

		this.friendDMLabel.setText('보여주기');
        this.friendDMOption.hide();
        this.onInitDone();

	}

	onfriendDMOption2Click(comp, info, e)
	{

		this.friendDMLabel.setText('흐리게');
        this.friendDMOption.hide();
        this.onInitDone();

	}

	onfriendDMOption3Click(comp, info, e)
	{

		this.friendDMLabel.setText('차단하기');
        this.friendDMOption.hide();
        this.onInitDone();

	}

	onOtherDMOption1Click(comp, info, e)
	{

		this.otherDMLabel.setText('보여주기');
        this.otherDMOption.hide();
        this.onInitDone();

	}

	onOtherDMOption2Click(comp, info, e)
	{

		this.otherDMLabel.setText('흐리게');
        this.otherDMOption.hide();
        this.onInitDone();

	}

	onOtherDMOption3Click(comp, info, e)
	{

		this.otherDMLabel.setText('차단하기');
        this.otherDMOption.hide();
        this.onInitDone();

	}

	onOtherDMSelectClick(comp, info, e)
	{

		if (this.otherDMOption.getStyle('display') == 'none') 
        {
            this.otherDMOption.show();
            this.otherDMChevron.setImage('Assets/Imgs/chevron-up-solid.svg');
        } else {
            this.otherDMOption.hide();
            this.otherDMChevron.setImage('Assets/Imgs/chevron-down-solid.svg');
        }

	}

	onServerSelectClick(comp, info, e)
	{

		if (this.serverOption.getStyle('display') == 'none') 
        {
            this.serverOption.show();
            this.serverChevron.setImage('Assets/Imgs/chevron-up-solid.svg');
        } else {
            this.serverOption.hide();
            this.serverChevron.setImage('Assets/Imgs/chevron-down-solid.svg');
        }

	}

	onServerOption1Click(comp, info, e)
	{

		this.serverLabel.setText('보여주기');
        this.serverOption.hide();
        this.onInitDone();

	}

	onServerOption2Click(comp, info, e)
	{

		this.serverLabel.setText('흐리게');
        this.serverOption.hide();
        this.onInitDone();

	}

	onServerOption3Click(comp, info, e)
	{

		this.serverLabel.setText('차단하기');
        this.serverOption.hide();
        this.onInitDone();

	}

	onlink1Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/18210995019671-Discord-%EB%AF%BC%EA%B0%90%ED%95%9C-%EC%BD%98%ED%85%90%EC%B8%A0-%ED%95%84%ED%84%B0', '_blank');

	}

	onlink2Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/115000068672-Discord%EC%97%90%EC%84%9C-%EB%8D%94-%EC%95%88%EC%A0%84%ED%95%9C-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%A0%84%EC%86%A1%ED%95%98%EA%B8%B0', '_blank');

	}

	onlink3Click(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko/articles/7924992471191-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%9A%94%EC%B2%AD', '_blank');

	}
}

