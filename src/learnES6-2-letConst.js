import React, { Component } from 'react';
import { AppRegistry, View ,Button } from 'react-native';

export default class AlignItemsBasics extends Component {
    onItemPress = ()=>{
        console.log('onItemPress.....')
        this.newMethod();
    }
    newMethod() {
        /*
        //********************************************************************************************************* 
        一、let命令
        //********************************************************************************************************* 
        1、基本用法
        ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
        */
        // 代码1：================================================================
        // 在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。
        // 这表明，let声明的变量只在它所在的代码块有效。
        // {
        //     let a = 10;
        //     var b = 1;
        // }
        // console.log(b);//1
        // // console.log(a);//a is not defined.

        // 代码2：=================================================================
        // 计数器i只在for循环体内有效，在循环体外引用就会报错。
        // for (let i = 0; i < 10; i++) {
        //     // ...
        // }
        // console.log(i);// ReferenceError: i is not defined

        // 代码3：==================================================================
        /*
        3.1 变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
        每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。
        也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。 */
        // var a = [];
        // for (var i = 0; i < 10; i++) {
        //   a[i] = function () {
        //     console.log(i);
        //   };
        // }
        // a[6](); // 10

        // 如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。
        /*
        3.2 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
        你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？
        这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。 */
        // var a = [];
        // for (let i = 0; i < 10; i++) {
        //     a[i] = function () {
        //         console.log(i);
        //     };
        // }
        // a[6](); // 6

        /*
        3.3 for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。 */
        // for (let i = 0; i < 3; i++) {
        //     let i = 'abc';
        //     console.log(i);
        // }
        // 上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

        //********************************************************************************************************* 
        /*
        2、不存在变量提升
        var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。
        为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错

        变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。
        变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。
        */ 
        // 代码1：==========================================================
        // // var 的情况
        // console.log(foo); // 输出undefined
        // var foo = 2;

        // // let 的情况：2018年04月16日 实测 不报错？？？why？？？？
        // console.log(bar); // 报错ReferenceError
        // let bar = 2;

        //********************************************************************************************************* 
        /*
        3、暂时性死区
        在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

        只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

        代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

        ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
        */ 
        // 代码1：==========================================================
        // var tmp = 123;//这句代码注释掉，下面就会报错
        // console.log(tmp);
        // if (true) {
        //     //2018年04月16日 实测 不报错？？？？？？？？？？？？？？why？
        //     // TDZ开始
        //     tmp = 'abc'; // ReferenceError
        //     console.log(tmp); // ReferenceErrorwhy???为什么输出abc，而不报错？？？难道是ES新语法？？？
          
        //     let tmp; // TDZ结束
        //     console.log(tmp); // undefined
          
        //     tmp = 123;
        //     console.log(tmp); // 123
        // }

        // 代码2：==========================================================
        // // “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
        // typeof x; // ReferenceError：这也不会报错。。？？？？
        // let x;

        // // 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
        // typeof undeclared_variable // "undefined"

        // 代码3：==========================================================
        // 有些“死区”比较隐蔽，不太容易发现。
        // 因为参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“。
        // function bar(x = y, y = 2) {
        //     return [x, y];
        // }
        // bar(); // 报错：2018年04月16日 实测也不报错。。。？

        // function bar(x = 2, y = x) {
        //     return [x, y];
        // }
        // bar(); // [2, 2]

        // 代码4：==========================================================
        // 不报错
        // var x = x;

        // 报错：2018年04月16日  实测也不报错？？？？？
        let x = x;// ReferenceError: x is not defined


        // ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。
        // 总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

        //********************************************************************************************************* 
        /*
        4、不允许重复声明
        let不允许在相同作用域内，重复声明同一个变量。
        */
        // 代码1：==========================================================
        // 报错
        // function func() {
        //     let a = 10;
        //     var a = 1;
        // }
        
        // // 报错
        // function func() {
        //     let a = 10;
        //     let a = 1;
        // }

        // 不能在函数内部重新声明参数。
        // function func(arg) {
        //     let arg; // 报错
        // }

        // function func(arg) {
        //     {
        //         let arg; // 不报错
        //     }
        // }



        /*
        //********************************************************************************************************* 
        二、块级作用域
        //********************************************************************************************************* 
        1、为什么需要块级作用域？
        ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
        */

        // 代码1：==========================================================
        // 第一种场景，内层变量可能会覆盖外层变量。
        var tmp = new Date();
        function f() {
            console.log(tmp);
            if (false) {
                var tmp = 'hello world';
            }
        }

        f(); // undefined
        //原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。

        // 代码2：==========================================================
        // 第二种场景，用来计数的循环变量泄露为全局变量。
        var s = 'hello';

        for (var i = 0; i < s.length; i++) {
            console.log(s[i]);
        }
        console.log(i); // 5

        //********************************************************************************************************* 
        /*
        2、ES6 的块级作用域
        let实际上为 JavaScript 新增了块级作用域。
        */
        // 代码1：==========================================================
        function f1() {
            let n = 5;
            if (true) {
              let n = 10;
            }
            console.log(n); // 5
            //外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

            // ES6 允许块级作用域的任意嵌套。
            {{{{{let insane = 'ES6 允许块级作用域的任意嵌套'}}}}};

            // 上面代码使用了一个五层的块级作用域。外层作用域无法读取内层作用域的变量。
            {{{{
                {let insane = '外层作用域无法读取内层作用域的变量'}
                console.log(insane); // 报错
            }}}};
            // 内层作用域可以定义外层作用域的同名变量。
            {{{{
                let insane = '外层作用域';
                {
                    let insane = '内层作用域可以定义外层作用域的同名变量'
                    console.log(insane); // 报错
                }
            }}}};

            // 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
            // // IIFE 写法
            // (function () {
            //     var tmp = ...;
            //     ...
            // }());
            
            // // 块级作用域写法
            // {
            //     let tmp = ...;
            //     ...
            // }
        }

        //********************************************************************************************************* 
        /*
        3、块级作用域与函数声明
        ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
        ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
        ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
        在浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。
        考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
        ES6 的块级作用域允许声明函数的规则，只在使用【大括号】的情况下成立，如果没有使用大括号，就会报错。
        */
        // 代码1：==========================================================
        // 情况一
        if (true) {
            function f() {}
        }
        
        // 情况二
        try {
            function f() {}
        } catch(e) {
            // ...
        }
        /*
        上面两种函数声明，根据 ES5 的规定都是非法的。
        但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错。
        */ 

        // 代码2：==========================================================
        // function f() { console.log('I am outside!'); }
        // //在块级作用域中声明函数
        // (function () {
        //     if (false) {
        //         // 重复声明一次函数f
        //         function f() { console.log('I am inside!'); }
        //     }
        //     f();
        // }());
        // //上面代码在 ES5 中运行，会得到“I am inside!”，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下。
        // // ES5 环境
        // function f() { console.log('I am outside!'); }

        // (function () {
        //     function f() { console.log('I am inside!'); }
        //     if (false) {
        //     }
        //     f();
        // }());
        /*
        ES6 就完全不一样了，理论上会得到“I am outside!”。因为块级作用域内声明的函数类似于let，对作用域之外没有影响。
        但是，如果你真的在 ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢？

        为了减轻因此产生的不兼容问题，ES6 在附录 B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。
            允许在块级作用域内声明函数。
            函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
            同时，函数声明还会提升到所在的块级作用域的头部。
        注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。
        */ 
       // 代码3：==========================================================
        // // 浏览器的 ES6 环境
        // function f() { console.log('I am outside!'); }

        // (function () {
        //     if (false) {
        //         // 重复声明一次函数f
        //         function f() { console.log('I am inside!'); }
        //     }
        //     f();
        // }());
        // Uncaught TypeError: f is not a function
        // 上面的代码在符合 ES6 的浏览器中，都会报错，因为实际运行的是下面的代码。

        // 浏览器的 ES6 环境
        // function f() { console.log('I am outside!'); }
        // (function () {
        //     var f = undefined;
        //     if (false) {
        //         function f() { console.log('I am inside!'); }
        //     }
        //     f();
        // }());
        // Uncaught TypeError: f is not a function

        // 代码4：==========================================================
        // // 函数声明语句
        // {
        //     let a = 'secret';
        //     function f() {
        //     return a;
        //     }
        // }
        
        // // 函数表达式:【在块级作用域中声明函数：推荐这种方式】
        // {
        //     let a = 'secret';
        //     let f = function () {
        //         return a;
        //     };
        // }

        // 代码5：==========================================================
        // 不报错
        'use strict';
        if (true) {
            function f() {}
        }

        // // 报错
        // 'use strict';
        // if (true)
        //     function f() {}


         /*
        //********************************************************************************************************* 
        三、const 命令
        //********************************************************************************************************* 
        1、基本用法
        const声明一个只读的常量。一旦声明，常量的值就不能改变。
        const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
        const的作用域与let命令相同：只在声明所在的块级作用域内有效。
        const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
        本质
        const实际上保证的，并不是变量的值不得改动，而是【变量指向的那个内存地址不得改动】。
        对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
        但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，
        至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

        如果真的想将对象冻结，应该使用Object.freeze方法。

        ES6 声明变量的六种方法
            ES5 只有两种声明变量的方法：var命令和function命令。
            ES6 除了添加let和const命令，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。
        */

        // 代码1：==========================================================
        const PI = 3.1415;
        console.log(PI)  // 3.1415
        // PI = 3;//ERROR:"PI" is read-only

        // 代码2：==========================================================
        // const foo;//Unexpected token (377:17)

        // 代码3：==========================================================
        // if (true) {
        //     const MAX = 5;
        // }
        // console.log(MAX)   //Error: MAX is not defined

        // 代码4：==========================================================
        if (true) {
            //实测不会报错？？？？？？？？
            console.log(MAX); // ReferenceError
            const MAX = 5;
        }

        // 代码5：==========================================================
        //const声明的对象或者数组，不能修改
        // const foo = {};//foo储存的是一个地址，地址只想1个对象
        // // 为 foo 添加一个属性，可以成功
        // foo.prop = 123;//
        // console.log(foo.prop); // 123
        // 将 foo 指向另一个对象，就会报错
        // foo = {}; // Error: "foo" is read-only

        // 上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。
        // 不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

        // // 另一个例子。
        // const a = [];//a是1个数组
        // a.push('Hello'); // 可执行
        // a.length = 0;    // 可执行
        // a = ['Dave'];    // 报错Error: "a" is read-only

        // 代码6：==========================================================
        //将对象冻结，应该使用Object.freeze方法。
        //常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。
        const foo = Object.freeze({});
        // 常规模式时，下面一行不起作用；
        // 严格模式时，该行会报错
        foo.prop = 123;


        /*
        //********************************************************************************************************* 
        四、顶层对象的属性
        //********************************************************************************************************* 
        顶层对象，
        在浏览器环境指的是window对象，
        在 Node 指的是global对象。
        ES5 之中，顶层对象的属性与全局变量是等价的。
        */

        // 代码1：==========================================================
        //顶层对象的属性赋值与全局变量的赋值，是同一件事。
        window.a = 1;
        console.log(a)  // 1
        a = 2;
        console.log(window.a)   // 2

        /*
        顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。
        这样的设计带来了几个很大的问题，
        首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；
        其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；
        最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。
        另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

        ES6 为了改变这一点，
        一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
        另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
        也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
        */
        // 代码1：==========================================================
        // 全局变量a由var命令声明，所以它是顶层对象的属性；
        // 全局变量b由let命令声明，所以它不是顶层对象的属性，返回undefined。
        var a = 1;
        // 如果在 Node 的 REPL 环境，可以写成 global.a
        // 或者采用通用方法，写成 this.a
        console.log(window.a) // 1

        let b = 1;
        console.log(window.b) // undefined

        /* 
        //********************************************************************************************************* 
        五、global对象
        //********************************************************************************************************* 
        ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
            浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
            浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
            Node 里面，顶层对象是global，但其他环境都不支持。

        同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。
            全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
            函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。
                但是，严格模式下，这时this会返回undefined。
            不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。
                但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。
        综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

        // 方法一
        (typeof window !== 'undefined'
        ? window
        : (typeof process === 'object' &&
            typeof require === 'function' &&
            typeof global === 'object')
            ? global
            : this);

        // 方法二
        var getGlobal = function () {
            if (typeof self !== 'undefined') { return self; }
            if (typeof window !== 'undefined') { return window; }
            if (typeof global !== 'undefined') { return global; }
            throw new Error('unable to locate global object');
        };

        现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。

        在所有环境拿到global。
        // CommonJS 的写法
        require('system.global/shim')();

        // ES6 模块的写法
        import shim from 'system.global/shim'; shim();
        
        上面代码可以保证各种环境里面，global对象都是存在的。
        // CommonJS 的写法
        var global = require('system.global')();

        // ES6 模块的写法
        import getGlobal from 'system.global';
        const global = getGlobal();
        */

        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================


        /* 
        //********************************************************************************************************* 
        五、global对象
        //********************************************************************************************************* 

        */
        // 代码1：==========================================================

        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================

        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================

        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================


        // 代码1：==========================================================
    }
    render() {
        return (
        // 尝试把`alignItems`改为`flex-start`看看
        // 尝试把`justifyContent`改为`flex-end`看看
        // 尝试把`flexDirection`改为`row`看看
        <View style={{
            flex: 1,
            flexDirection: 'column',//column
            justifyContent: 'center',
            alignItems: 'flex-end',//flex-end
            width: 300,
            height:300,
        }}>
            <Button
                onPress={()=>{this.onItemPress()}}
                title=" 点我测试 "
            />
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 100, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        );
    }
};
