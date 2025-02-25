
Setting = class Setting extends AView
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

        this.radioBtnManager = new RadioBtnManager(this);

		this.tabView.addTab('Set_myAccount', 'Source/Setting_Items/Set_myAccount.lay', 'Set_myAccount'); // 내 계정
		this.tabView.addTab('Set_profile', 'Source/Setting_Items/Set_profile.lay', 'Set_profile'); // 프로필
		this.tabView.addTab('Set_content', 'Source/Setting_Items/Set_content.lay', 'Set_content'); // 콘텐츠 및 소셜
		this.tabView.addTab('Set_data', 'Source/Setting_Items/Set_data.lay', 'Set_data'); // 데이터 및 개인정보
		this.tabView.addTab('Set_family', 'Source/Setting_Items/Set_family.lay', 'Set_family'); // 가족 센터
		this.tabView.addTab('Set_app', 'Source/Setting_Items/Set_app.lay', 'Set_app'); // 승인한 앱
		this.tabView.addTab('Set_device', 'Source/Setting_Items/Set_device.lay', 'Set_device'); // 기기
		this.tabView.addTab('Set_link', 'Source/Setting_Items/Set_link.lay', 'Set_link'); // 연결
		this.tabView.addTab('Set_clip', 'Source/Setting_Items/Set_clip.lay', 'Set_clip'); // 클립

		this.tabView.addTab('Set_hype', 'Source/Setting_Items/Set_hype.lay', 'Set_hype'); // HypeSquad
		this.tabView.addTab('Set_personal', 'Source/Setting_Items/Set_personal.lay', 'Set_personal'); // 활동 개인정보
		this.tabView.addTab('Set_advance', 'Source/Setting_Items/Set_advance.lay', 'Set_advance'); // 고급
		this.tabView.addTab('Set_mode', 'Source/Setting_Items/Set_mode.lay', 'Set_mode'); // 방송 모드
		this.tabView.addTab('Set_lang', 'Source/Setting_Items/Set_lang.lay', 'Set_lang'); // 언어
		this.tabView.addTab('Set_key', 'Source/Setting_Items/Set_key.lay', 'Set_key'); // 단축키

        this.tabView.selectTabById('Set_myAccount');
        this.radioBtnManager.selectButton('Set_myAccount');
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onSocialClick(comp, info, e)
	{
        let social = comp.getComponentId()

        if (social == 'twitter') {
            window.open('https://twitter.com/discord', '_blank')
        } else if (social == 'instagram') {
            window.open('https://instagram.com/discord', '_blank')
        } else if (social == 'facebook') {
            window.open('https://facebook.com/discord', '_blank')
        } else if (social == 'youtube') {
            window.open('https://youtube.com/discord', '_blank')
        } else if (social == 'tiktok') {
            window.open('https://tiktok.com/@discord', '_blank')
        }
	}

	onCloseClick(comp, info, e)
	{

		this.getContainer().close();

	}

	onSideMenuClick(comp, info, e)
	{        
        this.tabView.selectTabById(comp.getComponentId());
        this.radioBtnManager.selectButton(comp.getComponentId());

	}

	onSettingKeydown(comp, info, e)
	{
        if (e.key == 'Escape') {
            this.getContainer().close();
        }
	}

	onGoodsClick(comp, info, e)
	{

		window.open('https://discordmerch.com/?utm_source=shortlink&utm_lkey=0peij', '_blank')

	}

	onNewClick(comp, info, e)
	{

		var wnd = new AWindow('NewFuncModal');
        
        wnd.setWindowOption({
            isModal : true,
            isCenter: true,
            isFocusLostClose : true,
            modalBgOption : 'dark',
            isDraggable: false,
            isResizable: false,
        })
        
        wnd.open('Source/Modal/NewFuncModal.lay', null, 0, 0, 472, 'auto');

	}

	onLogoutClick(comp, info, e)
	{

		var wnd = new AWindow('LogoutModal');
        
        wnd.setWindowOption({
            isModal : true,
            isCenter: true,
            isFocusLostClose : true,
            modalBgOption : 'dark',
            isDraggable: false,
            isResizable: false,
        })
        
        wnd.open('Source/Modal/LogoutModal.lay', null, 0, 0, 440, 'auto');

	}
}

