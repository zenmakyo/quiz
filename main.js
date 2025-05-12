const quiz = [
    {
        question: 'Q1. チュートリアルでお狐様が倒してくれる幻獣は？',
        choices: [
            '名状しがたい者',
            '獄星の千年花',
            '闇に囁く者',
            '緑の深淵の女王'
        ],
        correct: '闇に囁く者'
    },
    {
        question: 'Q2. 自分のGradeを5へと昇級させる特殊アイテムとは？',
        choices: [
            '高級首輪',
            '純銀の首輪',
            '幻獣大辞典',
            '純金の首輪'
        ],
        correct: '純銀の首輪'
    },
    {
        question: 'Q3. 鋼鉄の塊はGradeいくつの装備アイテムを強化する素材？',
        choices: [
            'Grade3',
            'Grade4',
            'Grade5',
            'Grade6'
        ],
        correct: 'Grade4'
    },
    {
        question: 'Q4. トレードショップ「きのこなお店」でトレードできない装備は？',
        choices: [
            '木の棒',
            '鍋のふた',
            '作業用シューズ',
            'ロックボウ'
        ],
        correct: 'ロックボウ'
    },
    {
        question: 'Q5. 曲名♪世界の再生（創造神）からドロップしないのはどれ？',
        choices: [
            'エクスモンド',
            '魅惑の石',
            '終末コルネット',
            '煌涙石'
        ],
        correct: '終末コルネット'
    },
    {
        question: 'Q6. 幻獣「星の位・乙女」のS最大ポイントを取るルートで通らない幻獣は？',
        choices: [
            'コルニカ',
            'ジン',
            'シルフィード',
            '桜花の精霊'
        ],
        correct: 'コルニカ'
    },
    {
        question: 'Q7. 転生数が3であるとき背景色は何色？',
        choices: [
            '水色',
            '黄緑色',
            '黄色',
            '橙色'
        ],
        correct: '黄緑色'
    },
    {
        question: 'Q8. キグルミ【叩】はどの幻獣をモチーフとしている？',
        choices: [
            '獣王',
            '酒呑童子',
            'ガルヴェラシル',
            'ファラク'
        ],
        correct: 'ファラク'
    },
    {
        question: 'Q9. 変化名「風を切る翼」で変化できる幻獣は？',
        choices: [
            '蒼翼竜',
            '秋森の狗翼竜',
            'ワイバーン',
            'ガルーダ'
        ],
        correct: '秋森の狗翼竜'
    },
    {
        question: 'Q10. 装備「日輪光明」のデザインが変更されたのはいつ？',
        choices: [
            '2020年10月',
            '2020年11月',
            '2021年10月',
            '2021年11月'
        ],
        correct: '2021年11月'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    // 問題タイトルを設定
    document.getElementById('question').textContent = quiz[quizIndex].question;

    // 選択肢のボタンを設定
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    const selected = e.target.textContent;
    const correctAnswer = quiz[quizIndex].correct;

    if (selected === correctAnswer) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！\n正解は「" + correctAnswer + "」です。");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
    let comment = '';
    const rate = score / quizLength;

    if (rate === 1) {
        comment = '全問正解！幻獣マスターとは君のこと！';
    } else if (rate >= 0.8) {
        comment = '幻獣マスターまで後一歩！';
    } else if (rate >= 0.5) {
        comment = '基礎知識はある！日々鍛錬あるのみ！';
    } else if (rate >= 0.3) {
        comment = 'プレイ時間が足りない！';
    } else {
        comment = '.....やり直し';
    }

    window.alert('終了！あなたの正解数は ' + score + '/' + quizLength + ' です！\n' + comment);
        // 終了後に遷移
        location.href = 'https://zenmakyo.github.io/genmono2/'; // 指定URLに書き換えてください
    }
}

// ボタンにクリックイベントを追加
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
