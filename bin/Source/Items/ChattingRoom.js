
ChattingRoom = class ChattingRoom extends AView
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
        // console.log(theApp.UserInfo)

	}

	onInitDone()
	{
		super.onInitDone()

		const emoList = ['😊','😂','🤣','😍','😒','😎','🙄','😴','😏','🤑','🥵','🥳','🥶','👿','👽','💀','🤢','🤮','😰']
        const emoticonList = [
            "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "🥰", "😙", "🥲", "😚", "☺️", "🙂", "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🫥", "😶‍🌫️", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😫", "😪", "🥱", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🫤", "🫠", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😮‍💨", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "🥴", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥸", "🥺", "🥹", "🤠", "🤡", "🤥", "🫨", "🙂‍↔️", "🙂‍↕️", "🤫", "🤭", "🫢", "🫣", "🧐", "🤓", "😈", "👿", "👹", "👺", "💀", "☠️", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐮", "🐷", "🐗", "🐭", "🐹", "🐰", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐴", "🫎", "🫏", "🦄", "🐔", "🐲", "🐽", "🐾", "🐒", "🦍", "🦧", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦘", "🦥", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🐢", "🐍", "🐉", "🦕", "🦖", "🦦", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🪸", "🪼", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦢", "🦜", "🪽", "🐦‍⬛", "🪿", "🐦‍🔥", "🦩", "🦚", "🦉", "🦤", "🪶", "🐦", "🐧", "🐥", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝", "🪲", "🐞", "🦂", "🕷️", "🕸️", "🧞‍♀️", "🧞‍♂️", "🧞", "🧟‍♀️", "🧟‍♂️", "🧟", "🧌", "🗣️", "👤", "👥", "🫂", "👁️", "👀", "🦴", "🦷", "👅", "👄", "🫦", "🧠", "🫀", "🫁", "🦾", "🦿", "👣", "🤺", "⛷️"
        ];
        const random = emoList[Math.floor(Math.random() * emoList.length)];

        this.emojiBtn.setText(random);

        this.loadChat();


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

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

        console.log('선택한 친구의 데이터: ', theApp.SelectFriend.data);

        const name = theApp.SelectFriend.data.nickname == null ? theApp.SelectFriend.data.username : theApp.SelectFriend.data.nickname;

        if (theApp.SelectFriend.data) {
            this.selectFriendName1.setText(name);
            this.selectFriendId.setText(theApp.SelectFriend.data.id);
            this.selectFriendName2.setText(name);
            this.imgBackCol.setStyle('background-color', theApp.SelectFriend.data.color);

            this.textField.setPlaceholder(`@ ${name}에 메시지 보내기`);
        }

	}

    loadChat() {
        const senderId = theApp.UserInfo.id;
        const receiverId = theApp.SelectFriend.data.id;

        fetch(`http://localhost:3000/api/messages?senderId=${senderId}&receiverId=${receiverId}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success' && data.data.length > 0) {
                    console.log(data.data)
                    data.data.forEach(msg => {
                        this.msgListView.addItem('Source/Items/ChattingItem.lay', [msg]);
                    });
                }
            })
            .catch(error => console.error('전 대화 불러오기 오류:', error));
    }

	onEmojiBtnActionleave(comp, info, e)
	{

		const emoList = ['😊','😂','🤣','😍','😒','😎','🙄','😴','😏','🤑','🥵','🥳','🥶','👿','👽','💀','🤢','🤮','😰']
        const random = emoList[Math.floor(Math.random() * emoList.length)];

        this.emojiBtn.setText(random);

	}

    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

	onTextFieldKeydown(comp, info, e)
	{

		if (e.keyCode === 13) {
            const message = {
                senderId: theApp.UserInfo.id,
                receiverId: theApp.SelectFriend.data.id,
                message: this.textField.getText(),
                time: this.formatDate(new Date())
            };

            const msg = JSON.stringify(message);
            theApp.wio.sendData(msg); 

            this.textField.setText('');
        }

	}

    onEmojiBoxBlur() {
        this.emojiBox.setStyle('display', 'none');
    }

    setMessage(msg)
    {
        let MSG = JSON.parse(msg);
        // console.log(msg.receiverId)
        // console.log(theApp.SelectFriend.data.id)
        // console.log(msg.receiverId == theApp.SelectFriend.data.id)
        console.log(MSG)

        if (MSG.receiverId == theApp.SelectFriend.data.id || MSG.senderId == theApp.SelectFriend.data.id){
            console.log(MSG)
            this.msgListView.addItem('Source/Items/ChattingItem.lay', [MSG]);
        }

        // this.loadChat()

        // console.log(this.getTabData())

        // this.msgListView.addItem('Source/Items/ChattingItem.lay', [MSG]);
    }


    

	onEmojiBtnClick(comp, info, e)
	{

		if (this.emojiBox.getStyle('display') == 'none') {
            this.emojiBox.setStyle('display', 'block');
        } else {
            this.emojiBox.setStyle('display', 'none');
        }

	}

	onEmoticonClick(comp, info, e)
	{

		// console.log(comp.getText())
        const text = this.textField.getText();
        this.textField.setText(text + comp.getText());
        this.textField.setFocus();
        this.emojiBox.setStyle('display', 'none');
        this.emojiBox.scrollToTop()

	}
}

