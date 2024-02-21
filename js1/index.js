// function khus(num){
//     var result=num*num;
//     console.log("Result="+result);
// }
// khus(3);



// var a=1;
// var b=2;
// var c=a+b;
// console.log(c);

// console.log("hello world");

// var num=[23,10,11,20,30]
//     for(var i=0;i<4;i++){
//         console.log(num[i]);
//     }


// let num=[10,10,30,20,38];
// let sum=0;
// for (let i=0;i<5;i++){
//     console.log(num[i]);
//     sum=sum+num[i]
// }
// console.log("sum="+sum);


// let num=[3,5,7,8,9]
// num.push(6);
// console.log(num);
// num.pop();
// console.log(num);


// let a=[1,4,6,]
// let b=[4,5,8]
// let c=a.concat(b);
// console.log(c);

function highestScore(score){
    var max=score[0];
    for(var x=1;x<score.length;x++){
        if(max<score[x]){
            max=score[x];
        }
    }
    return max;

}

var score=[34,679,5,10,105,30];
var maxScore=highestScore(score);
console.log(maxScore);