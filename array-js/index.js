// let employe=["khusbu","suha","mijila","tajnuva"];
// let employeindex=employe.indexOf("khusbu")
// console.log(employeindex);
// employe.push("tania");
// console.log(employe);
// employe.pop();
// console.log(employe);
// employe.shift();
// console.log(employe);
// employe.unshift("suha");
// console.log(employe);



//let month=["january","february","march","april","may"]
// let day=month.splice(2);
// console.log(day);
// console.log(month);
// let months=month.splice[1,2];
//console.log(months);

//array for loop//
// var num=[10,20,30,40,50,7,6];
// for(var i=0;i<7;i++){
//     console.log([i]);
// }


// let num=[3,4,6,7,8,9,];
// let sum=0;
// for (let i = 0; i < 5; i++) {
//    console.log = (num[i]);
//    sum=sum+num[i];
    
// }
// console.log("sum="+sum);















// let later = "i"
// let vowel = "a"|| "e"|| "i"|| "o"|| "u"
// if (later==a ||later==e ||later==i||later==o ||later==u) {
//     console.log("is a vowel ");
    
// }
// else{
//     console.log("is a consolg ");
// }

// let year = 2025 ;
// let fab = (year%4==0 && year%100!==0)|| (year%400==0)? 29:28
// console.log(fab);



// for (let i = 0; i< 100; i++) {
//     if(i%2==0){
//         console.log(i);
       
//     }
// }
   

// console.log( Math.abs(1));

// let r = Math.random(Math.random() *255);
// let g = Math.random(Math.random() *255);
// let b = Math.random(Math.random() *255);

// let rgb = rag(${r} , ${g} ${b})
// console.log(rgb);


// areay index nemuber ber kore 
// let areay = [ 12 , 22 , 11, 13 , "sofk " , "nipon " ] 
// console.log(areay[4]);

// for (let i = 0; i < areay.length; i++) {
//     console.log(areay[i]+2);
    
// }

// console.log(areay.length);
// console.log(areay.lastIndexOf("sofk"));


// let age = [ 12, 33, 14 , 20 , 10,]


// let adult = age.filter(a => a >= 18)
// console.log(adult);



// function ATM(accNumber , name, pin , withdrw ) {
//     let balec = 10000;
//     let fixdBalec= 0;
//     function Withdrw1(){
//         console.log(apner accaNumber ${accNumber}\n apner name ${name}\n yor password ${pin}\n withdro amount ${withdrw}\n your new balec ${balec-withdrw});
//      }
//      if (pin===1234) {
        
//         }
        
//         else {
//             console.log("password worng ");
//         }
//         if (fixdBalec+500===withdrw) {
//             console.log("tk nai");
//         }
//         else{
//             Withdrw1()
//         }
    
    
// }
// let atm = new ATM(12345, "sofik" , 1234, 123500)
// console.log(atm);
// class bro {
//   constructor(Name){
// this.Name=Name;
// }
// getFatherInfo ( ) {
//   return ` you are name ${this.Name}`;
// }

// }

// class ami extends bro{
 
//   constructor( Name , id ){
// super(Name)

// this.id=id;
//   }
//   n(){
//     return ${super.getFatherInfo()},  you are id ${this.id}
//   }
  
// }
// let nwesd= new ami("sofik " , "2") 
// console.log(nwesd.n());

/*class big{
    constructor( fname , age ){
this.fname=fname;
this.age=age;
    }
    getFatherInfo () {
        return ` father name is ${this.fname} \n farher aga ${this.age}`
        
    }
} 


class ami extends big {
    constructor(fname, age, name , ages ){
        super(fname, age);
       
      this.name=name;
        this.ages=ages;
    }
    amr (){
        return ` ${super.getFatherInfo()}\n my name is ${this.name}\n my agas ${this.ages}`
    }
}

let s = new ami("moksedul", 40 , "sofik", 20)

console.log(s.amr());*/
// class and objet 
/*class sofik {
constructor(name , roll , id ){
    this.name= name;
    this.roll=roll;
    this.id=id;
}
sofik1(){
return my name is ${this.name}\n roll no:${this.roll}\n id no :${this.id}
}
}
let sofik3 = new sofik("sofik", 401973, 33);

console.log(sofik3.sofik1());*/



// Inheritance
/*class broVai {
constructor(name , agas){
    this.name=name;
    this.agas=agas;
}
broVaiInfo(){
    return bro vaier name:${this.name}\n bro vaier agas ${this.agas}
}
class CotoVaib extends  broVai{

    constructor(name, agas, cName,  cAgaes){
        super(name, agas)
        this.cName=cName;
        this.cAgaes=cAgaes;

    }
    totalInfo(){
        return ${super.broVaiInfo()} \n coto vaier name ;${this.cName}\n coto vaier agas ${this.cAgaes}
    }
}
let FulInfo = new CotoVaib("nipon" , 22 , "sofik" , 18)

console.log(FulInfo.totalInfo());*/

// Encapsulation
/*function ATM(name , accaNumber, pin , withdro){
let myBalce = 100000;
let fixdBalec= myBalce-withdro;
function withdro1() {
console.log(`uesr name: ${name}\n my accNumber: ${accaNumber} my pin:${pin
}\n withdro accomnt ${withdro} \n new balce ${myBalce-withdro}`);
} 
if (pin===1111) {
    if (fixdBalec>500) {
        withdro1()
    }
 else{
        console.log("sorry on balec");
    }
    
}
else{
    console.log("sorry worng password");
}}

let atm = new ATM("sofik",33449006554,1111, 11111111111  )

console.log(atm);*/

// Polymorphism

// class school{
//     baveb(){
//         return ` Iam a student`
//     }
// }
// class sopinng extends school{
//     baveb(){
//         return `${super.baveb()}\n I am a custumer `
//     }
// }

// class home extends sopinng {
//     baveb(){
//         return `${super.baveb()} \n ist normal  `
//     }
// }

// class paly extends home {
//     baveb(){
//         return `${super.baveb()}\n Iam a palyar `
//     }
// }
 
// let s = new paly ()
// console.log(s.baveb());

