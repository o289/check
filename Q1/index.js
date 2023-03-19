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
        question: '五千円札に描かれている人物は誰？（令和2年時点）',
        answers: [
            '野口英世',
            '福沢諭吉',
            '樋口一葉',
            '渋沢栄一'
        ],
        increment: '樋口一葉',
    },
    {
        question: 'この中で３大栄養素ではないのは？',
        answers: [
            '炭水化物',
            'ミネラル',
            '脂質',
            'タンパク質'
        ],
        increment: 'ミネラル',
    },
    {
        question: '「かんぴょう」は何からできている？',
        answers: [
            '夕顔',
            '銀杏',
            '椎茸',
            '栗'
        ],
        increment: '夕顔'
    },
    {
        question: '面積がいちばん小さい都道府県は？',
        answers: [
            '石川県',
            '香川県',
            '山梨県',
            '三重県'
        ],
        increment: '香川県'
    },
    {
        question: '甲子園球場がある都道府県は？',
        answers: [
            '京都府',
            '大阪府',
            '広島県',
            '兵庫県'
        ],
        increment: '兵庫県'
    },
    {
        question: 'ドライアイスは何が固まったもの？',
        answers: [
            '塩素',
            '二酸化炭素',
            '酸素',
            '窒素'
        ],
        increment: '二酸化炭素'
    },
    {
        question: '1997年､香港はどこからどこへ返還された？',
        answers: [
            'フランスから中国',
            'イギリスから台湾',
            'イギリスから中国',
            '中国から台湾'
        ],
        increment: 'イギリスから中国'
    },
    {
        question: '日本の国鳥は？',
        answers: [
            'キジ',
            'ニワトリ',
            'カラス',
            'コンドル'
        ],
        increment: 'キジ'
    },
    {
        question: '大気中でもっとも軽い気体は？',
        answers: [
            '二酸化炭素',
            '窒素',
            '酸素',
            '水素'
        ],
        increment: '水素'
    },
    {
        question: '天の川」を英語で言うと？',
        answers: [
            'Milky Street',
            'Milky Way',
            'Milky river',
            'Milky load'
        ],
        increment: 'Milky Way'
    },
    {
        question: '３大生活習慣病（成人病）ではないのは？',
        answers: [
            'がん',
            '糖尿病',
            '脳卒中',
            '心臓病'
        ],
        increment: '糖尿病'
    },
    {
        question: '相撲の三役に含まれないのは？',
        answers: [
            '小結',
            '関脇',
            '大関',
            '横綱'
        ],
        increment: '横綱'
    },
    {
        question: 'ロシアの通貨単位は？',
        answers: [
            'ユーロ',
            'ポンド',
            'ルーブル',
            'ドル'
        ],
        increment: 'ルーブル'
    },
    {
        question: 'ヨーグルトの上にたまる液体の名前は？',
        answers: [
            '成糖',
            '乳液',
            'りっちゃん',
            '乳清'
        ],
        increment: '乳清'
    },
    {
        question: 'ナポレオンのフルネームは？',
        answers: [
            'ナポレオン・ボナパルト',
            'ナポレオン・ジョナサン',
            'ナポレオン・ジョンソン',
            'ナポレオン・クレイ'
        ],
        increment: 'ナポレオン・ボナパルト'
    },
    {
        question: '要人警護の「ＳＰ」って、何の略？',
        answers: [
            'セキュリティーポリス',
            'スーパーポリス',
            'スペシャルポリス',
            'スレインジポリス'
        ],
        increment: 'セキュリティーポリス'
    },
    {
        question: '「ガッツ」って元々何のこと？',
        answers: [
            '汗',
            '皮脂汚れ',
            '内蔵',
            '小腸'
        ],
        increment: '内蔵'
    },
    {
        question: 'Ｘ線を発見した人物は誰？',
        answers: [
            'アインシュタイン',
            'キュリー',
            'レントゲン',
            'ノーベル'
        ],
        increment: 'レントゲン'
    },
    {
        question: '日本最古の元号は？',
        answers: [
            '寛永',
            '大化',
            '明治',
            '文永'
        ],
        increment: '大化'
    },
    {
        question: '第44代アメリカの大統領は誰？',
        answers: [
            'ジョージ・ブッシュ',
            'ジョー・バイデン',
            'ドナルド・トランプ',
            'バラク・オバマ'
        ],
        increment: 'バラク・オバマ'
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
        alert('完璧さすが！')
    } else if (score >= 10){
        alert('半分はできているぜ！');
    } else {
        alert('勉強しようね')
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
