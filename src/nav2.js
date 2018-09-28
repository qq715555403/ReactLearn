/** 
 * 
 * 一个StackNavigator详细的例子，效果：1个主页面，2个子页面，每个页面有三个按钮，可以跳转到相应的页面。 
 React Navigation -- StackNavigator: 
 API Definition：
 StackNavigator(RouteConfigs, StackNavigatorConfig); 
 一、RouteConfigs--StackNavigator({ 
  // For each screen that you can navigate to, create a new entry like this: 
  Profile: { 
    screen: ProfileScreen, // `ProfileScreen` is a React component that will be the main content of the screen. 
            // 当StackNavigator加载`ProfileScreen`时，它将被赋予一个`navigation` prop。
    path: 'people/:username', //可选：当在Web应用程序中进行深度链接或使用react-navigation时，将使用以下路径：操作和路由参数是从路径中提取的。
    navigationOptions: ({navigation}) => ({ // Optional: Override the `navigationOptions` for the screen 
      title: `${navigation.state.params.username}'s Profile'`, 
    }), 
  }, 
  ...MyOtherRoutes, 
}); 
 
 二、StackNavigatorConfig-- 
    initialRouteName:默认路由，就是第一个要显示的页面。 
    initialRouteParams； 
    navigationOptions:对所有的screen的默认配置。 
    paths：对所有路由的path属性的默认配置。 
    mode：定义渲染风格，enum（card(IOS、Android都可以)、modal（仅IOS））。 
    headerMode：enum（float、screen、none）。 
    cardStyle：Use this prop to override or extend the default style for an individual card in stack. 
    transitionConfig：Function to return an object that overrides default screen transitions. 
    onTransitionStart：Function to be invoked when the card transition animation is about to start. 
    onTransitionEnd：Function to be invoked once the card transition animation completes. 
 
 三、Screen Navigation Options: 
    title: Generic title that can be used as a fallback for headerTitle and tabBarLabel。 
    headerRight：React Element to display on the right side of the header。 
    header 
    headerTitle 
    headerBackTitle：Title string used by the back button on iOS or null to disable 
    label. Defaults to scene title。 
    headerTruncatedBackTitle 
    headerLeft 
    headerStyle 
    headerTitleStyle 
    headerBackTitleStyle 
    headerTintColor 
    headerPressColorAndroid：Color for material ripple (Android >= 5.0 only) 
    gesturesEnabled 
 
 四、Navigator Props： 
    const SomeStack = StackNavigator({ 
        // config 
    }); 
    <SomeStack 
    screenProps={ 
        // this prop will get passed to the screen components asthis.props.screenProps 
    } /> 
*/  
  
import React from 'react';  
import {  
    Button,  
    ScrollView,  
    Text,  
} from 'react-native';  
import {  
    StackNavigator,  
} from 'react-navigation';  
  
// 界面中通用的组件：包含title、3个按钮
//传入2个参数：导航对象、正文顶部title信息
const MyNavScreen = ({navigation, banner}) => (  
    <ScrollView>  
        <Text>{banner}</Text>  
        <Button  
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}  
            title="跳转到订单列表"  
        />  
        <Button  
            onPress={() => navigation.navigate('Photos', { name: 'Jane' })}  
            title="跳转到相册界面"  
        />  
        <Button  
            onPress={() => navigation.goBack(null)}  
            title="返回"  
        />  
    </ScrollView>  
);  
  
// 1、首页
const MyHomeScreen = ({navigation}) => (  
    <MyNavScreen  
        banner="首页"  
        navigation={navigation}  
    />  
);  
MyHomeScreen.navigationOptions = {  
    title: '欢迎来到精真估',  
};  
  
// 2、相册界面
const MyPhotosScreen = ({navigation}) => (  
    <MyNavScreen  
        banner={`${navigation.state.params.name}'s Photos`}  
        navigation={navigation}  
    />  
);  
MyPhotosScreen.navigationOptions = {  
    title: '相册页',  
};  
  
// 3、订单列表界面
const MyProfileScreen = ({navigation}) => (  
    <MyNavScreen  
        banner={  
            `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`  
        }  
        navigation={navigation}  
    />  
);  
  
MyProfileScreen.navigationOptions = props => {  
    const {navigation} = props;  
    const {state, setParams} = navigation;  
    const {params} = state;  
    return {  
        headerTitle: `${params.name}'s Profile!`,  
        // Render a button on the right side of the header.  
        // When pressed switches the screen to edit mode.  
        headerRight: (  
            <Button  
                title={params.mode === 'edit' ? 'Done' : 'Edit'}  
                onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}  
            />  
        ),  
    };  
};  
  

//  导航配置
const SimpleStack = StackNavigator(  
    {  
        Profile: {  
            path: 'people/:name',  
            screen: MyProfileScreen,  
        },  
        Photos: {  
            path: 'photos/:name',  
            screen: MyPhotosScreen,  
        },  
        Home: {  
            screen: MyHomeScreen,  
        },  
    },  
    {  
        initialRouteName: 'Home',  //默认显示首页
    }  
);  


export default SimpleStack;  