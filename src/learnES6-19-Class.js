

import React, { Component } from 'react';
import { AppRegistry, View ,Button } from 'react-native';

export default class AlignItemsBasics extends Component {
    onItemPress = ()=>{
        console.log('onItemPress.....')
        this.newMethod();
    }
    newMethod() {
        /*
        简介
        严格模式
        constructor 方法
        类的实例对象
        Class 表达式
        不存在变量提升
        私有方法和私有属性
        this 的指向
        name 属性
        Class 的取值函数（getter）和存值函数（setter）
        Class 的 Generator 方法
        Class 的静态方法
        Class 的静态属性和实例属性
        new.target 属性

        */


        /* 
        //********************************************************************************************************* 
        一、简介
        //********************************************************************************************************* 
        1、JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }

                Point.prototype.toString = function () {
                    return '(' + this.x + ', ' + this.y + ')';
                };

                var p = new Point(1, 2);

        2、上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。
            ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
            基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，
            新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
            
            上面的代码用 ES6 的class改写，就是下面这样。
                //定义类
                class Point {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                    }

                    toString() {
                        return '(' + this.x + ', ' + this.y + ')';
                    }
                }
                上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。
                也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

                Point类除了构造方法，还定义了一个toString方法。
                注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。

        3、ES6 的类，完全可以看作构造函数的另一种写法。
                class Point {
                // ...
                }

                typeof Point // "function"
                Point === Point.prototype.constructor // true
                上面代码表明，类的数据类型就是函数，类本身就指向构造函数。

        4、使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。
                class Bar {
                    doStuff() {
                        console.log('stuff');
                    }
                }

                var b = new Bar();
                b.doStuff() // "stuff"
        
        5、构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
                class Point {
                    constructor() {
                        // ...
                    }

                    toString() {
                        // ...
                    }

                    toValue() {
                        // ...
                    }
                }
                // 等同于
                Point.prototype = {
                    constructor() {},
                    toString() {},
                    toValue() {},
                };

        6、在类的实例上面调用方法，其实就是调用原型上的方法。
                class B {}
                let b = new B();

                b.constructor === B.prototype.constructor // true
                上面代码中，b是B类的实例，它的constructor方法就是B类原型的constructor方法。

        7、由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
           Object.assign方法可以很方便地一次向类添加多个方法。
                class Point {
                    constructor(){
                        // ...
                    }
                }

                Object.assign(Point.prototype, {
                    toString(){},
                    toValue(){}
                });
                prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。

                Point.prototype.constructor === Point // true

        8、另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
                class Point {
                    constructor(x, y) {
                        // ...
                    }

                    toString() {
                        // ...
                    }
                }

                Object.keys(Point.prototype)
                // []
                Object.getOwnPropertyNames(Point.prototype)
                // ["constructor","toString"]
                上面代码中，toString方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。

                var Point = function (x, y) {
                // ...
                };

                Point.prototype.toString = function() {
                // ...
                };

                Object.keys(Point.prototype)
                // ["toString"]
                Object.getOwnPropertyNames(Point.prototype)
                // ["constructor","toString"]
                上面代码采用 ES5 的写法，toString方法就是可枚举的。

        9、类的属性名，可以采用表达式。
                let methodName = 'getArea';

                class Square {
                    constructor(length) {
                        // ...
                    }

                    [methodName]() {
                        // ...
                    }
                }
                上面代码中，Square类的方法名getArea，是从表达式得到的。
        */



        /* 
        //********************************************************************************************************* 
        二、严格模式
        //********************************************************************************************************* 
        类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
        只要你的代码写在类或模块之中，就只有严格模式可用。

        考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。
        */



        /* 
        //********************************************************************************************************* 
        三、constructor 方法
        //********************************************************************************************************* 
        是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
        
        1、一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
                class Point {
                }

                // 等同于
                class Point {
                    constructor() {}
                }
                上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。

        2、constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
                class Foo {
                    constructor() {
                        return Object.create(null);
                    }
                }

                new Foo() instanceof Foo
                // false
                上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。

        3、类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
                class Foo {
                    constructor() {
                        return Object.create(null);
                    }
                }

                Foo()
                // TypeError: Class constructor Foo cannot be invoked without 'new'
        */



        /* 
        //********************************************************************************************************* 
        四、类的实例对象
        //********************************************************************************************************* 
        生成类的实例对象的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。
                class Point {
                // ...
                }

                // 报错
                var point = Point(2, 3);

                // 正确
                var point = new Point(2, 3);
                
        与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
                //定义类
                class Point {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                    }

                    toString() {
                        return '(' + this.x + ', ' + this.y + ')';
                    }

                }

                var point = new Point(2, 3);

                point.toString() // (2, 3)

                point.hasOwnProperty('x') // true
                point.hasOwnProperty('y') // true
                point.hasOwnProperty('toString') // false
                point.__proto__.hasOwnProperty('toString') // true
                上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，
                而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。

        与 ES5 一样，类的所有实例共享一个原型对象。
                var p1 = new Point(2,3);
                var p2 = new Point(3,2);

                p1.__proto__ === p2.__proto__
                //true
                上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。

        这也意味着，可以通过实例的__proto__属性为“类”添加方法。
                __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，
                虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，
                但依旧不建议在生产中使用该属性，避免对环境产生依赖。
                生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

                var p1 = new Point(2,3);
                var p2 = new Point(3,2);

                p1.__proto__.printName = function () { return 'Oops' };

                p1.printName() // "Oops"
                p2.printName() // "Oops"

                var p3 = new Point(4,2);
                p3.printName() // "Oops"
                上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。
                而且，此后新建的实例p3也可以调用这个方法。
                这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
        */


        /* 
        //********************************************************************************************************* 
        五、Class 表达式
        //********************************************************************************************************* 
        与函数一样，类也可以使用表达式的形式定义。
                const MyClass = class Me {
                    getClassName() {
                        return Me.name;
                    }
                };
                上面代码使用表达式定义了一个类。
                需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类。

                let inst = new MyClass();
                inst.getClassName() // Me
                Me.name // ReferenceError: Me is not defined
                上面代码表示，Me只在 Class 内部有定义。

                如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。

                const MyClass = class { };
                
        采用 Class 表达式，可以写出立即执行的 Class。
                let person = new class {
                    constructor(name) {
                        this.name = name;
                    }

                    sayName() {
                        console.log(this.name);
                    }
                }('张三');

                person.sayName(); // "张三"
                上面代码中，person是一个立即执行的类的实例。
        */



        /* 
        //********************************************************************************************************* 
        六、不存在变量提升
        //********************************************************************************************************* 
        类不存在变量提升（hoist），这一点与 ES5 完全不同。
                new Foo(); // ReferenceError
                class Foo {}
                上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。
                这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

                {
                    let Foo = class {};
                    class Bar extends Foo {
                }
                }
                上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。
                但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，
                所以导致Bar继承Foo的时候，Foo还没有定义。
        */



        /* 
        //********************************************************************************************************* 
        七、私有方法和私有属性
        //********************************************************************************************************* 
        1、现有的方法：
        私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。
            方法1：是在命名上加以区别。
                class Widget {
                    // 公有方法
                    foo (baz) {
                        this._bar(baz);
                    }

                    // 私有方法
                    _bar(baz) {
                        return this.snaf = baz;
                    }
                    // ...
                }
                上面代码中，_bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。
                但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。

            方法2：就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
                class Widget {
                    foo (baz) {
                        bar.call(this, baz);
                    }

                    // ...
                }

                function bar(baz) {
                    return this.snaf = baz;
                }
                上面代码中，foo是公有方法，内部调用了bar.call(this, baz)。这使得bar实际上成为了当前模块的私有方法。

            方法3：利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
                const bar = Symbol('bar');
                const snaf = Symbol('snaf');

                export default class myClass{
                    // 公有方法
                    foo(baz) {
                        this[bar](baz);
                    }

                    // 私有方法
                    [bar](baz) {
                        return this[snaf] = baz;
                    }

                    // ...
                };
                上面代码中，bar和snaf都是Symbol值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。

        2、私有属性的提案
            A、与私有方法一样，ES6 不支持私有属性。目前，有一个提案，为class加了私有属性。方法是在属性名之前，使用#表示。
                class Point {
                    #x;

                    constructor(x = 0) {
                        #x = +x; // 写成 this.#x 亦可
                    }

                    get x() { return #x }
                    set x(value) { #x = +value }
                }
                上面代码中，#x就是私有属性，在Point类之外是读取不到这个属性的。
                由于井号#是属性名的一部分，使用时必须带有#一起使用，所以#x和x是两个不同的属性。

            B、私有属性可以指定初始值，在构造函数执行时进行初始化。
                class Point {
                    #x = 0;
                    constructor() {
                        #x; // 0
                    }
                }
                之所以要引入一个新的前缀#表示私有属性，而没有采用private关键字，是因为 
                JavaScript 是一门动态语言，使用独立的符号似乎是唯一的可靠方法，能够准确地区分一种属性是否为私有属性。
                另外，Ruby 语言使用@表示私有属性，ES6 没有用这个符号而使用#，是因为@已经被留给了 Decorator。

            C、这种写法不仅可以写私有属性，还可以用来写私有方法。
                class Foo {
                    #a;
                    #b;
                    #sum() { return #a + #b; }
                    printSum() { console.log(#sum()); }
                    constructor(a, b) { #a = a; #b = b; }
                }
                上面代码中，#sum()就是一个私有方法。

            D、另外，私有属性也可以设置 getter 和 setter 方法。
                class Counter {
                    #xValue = 0;

                    get #x() { return #xValue; }
                    set #x(value) {
                        this.#xValue = value;
                    }

                    constructor() {
                        super();
                        // ...
                    }
                }
                上面代码中，#x是一个私有属性，它的读写都通过get #x()和set #x()来完成。

        */



        /* 
        //********************************************************************************************************* 
        八、this 的指向
        //********************************************************************************************************* 
        类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
                class Logger {
                    printName(name = 'there') {
                        this.print(`Hello ${name}`);
                    }

                    print(text) {
                        console.log(text);
                    }
                }

                const logger = new Logger();
                const { printName } = logger;
                printName(); // TypeError: Cannot read property 'print' of undefined
                上面代码中，printName方法中的this，默认指向Logger类的实例。
                但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。

            一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。
                class Logger {
                    constructor() {
                        this.printName = this.printName.bind(this);
                    }

                    // ...
                }

            另一种解决方法是使用箭头函数。
                class Logger {
                    constructor() {
                        this.printName = (name = 'there') => {
                            this.print(`Hello ${name}`);
                        };
                    }

                    // ...
                }

            还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this。
                function selfish (target) {
                    const cache = new WeakMap();
                    const handler = {
                        get (target, key) {
                            const value = Reflect.get(target, key);
                            if (typeof value !== 'function') {
                                return value;
                            }
                            if (!cache.has(value)) {
                                cache.set(value, value.bind(target));
                            }
                            return cache.get(value);
                        }
                    };
                    const proxy = new Proxy(target, handler);
                    return proxy;
                }

                const logger = selfish(new Logger());
        */



        /* 
        //********************************************************************************************************* 
        九、name 属性
        //********************************************************************************************************* 
        由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
                class Point {}
                Point.name // "Point"
                name属性总是返回紧跟在class关键字后面的类名。
        */


        /* 
        //********************************************************************************************************* 
        十、Class 的取值函数（getter）和存值函数（setter）
        //********************************************************************************************************* 
        与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
                class MyClass {
                    constructor() {
                        // ...
                    }
                    get prop() {
                        return 'getter';
                    }
                    set prop(value) {
                        console.log('setter: '+value);
                    }
                }

                let inst = new MyClass();

                inst.prop = 123;
                // setter: 123

                inst.prop
                // 'getter'
                上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。

        存值函数和取值函数是设置在属性的 Descriptor 对象上的。
                class CustomHTMLElement {
                    constructor(element) {
                        this.element = element;
                    }

                    get html() {
                        return this.element.innerHTML;
                    }

                    set html(value) {
                        this.element.innerHTML = value;
                    }
                }

                var descriptor = Object.getOwnPropertyDescriptor(
                    CustomHTMLElement.prototype, "html"
                );

                "get" in descriptor  // true
                "set" in descriptor  // true
                上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与 ES5 完全一致。
        */



        /* 
        //********************************************************************************************************* 
        十一、Class 的 Generator 方法
        //********************************************************************************************************* 
        如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
                class Foo {
                    constructor(...args) {
                        this.args = args;
                    }
                    * [Symbol.iterator]() {
                        for (let arg of this.args) {
                            yield arg;
                        }
                    }
                }

                for (let x of new Foo('hello', 'world')) {
                    console.log(x);
                }
                // hello
                // world
                上面代码中，Foo类的Symbol.iterator方法前有一个星号，表示该方法是一个 Generator 函数。
                Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器。
        */



        /* 
        //********************************************************************************************************* 
        十二、Class 的静态方法
        //********************************************************************************************************* 
        类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
        如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
                class Foo {
                    static classMethod() {
                        return 'hello';
                    }
                }

                Foo.classMethod() // 'hello'

                var foo = new Foo();
                foo.classMethod()
                // TypeError: foo.classMethod is not a function
                上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，
                可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。
                如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

            注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
                class Foo {
                    static bar () {
                        this.baz();
                    }
                    static baz () {
                        console.log('hello');
                    }
                    baz () {
                        console.log('world');
                    }
                }

                Foo.bar() // hello
                上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，
                等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。

            父类的静态方法，可以被子类继承。
                class Foo {
                    static classMethod() {
                        return 'hello';
                    }
                }

                class Bar extends Foo {
                }

                Bar.classMethod() // 'hello'
                上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。

            静态方法也是可以从super对象上调用的。
                class Foo {
                    static classMethod() {
                        return 'hello';
                    }
                }

                class Bar extends Foo {
                    static classMethod() {
                        return super.classMethod() + ', too';
                    }
                }

                Bar.classMethod() // "hello, too"
        */

   


        /* 
        //********************************************************************************************************* 
        
        十三、Class 的静态属性和实例属性
        //********************************************************************************************************* 
        静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
                class Foo {
                }

                Foo.prop = 1;
                Foo.prop // 1
                上面的写法为Foo类定义了一个静态属性prop。

        目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
                // 以下两种写法都无效
                class Foo {
                    // 写法一
                    prop: 2

                    // 写法二
                    static prop: 2
                }

                Foo.prop // undefined
                
        目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法。
        （1）类的实例属性
                类的实例属性可以用等式，写入类的定义之中。
                class MyClass {
                    myProp = 42;

                    constructor() {
                        console.log(this.myProp); // 42
                    }
                }
                上面代码中，myProp就是MyClass的实例属性。在MyClass的实例上，可以读取这个属性。

            以前，我们定义实例属性，只能写在类的constructor方法里面。
                class ReactCounter extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {
                            count: 0
                        };
                    }
                }
                上面代码中，构造方法constructor里面，定义了this.state属性。

            有了新的写法以后，可以不在constructor方法里面定义。
                class ReactCounter extends React.Component {
                    state = {
                        count: 0
                    };
                }
                这种写法比以前更清晰。

                为了可读性的目的，对于那些在constructor里面已经定义的实例属性，新写法允许直接列出。
                class ReactCounter extends React.Component {
                    state;
                    constructor(props) {
                        super(props);
                        this.state = {
                        count: 0
                        };
                    }
                }
        （2）类的静态属性
                类的静态属性只要在上面的实例属性写法前面，加上static关键字就可以了。
                class MyClass {
                    static myStaticProp = 42;

                    constructor() {
                        console.log(MyClass.myStaticProp); // 42
                    }
                }
                同样的，这个新写法大大方便了静态属性的表达。

                // 老写法
                class Foo {
                    // ...
                }
                Foo.prop = 1;

                // 新写法
                class Foo {
                    static prop = 1;
                }
                上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。
                这样让人很容易忽略这个静态属性，也不符合相关代码应该放在一起的代码组织原则。
                另外，新写法是显式声明（declarative），而不是赋值处理，语义更好。
        */


        /* 
        //********************************************************************************************************* 
        十四、new.target 属性
        //********************************************************************************************************* 
        new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，
        该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。
        如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
                function Person(name) {
                    if (new.target !== undefined) {
                        this.name = name;
                    } else {
                        throw new Error('必须使用 new 命令生成实例');
                    }
                }

                // 另一种写法
                function Person(name) {
                    if (new.target === Person) {
                        this.name = name;
                    } else {
                        throw new Error('必须使用 new 命令生成实例');
                    }
                }

                var person = new Person('张三'); // 正确
                var notAPerson = Person.call(person, '张三');  // 报错
                上面代码确保构造函数只能通过new命令调用。

         Class 内部调用new.target，返回当前 Class。
                class Rectangle {
                    constructor(length, width) {
                        console.log(new.target === Rectangle);
                        this.length = length;
                        this.width = width;
                    }
                }

                var obj = new Rectangle(3, 4); // 输出 true
                
        需要注意的是，子类继承父类时，new.target会返回子类。
                class Rectangle {
                    constructor(length, width) {
                        console.log(new.target === Rectangle);
                        // ...
                    }
                }

                class Square extends Rectangle {
                    constructor(length) {
                        super(length, length);
                    }
                }

                var obj = new Square(3); // 输出 false
                上面代码中，new.target会返回子类。

        利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
                class Shape {
                    constructor() {
                        if (new.target === Shape) {
                            throw new Error('本类不能实例化');
                        }
                    }
                }

                class Rectangle extends Shape {
                    constructor(length, width) {
                        super();
                        // ...
                    }
                }

                var x = new Shape();  // 报错
                var y = new Rectangle(3, 4);  // 正确
                上面代码中，Shape类不能被实例化，只能用于继承。

                注意，在函数外部，使用new.target会报错。
        */

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
