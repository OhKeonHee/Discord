
ProfileModal = class ProfileModal extends AView
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

		this.friendCol.setStyle('background-color', theApp.SelectFriend.data.color);
        this.friendCol_profile.setStyle('background-color', theApp.SelectFriend.data.color);
        this.selectFriendProfile.setStyle('background-color', theApp.SelectFriend.data.color);
        this.selectFriendNickname.setText(theApp.SelectFriend.data.nickname == null ? theApp.SelectFriend.data.username : theApp.SelectFriend.data.nickname);
        this.selectFriendId.setText(theApp.SelectFriend.data.id);
        this.selectFriendBirth.setText(`${this.setFormatDate(theApp.SelectFriend.data.birthdate)} 🍰`);
        this.selectFriendCreateAt.setText(this.setFormatDate(theApp.SelectFriend.data.created_at));

	}

    setFormatDate(date) {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        return (new Intl.DateTimeFormat('ko-KR', options).format(new Date(date))).slice(0, 14);
    }

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

