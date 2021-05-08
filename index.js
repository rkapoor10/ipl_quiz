var readlineSync = require("readline-sync")
const chalk = require("chalk")
console.log(chalk.bgYellow("IPL QUIZ !! "))
console.log("------------------------------------------")

console.log(chalk.inverse("HOLA!")+chalk.bgBlue(" WELCOME TO THE IPL QUIZ 2021\n"))
console.log(">This is an IPL quiz CLI app which will test your \nknowledge of some awesome facts about IPL.\n")
var userName = readlineSync.question("Enter Name : ");
console.log("Hi! "+userName+" get warmed up we are about to begin...")
console.log("------------------------------------------")
var score =0
var remarks = []


function game(que)
{
  console.log("Moving on....")
  var uAns = readlineSync.question(chalk.bgYellowBright.black(que.question)+"Your ans: ")
  if(uAns === que.answer)
  {
    score = score +1
    remarks[i] = chalk.bgGreenBright("CORRECT ! ")
  }
  else
  {
    remarks[i] = chalk.bgRedBright("WRONG !\t")+que.remark
  }
  
  
}


var q1 = {
  question : "Q1. Who is the leading wicket taker for CSK this season ?\n\t1.Dwayne Bravo\n\t2.MS Dhoni\n\t3.Deepak Chahar\n",
  answer : "2",
  remark : "MSD is the leading wicket taker. Why? you ask ; \n\t\tgo and hear his stump mic commentary (︶︿︶) "
}
var q2 = {
  question : "Q2. Who scored the first ever run for Chennai Super Kings in the IPL?\n\t1Virat Kohli\n\t2.MS Dhoni\n\t3.Parthiv Patel\n",
  answer : "3",
  remark : "Not a GK que !! ¯\(°_o)/¯"
}
var q3 = {
  question : "Q3. Which is the youngest squad in IPL 2021(AVERAGE AGE)?\n\t1Delhi Capital\n\t2.Rajasthan Royals\n\t3.Chennai Super Kings\n",
  answer : "3",
  remark : "You should be young at heart :)"
}
var q4 = {
  question : "Q4. Which CSK player has the fastest fifty in IPL?\n\t1Rohit Sharma\n\t2.MS Dhoni\n\t3.Shane Watson\n",
  answer : "3",
  remark : "This was a GK question you should have googled\n\t\tbefore choosing an option...;)"
}
var q5 = {
  question : "Q5. MS Dhoni has hit the biggest six in IPL history. How long did it go?\n\t1. 111m\n\t2. 200m\n\t3.Into Space\n",
  answer : "3",
  remark : "INTO SPACE...JUST FAN THINGS! ╮ (. ❛ ᴗ ❛.) ╭"
}


var queList = [q1,q2,q3,q4,q5]

for(var i=0;i<queList.length;i++)
{
  game(queList[i])

}



console.log("Your Score is : "+chalk.bgRedBright.bold(score)+"\n")
console.log("Wondering why this quiz is "+chalk.yellowBright("CSK centric ?"))
console.log("Cuz...CSK big fen...very!!!\n")
console.log(chalk.inverse("YOUR SCORE SUMMARY"))
console.log("--------------------------------------------------")
for(var j=0;j<remarks.length;j++)
{
  console.log("QUE "+(j+1)+"\t"+remarks[j])
  console.log("\n")
}

console.log("\n OK BYE.....................before you hit me.o_O")