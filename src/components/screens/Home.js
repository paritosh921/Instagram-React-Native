import React from 'react'
import { View, Text, StatusBar,ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Stories from '../screenComponents/Stories'
import Post from '../screenComponents/Post'

const Home = () => {
    return (
        <View style={{backGroundColor: 'white', height: '100%'}}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
            <View style={{
                justifyContent:'space-between',
                flexDirection:'row',
                paddingHorizontal:15,
                alignItems: 'center'
            }}>
                <FontAwesome name='plus-square-o' style={{fontSize:30}}/>
                <Text style={{fontFamily: 'Lobster-Regular',fontSize: 30, fontWeight: '500'}}>
                    Instagram
                </Text>
                <Feather name='navigation' style={{fontSize:30}}/>
            </View>
            <ScrollView>
                <Stories/>
                <Post/>
            </ScrollView>
        </View>
    )
}

export default Home
