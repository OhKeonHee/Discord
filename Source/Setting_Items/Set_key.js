
Set_key = class Set_key extends AView
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
        const msgArr = [
            {
                action: '메시지 수정하기',
                keys: ['e'] 
            },
            {
                action: '메시지 삭제하기',
                keys: ['backspace'] 
            },
            {
                action: '메시지 고정하기',
                keys: ['p'] 
            },
            {
                action: '반응 추가하기',
                keys: ['+'] 
            },
            {
                action: '답장',
                keys: ['r'] 
            },
            {
                action: '텍스트 복사하기',
                keys: ['ctrl', 'c'] 
            },
            {
                action: '읽지 않음으로 표시',
                keys: ['alt', 'enter'] 
            },
            {
                action: '글씨를 돋보이게 하기',
                keys: ['escape'] 
            },
        ]

        this.msgKeyList.addItem('Source/Items/Set_Key_Arr.lay', msgArr);

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


	onKeyDown(comp, info, e)
	{

		comp.removeClass('shortcutKey');
		comp.addClass('shortcutKey_active');

	}

	onKeyUp(comp, info, e)
	{

		comp.removeClass('shortcutKey_active')
		comp.addClass('shortcutKey')

	}
}

