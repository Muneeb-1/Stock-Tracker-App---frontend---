import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from "react-redux";

export default function Welcome({navigation}) {
  const data=useSelector((state)=>state.loginReducer);
  const handleNavigation = ()=>{
   // const data=useSelector((state)=>state.loginReducer);
  
    if (Object.keys(data).length != 0) {
      if(data.user.message=="Login Successfully")
      {
        navigation.navigate("TabNavigation")
      }
      }
    else
    {
      navigation.navigate("loginScreen")
    }

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.text1}>Welcome to</Text>
      <Text style={styles.text2}>UIIT STOCK TRACKER </Text>
      <View style={styles.container2}>
        <Image
          source={require("../../../assets/aridLogo.png")}
          style={styles.image2}
        ></Image>
        <TouchableOpacity style={styles.loginButton} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF", // Blue background color
    alignItems: "center",
    flexDirection: "column",
    height: hp("100%"),
    width: wp("100%"),
  },
  container2: {
    height: hp("70%"),
    width: wp("110%"),
    position: "absolute",
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    borderTopRightRadius: 180,
    borderTopLeftRadius: 180,
    marginTop: hp("60%"),
    alignItems: "center",
  },
  image: {
    width: wp('55%'),
    height: hp('30%'),
    marginTop: hp('3%'),
  },
  image2: {
    width: 120,
    height: 120,
    marginTop: 40,
  },
  text1: {
    marginTop: 20,
    color: "white",
    fontSize: hp('3%'),
  },
  text2: {
    color: "white",
    fontSize: hp("4%"),
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 30,
    width: "40%",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
