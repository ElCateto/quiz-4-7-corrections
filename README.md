# Quiz 4

## Question 9: Which of the following are valid data types in JavaScript? Select all the apply.
I got 0.29/1 pts on this quistion. I missed `symbol`, `null`, `undefined`, and `object`, but i did get `number`, `boolean` and `string` correct. those answers are correct becasue those are things that you use in JS.
```
// budget = true
// budget = 500000
// let costOfcar = Number(prompt("how much does the car cost?"));
// function carCost(){
//   if(costOfcar < 500000){ 
//    document.getElementById("output").innerHTML = "You can buy the car."
//   }
//   else(costOfcar > 500000){
//    document.getElementById("output").innerHTML = "You can not buy the car."
//   }
//  }
```

## Question 10: Which of the following statements declares and initializes a variable called x with the value 27? Select all that apply.

I got this one wrong. The correct answer is let x; x = 27;. It is correct because it is the only one that declares and initializes the variable.

```
// function variableX(){
//    let x;
//    x = 27;
//    document.getElementById("output").innerHTML = "X is" + x + "."
// }
```

# Quiz 5

## Question 1: Which of the following are valid logical operators in JavaScript? Select all that apply.

I got 0 on this, but i got 2 out of all the multiple choice, but answerd many wrong. the ansers that are corrrec tare so, because they are used in logical things

## Question 3: Which of the following are valid relational operators in JavaScript? Select all that apply.
i got 0.63, 2 are missing. The correct answers are correct because they are used in relational operations

## Question 4
I answered a < b || a < c; c > a && c > b, the coorrect answer is a < b && a < c; c > a || c > b. It is so becasue it is how the operators work. Correct answer:

```
let a = 3;
let b = 7;
let c = 9;

if (a < b && a < c) {
    console.log("we know for sure that a is the smallest of the three.");
}

if (c > a || c > b) {
    console.log("we know for sure that c is not the smallest of the three.");
}
```
## Q 5
I got this one wrong, I choosefalse, false. It should have been true, true. the code segment was: 
let a = "hello";
console.log(!a);
console.log(!!a);

## Q 6
I got this wrong becasue i chose an incorrect from of an if statement. The one i chose had a ; after the closing ). Should have chosen if (a < b)
{
    // do something
}
because it does not m,atter where the { are, as long as it is still after the ) it gets the job done.

## Q 8
Mr. Wilson you made a mistake here. you put a < for the right answer(let status = (studentGrade < 88) ? "ND" : "HR";), so i was thrown off, but i should have knownn that the ? and : are ion the right places. This is partly your fault. with the < it would give different answers.

## Q 9
I got this wrong because I chose the one with "  on the numbers. The " would make the numbers strings, woch is wrong. The correct anser id the one that is the same except for the " around the number, it is right because it reads the enterend numbers.

## Q 10
I chose and if-else statemnet when it asked me for the simplest way to do this. i should have chosen a swich statemnet. It is right because swich statemnt takes less lines of code, and it is more simple to understand at a qiuck glace
```
// switch (score) {
//   case >= 90: letterGrade = "A"; break;
//   case >= 80: letterGrade = "B"; break;
//   case >= 70: letterGrade = "C"; break;
//   case >= 60: letterGrade = "D"; break;
//   default: letterGrade = "F"; break;
// }
```

## Q 12
I chose the one with x++, which will make it run again, but the x-- should stop, wich is the right answer. The one with the correct formating of course.

## Q 14
I chose the one that tells you to repeat the whole procces with setup as the first step, and update scond to last. I shopuld have chose:
```
Setup
Expression
Loop body
Update
Return to Step 2
```
because this is the one with correct steps and tells you ti go to step 2 because you do not need to set up spmething that is already set up.

# Quiz 6

## Q 1
I missed one. The answer i should also have chosen should have been:
function multiply(x, y, z) {
    return x * y * z;
}
It is also correct because that is also a correct way of getting the answer.

## Q 2
I got this wrong, it told me to revise it. In the revision by creating an array there is no need for prompts any more, so the correct one had to be the one with out the prompt.

## Q 3: Which of the following built-in functions are designed to return a value? Select all that apply.
Only prompt returns value. Thst id the right answer because the others there is no number to user imput.

## Q 4: What happens if I pass in fewer arguments than there are parameters in the function definition?
 The parameters that did not receive arguments will be undefined. Correct answer is this because, if it does not ahve naything to go with it it is left alone.
 
 ## Q 6: Which of the following built-in functions accept parameters? Select all that apply.
 I got one out of the 3. i should have also said console.log and alert. Both are correct because you can enter parameters or  i can ahave parameters inveded into it.
 
 ## Q 7
 Should have known that it might return values. I got it correct but answered an extra answer.
 
 ## Q 9
 I got a 0.33 on this. Just needed 2 more answers. Tehy were also correct becasue the code would also output those two.
 
 ## Q 10
 They both run infinetly is the right answer. They have no stopping point.
 
 ## Q 11: A variable declared inside of an if statement can only be referenced from within that same scope. What is the accuracy of the above statement?
 It is only for const and let, because that is how it works. I answered var.
 
 ## Q 13
 I said that 1 and 2 would be printed out, i was wrong. It will have a ReferenceError on line 10. It is correct because it is outise the if statement ans the variable wa declared with var.
 
 ## Q 14
 I said a ReferenceError on line 10, it is that both 1 and 2 are printed out. It is so because the variable is declared with let.
