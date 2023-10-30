import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserRole } from "../../services/action/action";
import {useFocusEffect} from '@react-navigation/native';


export default function ViewRole({ navigation }) {
  const dispatch = useDispatch();
  const roleData = useSelector((state) => state.getRoleReducer);
  const data = roleData.flat();
  const User = useSelector(state => state.loginReducer);
  const user = User.user.user;
 
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getUserRole(user.role_id.name));
    }, [navigation]),
  );

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{item.name}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Background color
  },
  userContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFFFFF", // Container background color
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    color: "#333",
    fontWeight: "bold",
    marginRight: 10,
  },
  text: {
    color: "#333",
  },
});
