

// 首页信息界面--push的新界面

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';

// 订单列表界面：
export default class OrderList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        // console:log('---------navigation------------>'),
        // console:log(navigation),

        title: `订单列表：${navigation.state.params.user}`,
        headerBackTitle:'返回列表',
        gesturesEnabled:true,
    });
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        // navigate 是什么鬼 就是下面的这块代码 可见 navigate 是个function对象 参数一 是要跳转的页面名字 例如：Chat 参数2:要传递的参数 参数3: 一般不用
        // function navigate(routeName, params, action) {
        //    return navigation.dispatch(_NavigationActions2.default.navigate({
        //      routeName: routeName,
        //      params: params,
        //      action: action
        //    }));

        return (
            <View>
                <Text style={styles.welcome}>列表界面： {params.user}</Text>

                {/* 这里说明下：控件输入之后回车到下一行的时候，ide才会提示 */}
                <Button 
                    onPress ={()=> navigate('OrderDetail',{user:'列表传入'})}
                    title = '点击我进入详情' 
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
        fontSize: 30,
        backgroundColor: 'red',
        margin: 10,
    }
});