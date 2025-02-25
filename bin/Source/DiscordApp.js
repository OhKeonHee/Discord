
DiscordApp = class DiscordApp extends AApplication
{
	constructor()
	{
		super()

		this.wio = null;

	}

	onReady()
	{
		super.onReady();

        this.connectChatServer();

		this.setMainContainer(new APage('main'))
		this.mainContainer.open('Source/MainView.lay')

	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady()

		super.unitTest(unitUrl)
	}

    connectChatServer()
    {
        this.wio = new WebsocketIO(this, false);
        this.wio.startIO('127.0.0.1', 3000)
    }

    //데이터 수신 시 호출
    onReceived(data, size)
    {

        var mainView = this.mainContainer.getView();
        var frame = mainView.frame;
        var idCntr = frame.ldCntr;
        var childNavigator = idCntr.childNavigator;
        var pageHistory = childNavigator.pageHistory;
        var lobbyView = pageHistory[1];
        var tabView = lobbyView.tabKey.componentMap[0].childArr[13].comp
        var chattingRoomView = tabView.selectedTab.content.view;

        // chattingRoomView.setMessage(data);
         if (chattingRoomView instanceof ChattingRoom) {
            console.log('데이터 수신했음 이제 뿌려줄게')
            chattingRoomView.setMessage(data);
        } else {
            console.error("채팅룸 못찾음");
        }
   
    }

    //서버와 연결이 성공된 이후 ... 종료 시 호출
    onClosed()
    {
        console.log('onClosed');
        
    }

    //서버와 연결 성공/실패 시 호출
    onConnected(success)
    {
        console.log('onConnected : ' + success);
        

        // if(success)
        // {
        //     this.setMainContainer(new APage('main'))
        //     this.mainContainer.open('Source/MainView.lay')
        // }
        
    }

}

