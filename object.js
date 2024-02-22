
const user ={}    // boş bir obje tanımlamak istersek
console.log(user)


const users={
    name:"Ayse",
    surname: "turan",
    age:23,
    skills:[
        "html","css","c","python"
    ],
    a:{
        //obje
    },
    test:{
      deneme:"Deneme Text"
    },
    "phone number": 849723787523,

    siblings:[
        {
            name:"baran",
            surname:"yucel"
        }
    ],
    getFullName:function (){
      return `${this.name} ${this.surname}`
    }
}

console.log(users.test.deneme)          //nokta ile erişiliyor
console.log(users.skills[2])
console.log(users.siblings[0].name)
console.log(users['phone number'])
console.log(Object.keys(users))         //bütün nesneleri yazar
console.log(Object.values(users))       //bütün değerleri dönderir
console.log(Object.entries(users))       //hem değerleri hem nesneleri dönderir

for (let [key ,val] of Object.entries(users)){
    console.log(key,val)
}

// Object.freeze yapınca hiçbir şey ekleyip çıkaramıyorsun
// Object.seal  ekleme çıkarma yapamıyorsun güncelleme yapabiliyorsun
