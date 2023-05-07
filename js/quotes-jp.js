const QUOTES = [  // const를 사용해 상수로 선언된 배열
  {
    imagePath: "images/quotes-images/f_away.jpg",  // 입 다물고 멀리서 웃는, 평범한 이야기
    texts: [
      "会えて嬉しい。",
      "君を見るのに良い日だよ。 いつもいい日だよ。",
      "たまに君の心臓の鼓動を感じたい時がある。 私は君に聞かせることができるのに···",
      "本当に愛らしい日だよ、君が私と一緒だから。"
    ] // 객체 속성, 랜덤으로 출력될 텍스트 배열
  },
  {
    imagePath: "images/quotes-images/f_a_smile.jpg", // 좀 떨어져서 희미하게 웃는, 가벼운 감사인사.
    texts: [
      "私は君が好き、私を訪ねてきてくれるから。",
      "私はあなたが好き、私を見てくれるから。",
      "私はあなたが好き、私の声を聞いてくれるから。", 
      "あなたが辛い日を過ごしているなら、私の心臓を出してあげる。",
      "世の中は時々残酷だ。 しかし、私たちは一緒に乗り越えなければならないよね？", 
      "カチカチ…好き。", 
      "カチカチ··· あ、時間が流れる。 好きだよ。"

    ]
  },
  {
    imagePath: "images/quotes-images/f_close.jpg", // 먹을 거 얘기, 집착, 가까움.
    texts: [
      "君と永遠に一緒にいたい。 しかも夢でもね。",
      "君を夢の中に縛ってどこにも行かせないようにしたい··· あっ、冗談だよ。 へへ..",
      "実は、私が言ったことの中に冗談じゃないものもある。 ",
      "食べ物より真実の愛はないという言葉がある！ でも私は君を食べるよりもっと好きだよ。", 
      "健康は大事だよ、だからちゃんと食べてね。", 

    ]
  },
  { 
    imagePath: "images/quotes-images/f_c_smile.jpg", //가까이서 웃는 것. 위로. 응원.
    texts: [
      "私たちはできる。",
      "あまりひるむな。",
      "元気にしてる？",
      "誰かが言った、笑いは福をもたらすと。 ハハ..", 
      "笑いは最高！ はは。私は君の笑う姿が好き。 君もそうなの？", 
      "あなたは本当に愛らしい子だよ。",
       
    ]
  },
  {
    imagePath: "images/quotes-images/f_c_smile2.jpg", //오른쪽을 보며 웃는 가까운 웃음, 가벼운 농담
    texts: [
      "ねえ、私だけ大目に見てくれてるよね？ だよね？",
      "私しかいないよね？そうでしょ？",
      "いつも来てくれてありがとう",
      "へへ···", 
      "死が来るまで楽しもう..", 
      "あなたがいて、私は幸せです。", 
      "いつでも、あなたのそばにいたい"
    ]
  },
  {
    imagePath: "images/quotes-images/f_failure.jpg", //실패와 도전에 대한 명언 날리기
    texts: [
      "石の上にも三年!",
      "継続は力なり。諦めなんてない。ファイト！",
      "人生に意味を与えるのは、人生に意味を与えることだ",
      "七転び八起き", 
      "風前の灯火", 
      "塵も積もれば山となる", 
      "猿も木から落ちる, だから、くじけないで。", 
      "一期一会, あなたは私にとって大切だよ。", 
      "君といると時間がたつのがあっという間だよ。"
    ]
  },
  {
    imagePath: "images/quotes-images/f_surprise.jpg", //놀라움, 낙담에 대한 명언 혹은 감탄사
    texts: [
      "誰かにポケモンが存在しないと聞いた.. これは本当なの？!",
      "誰かが言うと、レモンにはレモン一つ分のビタミンCが入っているそうだけど、本当？",
      "キャー！",
      "わあ！",
      "あなたにまた会えて私の光栄です！ あ、時代劇のドラマを練習してる.."
    ]
  }
];

function changeImage() { // 이미지와 텍스트를 랜덤으로 변경하는 함수
  const randomNumber = Math.floor(Math.random() * QUOTES.length); // 랜덤 인덱스 생성 - 이미지를 랜덤으로 바꾸기 위함
  const randomTextNumber = Math.floor(Math.random() * QUOTES[randomNumber].texts.length);  // 랜덤 인덱스 생성 - 한 이미지 안에 있는 텍스트를 랜덤으로 뽑기 위함
  document.getElementById("image").src = QUOTES[randomNumber].imagePath; //이미지를 랜덤으로 변경한 걸 갖고온다.
  document.getElementById("text").innerHTML = QUOTES[randomNumber].texts[randomTextNumber]; //텍스트를 랜덤으로 변경한 걸 갖고온다.
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 65) { // 65 is the key code for the 'a' key
    changeImage();
  }
});

