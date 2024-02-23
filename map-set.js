//set küme gibi düşün
//yeni veri eklerken add

const names = new Set(["a","b","c"])

for(let name of names){
    console.log("harf",name)
}
names.forEach(name => console.log(name))

//küme birleşirme

const a=[1,2,3,4,5]
const b=[3,4,5,6]

const c=[...a,...b]
console.log(new Set(c))


//küme kesişimi

const h=[1,2,3,4,5]
const f=[3,4,5,6]
const B =new Set(f)
console.log(
    h.filter(num=>B.has(num))
)

//ilkinde olup diğerinde olmayan değerler

let C= new Set(f)
console.log(
    h.filter(num=>!B.has(num))
)

//map te herhangi bir veri türünü kabul ediyor
//yeni veri eklerken set