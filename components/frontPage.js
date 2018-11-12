import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

class FrontPage extends Component {
    static navigationOptions ={
        header : null,
    }
    render() {
        return( 
            <View style={{flex : 1}}>
           <ImageBackground
           source={require('./front.jpg')}
           style={{ flex: 1}}>

           <View style={{flex :1, justifyContent:"flex-start", alignItems : 'center',paddingTop:40}}>
           <View style={{backgroundColor :'white', height:70, width: 200, alignItems:'center', justifyContent: 'center'}}> 
               <Text style={{fontWeight:"bold", fontSize:26, }}>Charge Spot</Text>
           </View>
           </View>
           <View>
            {/* <Button title="Turn On Location Services" /> */}
           </View>
           </ImageBackground>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
export default FrontPage;