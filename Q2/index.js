// 要素の取得
    // クイズ画面に関する
    const display = document.getElementById('display');
    const text = document.getElementById('text');
    const button = document.getElementsByTagName('button');
    // 正解画面
    const correct = document.getElementById('correct');
    const next01 = document.getElementById('next01');
    // 不正解画面
    const No_correct = document.getElementById('No_correct');
    const next02 = document.getElementById('next02');
    // 結果画面
    const result_display = document.getElementById('result_display');
    const result = document.getElementById('result');
    const reset = document.getElementById('reset');
// クイズの中身
const Quiz = [
    {
        question: '私が最も好きな食べ物は何？',
        answers: [
            '寿司',
            'ラーメン',
            'パスタ',
            'ステーキ'
        ],
        increment: 'パスタ',
    },
    {
        question: '私が最も嫌いな食べ物は何？',
        answers: [
            '納豆',
            'とうもろこし',
            'ピーマン',
            'しいたけ'
        ],
        increment: 'とうもろこし',
    },
    {
        question: '私が最も得意なゲームは何？',
        answers: [
            'スプラトゥーン3',
            '太鼓の達人',
            '大乱闘スマッシュブラザーズ',
            'マリオカート8DX'
        ],
        increment: '大乱闘スマッシュブラザーズ',
    },
    {
        question: '私が最も好きなアニメは何？',
        answers: [
            'おそ松さん',
            '斉木楠雄の災難',
            '銀魂',
            'ポケットモンスター'
        ],
        increment: '銀魂',
    },
    {
        question: '私が最も好きなお菓子は何？',
        answers: [
            'ポテトチップ',
            '柿の種',
            'グミ',
            'チョコレート'
        ],
        increment: 'チョコレート',
    },
    {
        question: 'この中で私が行ったことないところはどこ？',
        answers: [
            '東武動物公園',
            '幕張メッセ',
            '横浜中華街',
            '東京ディズニーランド'
        ],
        increment: '幕張メッセ',
    },
    {
        question: '私が最も得意な教科は何？',
        answers: [
            '国語',
            '数学',
            '理科',
            '社会'
        ],
        increment: '社会',
    },
    {
        question: '私が最も苦手な教科は何？',
        answers: [
            '国語',
            '数学',
            '理科',
            '社会'
        ],
        increment: '数学',
    },
    {
        question: '私はどこ出身？',
        answers: [
            '栃木県',
            '茨城県',
            '東京都',
            '神奈川県'
        ],
        increment: '栃木県',
    },
    {
        question: '私が最も好きな飲み物は何？',
        answers: [
            'アクエリアス',
            'カルピス',
            '水',
            'メロンソーダ'
        ],
        increment: 'メロンソーダ',
    },
    {
        question: '私は今後買いたいと思っているのは何？',
        answers: [
            'iPad',
            'iPhone',
            '時計',
            '椅子'
        ],
        increment: 'iPhone',
    },
    {
        question: '私の誕生日はいつ？',
        answers: [
            '12月2日',
            '6月21日',
            '7月13日',
            '5月11日'
        ],
        increment: '5月11日',
    },
    {
        question: '私は何年生まれ？',
        answers: [
            '2001年',
            '2004年',
            '2006年',
            '2008年'
        ],
        increment: '2004年',
    },
    {
        question: '私が最も好きなスポーツは何？',
        answers: [
            'バスケットボール',
            'ラグビー',
            '野球',
            'サッカー'
        ],
        increment: '野球',
    },
    {
        question: '私は最も得意なスポーツは何？',
        answers: [
            'バスケットボール',
            '野球',
            '卓球',
            'サッカー'
        ],
        increment: '卓球',
    },
    {
        question: '私が今後したいことはなに？',
        answers: [
            '海外旅行',
            '野球観戦',
            '動画制作',
            '彼女を作る'
        ],
        increment: '野球観戦',
    },
    {
        question: '私が好きだったテレビ番組は何？',
        answers: [
            '水曜日のダウンタウン',
            'アメトーク',
            'ロンドンハーツ',
            'さんま御殿'
        ],
        increment: '水曜日のダウンタウン',
    },
    {
        question: '私が寿司屋でよくたのむネタは何？',
        answers: [
            'サーモン',
            'あじ',
            'つぶ貝',
            'マグロ'
        ],
        increment: 'マグロ',
    },
    {
        question: '私が今よく使うアプリは何？',
        answers: [
            'Google Chrome',
            'Twitter',
            'youtube',
            'LINE'
        ],
        increment: 'youtube',
    },
    {
        question: '私の今後の目標は何？',
        answers: [
            '有名になる',
            '楽しい生活を送る',
            '海外移住',
            'お金持ちになる'
        ],
        increment: '楽しい生活を送る',
    },
];
// 定義
    //クイズの中身の数 
    const allQuizData = Quiz.length;
    let QuizCount = 0;
    const QuizData = Quiz[QuizCount];
    // ボタン
    let ButtonLength = button.length;
    let buttonIndex = 0;
    // 数字
    let score = 0;
// 表示させる処理
function QuizDisplay(){
    const QuizData = Quiz[QuizCount];
    // 表示させる内容
    text.innerText = QuizData.question
    button[0].innerText = QuizData.answers[0]
    button[1].innerText = QuizData.answers[1]
    button[2].innerText = QuizData.answers[2]
    button[3].innerText = QuizData.answers[3]
};
QuizDisplay();
// 選択肢
function answering(){
    button[0].innerText = QuizData.answers[0]
    button[1].innerText = QuizData.answers[1]
    button[2].innerText = QuizData.answers[2]
    button[3].innerText = QuizData.answers[3]
    // ボタンに関する処理
    while (buttonIndex < ButtonLength) {
        button[buttonIndex].innerText = QuizData.answers[buttonIndex]
        buttonIndex++;
    };
};
answering();
// 正誤判定
const clicked = (e) => {
    if (Quiz[QuizCount].increment === e.target.innerText) {
        yes();
        audio01();
        score++;
    } else {
        no();
        audio02();
    }
    
};
// 音の設定
function audio01(){
    document.getElementById('audio1').currentTime = 0;
    document.getElementById('audio1').play();
};
function audio02(){
    document.getElementById('audio2').currentTime = 0;
    document.getElementById('audio2').play();
};
function audio03(){
    document.getElementById('audio3').currentTime = 0;
    document.getElementById('audio3').play();
};
// 結果発表
function close(){
    result_display.classList.add('end');
    if(score >= 20){
        alert('私のことをよく知ってくれてありがとう！')
    } else if (score >= 10){
        alert('結構私のこと知っているね！');
    } else if (score >= 1) {
        alert('初めましてよろしくお願いします');
    } else {
        alert('人に興味ないでしょ');
    }
    audio03();
    result.innerText = 'あなたの点数は' + score + '点です！';
    reset.textContent = 'Reload';
};
// 正解・不正解画面
function yes(){
    correct.classList.add('input');
    display.classList.add('input');
    next01.innerText = '次の問題';
};
function no(){
    No_correct.classList.add('input')
    display.classList.add('input')
    next02.innerText = '次の問題';
};
function remove(){
    QuizCount++;
    // 次の問題に行く処理
    if (QuizCount < allQuizData) {
        QuizDisplay();
    } else {
        close();
    }
    correct.classList.remove('input');
    No_correct.classList.remove('input');
    display.classList.remove('input');
};
// クリックイベント
button[0].addEventListener('click', function (e) {
    clicked(e);
});
button[1].addEventListener('click', function (e) {
    clicked(e);
});
button[2].addEventListener('click', function (e) {
    clicked(e);
});
button[3].addEventListener('click', function (e) {
    clicked(e);
});
// このボタンは別物
next01.addEventListener('click', function(){
    remove()
});
next02.addEventListener('click', function(){
    remove()
});
