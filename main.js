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
        question: [
            {
                text:'Q6. この幻獣は？',
                imagePath: 'https://github.com/zenmakyo/quiz/blob/main/げんもの410.PNG',
            }
            ]
        choices: [
            '戊戌',
            'シャノワール',
            '奉納箱の主',
            '天寿獅庵'
        ],
        correct: '戊戌'
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
