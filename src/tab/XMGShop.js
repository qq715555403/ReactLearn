import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';

export default class HomeScreen extends React.Component {
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