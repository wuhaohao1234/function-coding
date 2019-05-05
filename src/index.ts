// example: 函数式编程里面所有的demo

// 命令式编程

// function convert<T>(arr: Array<T | any>): Array<T | any> {
//     let result: Array<T | any> = []
// // tslint:disable-next-line: prefer-for-of
//     for ( let i = 0; i < arr.length; i ++) {
//         if (typeof arr[i] === 'string' ) {
//             result.push(arr[i].toLowerCase())
//         }
//     }
//     return result
// }

// 声明式

// function convert<T>(arr: Array<T | any>): Array<T | any> {
//     return arr.map((r: T | any) => r.toLowerCase())
// }

// 纯粹性,纯函数不改变除当前作用域以外的值;

// const sum = (a: number, b: number): number => a + b

// 数据不可变性: Immutable

// const arrAdd = <T>(value: T): Array<any | T> => {
//     let arr: Array<any | T> = [1, 2]
//     return arr.concat(value) //这里也可以使用push
// }

// 函数柯里化

// type IFun = (num: number) => any

// const add = (a: number): IFun => (b: number): IFun => (c: number): number => a + b + c

// 偏函数: 将多个入参的函数转化成两部分;

// type IFun = (num1: number, num2: number) => any

// const add = (a: number): IFun => (b: number, c: number): number => a + b + c

// 可组合: 函数之间能组合使用

// const add = (x: number): number => x + x
// const mult = (x: number): number => x * x
// const addAndMult = (x: number): number => add(mult(x))

// 柯里化(curry)

// const add = (a: number, b: number, c: number): number => a + b + c

// function curry<T>(callback: Function, ...args: T[]) {
//     const length = callback.length
//     let lists = args || []
//     let listen: number
//     return (..._args: T[]): any | T => {
//         lists = [...lists, ..._args]
//         listen = lists.length
//         const that = lists
//         lists = []
//         if (listen < length) {
//             return curry(callback, ...that)
//         } else  if (listen === length) {
//             return callback.apply(this, that)
//         }
//     }
// }

// let curryAnd = curry(add)
// curryAnd(1)(2)(3)
/** 
 * curryAnd(1)(2)(3)
 * curryAnd(1, 2)(3)
 * curryAnd(1)(2, 3) 
 */ 

// 数组元素过滤

// const arr: number[] = [1, 1, 1, 3, 4, 5, 4, 4, 6 ]

// const uniqueArray: number[] = [...new Set(arr)]

// console.log(uniqueArray) // [1,2,3,4,5,6]

// 缓存数组长度

// const arr: number[] = [1, 1, 1, 3, 4, 5, 4, 4, 6 ]

// for (let i = 0; length = arr.length, i < length; i ++) {
//     console.log(arr[i])
// }

// function myEvent(parma: any): number {
//     // 这里并不知道parma是什么类型所以用any
//     return parma.length || [].length
// }

console.log(2 ** 3); // Result: 8