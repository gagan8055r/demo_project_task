
import lodash from "lodash";
const array=['water','milk','juice','orange','yellow','blue']
const array1=[3,4,45,55,55,3,222,23]
const small_arr=lodash.chunk(array,3)
const fal_arr=[false,0,null,2,'hello']
// console.log(small_arr)
// console.log(lodash.compact(fal_arr))
// console.log(lodash.difference(array,['water','milk']))
// console.log(lodash.join(array1,'+'))
// console.log(lodash.join(array,'-'))
// console.log(lodash.without(array,'water'))
// console.log(lodash.uniq(array))

// console.log(lodash)

// // console.log(lodash.concat(array,['world','spicy','namaste']))
// var users = [
//     { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];

// const new_doc=lodash.dropWhile(users, function(o) { return o.active; });
const new_doc=lodash.dropRightWhile(users, function(o) { return o.active; });
// console.log(new_doc)


// const obj=lodash.fromPairs([["name","gagan"],["age",23]]) ////to object
const obj=lodash.toPairs() ////to object
// console.log(obj)

// console.log(lodash.initial(array))
// console.log(lodash.intersectionBy([5,3,4],[2,4,3],(v)=>{
//     return v%2===0
// }))

// // console.log(lodash.nth(array,-1))
const arr=[2,4,5,6]
// const fil=arr.filter((val)=>{
//   return   val*2>=8
// })
//
// console.log(fil)

// const split=lodash.pull(arr,6)
// console.log(split)
// console.log(arr)

// const zipped = lodash.zip(['a', 'b'], [1, 2], [true, false]);
// console.log(zipped)
//
// // console.log(lodash.isEqual(null))
// const count=lodash.countBy([6.1, 4.2, 6.3], Math.floor);
// console.log(count)

//
// console.log(lodash.forEach('GAGAN',(value,index)=>{
//     console.log(value,index)
// }))


// const arr=[3,[4,3,2,2,[3,5,3,2],3,4,5,[4,5,5],5,4,4],4,4,4,[5,9,6,5,4]]
const arr1=lodash.flattenDeep(arr)
//
// console.log(lodash.groupBy(arr1,(value)=>{
//     return  value %3
// }))
//
//
// console.log(lodash.invokeMap([[5, 1, 7], [3, 2, 1,8,9]], 'sort')
// )
var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

// console.log(lodash.partition(users,'active'));
// console.log(lodash.sample(arr))        generate random values

// console.log(new Date().toLocaleTimeString())

const newOne=lodash.after(3,()=>{
    console.log("hello buddy")
})

newOne()
newOne()
newOne()
