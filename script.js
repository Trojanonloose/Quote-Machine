var listOfQuotes = [
    `The journey of a thousand miles begins with a single step. – Lao Tzu`,
    `The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart`,
    `Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi`,
    `You can never cross the ocean until you have the courage to lose sight of the shore. – Christopher Columbus`,
    `The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails. – John Maxwell`,
    `Try not to become a man of success but rather to become a man of value. – Albert Einstein`,
    `Everything has beaut, but not everyone sees it. – Confucius`,
    ` Everything negative, pressure, challenges – is all an opportunity for me to rise. – Kobe Bryant`,
    `You are never too young to lead, nor too old to act. And you should never doubt your capacity to triumph where others have not. – Kofi Annan`,
    `If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted or Beethoven composed music or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause and say, Here lived a great street sweeper who did his job well. – Martin Luther King`,
    `I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela`,
    `The courageous do not lie down and accept defeat. Instead, they are all the more determined to struggle for a better future. – Queen Elizabeth II`,
    `Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. – Arnold Schwarzenegger`,
    `Your past does not equal your future. – Tony Robbins`,
    `Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein`,
    `Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. – Steve Jobs`,
    `The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela`,
    `Every child is an artist. The problem is how to remain an artist once he grows up.  – Picasso`,
    `I hated every minute of training. But I said, “Don’t quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali`,
];

function newQuote() {
    var rnum = Math.floor(Math.random() * (listOfQuotes.length));
    document.getElementById("content").innerHTML = listOfQuotes[rnum];
    document.getElementById("content").style.color = "White";
    document.getElementById("content").style.fontSize = "25px";
    document.getElementById("content").style.padding = "5px";
}