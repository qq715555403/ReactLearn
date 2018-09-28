
// 首页信息界面

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';

//此处如何将样式统一到一个外部文件中，还不知道如何实现？？？？？？？？？？？？？？？？？？？？？？？？？
// import StyleTest from './StyleTest';

export default class HomeScreen extends React.Component {
    onPushNew = ()=>{
        const { navigate } = this.props.navigation;
        console.log('1111111')
        navigate('OrderList', {user:'首页传的'})
    }
    // newMethod() {
    //     const { navigate } = this.props.navigation;
    //     console.log('22222222')
    //     navigate('OrderList', {user:'首页传的'})
    // }
    static navigationOptions = {
        title: '首页',
        // header: //导航栏设置对象
        headerTitle: 'TEST',//导航栏的标题, 可以是字符串也可以是个组件
        headerBackTitle: '返回首页',//左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值
        headerRight: (
            <View>
                <Button
                    title='右按钮' 
                    onPress={()=>onPushNew()}
                />
            </View>

        ),//导航栏右按钮
        headerLeft: (
            <View>
                <Button
                    title='左按钮' 
                    onPress={()=>alert('您好，我是左边的按钮')}
                />
            </View>
        ),//导航栏左按钮
        headerStyle:{
            backgroundColor:'#fff'
        },//导航栏的style
        headerTitleStyle:{
            color:'green',
            textAlign:'center',
        }, //导航栏的title的style
        headerTintColor: 'red',//导航栏字体的颜色
        // headerPressColorAndroid ：//按压返回按钮显示的颜色 安卓系统 >= 5.0才有效。
        gesturesEnabled:true,//是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.text}>我靠，这React-native的坑，真的是太深了，掉进去，爬不出来</Text>
                {/* 点击的时候，跳转到 Chat界面，Chat是在app.js中定义的子界面名字*/}
                <Button
                    onPress={() => navigate('OrderList', {user:'首页传的'})}
                    title="点我跳转到新界面"
                />
            </View>
        );
    }
}

//定义text的风格
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        backgroundColor: 'yellow',
        margin: 10,
    }
});
