// window global local

/*
 var let ve const ile herhangi bir değişken tanımlamadıysan bu window
global olarak tanımladığımız değşkenlere heryerden erişilebilir let const kullanılabilir
 */

ad ="ayse" //window scope

let name='ayse'
let surname = 'turan'

function letsLearnScope(){
    console.log(name,surname)
        if (true){
            let name ='baran'
            let surname ="yucel"
            console.log(name,surname)
        }
        console.log(name,surname)
}
letsLearnScope()
console.log(name,surname)
