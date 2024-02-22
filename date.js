const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber =date.getDay()

let months=[
    'ocak',
    'şubat',
    'mart',
    'nisan',
    'mayıs',
    'haziran', 'temmuz', 'ağustos', 'eylül', 'ekim' ,'kasım' ,'aralık'
]


let days=[
    "pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"
]

let humanReadableDate = "${days} , ${months[month]} ${year} ${days[dayNumber]} ,${hour}:${minute}:${second}"
console.log(humanReadableDate)

console.log(months[0])
