
const QUOTES = [  // const를 사용해 상수로 선언된 배열
  {
    imagePath: "images/quotes-images/f_away.jpg",  // 입 다물고 멀리서 웃는, 평범한 이야기
    texts: [
      "Nice to see you.",
      "It's a good day to see you. Everyday is a good day.",
      "Sometimes I feel like I want to hear your heart. I can let you hear mine..",
      "It's a lovely day. Because you are with me."
    ] // 객체 속성, 랜덤으로 출력될 텍스트 배열
  },
  {
    imagePath: "images/quotes-images/f_a_smile.jpg", // 좀 떨어져서 희미하게 웃는, 가벼운 감사인사.
    texts: [
      "I like you, because you visit me.",
      "I like you, because you watch me.",
      "I like you, becasue you listen to me", 
      "If you had a hard day, I'll give you my heart.",
      "The world is sometimes too cruel. But don't you think we should get over it?", 
      "Time is ticking..I like you.", 


    ]
  },
  {
    imagePath: "images/quotes-images/f_close.jpg", // 먹을 거 얘기, 집착, 가까움.
    texts: [
      "I want to be with you forever. Even in a dream.",
      "I want to tie you in my dream so that you can't go anywhere... I'm just kidding. Hehe..",
      "There was often something I said that wasn't a joke.",
      "There is no love sincerer than the love of food! but I love you more than foods.", 
      "Health is important, so you have to eat well.", 

    ]
  },
  { 
    imagePath: "images/quotes-images/f_c_smile.jpg", //가까이서 웃는 것. 위로. 응원.
    texts: [
      "We can do it.",
      "Don't be discouraged.",
      "Are you doing okay?",
      "Who said, laughing brings good luck. Haha..", 
      "Smile is good! haha. I like your smile face. You too?", 
       
    ]
  },
  {
    imagePath: "images/quotes-images/f_c_smile2.jpg", //오른쪽을 보며 웃는 가까운 웃음, 가벼운 농담
    texts: [
      "You didn't see anyone else besides me, did you?",
      "It's only me, right?",
      "Thank you for always coming",
      "hehe...", 
      "Let's enjoy it until death comes..", 

    ]
  },
  {
    imagePath: "images/quotes-images/f_failure.jpg", //실패와 도전에 대한 명언 날리기
    texts: [
      "Strive not to be a success, but rather to be of value.",
      "The best way to predict the future is to create it.",
      "The only way to do great work is to love what you do.",
      "Strive for progress, not perfection.", 
      "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
      "Act as if what you do makes a difference. It does.", 
      "You are my best friend, my human diary and my other half. You mean the world to me and I love you.", 
      "You are my today and all of my tomorrows.", 
      "Believe that life is worth living and your belief will help create the fact."
    ]
  },
  {
    imagePath: "images/quotes-images/f_surprise.jpg", //놀라움, 낙담에 대한 명언 혹은 감탄사
    texts: [
      "Someone said Pokemon doesn't exist.. Is this really right?",
      "Someone said Lemon has as much vitamin C as a lemon. Is that true?",
      "Kwakwang!",
      "It's an honor to meet you again! I'm practicing historical drama.."
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

function preloadImages() {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    const src = img.getAttribute('src');
    const imgObj = new Image();
    imgObj.src = src;
  });
}

// Call the function when the page loads
window.addEventListener('load', preloadImages);
