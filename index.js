#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { questionList } from "./quizList.js";
let isCond = true;
console.log(chalk.greenBright.italic("\n \t### Welcome The Quiz ###"));
console.log(chalk.greenBright("\t# -------------------------------- #"));
while (isCond) {
    let timeSec = 0;
    let timeMin = 0;
    let setTimer = "";
    let setTimerForQuiz = setInterval(() => {
        timeSec++;
        if (timeSec === 60) {
            timeSec = 0;
            timeMin++;
        }
        setTimer = `${timeMin < 10 ? "0" + timeMin + " Min " : timeMin + " Min "}:${timeSec < 10 ? "0" + timeSec + " Sec" : timeSec + " Sec"}`;
    }, 1000);
    let correcAns = questionList.length;
    let qeustionProm = await inquirer.prompt(questionList);
    let checkQuesAndAns = [];
    questionList.forEach((e) => {
        if (qeustionProm[e.name] !== e.correct) {
            correcAns--;
        }
        ;
        checkQuesAndAns.push({
            question: e.message,
            userAnswer: qeustionProm[e.name],
            correcAns: e.correct,
        });
    });
    clearInterval(setTimerForQuiz);
    console.log(chalk.greenBright(" \n \t## Time Spent ## \n"));
    console.log(chalk.greenBright(`\t ${setTimer}`));
    console.log(chalk.greenBright(`\n\t Your Correct Answer is ${chalk.cyanBright(correcAns)} of ${chalk.cyanBright(questionList.length)}.\n`));
    console.log(chalk.greenBright("\t# -------------------------------- #"));
    let checkAns = await inquirer.prompt([
        { name: "checkAnswer", message: chalk.cyanBright.italic(" \tDo you want to check your answer"), type: "confirm" },
    ]);
    if (checkAns.checkAnswer) {
        console.log(chalk.green.italic("\n \t ### Question And Answer List ###"));
        checkQuesAndAns.forEach((e) => {
            console.log(chalk.greenBright.italic(`\n \tQuestion: \t${chalk.cyanBright.bold(e.question)}\n.  \t Your Answer: ${e.userAnswer !== e.correcAns ? chalk.redBright.bold(e.userAnswer) : chalk.cyanBright.bold(e.userAnswer)}.\n \t Correct Answer: ${chalk.cyanBright.bold(e.correcAns)}. \n`));
        });
        console.log(chalk.greenBright(" \t# -------------------------------- #"));
    }
    ;
    let retryQuiz = await inquirer.prompt([
        { name: "tryAgain", message: chalk.cyanBright.italic("Do you want to try again the quiz"), type: "confirm" },
    ]);
    isCond = retryQuiz.tryAgain;
}
;
