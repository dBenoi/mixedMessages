const randomNumber = array => {
  return Math.floor(Math.random() * array.length)
}


const verbs = ['run', 'party', 'lie', 'fight', 'steal', 'grow', 'stay', 'smell', 'apologize', 'complain', 'compare', 'dance', 'destroy', 'disagree', 'enjoy', 'fail', 'grind', 'hit', 'imagine'];
const quotes = [
  'When you reach the end of your rope, tie a knot in it and',
  'Never be afraid to',
  'Sometimes to get where you want to be, you have to',
  'You can\'t always',
  'I know the clock says 12, but actually, it\'s time to',
  'I think, therefore I',
  'My mother likes to',
  'My father never wanted to',
];
const people = ["Marilyn Monroe", "Abraham Lincoln", 'Nelson Mandela', 'John F. Kennedy', 'Winston Churchill', 'Bill Gates', 'Elvis', 'Albert Einstein', 'Pope Francis', 'Leonardo da Vinci', 'Ghandi', 'Rosa Parks', 'Oprah Winfrey', 'Jesus'];

let getPerson = people[randomNumber(people)];
let getVerb = verbs[randomNumber(verbs)];
let getQuote = quotes[randomNumber(quotes)];

const randomMessage = () => {
  return `${getPerson} once said: ${getQuote} ${getVerb}`
};

console.log(randomMessage())
