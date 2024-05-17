import chalk from "chalk";
export let questionList = [
    { name: "quesOne", message: chalk.greenBright.italic("\n Inside which HTML element do we put the JavaScript ? \n"), type: "rawlist", choices: ["<js>", "<script>", "<javascript>", "<scripting>"], correct: "<script>" },
    { name: "quesTwo", message: chalk.greenBright.italic("\nWhat is the correct syntax for referring to an external script called xxx.js ?\n"), type: "rawlist", choices: ["<script href ='xxx.js'>", "<script name ='xxx.js'>", "<script src ='xxx.js'>", "<scripting = 'xxx.js'>"], correct: "<script src ='xxx.js'>" },
    { name: "quesThree", message: chalk.greenBright.italic("\nHow do you write 'Hello World' in an alert box ?\n"), type: "rawlist", choices: ["msg('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')"], correct: "alert('Hello World')" },
    { name: "quesFour", message: chalk.greenBright.italic("\nWhat are the three main 'simple types' in TypeScript?\n"), type: "rawlist", choices: ["Boolean, Number, String", "Object, Array, Symbol", "Array, Object, Boolean", "Object, String, Number"], correct: "Boolean, Number, String" },
    { name: "quesFive", message: chalk.greenBright.italic("\n What type of assignment is this variable, `const fullName: string = 'Hello World';` \n"), type: "rawlist", choices: ["Implicit", "Explicit", "Imp", "Exp"], correct: "Explicit" },
    { name: "quesSix", message: chalk.greenBright.italic("\n True or False: TypeScript can always correctly infer a variables type.\n"), type: "rawlist", choices: ["True", "False", "boolean", "number"], correct: "False" },
];
