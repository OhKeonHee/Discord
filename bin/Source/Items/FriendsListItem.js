
FriendsListItem = class FriendsListItem extends AView
{
	constructor()
	{
		super()

		//TODO:edit here
        this.data = null;

	}

    setData(data) {
        this.data = data;

        const colors = [
            "#D24D4D",
            "#FF6F5F",
            "#F0E200",
            "#58B09C",
            "#4682B4",
            "#D38DCD",
            "#9B4F96"
        ];

        let name = data.nickname == null ? data.username : data.nickname;
        this.nickname.setText(name);

        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];

        this.imgBackCol.setStyle('background-color', randomColor);
        this.data.color = randomColor;
    }

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

	}


	onFriendClick(comp, info, e)
	{

		if (theApp.SelectFriend) {
            theApp.SelectFriend.friendItem.removeClass('friendsListItem_click');
        }

        theApp.SelectFriend = this;
        
        this.friendItem.addClass('friendsListItem_click');

        // console.log(theApp.SelectFriend)
        this.owner.parent.owner.parent.tabView.selectTabById(theApp.SelectFriend.data.id)

        console.log(this.owner.parent)
        this.owner.parent.owner.parent.updateOnFriendClick();

        this.owner.parent.parent.friendBtn.setCheck(false)

	}

	onFriendItemActionenter(comp, info, e)
	{

		this.delFriendBtn.show()

	}

	onFriendItemActionleave(comp, info, e)
	{

		this.delFriendBtn.hide()

	}
}

