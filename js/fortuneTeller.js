// loads function so that button works on first click
window.onload = getFortune;
function getFortune() {
// ARRAYS
const animals = ["cat", "dog", "bird", "rabbit", "mouse", "spider", "frog", "squirrel", "possum", "bat", "snake", "fish", "lizard", "pig", "horse", "bear", "hedgehog", "cow", "tiger", "turtle", "chicken", "crow", "fox", "wolf", "monkey", "beaver", "raccoon", "deer", "llama", "rat", "badger", "capybara", "otter", "shark"];
const randomAnimal = animals[Math.floor(Math.random()*animals.length)];

const adjectivesWeather = ["nice", "pleasant", "stormy", "balmy", "foggy", "rainy", "cloudy", "snowy", "sunny", "humid", "windy", "breezy", "hazy", "gloomy", "showery", "changeable", "damp", "rough", "sultry", "splendid", "misty", "frosty", "bright", "lovely", "mild", "overcast", "hot", "chilly", "warm", "fine"];
const randomWeather = adjectivesWeather[Math.floor(Math.random()*adjectivesWeather.length)];

const emotionsAbout = ["wary of", "mindful of", "patient with", "kind to", "enthusiastic about", "cautious of", "alert to", "ready for", "open to", "honest with", "silly with"];
const randomEmotionsAbout = emotionsAbout[Math.floor(Math.random()*emotionsAbout.length)];

const people = ["neighbour", "colleague", "client", "acquaintance", "mutual", "club member", "friend", "chum", "companion", "ally", "comrade", "person"];
const randomPerson = people[Math.floor(Math.random()*people.length)];

const colors = ["red", "blue", "green", "orange", "turquoise", "violet", "pink", "apricot", "teal", "magenta", "sienna", "gold", "chartreuse", "crimson", "indigo", "lavender", "beige", "silver", "olive"];
const randomColor = colors[Math.floor(Math.random()*colors.length)];

const interests = ["music", "drawing", "writing", "darts", "painting", "sports", "photography", "woodworking", "blacksmithing", "gardening", "archery", "cooking", "baking", "knitting", "crocheting", "theatre", "dance", "singing", "gaming", "skating", "travel", "reading", "geocaching", "birdwatching", "computer programming", "fencing", "jigsaw puzzles", "fossil hunting", "parkour", "stamp collecting", "rock climbing", "cinema", "scrapbooking", "sailing", "languages"];
const randomInterest = interests[Math.floor(Math.random()*interests.length)];

const nounsNewYear = ["perspective", "opportunity", "friendship", "adventure", "journey", "road", "story", "insight", "hope", "beverage", "horror", "mystery", "visitor", "neighbor", "client", "challenge", "colleague", "start", "idea", "ambition", "project", "interest", "dream"];
const randomNounNewYear = nounsNewYear[Math.floor(Math.random()*nounsNewYear.length)];

const nounFocus = ["wellbeing", "health", "dinner", "hobbies", "creative pursuits", "relationships", "self-care", "confidence", "laundry pile", "finances", "refreshing beverage", "social life", "self-improvement", "learning", "work", "dreams", "skill-building", "fitness", "feelings", "hydration", "meetings", "wish list"];
const randomFocus = nounFocus[Math.floor(Math.random()*nounFocus.length)];


// FORTUNES
const fortune1 = `If you see a ${randomAnimal} today, it will bring you luck. As for the type of luck, well...`;
const fortune2 = `Heed my words, the weather is bound to be ${randomWeather} tomorrow.`;
const fortune3 = `Try to be ${randomEmotionsAbout} a new ${randomPerson}. Or else!`;
const fortune4 = `You will become enchanted with a new hobby soon. Perhaps ${randomInterest} might take your fancy?`;
const fortune5 = `You might do well to avoid the color ${randomColor} today. Just saying.`;
const fortune6 = `You will soon meet someone with a great passion for ${randomInterest}. How curious.`;
const fortune7 = `Patience! A new ${randomNounNewYear} will come with the new year. Won't that be fun?`;
const fortune8 = `Now is a good time to focus on your ${randomFocus}.`;

// FORTUNE TELLER
const min = 1;
const max = 8;

let randomNumber = Math.floor((Math.random() * max) + min);
let selectedFortune;
if (randomNumber == 1) {
  selectedFortune = fortune1;
} else if (randomNumber == 2) {
  selectedFortune = fortune2;
} else if (randomNumber == 3) {
  selectedFortune = fortune3;
} else if (randomNumber == 4) {
  selectedFortune = fortune4;
} else if (randomNumber == 5) {
  selectedFortune = fortune5;
} else if (randomNumber == 6) {
  selectedFortune = fortune6;
} else if (randomNumber == 7) {
  selectedFortune = fortune7;
} else {
  selectedFortune = fortune8;
}

console.log(selectedFortune);

const button = document.getElementById('fortuneButton');
const div = document.getElementById('fortuneTellerBox');

function changeContent() {
  div.innerHTML = "<p>" + selectedFortune + "</p>";
};

button.addEventListener('click', changeContent);
}

