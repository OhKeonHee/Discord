
Lobby = class Lobby extends AView
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
        this.loadUsers();
	}

	onInitDone()
	{
		super.onInitDone()

        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.onWindowResize();

        this.tabView.addTab('basic', 'Source/Items/ChattingRoomBasic.lay', 'basic');
        this.tabView.addTab('addFriend', 'Source/Items/AddFriend.lay', 'addFriend');
        this.tabView.addTab('nitro', 'Source/Page/Nitro.lay', 'nitro');

        this.tabView.selectTabById('basic');

        this.updateOnFriendClick()   
        this.friendBtn.setCheck(true);

        this.friendHeader.show();   
        this.selectFriendHeader.hide();

        if (theApp.UserInfo.color == undefined) {
            const colors = [
                "#D24D4D",
                "#FF6F5F",
                "#F0E200",
                "#58B09C",
                "#4682B4",
                "#D38DCD",
                "#9B4F96"
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomIndex];
            theApp.UserInfo.color = randomColor;
        }

        this.settingProfileImg.setStyle('background-color', theApp.UserInfo.color);
        this.settingProfileNickname.setText(theApp.UserInfo.nickname == null ? theApp.UserInfo.username : theApp.UserInfo.nickname);
        this.settingProfileUserName.setText(theApp.UserInfo.nickname == null ? theApp.UserInfo.id : theApp.UserInfo.username);


        // 받은 편지함
        this.mailTabView.addTab('myAlarm', 'Source/Items/MyAlarm.lay', 'myAlarm');
        this.mailTabView.addTab('NoRead', 'Source/Items/NoRead.lay', 'NoRead');
        this.mailTabView.addTab('Mension', 'Source/Items/Mension.lay', 'Mension');
        this.mailTabView.selectTabById('myAlarm');
        this.myAlarmBtn.setStyle('border-bottom', '1px solid #949cf7')
        

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    onWindowResize() {
        const width = window.innerWidth;

        if (width < 1100) {
            this.friendInfoArea.hide()
        } else {
            if (this.tabView?.selectedTab?.tabId !== 'nitro') {
                this.friendInfoArea.show()
            }
        }
    }

    updateOnFriendClick() {
        if(theApp.SelectFriend == undefined) {
            this.selectFriendInfo.hide();
            this.selectFriendInfoNone.show();
            this.selectFriendHeader.hide();
        } else {
            this.selectFriendInfo.show();
            this.selectFriendInfoNone.hide();
            this.friendHeader.hide();
            this.selectFriendHeader.show();
            this.selectFriendImg.setStyle('background-color', theApp.SelectFriend.data.color);
            this.selectFriendName.setText(theApp.SelectFriend.data.nickname == null ? theApp.SelectFriend.data.username : theApp.SelectFriend.data.nickname)

            console.log(theApp.SelectFriend.data)
            this.friendCol.setStyle('background-color', theApp.SelectFriend.data.color);
            this.friendCol_profile.setStyle('background-color', theApp.SelectFriend.data.color);
            this.selectFriendProfile.setStyle('background-color', theApp.SelectFriend.data.color);
            this.selectFriendNickname.setText(theApp.SelectFriend.data.nickname == null ? theApp.SelectFriend.data.username : theApp.SelectFriend.data.nickname);
            this.selectFriendId.setText(theApp.SelectFriend.data.id);
            this.selectFriendBirth.setText(`${this.setFormatDate(theApp.SelectFriend.data.birthdate)} 🍰`);
            this.selectFriendCreateAt.setText(this.setFormatDate(theApp.SelectFriend.data.created_at));
        }
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

    loadUsers() {
        // const userId = theApp.UserInfo.id
        // fetch(`http://localhost:3000/api/friends?userId=${userId}`)
        fetch(`http://localhost:3000/api/users`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    console.log(data.data);
                    this.friendsListView.addItem('Source/Items/FriendsListItem.lay', data.data); 

                    data.data.forEach(d => {
                        this.tabView.addTab(d.id, 'Source/Items/ChattingRoom.lay', d.id, d);
                    });
                    theApp.FriendList = data.data
                    
                    this.tabView.selectTabById('basic');
                } else {
                    console.error('Failed to load users:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }


	onProfileHover(comp, info, e)
	{

		this.hoverBackCol.show()

	}

	onProfileLeave(comp, info, e)
	{

		this.hoverBackCol.hide()

	}

	onGoToProfileClick(comp, info, e)
	{

		var wnd = new AWindow('ProfileModal')
        
        wnd.setWindowOption({
            isModal : true,
            isCenter: true,
            isFocusLostClose : true,
            modalBgOption : 'dark',
            isDraggable: false,
            isResizable: false,
        })
        
        wnd.open('Source/Modal/ProfileModal.lay', null, 0, 0, 600, 550);

	}

	onSideBtnClick(comp, info, e)
	{
        if (comp.compId == 'friendBtn') {
            this.tabView.selectTabById('basic');
            this.friendHeader.show();
        } else {
            this.friendBtn.setCheck(false)
        }

        if (comp.compId == 'NitroBtn') {
            this.tabView.selectTabById('nitro');
            this.friendInfoArea.hide();
            this.friendHeader.hide();
            this.selectFriendHeader.hide();
        }

        if (theApp.SelectFriend != undefined) {
            theApp.SelectFriend.friendItem.removeClass('friendsListItem_click');
            theApp.SelectFriend = undefined;
            this.updateOnFriendClick()
        }
	}

	onSettingProfileenter(comp, info, e)
	{

		this.settingProfile.addClass('sideBtn_clicked');
        this.online.setStyle('margin-top', '-14px');

	}

	onSettingProfileleave(comp, info, e)
	{

		this.settingProfile.removeClass('sideBtn_clicked')
        this.online.setStyle('margin-top', '0px');

	}

	onSettingEnter(comp, info, e)
	{

		const icon = this.settingBtn;
        icon.setStyle('transition', 'transform 1s ease-in-out');
        icon.setStyle('transform', 'rotate(360deg)');
        
	}

	onSettingLeave(comp, info, e)
	{

		const icon = this.settingBtn;
        icon.setStyle('transition', 'transform 1s ease-in-out');
        icon.setStyle('transform', 'rotate(0deg)');
        
	}

	onSettingBtnEnter(comp, info, e)
	{

		this.settingBtnView.addClass('sideBtn_clicked')

	}
	onSettingBtnLeave(comp, info, e)
	{

		this.settingBtnView.removeClass('sideBtn_clicked')

	}

	onViewProfileClick(comp, info, e)
	{

		if(this.friendInfoArea.isShow()) {
            this.friendInfoArea.hide()
        } else {
            this.friendInfoArea.show()
        }

	}

	onAddFriendBtnClick(comp, info, e)
	{

		this.tabView.selectTabById('addFriend');

	}

	onDMAreaEnter(comp, info, e)
	{

		this.DMLabel.setStyle('color', 'rgb(219, 222, 225)');
		this.DMPlus.setStyle('color', 'rgb(219, 222, 225)');

	}

	onDMAreaLeave(comp, info, e)
	{

		this.DMLabel.setStyle('color', 'rgb(146, 153, 162)');
		this.DMPlus.setStyle('color', 'rgb(146, 153, 162)');

	}

	onQuestionClick(comp, info, e)
	{

		window.open('https://support.discord.com/hc/ko', '_blank');

	}

    // 받은 편지함

	onMyAlarmClick(comp, info, e)
	{

		this.mailTabView.selectTabById('myAlarm');
        this.myAlarmBtn.setStyle('border-bottom', '1px solid #949cf7')
        this.noReadBtn.setStyle('border-bottom', 'none')
        this.mensionBtn.setStyle('border-bottom', 'none')

	}

	onNoReadClick(comp, info, e)
	{

		this.mailTabView.selectTabById('NoRead');
        this.myAlarmBtn.setStyle('border-bottom', 'none')
        this.noReadBtn.setStyle('border-bottom', '1px solid #949cf7')
        this.mensionBtn.setStyle('border-bottom', 'none')

	}

	onMensionClick(comp, info, e)
	{

		this.mailTabView.selectTabById('Mension');
        this.myAlarmBtn.setStyle('border-bottom', 'none')
        this.noReadBtn.setStyle('border-bottom', 'none')
        this.mensionBtn.setStyle('border-bottom', '1px solid #949cf7')

	}

	onMailClick(comp, info, e)
	{

		this.mailView.isShow() ? this.mailView.hide() : this.mailView.show();

        
        setTimeout(() => document.addEventListener('click', () => {
            this.mailView.hide()
        }), 0);


	}

	onHeadPhoneClick(comp, info, e)
	{

		//TODO:edit here

	}

	onMicClick(comp, info, e)
	{
        const mic = 'Assets/Imgs/microphone-solid.svg'
        const micSlash = 'Assets/Imgs/microphone.svg'

        if (this.mic.getImage() == mic) {
            this.mic.setImage(micSlash)
            this.mic.setIconSize('24px 24px')
        } else {
            this.mic.setImage(mic)
            this.mic.setIconSize('22px 22px')
        }
		

	}

	onSettingBtnClick(comp, info, e)
	{

		var wnd = new AWindow('settingModal');

        wnd.openFull('Source/Modal/Setting.lay', null);

	}
}

