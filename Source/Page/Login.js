
Login = class Login extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)       

        theApp.LoginWindow = this.LoginWindow;
        theApp.RegisterWindow = this.RegisterWindow;
        

	}

	onInitDone()
	{
		super.onInitDone()
        this.LoginWindow.show(); 
        this.LoginId.setFocus();
        this.registerBtn.enable(false);

        for (let y = 1950; y <= 2024; y++) {
            this.selectYear.addItem(y.toString() + '년', y.toString());
        }
        for (let m = 1; m <= 12; m++) {
            this.selectMonth.addItem(m.toString() + '월', m.toString());
        }

        this.alertNickName.setStyle('height', '0px');
        this.alertName.setStyle('height', '0px');

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onCheckOptionalChange(comp, info, e)
	{
		info == true ? 
        comp.setBackgroundImage('Assets/Imgs/check_true.png') : 
        comp.setBackgroundImage('Assets/Imgs/check_false.png')

	}

	onGoToRegisterClick(comp, info, e)
	{

        this.LoginWindow.hide();
        this.LoginWindow.addClass('upFadeOut');
        this.LoginWindow.removeClass('downFadeIn');
        this.RegisterWindow.show();
        this.CreateId.setFocus();
        this.RegisterWindow.addClass('downFadeIn');
        this.RegisterWindow.removeClass('upFadeOut');

	}

	onGoToLoginClick(comp, info, e)
	{

		this.LoginWindow.show();
        this.LoginId.setFocus();
        this.LoginWindow.addClass('downFadeIn');
        this.LoginWindow.removeClass('upFadeOut');
        this.RegisterWindow.hide();
        this.RegisterWindow.addClass('upFadeOut');
        this.RegisterWindow.removeClass('downFadeIn');        

	}

    updateDays(month)
    {
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        var year = new Date().getFullYear();
        if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
            daysInMonth[1] = 29;
        }

        this.selectDay.removeAll();

        for (var day = 1; day <= daysInMonth[month - 1]; day++) {
            this.selectDay.addItem(day.toString() + '일', day.toString());
        }
    }

	onSelectMonthChange(comp, info, e)
	{

		this.updateDays(info)

	}

	onRegisterClick(comp, info, e)
	{

		const id = this.CreateId.getText();
		const username = this.CreateName.getText();
		const nickname = this.CreateNickName.getText() == '' ? null : this.CreateNickName.getText();
		const password = this.CreatePw.getText();
        const birthdate = this.selectYear.getSelectedItemValue() + '-' +
                          this.selectMonth.getSelectedItemValue() + '-' +
                          this.selectDay.getSelectedItemValue();

        const userData = { id, username, nickname, password, birthdate };

        console.log('userData: ', userData);

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                console.log(data.result)

                var wnd = new AWindow('Register_Loading')
                wnd.setWindowOption({
                    isModal : true,
                    isCenter: true,
                    isFocusLostClose : false,
                    modalBgOption : 'light',
                    isDraggable: false,
                    isResizable: false,
                })
                wnd.open('Source/Modal/Register_Loading.lay', null, 0, 0, 500, 340);

            } else {
                alert('회원가입 실패: ' + data.message);
                return;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
	}

	onLoginClick(comp, info, e)
	{
        const id = this.LoginId.getText();
        const password = this.LoginPw.getText();
        console.log(id, password)

        if (id !== '' && password !== '') {
            this.login.enable(true);
        } else {
            this.login.enable(false);
        }

        const loginData = { id, password };

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    var navi = ANavigator.find('frameNavi');
                    navi.goPage('Lobby');
                    theApp.UserInfo = data.user;
                } else {
                    this.label_id.setText(`이메일 또는 전화번호 - ${data.message}`)
                    this.label_pw.setText(`비밀번호 - ${data.message}`)
                    this.label_id.setStyle('color', '#f17478');
                    this.label_pw.setStyle('color', '#f17478');
                    this.label_id.removeClass('point_dot');
                    this.label_pw.removeClass('point_dot');
                    
                    this.label_pw.setFocus()
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

	onLoginPwKeydown(comp, info, e)
	{

		if (e.keyCode === 13) {
            this.onLoginClick()
        }

	}

    onCheckInputText() {
        let id = this.CreateId.getText();
        let name = this.CreateName.getText();
        let password = this.CreatePw.getText();
        let year = this.selectYear.getSelectedItemValue();
        let month = this.selectYear.getSelectedItemValue();

        if (id == '' || name == '' || password == '' || year == '' || month == '') {
            this.registerBtn.enable(false);
        } else {
            this.registerBtn.enable(true);
        }
    }

	onCreateIdChange(comp, info, e)
	{

		this.onCheckInputText();

	}

	onCreateNameChange(comp, info, e)
	{

		this.onCheckInputText();

	}

	onCreatePwChange(comp, info, e)
	{

		this.onCheckInputText();

	}

	onSelectYearChange(comp, info, e)
	{

		this.onCheckInputText();

	}

	onCreateNickNameFocus(comp, info, e)
	{

		this.alertNickName.setStyle('height', '16px');

	}

	onCreateNickNameBlur(comp, info, e)
	{

		this.alertNickName.setStyle('height', '0px');

	}

	onCreateNameFocus(comp, info, e)
	{

		this.alertName.setStyle('height', '16px');

	}

	onCreateNameBlur(comp, info, e)
	{

		this.alertName.setStyle('height', '0px');

	}

	onServiceTermClick(comp, info, e)
	{

		window.open('https://discord.com/terms', '_blank');

	}

	onPrivacyPolicyClick(comp, info, e)
	{

		window.open('https://discord.com/privacy', '_blank');

	}
}

