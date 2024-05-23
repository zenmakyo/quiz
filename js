const quiz = [
    {
        question: 'Q1. 漫画「ナルト」に登場した虫を使う戦闘スタイルの忍び一族は？',
        choices: [
            'うちは一族',
            '犬塚一族',
            '油女一族',
            '日向一族'
        ],
        correct: '油女一族'
    },
    {
        question: 'Q2. アニメ「ぼっち・ざ・ろっく」で主人公が最初に友達になった人物は誰？',
        choices: [
            '山田リョウ',
            '伊地知虹夏',
            '喜多郁代',
            '日向恵恋奈'
        ],
        correct: '伊地知虹夏'
    },
    {
        question: 'Q3. アニメ「ぼっち・ざ・ろっく」で主人公のバンドが活動していた下北沢のライブハウス名は？',
        choices: [
            'STARMY（スターミー）',
            'STARDY（スターディー）',
            'STARRY（スターリー）',
            'STARBY（スタービー）'
        ],
        correct: 'STARRY（スターリー）'
    },
    {
        question: 'Q4. 漫画「ナルト」でロックリーやマイトガイが使用する木の葉流体術の奥義は？',
        choices: [
            '八門遁甲',
            '木の葉回旋',
            '八卦六十四掌',
            '柔拳'
        ],
        correct: '八門遁甲'
    },
    {
        question: 'Q5. 漫画「僕のヒーローアカデミア」でオール・フォー・ワンが使う個性は？',
        choices: [
            '純粋な身体能力の強化',
            '黒い鞭状のエネルギーを放出する',
            '自身の危険を感知する',
            '個性の強奪・付与'
        ],
        correct: '個性の強奪・付与'
    },
    {
        question: 'Q6. 漫画「僕のヒーローアカデミア」でワン・フォー・オール5代目継承者の個性は？',
        choices: [
            '危機感知',
            '黒鞭',
            'ワープゲート',
            'ヘルフレイム'
        ],
        correct: '黒鞭'
    },
    {
        question: 'Q7. 漫画「ワンピース」で登場するキャラクター、バルトロメオは何の実の能力者？',
        choices: [
            'スベスベの実',
            'バクバクの実',
            'バリバリの実',
            'スパスパの実'
        ],
        correct: 'バリバリの実'
    },
    {
        question: 'Q8. 漫画「ワンピース」で登場するキャラクター、ニコ・ロビンがウォーターセブンで麦わらの一味を裏切った理由は？',
        choices: [
            '麦わらの一味を世界政府から守るため',
            '麦わらの一味に付き合いきれなくなったため',
            '世界政府に脅されたため',
            '世界政府から報酬を得るため'
        ],
        correct: '麦わらの一味を世界政府から守るため'
    },
    {
        question: 'Q9. 漫画「呪術廻戦」で登場するキャラクター、五条悟の術式「無下限呪術」の能力は？',
        choices: [
            '相手の五感全てを奪う',
            '無限を現実に持ってくる',
            '平衡感覚を逆にする',
            '純粋な身体能力の強化'
        ],
        correct: '無限を現実に持ってくる'
    },
    {
        question: 'Q10. 漫画「呪術廻戦」で登場するキャラクター、三輪霞の年齢は？',
        choices: [
            '16歳',
            '17歳',
            '18歳',
            '19歳'
        ],
        correct: '17歳'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
