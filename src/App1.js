/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// const testText = Platform.select({
//   ios: '您好，我是测试,\n' +'React Navtive程序界面ios版',
//   android: '您好，我是,\n' +'React Navtive程序界面安卓版',
// });

// type Props = {};
// export default class App extends Component<Props> {
// // export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Text style={styles.instructions}>
//           我是刚加的测试文字
//         </Text>
//         <Text style={styles.instructions}>
//           我是刚加的测试文字2222
//         </Text>
//         <Text style={styles.welcome}>
//           {testText}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'left',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// ============================================================================================================================================
// 1、hello world 程序
// import { Text } from 'react-native';
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

// ============================================================================================================================================
// // 2、加载一个图片
// import { Image } from 'react-native';
// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     );
//   }
// }

// ============================================================================================================================================
// 3、请注意{pic}外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中。括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
//  因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
// 自定义的组件也可以使用props。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。
// 只需在render函数中引用this.props，然后按需处理即可。
// 下面是一个例子：
// import { Text, View } from 'react-native';
// //自定义组建使用this.props：提高代码复用
// class Greeting extends Component {
//   render() {
//     return (
//       <Text>您好， {this.props.name}!</Text>
//     );
//   }
// }
// //自定义组建使用this.props
// class HSJTest extends Component{
//   render(){
//     return(
//       <Text> 您好，{this.props.name}!</Text>
//     )
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//         <HSJTest name='胡仕君'/>
//         <HSJTest name='卜凡彬'/>
//         <HSJTest name='崔 坤'/>
//       </View>
//     );
//   }
// }

// ============================================================================================================================================
// 4、state(状态)
/*
我们使用两种数据来控制一个组件：props和state。
    props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 
    对于需要改变的数据，我们需要使用state。

一般来说，你需要在constructor中初始化state（译注：这是ES6的写法，早期的很多ES5的例子使用的是getInitialState方法来初始化state，这一做法会逐渐被淘汰），
然后在需要修改时调用setState方法。

假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个prop。
而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到state中。
*/ 
// import { Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };

//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }

//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
/*
实际开发中，我们一般不会在定时器函数（setInterval、setTimeout等）中来操作state。
典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。
你也可以使用一些“状态容器”比如Redux来统一管理数据流（译注：但我们不建议新手过早去学习redux）。
*/

// ============================================================================================================================================
// 5、样式
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
// // 建议使用StyleSheet.create来集中定义组件的样式。
// // 常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);

// ============================================================================================================================================
// 6、高度与宽度
/*
6.1 指定宽高
最简单的给组件设定尺寸的方式就是在样式中指定固定的width和height。React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
*/
// import { AppRegistry, View } from 'react-native';

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

/*
6.2 弹性（Flex）宽高

在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。

组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
*/
// import { AppRegistry, View } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       // <View style={{flex: 1}}>
//       //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//       //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//       //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       // </View>
//     //去掉父View中的`flex: 1`。
//     //   <View>
//     //     <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//     //     <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//     //     <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//     // </View>
//     // 用`height: 300`来代替父View的`flex: 1`试试看？
//     <View style={{height:300}}>
//       <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//       <View style={{flex: 5, backgroundColor: 'skyblue'}} />
//       <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//     </View>
//     );
//   }
// };

// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);

// ============================================================================================================================================
// 7、使用Flexbox布局
/*
我们在React Native中使用flexbox规则来指定某个组件的子元素的布局。Flexbox可以在不同屏幕尺寸上提供一致的布局结构。
一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。译注：这里有一份简易布局图解，可以给你一个大概的印象。
React Native中的Flexbox的工作原理和web上的CSS基本一致，当然也存在少许差异。首先是默认值不同：flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
 */
/*
7.1 Flex Direction

在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。
*/
// import { AppRegistry, View } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

// 7.2 Justify Content
/*
在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
*/

// import { AppRegistry, View } from 'react-native';

// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

// 7.3 AlignItems
/*
在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
*/

// import { AppRegistry, View } from 'react-native';

// export default class AlignItemsBasics extends Component {
//   render() {
//     return (
//       // 尝试把`alignItems`改为`flex-start`看看
//       // 尝试把`justifyContent`改为`flex-end`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);


// ============================================================================================================================================
// 8、处理文本输入
/*
TextInput是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。

假如我们要实现当用户输入时，实时将其以单词为单位翻译为另一种文字。
我们假设这另一种文字来自某个吃货星球，只有一个单词： 🍕。所以"Hello there Bob"将会被翻译为"🍕🍕🍕"。
*/


// import { AppRegistry, Text, TextInput, View } from 'react-native';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
// 在上面的例子里，我们把text保存到state中，因为它会随着时间变化。

// ============================================================================================================================================
// 9、如何使用滚动视图
/*
ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。
ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。

下面的示例代码创建了一个垂直滚动的ScrollView，其中还混杂了图片和文字组件。
注：下面的这个./img/favicon.png并不实际存在，请自己准备图片素材，并改为相对应的正确路径
*/

// import{ ScrollView, Image, Text, View } from 'react-native'

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return(
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
// ScrollView适合用来显示数量不多的滚动元素。放置在ScollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。
// 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。下面我们来看看如何使用ListView。

// ============================================================================================================================================
// 10、如何使用长列表
/*
React Native提供了几个适用于展示长列表数据的组件，一般而言我们会选用FlatList或是SectionList。

10.1 FlatList组件
FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。
FlatList更适于长列表数据，且元素个数可以增删。和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
FlatList组件必须的两个属性是data和renderItem。
data是列表的数据源，
而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

下面的例子创建了一个简单的FlatList，并预设了一些模拟数据。
首先是初始化FlatList所需的data，其中的每一项（行）数据之后都在renderItem中被渲染成了Text组件，最后构成整个FlatList。
*/
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// 10.2 SectionList组件
// 如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择.

import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
// 列表的一个常用场景就是从服务器端取回列表数据然后显示，要实现这一过程，你可能还需要学习React Native的网络相关用法.

// ============================================================================================================================================
// 11、网络请求【Fetch】【XMLHttpRequest(即俗称的ajax)】

// import {AppRegistry, View, Text, StyleSheet, TouchableHighlight} from 'react-native';

// var postUrl = "http://project.lanou3g.com/projects/bj/reactnative/login.php"; 
// export default class Fetch extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableHighlight
//                     underlayColor='rgb(210,260,260)'
//                     style={{padding: 10, marginTop: 100, borderRadius: 5,borderColor:1}}
//                     onPress={this.getRequest}
//                 >
//                     <Text style={{fontSize:50}}>Get请求</Text>
//                 </TouchableHighlight>

//                 <TouchableHighlight
//                     underlayColor='rgb(210,260,260)'
//                     style={{padding: 10, marginTop: 100, borderRadius: 5,borderColor:1}}
//                     onPress={this.postRequest.bind(this,postUrl)}
//                 >
//                     <Text style={{fontSize:50}}>Post请求</Text>
//                 </TouchableHighlight>
//             </View>
            
//         );
//     }

//     //其他方法名字必须跟render方法同级别
//     //get请求
//     getRequest() {
//       //11.1 发起网络请求
//         // fetch('https://mywebsite.com/mydata.json')

//         // Fetch还有可选的第二个参数，可以用来定制HTTP请求一些参数。你可以指定header参数，或是指定使用POST方法，又或是提交数据等等：
//         // fetch('https://mywebsite.com/endpoint/', {
//         //   method: 'POST',
//         //   headers: {
//         //       'Accept': 'application/json',
//         //       'Content-Type': 'application/json',
//         //   },
//         //   body: JSON.stringify({
//         //       firstParam: 'yourValue',
//         //       secondParam: 'yourOtherValue',
//         //   })
//         // })


//         // fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
//         //     method: 'GET',
//         //     headers: {
//         //       'Accept': 'application/json',
//         //       'Content-Type': 'application/json',
//         //   },
//         // }).then((response) => {
//         //     console.log(response);//1
//         // }).catch((err) => {//2
//         //     console.error(err);
//         // });

//           /*网络请求的配置*/  
//         var opts = {  
//           method:"GET"  
//         }  
//         let url = 'http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32';
//         fetch(url,opts)  
//           .then((response) => {  
//               return response.text();  
//           })  
//           .then((responseText) => {  
//               alert(responseText);  
//           })  
//           .catch((error) =>{  
//               alert(error);  
//           })  
//     }

//     //post请求
//     postRequest(url){  
//       let formData = new FormData();  
//       formData.append("username","SuperBigLw");  
//       formData.append("password","123456");  
//       var opts = {  
//           method:"POST",  
//           body:formData  
//       }  
//       fetch(url,opts)  
//           .then((response) => {  
//               return response.text();  
//           })  
//           .then((responseText) => {  
//               alert(responseText);  
//           })  
//           .catch((error) => {  
//               alert(error)  
//           })  
//     }  


//  11.2  处理服务器的响应数据
// 上面的例子演示了如何发起请求。很多情况下，你还需要处理服务器回复的数据。
// 网络请求天然是一种异步操作。Fetch 方法会返回一个Promise，这种模式可以简化异步风格的代码
  // getMoviesFromApiAsync() {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.movies;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // // 你也可以在React Native应用中使用ES7标准中的async/await 语法：
  // // 注意这个方法前面有async关键字
  // async getMoviesFromApi() {
  //   try {
  //     // 注意这里的await语句，其所在的函数必须有async关键字声明
  //     let response = await fetch('https://facebook.github.io/react-native/movies.json');
  //     let responseJson = await response.json();
  //     return responseJson.movies;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
  // 别忘了catch住fetch可能抛出的异常，否则出错时你可能看不到任何提示。
  // 默认情况下，iOS会阻止所有非https的请求。如果你请求的接口是http协议，那么首先需要添加一个App Transport Security的例外，详细可参考这篇帖子。
// }
// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         color:'red'
//     }
// });
// AppRegistry.registerComponent('AwesomeProject', () => Fetch);

// 11.3 使用其他的网络库【即原始的ajax请求】
// React Native中已经内置了XMLHttpRequest API(也就是俗称的ajax)。
// 一些基于XMLHttpRequest封装的第三方库也可以使用，例如frisbee或是axios等。
// 但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西（所以也不是所有web中的ajax库都可以直接使用）。
// var request = new XMLHttpRequest();
// request.onreadystatechange = (e) => {
//   if (request.readyState !== 4) {
//     return;
//   }

//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error');
//   }
// };

// request.open('GET', 'https://mywebsite.com/endpoint/');
// request.send();
// 需要注意的是，安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制。

// 11.4 WebSocket支持
// React Native还支持WebSocket，这种协议可以在单个TCP连接上提供全双工的通信信道。

// var ws = new WebSocket('ws://host.com/path');
// ws.onopen = () => {
//   // 打开一个连接
//   ws.send('something'); // 发送一个消息
// };
// ws.onmessage = (e) => {
//   // 接收到了一个消息
//   console.log(e.data);
// };
// ws.onerror = (e) => {
//   // 发生了一个错误
//   console.log(e.message);
// };
// ws.onclose = (e) => {
//   // 连接被关闭了
//   console.log(e.code, e.reason);
// };