import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../services/action/action';


export default function ViewUser({ navigation }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.reducer);
  const data = userData.flat();
  const User = useSelector(state => state.loginReducer);
  const user = User.user.user;
 

  useEffect(() => {
    dispatch(getUserList(user.role_id.name));
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{item.name}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{item.email}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.text}>{item.role_id.name}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Status:</Text>
        {item.status === true ? (
          <Text style={styles.activeText}>Active</Text>
        ) : (
          <Text style={styles.inactiveText}>Inactive</Text>
        )}
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
    backgroundColor: '#F5F5F5', // Background color
  },
  userContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Container background color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    color: '#333',
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    color: '#333',
  },
  activeText: {
    color: '#4CAF50', // Green color for active status
  },
  inactiveText: {
    color: '#FF6C61', // Red color for inactive status
  },
});
