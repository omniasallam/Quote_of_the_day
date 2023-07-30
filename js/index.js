var quotes=[
   "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
   "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "A friend is someone who knows all about you and still loves you.",
    "Always forgive your enemies; nothing annoys them so much.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"It is better to be hated for what you are than to be loved for what you are not.",
"Be the change that you wish to see in the world."
 ]
 
 var author=['― Mae West','― Frank Zappa','― Robert Frost','― J.K. Rowling, Harry Potter and the Goblet of Fire',
'― Mark Twain','― Maya Angelou','― Elbert Hubbard','― Oscar Wilde',
'― Ralph Waldo Emerson','― Andre Gide, Autumn Leaves'
]

function quoteGenerate(){
for(var i=0; i<quotes.length; i++){
    var randomNumber= Math.floor(Math.random() *author.length);
    
}     
    
    document.getElementById("quoteOutput").innerHTML= quotes[randomNumber];
    document.getElementById("authorOutput").innerHTML= author[randomNumber];

}

