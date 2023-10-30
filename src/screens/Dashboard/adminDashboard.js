import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const flag = true;
import Button from '../../components/Button/button';
import {fetchSpecificTasks} from '../../api/userRole';
import {useFocusEffect} from '@react-navigation/native';
import colors from '../../config/colors';

export default function AdminDashboard({navigation}) {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.loginReducer);
  const user = data.user.user;
  console.log(user);
  useFocusEffect(
    React.useCallback(() => {
      fetchSpecificTasks(user.role_id._id)
        .then(task => {
          console.log(task);
          setTask(task);
        })
        .catch(error => {
          console.error('Error fetching roles: ', error);
        });
    }, [navigation]),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.universityHeader}>
        {data ? (
          <View style={styles.userProfile}>
            <View style={{flexDirection: 'column'}}>
              <Image
                source={require('../../../assets/profile.png')}
                style={styles.profileImage}
              />
            </View>
            <View>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userPhone}>0{user.phone_no}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
              <Text style={styles.userRole}>{user.role_id.name}</Text>
            </View>
          </View>
        ) : null}
      </View>
      <Text style={styles.header}>User Management</Text>
      <View style={styles.userManagement}>
        <ScrollView
          contentContainerStyle={{width: wp('95%'), alignSelf: 'center'}}>
          {task ? (
            <View style={styles.cardContainer}>
              {task.map(tasks => (
                <Button
                  key={tasks.task_id._id}
                  borderRadius={wp('3%')}
                  width={wp('25%')}
                  title={`${tasks.task_id.name}`}
                  txtColor={'#007BFF'} // Blue text color
                  onPress={() => navigation.navigate(`${tasks.task_id.name}`)}
                  name="users"
                  TextSize={wp('3%')}
                  marginLeft={hp('2%')}
                  marginRight={hp('1%')}
                  // Larger text size
                />
              ))}
            </View>
          ) : null}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: wp('4%'),
  },
  header: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    marginTop: hp('2%'),
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'flex-start',
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
  },
  universityHeader: {
    flexDirection: 'column',
    marginTop: 0,
    backgroundColor: '#007BFF', // Blue background color
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    height: hp('20%'),
    width: wp('99%'),
    marginLeft: -wp('3.2%'),
    borderRadius: wp('4%'),
  },
  userName: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#000', // Change to a professional color
    marginBottom: wp('1%'), // Add some margin at the bottom
  },
  userPhone: {
    fontSize: wp('4%'),
    color: '#333', // Adjust the color
    marginBottom: wp('1%'),
  },
  userEmail: {
    fontSize: wp('4%'),
    color: '#333', // Adjust the color
    marginBottom: wp('1%'),
  },
  userRole: {
    fontSize: wp('4%'),
    color: colors.green, // Adjust the color
    marginBottom: wp('1%'),
    fontWeight: 'bold',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center', // Center content vertically
  },

  profileImage: {
    width: wp('22%'), // Responsive image width
    height: wp('23%'), // Responsive image height
    borderRadius: wp('12%'), // Responsive border radius (half of width and height)
    marginRight: wp('4%'), // Add some margin to separate the image from text
  },
  userManagement: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    width: wp('95%'),
    borderRadius: hp('4%'),
  },
});
