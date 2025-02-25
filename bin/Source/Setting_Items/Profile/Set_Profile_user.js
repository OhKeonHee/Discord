
set_Profile_user = class set_Profile_user extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		this.bgCol.setStyle('background-color', theApp.UserInfo.color)
        this.profileImg.setStyle('background-color', theApp.UserInfo.color)
        this.nickname.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.username.setText(theApp.UserInfo.username);

        this.nicknameTF.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.colorPicker.setText(theApp.UserInfo.color);
        this.colorPicker.setStyle('background-color', theApp.UserInfo.color);

        this.introduceText.setText('');
        this.introduceText.hide();


        // 내 소개 텍스트에어리어 이모지 버튼 및 뷰
        const emoList = ['😊','😂','🤣','😍','😒','😎','🙄','😴','😏','🤑','🥵','🥳','🥶','👿','👽','💀','🤢','🤮','😰']
        const emoticonList = [
            "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "🥰", "😙", "🥲", "😚", "☺️", "🙂", "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🫥", "😶‍🌫️", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😫", "😪", "🥱", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🫤", "🫠", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😮‍💨", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "🥴", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥸", "🥺", "🥹", "🤠", "🤡", "🤥", "🫨", "🙂‍↔️", "🙂‍↕️", "🤫", "🤭", "🫢", "🫣", "🧐", "🤓", "😈", "👿", "👹", "👺", "💀", "☠️", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐮", "🐷", "🐗", "🐭", "🐹", "🐰", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐴", "🫎", "🫏", "🦄", "🐔", "🐲", "🐽", "🐾", "🐒", "🦍", "🦧", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦘", "🦥", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🐢", "🐍", "🐉", "🦕", "🦖", "🦦", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🪸", "🪼", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦢", "🦜", "🪽", "🐦‍⬛", "🪿", "🐦‍🔥", "🦩", "🦚", "🦉", "🦤", "🪶", "🐦", "🐧", "🐥", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝", "🪲", "🐞", "🦂", "🕷️", "🕸️", "🧞‍♀️", "🧞‍♂️", "🧞", "🧟‍♀️", "🧟‍♂️", "🧟", "🧌", "🗣️", "👤", "👥", "🫂", "👁️", "👀", "🦴", "🦷", "👅", "👄", "🫦", "🧠", "🫀", "🫁", "🦾", "🦿", "👣", "🤺", "⛷️"
        ];
        const random = emoList[Math.floor(Math.random() * emoList.length)];

        this.emojiBtn.setText(random);

        // 이모티콘 그룹
        this.emojiBox.setStyle('display', 'none');
        this.emojiBox.addEventListener('blur', this.onEmojiBoxBlur())

        const emoBtnGroup = this.findCompByGroup('emoticon');

        emoticonList.forEach((e, idx) => {
            const btn = emoBtnGroup[idx];
            if(btn) {
                btn.setText(e)
            }
        })

        this.isSaveArea.hide();
        

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


	onNicknameTFChange(comp, info, e)
	{

		this.nickname.setText(this.nicknameTF.getText());
        
        if (this.isSaveArea.getStyle('display') == 'none') {
            this.isSaveArea.show();
        }

	}

    onNicknameTFFocus(comp, info, e)
	{

        this.nicknameTF.setPlaceholder(this.nicknameTF.getText())
		this.nicknameTF.setText('');

	}

	onPronounChange(comp, info, e)
	{
        if (this.pronoun.getText() !== '') {
            this.username.setText(theApp.UserInfo.username + ' • ' + this.pronoun.getText());
        } else {
            this.username.setText(theApp.UserInfo.username)
        }

        if (this.isSaveArea.getStyle('display') == 'none') {
            this.isSaveArea.show();
        }
	
	}

    onEmojiBtnClick(comp, info, e)
	{

		if (this.emojiBox.getStyle('display') == 'none') {
            this.emojiBox.setStyle('display', 'block');
        } else {
            this.emojiBox.setStyle('display', 'none');
        }

	}

    onEmojiBoxBlur() {
        this.emojiBox.setStyle('display', 'none');
    }

    onEmoticonClick(comp, info, e)
	{

        const text = this.introduce.getText();
        this.introduce.setText(text + comp.getText());
        this.introduce.setFocus();
        this.emojiBox.setStyle('display', 'none');
        this.emojiBox.scrollToTop();

        const introLength = this.introduce.getText().length;
        this.length.setText(200 - introLength);
        this.introduceText.setText(this.introduceText.getText() + comp.getText());

	}

	onIntroduceChange(comp, info, e)
	{

		const introLength = this.introduce.getText().length;
        this.length.setText(200 - introLength);

        if (comp.getText() !== '') {
            this.introduceText.setText(comp.getText());
            this.introduceText.show();
        } else {
            this.introduceText.setText('');
            this.introduceText.hide();
        }

        if (this.isSaveArea.getStyle('display') == 'none') {
            this.isSaveArea.show();
        }
        

	}
    

	onColorPickerChange(comp, info, e)
	{

		// this.bgCol.setStyle('background-color', info.color)
        console.log(comp.getText())
	}

	onColorPickerBlur(comp, info, e)
	{
		this.bgCol.setStyle('background-color', comp.getText());
        this.profileImg.setStyle('background-color', comp.getText());

        if (this.isSaveArea.getStyle('display') == 'none') {
            this.isSaveArea.show();
        }
	}

	onRollbackClick(comp, info, e)
	{

		this.bgCol.setStyle('background-color', theApp.UserInfo.color)
        this.profileImg.setStyle('background-color', theApp.UserInfo.color)
        this.nickname.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.username.setText(theApp.UserInfo.username);

        this.nicknameTF.setText(theApp.UserInfo.nickname == null ? '닉네임을 설정해주세요.' : theApp.UserInfo.nickname);
        this.colorPicker.setText(theApp.UserInfo.color);
        this.colorPicker.setStyle('background-color', theApp.UserInfo.color);

        this.introduceText.setText('');
        this.introduceText.hide();

        this.pronoun.setText('');
        this.introduce.setText('');

	}
}

