//desructuring --> şeklini bozma , başka değişkene atama
//spread --> Dağilma ,yayılma
//Rest --> kalanın tamamı

const numbers = [10,12,14]

const [numbers1,numbers2]=numbers  //number2 yi almak istemiyoran yerine ',' koy
console.log(numbers[0]) //10
console.log(numbers1)   //10

console.log(numbers[1]) //12
console.log(numbers2)   //12

console.log(numbers[2])   //14

const stack =[
    ["html","css","javaScript"],
    ["php","mySql","nodejs"]
]

const [frontend,backend]=stack
console.log(backend)

// ...rest : ilk önce baştakileri yazıyon geri kalanlarına ...koyarsan sonra ağır onlar gelir
const names =["a","b","c","d","e","f","g","h","i"]

const[myName,MyWifeName,myFriendName,...rest]=names
console.log(rest)











