const fonksiyon =number => number**2

function cube(cb,number){
    return cb(number)*number
}
console.log(cube(fonksiyon,3))

const a = s1 =>{
    const b = s2 =>{
        const c = s3 =>{
            return s1+s2+s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(20))

const numbers=[1,3,5,7,9]
let total = 0
numbers.forEach(number=>total += number)  //her elemanı tekrarlamak için kullanılır
console.log(total)


const number1=[1,3,5,7,9]
let total1=0
let calculate=(number,index)=>total1+=(number+index)
number1.forEach(calculate)
console.log(total1)


function sayHello(){
    console.log("hello")
}
const interval = setInterval(sayHello,1000)  //saniyede 1 hello wold yazar

const timeout= setTimeout(()=>{
    clearInterval(interval)
    console.log("interval işlemi iptal edildi!")  //
},5000)

setTimeout(()=>{
    clearTimeout(timeout)
    console.log("timeout islemi iptal edildi, interval devam edecek")
},3000)


//sum : toplama işlemi için
//toUpperCase : harfleri büyütmek için
//map - some - every - find - reserve -
//sort a dan z ye sıralama

const numaralar= [3,6,2,1,10,1.2,20,9]
numaralar.sort((a,b)=>a-b)  //b-a yazsaydı büyükten küçüğe sıralardı
console.log(numaralar)
//localCompare sayılar için değil harfler için yapar
