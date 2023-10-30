import React from "react";

import {Text, TextInput, View,StyleSheet} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from "react-native-responsive-screen";
import colors from "../../config/colors";



const Input=(
{value,
title,
onChangeText,
width,
height,
placeHolder,
secureTextEntry,
multiline,
color,
onSubmitEditing,
numericKeyBoard,
backgroundColor,
fieldHeight
}

    )=>{
return(
  <View style={{
    height:fieldHeight?fieldHeight:hp('12%'),
    padding: hp('1%'),}}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
    secureTextEntry={secureTextEntry?secureTextEntry:false}
    multiline={multiline?multiline:false}
    placeholder={placeHolder}
    placeholderTextColor={'grey'}
    value={value}
    blurOnSubmit={true}
    
    keyboardType={numericKeyBoard?numericKeyBoard:null}
    onChangeText={onChangeText}
    style={[styles.textInput,{width:width?width:wp('65%'), height: height?height: hp('6%'),color:color?color:'black',backgroundColor:backgroundColor?backgroundColor:"white",overflow: 'hidden'}]}
    />
  </View>

)
}

export default Input

const styles= StyleSheet.create({
  TextInputView:{

    height: hp('12%'),
    padding: hp('1%'),
   
    
  }, 
  textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.white,
        padding: hp('1%'),
      
    },
    title: {
        fontSize: 13,
        color:colors.white,
        fontWeight: '400',
        padding: hp('1%'),
        marginLeft: -8,
        marginTop: -5,
    }
})