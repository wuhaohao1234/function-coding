# function-coding(函数式编程)

## 命令式编程和声明式编程

### example

* 命令式编程
```
<script>
    const convert = function(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].toLowerCase()
    }
    return result
    }
</script>
```
* 声明式编程
```
<script>
    const convert = function(arr) {
    return arr.map(r => r.toLowerCase())
    }
</script>
```

## 函数式编程

**函数式编程是声明式编程的范式。在函数式编程中数据在由纯函数组成的管道中传递。**

> *函数式编程可以用简单如交换律、结合律、分配律的数学之法来帮我们简化代码的实现。*

### 特性

* **纯粹性: 纯函数不改变除当前作用域以外的值;**

```
<script>
    // 反面示例
    let a = 0
    const add = (b) => a = a + b // 当外界a变化时候，返回值也会变化
    // 正确示例
    const add = (a, b) => a + b
</scipt>
```

* **数据不可变性: Immutable**

```
<script>
    // 反面示例
    const arr = [1, 2]
    const arrAdd = (value) => {
    arr.push(value)
    return arr
    }
    arrAdd(3) // [1, 2, 3]
    arrAdd(3) // [1, 2, 3, 3]
    // 正面示例
    const arr = [1, 2]
    const arrAdd = (value) => {
    return arr.concat(value)
    }
    arrAdd(3) // [1, 2, 3]
    arrAdd(3) // [1, 2, 3]
</script>
```

* **函数柯里化: 将多个入参的函数转化为一个入参的函数;**

```
<script>
    const add = a => b => c => a + b + c
    add(1)(2)(3)
</script>
```

* **偏函数: 将多个入参的函数转化成两部分;**

```
<script>
    const add = a => (b, c) => a + b + c
    add(1)(2, 3)
</script>
```

* **可组合: 函数之间能组合使用**

```
<script>
    const add = (x) => x + x
    const mult = (x) => x * x
    const addAndMult = (x) => add(mult(x))
</script>
```

## 柯里化(curry)

需求
1. 用户传递一个函数add，里面参数确定,返回值确定
2. 通过提高一个curry函数，执行后返回


```
<script>
    const add = (a: number, b: number, c: number): number => a + b + c

    function curry(callback: Function, ...args: any) {
        const length = callback.length
        let lists = args || []
        let listen: number
        return (..._args: any) => {
            lists = [...lists, ..._args]
            listen = lists.length
            const that = lists
            lists = []
            if (listen < length) {
                return curry(callback, ...that)
            } else  if (listen === length) {
                return callback.apply(this, that)
            }
        }
    }

    let curryAnd = curry(add)
    /** 
    * curryAnd(1)(2)(3)
    * curryAnd(1, 2)(3)
    * curryAnd(1)(2, 3) 
    */ 
</script>
```

## 代码组合(compose)
```
var toUpperCase = (str) => str.toUpperCase()
var reverse = (arr) => arr.reverse()
var head = (arr) => arr[0]

var reverseHeadUpperCase = (arr) => toUpperCase(head(reverse(arr)))
reverseHeadUpperCase(['apple', 'banana', 'peach']) // PEACH
```

此时在构建 reverseHeadUpperCase 函数的时候, 必须手动声明传入参数 arr, 是否能提供一个 compose 函数让使用者更加友好的使用呢? 类似如下形式:

```
compose(compose(toUpperCase, head), reverse)
compose(toUpperCase, compose(head, reverse))
```

以上两种写法与 compose(toUpperCase, head, reverse) 的效果完全相同, 都是依次从右到左执行传参中的函数。
此外 compose 和 map 一起使用时也有相关的结合律, 以下两种写法效果相等

```
compose(map(f), map(g))
map(compose(f, g))
```
动手实现一个 compose 函数
```
var compose = (...args) => (initValue) => args.reduceRight((a, c) => c(a), initValue)
```

## 范畴论

范畴论是数学中的一个分支。可以将范畴理解为一个容器, 把原来对值的操作，现转为对容器的操作。

函数式编程中, 函子(Functor) 是实现了 map 函数的容器, 下文中将函子视为范畴，模型可表示如下:

```
<script>
    class Functor {
        constructor(value) {
            this.value = value
        }
        map(fn) {
            return new Functor(fn(this.value))
        }
    }
    Functor.of = value => new Functor(value)
</script>
```

## 参考:

https://www.yuque.com/fe9/basic/pq4mzx#ab192e66

## ts技巧(很多都是es6里面的)

1. 数组元素过滤

```
<script>
const arr: number[] = [1, 1, 1, 3, 4, 5, 4, 4, 6 ]

const uniqueArray: number[] = [...new Set(arr)]

console.log(uniqueArray) // [1,2,3,4,5,6]
</script>
```

2. 循环中缓存数组长度

```
<script>
const arr: number[] = [1, 1, 1, 3, 4, 5, 4, 4, 6 ]

for (let i = 0; length = arr.length, i < length; i ++) {
    console.log(arr[i])
}
</script>
```

这样无需再计算数组长度

3. 逻辑运算符 && 和||

判断用户传递过来的值是否符合要求:

```
return (foo || []).length;
```

4. 快速幂运算

```
console.log(2 ** 3); // Result: 8
```

