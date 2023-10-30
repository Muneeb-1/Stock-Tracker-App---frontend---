import { View, Text,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AdminDashboard from "../../screens/Dashboard/adminDashboard";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={AdminDashboard}
        options={{
       
          headerTitle: () => (
            <Image
              source={require("../../../assets/logo.png")}
              style={{
                width: wp('20%'), // Set the width and height as per your image size
                height: hp('8%'),
                marginTop:hp('2%')
                 // Adjust the margin as needed
              }}
            />
          ),
          headerTitleAlign: "center",
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: 'black' },
          tabBarIcon: ({ color, size, focused }) => (
            
            <Icon name="home" color={focused? "green":"grey"} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
