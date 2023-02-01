const userName = "Jane";

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = "Will the Philadelphia Eagles win Super Bowl LVII on Sunday, February 12, 2023 in Arizona?";

console.log(`${userName} asked... ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 20);

// randomNumber = 19;

console.log(randomNumber);

switch (randomNumber) {
  case 0:
    console.log("It is certain.");
    break;
  case 1:
    console.log("It is decidedly so.");
    break;
  case 2:
    console.log("Reply hazy, try again.");
    break;
  case 3:
    console.log("Cannot predict now.");
    break;
  case 4:
    console.log("Do not count on it.");
    break;
  case 5:
    console.log("My sources say no.");
    break;
  case 6:
    console.log("Outlook not so good.");
    break;
  case 7:
    console.log("Signs point to yes.");
    break;
  case 8:
    console.log("Without a doubt.");
    break;
  case 9:
    console.log("Yes, definitely.");
    break;
  case 10:
    console.log("You may rely on it.");
    break;
  case 11:
    console.log("As I see it, yes.");
    break;
  case 12:
    console.log("Ask again later.");
    break;
  case 13:
    console.log("Better not tell you now.");
    break;
  case 14:
    console.log("Very doubtful.");
    break;
  case 15:
    console.log("Concentrate and ask again.");
    break;
  case 16:
    console.log("My reply is no.");
    break;
  case 17:
    console.log("Yes.");
    break;
  case 18:
    console.log("Outlook good.");
    break;
  case 19:
    console.log("Most likely.");
    break;
}
