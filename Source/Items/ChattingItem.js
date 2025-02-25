
ChattingItem = class ChattingItem extends AView
{
	constructor()
	{
		super()

		this.data = null;

	}

    setData(data) {
        this.data = data; 
        
        // let name = ''
        // if (this.data.nickname == null) {
        //     if(this.data.senderNickname)
        // }
        this.name.setText(this.data.nickname == null ? this.data.username : this.data.nickname);
        this.time.setText(this.setFormatDate(this.data.time));
        this.msg.setText(this.data.message);
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

        return new Intl.DateTimeFormat('ko-KR', options).format(new Date(date));
    }

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

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

}

