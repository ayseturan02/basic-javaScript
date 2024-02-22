//function 



function sayHello(){
   let msg ="hello world"
   return msg
}
let hello = sayHello()
console.log(hello)
/*
function multiply(num1, num2){
   let total = num1 *num2
   return total
}
let num1=5, num2=2
let total=multiply(num1,num2) */

/*
function topla(){
   let total=0
   for(let i=0; i<arguments.length; i++){
      total +=arguments[i]
   }
   return total
}
console.log(topla(2,3,5,7,9))  */

function sumArrayValues(array){
   let total=0
   for(let i=0; i<array.length; i++){
      total+=array[i]
   }
   return total
}

let dizi=[2,4,6,8,10]
console.log("Toplam",sumArrayValues(dizi))


const Hello=function (name){
   return `hello ${name}`
}
console.log(Hello('Ayseturan'))


//ok fonksiyonunu inceleyebilirsin.