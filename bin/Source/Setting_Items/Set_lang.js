
Set_lang = class Set_lang extends AView
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
        this.languageArr = [
            {
                lang: 'Dansk',
                lang_ko: '덴마크어',
                flag: 'Assets/Imgs/flag/denmark.png',
                id: 'denmark'
            },
            {
                lang: 'Deutsch',
                lang_ko: '독일어',
                flag: 'Assets/Imgs/flag/germany.png',
                id: 'germany'
            },
            {
                lang: 'English, UK',
                lang_ko: '영어(영국)',
                flag: 'Assets/Imgs/flag/uk.png',
                id: 'uk'
            },
            {
                lang: 'English, US',
                lang_ko: '영어(미국)',
                flag: 'Assets/Imgs/flag/us.png',
                id: 'us'
            },
            {
                lang: 'Español',
                lang_ko: '스페인어',
                flag: 'Assets/Imgs/flag/spain.png',
                id: 'spain'
            },
            {
                lang: 'Español, LATAM',
                lang_ko: '스페인어(라틴아메리카)',
                flag: 'Assets/Imgs/flag/mexico.png',
                id: 'mexico'
            },
            {
                lang: 'Français',
                lang_ko: '프랑스어',
                flag: 'Assets/Imgs/flag/france.png',
                id: 'france'
            },
            {
                lang: 'Hrvatski',
                lang_ko: '크로아티아어',
                flag: 'Assets/Imgs/flag/croatia.png',
                id: 'croatia'
            },
            {
                lang: 'Italiano',
                lang_ko: '이탈리아어',
                flag: 'Assets/Imgs/flag/italia.png',
                id: 'italia'
            },
            {
                lang: 'Lietuviškai',
                lang_ko: '리투아니아어',
                flag: 'Assets/Imgs/flag/lithuania.png',
                id: 'lithuania'
            },
            {
                lang: 'Magyar',
                lang_ko: '헝가리어',
                flag: 'Assets/Imgs/flag/hungary.png',
                id: 'hungary'
            },
            {
                lang: 'Nederlands',
                lang_ko: '네덜란드어',
                flag: 'Assets/Imgs/flag/netherlands.png',
                id: 'netherlands'
            },
            {
                lang: 'Norsk',
                lang_ko: '노르웨이어',
                flag: 'Assets/Imgs/flag/norway.png',
                id: 'norway'
            },
            {
                lang: 'Polski',
                lang_ko: '폴란드어',
                flag: 'Assets/Imgs/flag/poland.png',
                id: 'poland'
            },
            {
                lang: 'Português do Brasil',
                lang_ko: '포르투갈어(브라질)',
                flag: 'Assets/Imgs/flag/brazil.png',
                id: 'brazil'
            },
            {
                lang: 'Română',
                lang_ko: '루마니아어(루마니아)',
                flag: 'Assets/Imgs/flag/romania.png',
                id: 'romania'
            },
            {
                lang: 'Suomi',
                lang_ko: '핀란드어',
                flag: 'Assets/Imgs/flag/finland.png',
                id: 'finland'
            },
            {
                lang: 'Svenska',
                lang_ko: '스웨덴어',
                flag: 'Assets/Imgs/flag/sweden.png',
                id: 'sweden'
            },
            {
                lang: 'Tiếng Việt',
                lang_ko: '베트남어',
                flag: 'Assets/Imgs/flag/vietnam.png',
                id: 'vietnam'
            },
            {
                lang: 'Türkçe',
                lang_ko: '터키어',
                flag: 'Assets/Imgs/flag/turkey.png',
                id: 'turkey'
            },
            {
                lang: 'Čeština',
                lang_ko: '체코어',
                flag: 'Assets/Imgs/flag/cheko.png',
                id: 'cheko'
            },
            {
                lang: 'Ελληνικά',
                lang_ko: '그리스어',
                flag: 'Assets/Imgs/flag/greece.png',
                id: 'greece'
            },
            {
                lang: 'български',
                lang_ko: '불가리아어',
                flag: 'Assets/Imgs/flag/bulgaria.png',
                id: 'bulgaria'
            },
            {
                lang: 'Русский',
                lang_ko: '러시아어',
                flag: 'Assets/Imgs/flag/russia.png',
                id: 'russia'
            },
            {
                lang: 'Українська',
                lang_ko: '우크라이나어',
                flag: 'Assets/Imgs/flag/ukraine.png',
                id: 'ukraine'
            },
            {
                lang: 'हिंदी',
                lang_ko: '힌디어',
                flag: 'Assets/Imgs/flag/india.png',
                id: 'india'
            },
            {
                lang: 'ไทย',
                lang_ko: '태국어',
                flag: 'Assets/Imgs/flag/thai.png',
                id: 'thai'
            },
            {
                lang: '中文',
                lang_ko: '중국어(중국)',
                flag: 'Assets/Imgs/flag/china.png',
                id: 'china'
            },
            {
                lang: '日本語',
                lang_ko: '일본어',
                flag: 'Assets/Imgs/flag/japan.png',
                id: 'japan'
            },
            {
                lang: '繁體中文',
                lang_ko: '중국어(대만)',
                flag: 'Assets/Imgs/flag/taiwan.png',
                id: 'taiwan'
            },
            {
                lang: '한국어',
                lang_ko: '한국어',
                flag: 'Assets/Imgs/flag/korea.png',
                id: 'korea'
            },
        ];
        

        this.listview.addItem('Source/Items/Set_lang_item.lay', this.languageArr);

	}

	onInitDone()
	{
		super.onInitDone()

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

