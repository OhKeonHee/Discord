MainView = class MainView extends AView
{
    constructor()
    {
        super();
    }

    init(context, evtListener)
    {
        super.init(context, evtListener);

        // window.electronAPI.onDarkModeChanged((event, isDarkMode) => {
        //     this.updateTheme(isDarkMode);
        // });

        // $(document.body).addClass('darkMode');
    }

    onInitDone()
    {
        super.onInitDone();

        this.frame.loadContainer( null, 'page').then(p=>
        {
            var navi = new ANavigator('frameNavi', p);

            navi.registerPage('Source/Page/Login.lay', 'Login');
            navi.registerPage('Source/Page/Lobby.lay', 'Lobby');

            navi.goPage('Login');

        });
    }

    onActiveDone(isFirst)
    {
        super.onActiveDone(isFirst);
    }

    onToggleDarkMode(comp, info, e)
    {
        if (window.electronAPI) {
            window.electronAPI.toggleDarkMode();
        } else {
            console.error("electronAPI is undefined");
        }
    } 

     updateTheme(isDarkMode) {
        if (isDarkMode) {
            $(document.body).addClass('darkMode');
            $(document.body).removeClass('lightMode');
            console.log('다크모드 실행 중');
        } else {
            $(document.body).addClass('lightMode');
            $(document.body).removeClass('darkMode');
            console.log('라이트모드 실행 중');
        }
    }
}