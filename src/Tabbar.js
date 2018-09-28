import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import {TabNavigator} from 'react-navigation';

// MyHomeScreen =================================================================================
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
     <View>
          <Image
             source={require('./img/icon_1.png')}
             style={styles.icon}
          />
     </View>  
    ),
  };

  onItemPress = ()=>{
    console.log('1111111')
    this.newMethod();
    console.log('22222222')

    console.log(b);
    console.log(a);

  }
  newMethod() {
    // this.props.navigation.navigate('Notifications');

    let a = 10;
    var b = 1;
  }

  render() {
    return (
      <Button
        onPress={()=>{this.onItemPress()}}
        title=" home "
      />
    );
  }
}

// MyNotificationsScreen =================================================================================
class MyNotificationsScreen extends React.Component {
  onOrderBtnClick = ()=>{
    console.log('3333333')
    this.goBackBefore()
    console.log('4444444')
  }

  goBackBefore(){
    this.props.navigation.goBack();
  }
  render() {
    return (
      <Button
        onPress={()=>{this.onOrderBtnClick()}}
        title="notifications"
      />
    );
  }
}

MyNotificationsScreen.navigationOptions = {
	//tab标签
    tabBarLabel: '订单信息',
    tabBarIcon: ({ tintColor }) => (
      <View>
          <Image
             source={require('./img/icon_1.png')}
             style={styles.icon}
            //  style={[styles.icon, {tintColor: tintColor}]}
          />
     </View>  
    ),
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
});

// MyFirstProject入口 =================================================================================
const MyFirstProject = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {

  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  //// tabBar 显示的位置 ，android 默认是显示在页面顶端的 
  tabBarPosition: 'bottom',
  animationEnabled: false, // 切换页面时是否有动画效果
  swipeEnabled: false, // 是否可以左右滑动切换tab 如果设置这个属性，这事例中下面设置的按钮 Go back home | Go to notifications就不好使了
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转 
  //第一次加载时，显示的tab
  initialRouteName : 'Notifications',
  tabBarOptions: {
          activeTintColor: '#fff', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          showLabel: true, // android 是否展现文字 默认 true 
          upperCaseLabel : false, //android 文字是否需要大写 默认true 
          pressColor : 'blue', // android 按压时显示的颜色 
          scrollEnabled : false,
          indicatorStyle: {
              height: 2  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          }, 
          style: {
              backgroundColor: '#ff6449', // TabBar 背景色
              // height: 50,
          },
          labelStyle: {
              fontSize: 15, // 文字大小
              paddingTop:0,
              marginTop:0,
          },
          tabStyle:{
              marginTop:10,
              height: 50,
          },
  },
});

export default MyFirstProject;  
// AppRegistry.registerComponent('JZGRNAppOne', () => MyFirstProject);