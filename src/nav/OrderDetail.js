// 首页信息界面--push的新界面

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';

//add a ChatScreen
export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `订单详情${navigation.state.params.user}`,
        gesturesEnabled:false,//禁止滑动返回
    });
    render() {
        const { pushToDetail } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text style={styles.welcome}>订单详情： {params.user}</Text>
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