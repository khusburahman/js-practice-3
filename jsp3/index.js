// let a=0;
// if(a>0){
//     console.log(a,"positive number");
// }
// else if(a<0){
//     console.log(a,"negative number");
// }
// else{
//     console.log("zero");
// }




// let x=25;
// if(x%2==0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }





// let a=23;
// let b=55;
// if(a>b){
//     console.log(a,"is max Number");
// }
// else if(a==b){
//     console.log("both is equal");
// }
// else{
//     console.log(b,"is max number");
// }






// let a=22;
// let b=89;
// let c=34;
// if(a>b && a>c){
//     console.log(a,"is big number");
// }
// else if(b>a && b>c){
//     console.log(b,"is big number");
// }
// else{
//     console.log(c,"is big number");
// }





// let letter="k";
// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
// }





// let week=7;
// console.log(week*5,"days");






// let year=2022
// let month=9
// let feb=(year%4==0 && year%100!==0)||(year%400==0)?29:28
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     console.log(31);
// }
// else if(month==4 || month==6 || month==9 || month==11){
//     console.log(30);
// }
// else if(month==2){
//     console.log(feb);
// }
// else{
//     console.log("not a month");
// }

// let year=2020
// let month=4
// let feb=(year%4==0 && year%100!==0)||(year%400==0)?29:28
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     console.log(31);
// }
// else if(month==4 || month==6 || month==9 || month==11){
//     console.log(30);
// }
// else if(month==2){
//     console.log(feb);
// }
// else{
//     console.log("not a month");
// }


 



// let marks=22;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=70){
//     console.log("A");
// }
// else if(marks>=60){
//     console.log("A-");
// }
// else if(marks>=50){
//     console.log("B");
// }
// else if(marks>=40){
//     console.log("C");
// }
// else{
//     console.log("F");
// }




// let unit=25;
// let additional_meter_charge=55;
// if(unit<=50){
//     let par_unit=.50;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else if(unit<=100){
//     let par_unit=.75;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else if(unit<=250){
//     let par_unit=1.20;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else{
//     let par_unit=1.50;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
//}


// let i=4;
// while(i<=20){
//     console.log(i);
//     i++
// }



// let i=3;
// do{
//     console.log(i);
// }
// while(i<=10);




// let pi=Math.PI
// console.log(pi.toFixed(2));



// let math=75;
// let biology=25;
// let chemestry=65;
// let physics=80;
// let bangla=35.45;
// let totalMarks=(math+biology+chemestry+physics+bangla)/5
// console.log(totalMarks.toFixed(1));







// class Person {
//     constructor(name, age, isStudent) {
//         this.name = name;
//         this.age = age;
//         this.isStudent = isStudent;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

//     haveBirthday() {
//         this.age++;
//         console.log(`It's my birthday! I'm now ${this.age} years old.`);
//     }
// }

// const person1 = new Person("Riyaz", 25, true);
// const person2 = new Person("Shuvo", 30, false);

// person1.greet();
// person1.haveBirthday();
// console.log(`Is ${person1.name} a student? ${person1.isStudent ? 'Yes' : 'No'}`);

// person2.greet();
// person2.haveBirthday();
// console.log(`Is ${person2.name} a student? ${person2.isStudent ? 'Yes' : 'No'}`);



// class person{
//     constructor(name,age,isStudent){
//         this.name=name;
//         this.age=age;
//         this.isStudent=isStudent;
//     }
//     greet(){
//         console.log(`my name is ${this.name}`);
//     }
//     haveBirthday(){
//         this.age++;
//         console.log(`i am ${this.age} years old`);
//     }
// }
// const person1=new person("khusbu",25,true);
// const person2=new person( "mina",35, false);

// person1.greet();
// person1.haveBirthday();
// console.log(`${person1.name} is a student? ${person1.isStudent ? 'yes':'no'}`);
// person2.greet();
// person2.haveBirthday();
//     console.log(`${person2.name} is student ? ${person2.isStudent ? 'yes':'no'}`);








/*Bank accout*/
// class BankAccount {
//     constructor() {
//         this.balance = 0;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//            console.log(`Deposited ${amount} into the account.`);
//         } else {
//             console.log('Please deposit a valid amount.');
//         }
//     }
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`Withdrawn ${amount} from the account.`);
//         } else {
//             console.log('Insufficient balance or invalid amount for withdrawal.');
//         }
//     }
//     getBalance() {
//         console.log(`Current balance: ${this.balance}`);
//         return this.balance;
//     }
// }

// const myAccount = new BankAccount();
// myAccount.deposit(100);
// myAccount.getBalance();
// myAccount.withdraw(50);
// myAccount.getBalance();
// myAccount.withdraw(70);

// class BankAccount{
//     constructor(){
//         this.balance=0;
//     }
//     deposit(amount){
//         if(amount>0){
//             this.balance+=amount;
//             console.log(`deposit ${amount} into account`);
//         }
//         else{
//             console.log("plz deposit ammout");
//         }
//     }
//     withdraw(amount){
//         if(amount>0 && amount<=this.balance){
//             this.balance-=amount;
//             console.log(`withdraw ${amount} from account`);
//         }
//         else{
//             console.log(`insufficient balance`);
//         }
//     }
//     getBalance(){
//         console.log(`current balance ${this.balance}`);
//         return this.balance;
//     }
// }
// const myAccount=new BankAccount()
// myAccount.deposit(5000);
// myAccount.getBalance();
// myAccount.withdraw(2000);
// myAccount.getBalance();
// myAccount.withdraw(4000);







// class BankAccount{
//     constructor(){
//         this.balance=0;
//     }
//     deposite(amount){
//         if(amount>0){
//             this.balance+=amount;
//             console.log(`deposite ${amount}into account.`);
//         }
//         else{
//             console.log(`please deposite valid amount`);
//         }
//     }

//     withdraw(amount){
//         if(amount>0 && amount<=this.balance){
//             this.balance-=amount;
//             console.log(`withdraw ${amount}from acount`);
//         }
//         else{
//             console.log(`insufficient balance`);
//         }
//     }

//     getBalance(){
//         console.log(`currrent balance:${this.balance}`);
//         return this.balance;
//     }
// }
// const myAccount=new BankAccount();
// myAccount=deposite(100);
// myAccount=getBalance();
// myAccount=withdraw(50);
// myAccount=getBalance();
// myAccount=withdraw(70);

 



// /*clock*/

// function clock(){
//     const date=new Date()
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }
// setInterval(clock,1000)

// function clock(){
//     const date=new Date()
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }
// setInterval(clock,1000)



