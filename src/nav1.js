/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu22222',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
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
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// ============================================================================================================================================
// 1、使用导航器跳转页面
/*
本文档总结对比了React Native中现有的几个导航组件。
如果你刚开始接触，那么直接选择React Navigation就好。
如果你只针对iOS平台开发，并且想和系统原生外观一致，那么可以选择NavigatorIOS。
Navigator，这个老组件会逐步被React Navigation替代，但是它经历了长期的实践，较为稳定。
过去还有一个实验性的导航器组件NavigationExperimental，这个组件已经完全弃用。
译注：
从0.44版本开始，Navigator被从react native的核心组件库中剥离到了一个名为react-native-deprecated-custom-components的单独模块中。
如果你需要继续使用Navigator，则需要先npm i facebookarchive/react-native-custom-components安装，
然后从这个模块中import，即import { Navigator } from 'react-native-deprecated-custom-components'.

1.1 React Navigation
首先是在你的应用中安装此库：
yarn add react-navigation

*/

// 然后你就可以快速创建一个有两个页面（Main和Profile）的应用了：
// import {StackNavigator,} from 'react-navigation';

// const App = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: ProfileScreen},
// });
// // 其中每一个screen组件都可以单独设置导航选项，例如导航头的标题。还可以使用navigation属性中的方法去跳转到别的页面：
// export default class MainScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Text>
//         <Button  title="Go to Jane's profile" onPress={() =>navigate('Profile', { name: 'Jane' })}/>
//       </Text>
//     );
//   }
// }

/*
1.2  NavigatorIOS
如果你只针对iOS平台开发，那么可以考虑使用NavigatorIOS。它是基于 UINavigationController封装的，所以看起来很像。
用法类似Navigator，NavigatorIOS也使用路由对象来描述场景，但有一些重要区别。
其中要渲染的组件在路由对象的component字段中指定，要给目标组件传递的参数则写在passProps中。
被渲染的component都会自动接受到一个名为navigator的属性，你可以直接调用此对象(this.props.navigator)的push和pop方法。

由于NavigatorIOS使用的是原生的UIKit导航，所以它会自动渲染一个带有返回按钮和标题的导航栏。
 */
// import React, { Component, PropTypes } from 'react';
// import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';

// export default class NavigatorIOSApp extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: MyScene,
//           title: 'My Initial Scene',
//         }}
//         style={{flex: 1}}
//       />
//     )
//   }
// }

// class MyScene extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     navigator: PropTypes.object.isRequired,
//   }

//   constructor(props, context) {
//     super(props, context);
//     this._onForward = this._onForward.bind(this);
//   }

//   _onForward() {
//     this.props.navigator.push({
//       title: 'Scene ' + nextIndex,
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Text>Current Scene: { this.props.title }</Text>
//         <TouchableHighlight onPress={this._onForward}>
//           <Text>Tap me to load the next scene</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

import React from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';
//导入StackNavigator这个组件
import { StackNavigator } from 'react-navigation';

//这里特别注意：必须是相对路径：比如：这里的路径不能是：'./src/home/HomeScreen'
//如果是在当前目录的同级目录下的其他目录下的文件，需要使用‘./’,如果是在当前目录的同级目录以上的目录中，需要使用‘../’
import HomeScreen from './nav/HomeScreen';
import OrderList from './nav/OrderList';
import OrderDetail from './nav/OrderDetail'

//方法1：在外层直接用对象HomeScreen的navigationOptions属性，设置导航栏信息
// HomeScreen.navigationOptions = {  
//     title: '欢迎来到精真估',  
// };  
//方法2：在HomeScreen.js文件内部，通过如下方式设置：
// static navigationOptions = {
//     title: '欢迎来到精真估',  
// }

// API Definition--StackNavigator(RouteConfigs, StackNavigatorConfig); 
//HomeScreen和ChatScreen的代码放到单独的js文件中：可以理解为单独的界面独立一个js文件
// Simple 是你的react native 项目名  注意： 这块代码要放置到HomeScreen，OrderList...的下面否则会出错：Home不存在。
const Simple = StackNavigator(
    //RouteConfigs
    {
     Home: { screen: HomeScreen },//首页
     OrderList: { 
        screen: OrderList,// // 当StackNavigator加载`OrderList`时，它将被赋予一个`navigation` prop。
        // path: 'people/:username', //可选：当在Web应用程序中进行深度链接或使用react-navigation时，将使用以下路径：操作和路由参数是从路径中提取的。
        // navigationOptions: ({navigation}) => ({ // 可选项: 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 
        //     title: '订单列表外层设置', 
        // }), 
     },//订单列表
     OrderDetail: { screen: OrderDetail}//订单详情
    },
    //StackNavigatorConfig
    {
        initialRouteName: 'Home', // 设置默认的页面组件，必须是上面已注册的页面组件
        initialRouteParams:'',//初始路由的参数
        // navigationOptions:'',// 屏幕导航的默认选项；对所有的screen的默认配置。 
        // paths: '',//RouteConfigs里面路径设置的映射；对所有路由的path属性的默认配置。 
        mode: 'card',//页面切换模式:card: 普通app常用的左右切换;modal:上下切换
                    //定义渲染风格，enum（card(IOS、Android都可以)、modal（仅IOS））。 
        headerMode: 'screen',//导航栏的显示模式:enum（float、screen、none）
                    // float: 无透明效果, 默认
                    // screen: 有渐变透明效果, 如微信QQ的一样
                    // none: 隐藏导航栏
        cardStyle: '',//样式；Use this prop to override or extend the default style for an individual card in stack. 
        // transitionConfig:''//Function to return an object that overrides default screen transitions. 
        onTransitionStart: ()=>{ console.log('导航栏切换开始'); }, //页面切换开始时的回调函数
        onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }, //页面切换结束时的回调函数
    }
);

 //表示输出的意思
export default Simple; 

// ============================================================================================================================================
// 1、使用导航器跳转页面
/*

*/
