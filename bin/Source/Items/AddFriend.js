
AddFriend = class AddFriend extends AView
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

		this.addFriendReqBtn.enable(false);
        this.errMsg.hide();

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onAddFriendTxtChange(comp, info, e)
	{

		if (this.addFriendTxt.getText() == '') {
            this.addFriendReqBtn.enable(false);
        } else {
            this.addFriendReqBtn.enable(true);
        }

	}

	onAddFriendTxtFocus(comp, info, e)
	{

		this.searchArea.setStyle('border', '1px solid #00aafc');

	}

	onAddFriendTxtBlur(comp, info, e)
	{

		this.searchArea.setStyle('border', 'none');

	}

	onAddFriendReqBtnClick(comp, info, e)
	{

		const keyword = this.addFriendTxt.getText()
        console.log(theApp.FriendList.find((f) => f.nickname?.includes(keyword)) == undefined && !theApp.FriendList.find((f) => f.username?.includes(keyword)) == undefined)
        if (!(theApp.FriendList.find((f) => f.nickname?.includes(keyword)) == undefined && !theApp.FriendList.find((f) => f.username?.includes(keyword)) == undefined)) {
            this.searchArea.setStyle('border', '1px solid #f23f43');
            this.errMsg.show();
            this.addFriendTxt.setFocus();
        } else {
            this.errMsg.hide();
            this.searchArea.setStyle('border', 'none');

            var wnd = new AWindow('Register_Loading')
            wnd.setWindowOption({
                isModal : true,
                isCenter: true,
                isFocusLostClose : false,
                modalBgOption : 'light',
                isDraggable: false,
                isResizable: false,
            })
            wnd.open('Source/Items/AddFriendSuccess.lay', null, 0, 0, 500, 340);
        }

	}
}

