const { DateTime } = require("luxon");
// // console.log(DateTime.now().ts)
// console.log(DateTime.now().c)
// // console.log(DateTime.now()._zone)
// // // console.log(DateTime.now().loc)
// // console.log(DateTime.now().invalid)
// // console.log(DateTime.now().weekData)
// // console.log(DateTime.now().localWeekData)
// console.log(DateTime.now().o)
// console.log(DateTime.now())
// console.log(Object.getOwnPropertyNames(DateTime.now()))
// console.log(DateTime.now().isLuxonDateTime)

// var first=DateTime.now()

// setTimeout(()=>{
//      var second=DateTime.now()
//     console.log(second.diff(first))
// },1000)

let first= DateTime.now().diff(DateTime.fromISO(2020-10-02))
let second=DateTime.fromISO(2021-10-15).diffNow()
// console.log(first)
// console.log(second)

// console.log(DateTime.local())
// console.log(DateTime.local(2020,8,25,17,33,48,154))
//
// console.log(DateTime.local(2020,8,15,{locale:'fr'}))
// console.log(DateTime.local({locale:'fr'}))
// console.log(DateTime.local({zone:"America/New_York",locale:'fr'}))
// console.log(DateTime.local({zone:"utc"}))
// console.log(DateTime.utc())
//
//

// console.log(new Date())
// console.log(DateTime.fromJSDate(new Date('2024-02-24')))
// console.log(DateTime.fromJSDate(new Date()))

const m=Date.now()
const sec=m/1000
console.log(sec)
console.log(m)
console.log(DateTime.fromMillis(m))
console.log(DateTime.fromSeconds(sec))





