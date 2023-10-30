import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/loginScreen';
import Welcome from '../../screens/Welcome/Welcome';
import ViewUser from '../../screens/Admin/viewUser';
import ViewRole from '../../screens/Admin/viewRole';
import BottomTabNavigation from '../Tab/bottomTabNavigation';
import Button from '../../components/Button/button';
import AddUser from '../../screens/Admin/addUser';
import AddRole from '../../screens/Admin/addRole';
import ViewTask from '../../screens/Admin/viewTask';
import AddTask from '../../screens/Admin/addTask';
import AssignTask from '../../screens/Admin/assignTask';
import AddIcon from '../../screens/Admin/addIcon';
const Stack = createNativeStackNavigator();

export default function AppRoute({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcom"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="View User"
        component={ViewUser}
        options={({navigation}) => ({
          title: 'View User',
        })}
      />
      <Stack.Screen
        name="View Role"
        component={ViewRole}
        options={({navigation}) => ({
          title: 'View Role',
        })}
      />
      <Stack.Screen
        name="TabNavigation"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add User" component={AddUser} />
      <Stack.Screen name="Add Role" component={AddRole} />
      <Stack.Screen
        name="Assign Task"
        component={AssignTask}
        options={({navigation}) => ({
          title: 'Assign Task',
          headerRight: () => (
            <Button
              height={'140%'}
              width={'55%'}
              color={'grey'}
              title={'Add Task'}
              marginRight={-70}
              borderRadius={5}
              marginTop={'0'}
              onPress={() => navigation.navigate('Add Task')}
            />
          ),
        })}
      />
      <Stack.Screen name="View Task" component={ViewTask} />
      <Stack.Screen name="Add Task" component={AddTask} />
      <Stack.Screen name="Add Icon" component={AddIcon} />
    </Stack.Navigator>
  );
}
