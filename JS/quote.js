const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다",
    author: "L론허바드",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다",
    author: "터키속담",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
    author: "헬렌 켈러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;