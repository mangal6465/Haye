import React , {Component} from 'react'
import {View,Text , Image ,StyleSheet } from 'react-native';


const Appicon= props => {

    return(
        <View style = {styles.iconStyle}>
        <Image source={props.icon} style={styles.icon} />
        </View>
    )

}

const styles = StyleSheet.create({
iconStyle:{
      width:200,
      height:200 ,
    backgroundColor:'#FDE8A5'

},
icon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 5,
},

})

export default Appicon