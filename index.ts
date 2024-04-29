// const multiplicator = (a, b, printText) => {
//     console.log(printText,  a * b);
// }
//
// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');


// const multiplicator = (a:number, b:number, printText:string) => {
//     console.log(printText,  a * b);
// }
//
// multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');

// type Operation = 'multiply' | 'add' | 'divide';
//
//
// const calculator = (a: number, b: number, op: Operation) : number => {
//     switch(op) {
//         case 'multiply':
//             return a * b;
//         case 'divide':
//
//             if (b === 0) throw new Error('Can\'t divide by 0!');
//             return a / b;
//         case 'add':
//             return a + b;
//         default:
//
//             throw new Error('Operation is not multiply, add or divide!');
//     }
// }
//
// try {
//     console.log(calculator(2, 48, 'multiply'));
// } catch (error: unknown) {
//     let errorMessage = 'Something went wrong: '
//     if (error instanceof Error) {
//         errorMessage += error.message;
//     }
//     console.log(errorMessage);
// }


// const message = "hello!";
//
// message();

// const user={
//     name:"ravi",
//     location:"bangalore"
// }
//
// console.log(user.age)

// function randomy()
// {
//     return Math.random<5
// }
// console.log(randomy())
// let x="hello"
//
// console.log(x)
//
// // x=34
// let x;
// let y:string=x as string           //type assertion

// let arr:string[],number[]=[5,"hello",43,{name:"ravi",location:"KSR"}]
//
// console.log(arr[3])
// let arr:readonly number[]=[2,3,4,5,6,7,8,9,34,4,55,5];
//
// arr.push(7)
// console.log(arr)
// let arr: [boolean,string,number]
// arr=[true,"hello",23]
//
// arr.push(5)
// arr.push("world")
// console.log(arr)

// let arr:[number,number]=[34,56]
// let arr:[string,number]=["ravi",23]
// let [ranky,age]=arr
//
// console.log(age)
// console.log(ranky)

// const obj:{name:string,age:number}={
//     name:"gagan",
//     age:34
// }
//
// console.log(obj)
// const opObj:{name:string,age?:number}={                       ///optional datatype
//     name:"gagan",
// }
// opObj.age=13
// console.log(opObj)

// const arr=["alice","bob","ravi"]
// //
// // arr.forEach((s)=>{
// //     console.log(s.toUpperCase())
// // })
// function  Upper(first,second):string
// {
//     // for(let i=0;i<arr.length;i++)
//     // {
//     //     console.log(arr[i])
//     // }
//     return  console.log(`${first} ${second}`)
// }
// Upper("hello","ravi")


// function Objec(pt:{name:string,age:number})
// {
//     console.log(`hello this is ${pt.name}`)
//     console.log(` i am ${pt.age} age}`)
// }
// let obj={name:"ravi",age:13}
// Objec(obj)

// function Number1(name:string,age?:number)
// {
//     console.log(`hello from ${name}  and age is ${age}`)
// }
//
// Number1("ravi")
//
// enum CardinalDirections {
//     North=2,
//     East=56,
//     South=43,
//     West=32
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection);

// enum Direction
// {
//     north=7,
//     south,
//     east,
//     west
// }
//
// console.log(Direction.north)
// let obj={
//     name:"aggan",
//     age:34
// }
// console.log(obj.age)
// console.log(obj.name)

// enum roles
// {
//     admin,
//     read_only_user,
//     author
// }
// const person={
//     name:'ravi',
//     age:23,
//     location:"KSR",
//     role:roles.author
// }
//
//
// if(person.role===roles.admin)
// {
//     console.log("this is correct")
// }
// const arr:[number,string]=[23,"name"]
// arr.push("gagan")
// console.log(arr)

// function concatTwo(n1:number|string,n2:number|string)
//
// {
//
//     let res;
//     if(typeof n1==='number'  && typeof n2==='number'){
//         res=n1+n2
//     }else
//     {
//         res=n1.toString()+n2.toString()
//     }
//     return res;
// }
// console.log(concatTwo(2,4))
// console.log(concatTwo('hello','gagan'))
// console.log(concatTwo('hello',154))


// function sub(n1)
// {
//     return n1
// }
// function add(n1,n2)
// {
//     return n1+n2
// }
//
// // let value1:Function;
// let value1:(n1,n2)=>number
// value1=add
// // value1=sub
// console.log(value1("hello world","gagan"))


// function  comBine(a:number,b:number,callBack:(num:number)=>void)
// {
//     let res=a+b
//     callBack(res)
// }
//
// comBine(3,2,(result)=>{
//     console.log(`The result is ${result}`)
// })

// let name1:unknown;                            ///unknown will give error
// let name2:any;
// let name3:string;
// name3=name2
// name1="hello";
// name1=4;
//
// if(typeof name1==="string")           // to add check
// {
//     name3=name1
// }
//
// console.log(name1)


//if a function is throwing error then i  can define the return value as never and not undefined , because if i console loged that return value i will not get undefined/
// function ThrowError(message: string,code:number)
// {
//     throw {code:code, message:message};
// }
//
// const result=ThrowError("uncaught Error",400)
// console.log(result)

// function sun(n1:number,n2:number,cb:(res:number)=>void)
// {
//     let val= n1+n2
//     cb(val)
// }
//
// sun(3,5,(result)=>{
//     console.log(`the result is ${result}`)
// })

////exclude the file if not required in tsconfig.json  and try to add node_modules so the ts files in the modules will slow down the process of compilatiion  and would be default
// and include is reverse of this  and all the DOM objects and declaration type we write in the ts file will not give error due to the lub keyword in the tsconfig.json


// const button=document.getElementById('clock')
// button.addEventListener('click',()=>{
//     console.log("the button is clicked")})

// const add=(...numbers:number[])=>{
//    return  numbers.reduce((accum,num)=>{
//        return accum+num
//     },0)
// }
//
// console.log(add(4,5,3,2,2,25,5,5,5))

// interface Code{
//     name: string;
//     welcome(someThing: string): void;
// }
//
// class Human implements Code{
//    readonly name: string;
//     // age:number=48
//     constructor(rank:string) {
//         this.name=rank
//         console.log(this.name)
//     }
//     welcome(someThing: string) {
//         console.log(`this is ${someThing}`)
//     }
// }
//
// // let con1:Code
// let con1=new Human("Gagan")
// con1.welcome("Gagan")
// // con1.name="hgf"
//
// interface Man
// {
//     name:string
//     age:number
// }
//
// interface Women extends Man
// {
//     gender:string
// }
//
// let user2:Women=
//     {
//         name : "hello",
//         age : 23,
//        gender : "male"
//
//     }
//     let user1:Man=
//     {
//         name : "hello",
//         age : 23,
//        // gender : "male"
//
//     }

    // type AddFn=(a:number,b:number)=>number       //function type

// interface Add
// {
//     (a:number,b:number):number
// }
//
//
// let add:Add=(n1:number,n2:number)=>{
//     return n1+n2
// }
//
// console.log(add(2,3))
//
//
// interface Optional
// {
//     name:string,
//     age?:number
// }
// let man:Optional={name:"gagan"}

//
// type Admin={
//     name: string,
//     age:number
// }
//
// type User={
//     durationPeriod:number,
//     date:Date,
// }
//
// type Combine=User & Admin
//
// let  Customer1:Combine
// ={
//     name:"ravi",
//         age:23,
//         durationPeriod:45,
//     date:new Date()
//
// }
//
// console.log(Customer1)
//
//
// function CombineObj(obj1:Object,obj2:Object) {
//     return  Object.assign(obj1,obj2);
// }
//
//
// console.log(CombineObj({name:"gagan"},{age:23}))
// const obj=CombineObj({name:"gagan"},{age:23})
//
// obj.name
// function Combine1<T,U>(obj1:T,obj2:U) {
// return  Object.assign({},obj1,obj2);
// }
//
// // console.log(Combine1({name:"gagan"},{age:23}))
// const obj1=Combine1({name:"gagan"},{age:23})
// obj1.age = 23;

//
// let x:unknown=4
// let y=(<string>x ).length
// // let y=(x as string).length
// console.log(y)

//
// class Person
// {
//     private name:string;
//
//     public constructor(name:string){
//         this.name = name;
//     }
//
//     public getName()
//     {
//         return this.name;
//     }
// }
//
//
// const person=new Person('john')
// console.log(person.getName())


// class Man extends Person
// {
//     constructor() {
//
//         super("jack");
//         console.log(super.getName())
//
//     }
// }
//
//
// const user=new Man()
// console.log(user.getName())
//
// class Base
// {
//     greetings(){
//         console.log("hello from base")
//     }
// }
//
// class Derived extends Base
// {
//     greetings(name?:string) {
//         console.log(`hello from ${name}`);
//     }
// }
//
//
// const b=new Base();
// b.greetings()

// function Gen<Differentiate>(a:Differentiate[])
// {
//     return a[0]
// }
//
// const firstNum=[2,43,55,56]
// const first=Gen(firstNum)    // we can also pass the tag during calling of function like <number>(firstNum)
//
// const secondString=['shssh','dkjdj','kjh']
// const second=Gen(secondString)

type response<DATA ={name:string,age:number,email:string}>=
    {
        data:DATA,
        errorResponse:boolean
    }

    const dataResponse:response={
    data:{
        name:"John Smith",
        age:30,
        email:"john@gmail.com"
    },
        errorResponse:true
    }

    const retrive=dataResponse.data
console.log(retrive)