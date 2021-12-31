const rs = require('readline-sync');
// const chalk1 = require('chalk');

let TOKEN = "ABCD1234efgh1234IJKL1234";

// For colored console
Black = "\x1b[30m"
Red = "\x1b[31m"
Green = "\x1b[32m"
Yellow = "\x1b[33m"
Blue = "\x1b[34m"
Magenta = "\x1b[35m"
Cyan = "\x1b[36m"
White = "\x1b[37m"

const questions = [
    "Who are the Salvatore brothers?",
    "What is Elena-s last name?",
    "What are the names of Stefan-s doppelgangers?",
    "What college do Elena, Bonnie, and Caroline attend?",
    "Whose blood can help Klaus create vampire/werewolf hybrids?",
    "In what state is Mystic Falls located?",
    "Jeremy Gilbert is what type of supernatural being?",
    "Who is the father of Jo-s twins that Caroline births?",
    "Whose blood is in Caroline when she turns into a vampire?",
    "Who is the first immortal being in the world?",
]

const options = [
    ["Stephen & Damon", "Matt & Tyler", "Damon and Alaric", "Klaus and Enzo"],
    ["Gilford", "Forbes", "Gilbert", "Benett"],
    ["Tom and Shamus", "Silas and Tom", "Silas and Klaus", "Matt and Tyler"],
    ["Western College", "Western College", "Western College", "Whitmore College"],
    ["Caroline", "Elena", "Bonnie", "Jenna"],
    ['Georgia', "Maryland", "Virginia", "Pennsylvania"],
    ['Werewolf', "Witch", "Vampire Hunter", "Vampire"],
    ['Alaric Saltzman', "Stefan Salvatore", "Matt Donovan", "Tyler Lockwood"],
    ['Stefan', "Kai", "Elena", "Damon"],
    ['Enzo', "Silas", "Katherine", "Giuseppe"],
]

const answers = [
    "Stephen & Damon",
    "Gilbert",
    "Silas and Tom",
    "Whitmore College",
    "Elena",
    "Virginia",
    "Vampire Hunter",
    'Alaric Saltzman',
    "Damon",
    "Silas",
]

var player = '';
var score = 0;
var selectAns = '';
var answer = "";

const askToStart = () => {
    console.log(Blue, "\nReady to start the Quiz? \nPress", Green, "y", Blue, "for yes or", Red, "n", Blue, "for no.");
    selectAns = rs.question("\n---> ");
    if (selectAns === 'y') {
        startGame();
    } else if (selectAns === 'n' || 'N') {
        console.log(Yellow, "\nWill See you back soon!");
    }
}

const startGame = () => {
    let count = 1;

    questions.map((que, ind) => {
        console.log(Magenta, `\n${count}) ${que}`);
        let c = 1;
        options[ind].map((option) => {
            console.log(Cyan, `\t${c}. ${option}`);
            c++;
        })
        answer = rs.question("\nEnter Answer: ");
        let ans = options[ind][answer - 1];
        if(answers[ind] === ans){
            score = score +5;
            console.log(Green,`\n✔ Correct Option. Score is ${score}`);
        }else{
            score = score - 2;
            console.log(Green,`Correct answer is ${answers[ind]}`);
            console.log(Red,`\n❌ Incorrect Option. Score is ${score}`);
        }
        count++;
    })
    console.log(Yellow,`\nYour Total Score is ${score}`);
    console.log(Yellow,`\nThank you for Playing! See you Soon ❤❤`);
}

const start = () => {
    console.log(Magenta, "-------------------------Welcome to the game of THE VAMPIRE DAIRIES-------------------------");
    player = rs.question("\nEnter your name : ");
    console.log(Yellow, `\nWelcome ${player}!`);
    console.log(Blue, "\nEach Question carries 5 marks. There will be 10 Questions which means the Quiz is of 50 marks.");
    console.log(Green, "\nOn Selecting correct option your score will increase by 5 points.");
    console.log(Red, "\nOn Selecting wrong option your score will be reduced by 2 points.");
    console.log(Blue,"\nSelect the correct option accordingly.");
    askToStart();
};

start();