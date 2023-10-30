import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {BaseUrl} from '../../services/constants/baseUrl';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRole, getUserTask} from '../../services/action/action';
import {fetchSpecificTasks, fetchUserRoles} from '../../api/userRole';
import {useFocusEffect} from '@react-navigation/native';

export default function AssignTask({navigation}) {
  const [roleTask, setRoleTask] = useState([]);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

//Reducer Call
///////////////////////////////////////////////////////////////////////////////////////
  const task = useSelector(state => state.getTaskReducer);
  const taskData = task.flat();
  const User = useSelector(state => state.loginReducer);
  const user = User.user.user.role_id;
  let roleData = useSelector((state) => state.getRoleReducer);
  roleData = roleData.flat();

///////////////////////////////////////////////////////////////////////////////////////
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getUserRole(user.name));
      ///////////////////
     

      /////////////////////////
      dispatch(getUserTask());
    }, [navigation]),
  );
  /////////////////////////////////////////////////////////////////
  const fetchTasks = async role_id => {
    if (role_id) {
      try {
        const response = await axios.get(
          `${BaseUrl}/user/getRoleTask/${role_id}`,
        );
        const data = response.data;
        setRoleTask(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  //////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////
  const dropdownOptions = roleData.map(item => ({
    label: item.name,
    value: item._id,
  }));
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const isTaskAssigned = task_id => {
    if (roleTask) {
      return roleTask.some(tasks => tasks.task_id === task_id);
    }
    return false;
  };
  ///////////////////////////////////////////////////////////////////////////////////
  const addTaskToRole = async (role_id, task_id) => {
    try {
      await axios.post(`${BaseUrl}/user/AssignRoleTask`, {
        role_id,
        task_id,
      });
    } catch (error) {
      console.error('Error adding task to role: ', error);
    }
  };

  const removeTaskFromRole = async (role_id, task_id) => {
    
    try {
      if(role_id=='6539fc65e3d260f027857084'){
        Alert.alert(
          'Warning',
          "You can not remove task of a SuperAdmin.",
          [
            {
              text: 'OK',
              style: 'cancel', // Set the style to 'cancel' to make it look like a warning
            },
          ],
          { cancelable: false }
        );

      }
      else
      {
        await axios.post(`${BaseUrl}/user/removeTaskFromRole`, {
          role_id,
          task_id,
        });
      }
    }
     catch (error) {
      console.error('Error removing task from role: ', error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name.toUpperCase()}</Text>
      <CheckBox
        checked={isTaskAssigned(item._id)}
        onPress={() => toggleTaskAssignment(item._id)}
      />
    </View>
  );
  //////////////////////////////////////////////////////////////////////////////////////
  const toggleTaskAssignment = task_id => {
    const role_id = value; // Set role_id to the selected role

    if (isTaskAssigned(task_id)) {
      // If the task is assigned, unassign it
      removeTaskFromRole(role_id, task_id);
    } else {
      addTaskToRole(role_id, task_id);
    }

    // After adding or removing the task, you should update the tasks state accordingly.
    fetchTasks(role_id);
  };
  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownOptions}
        setOpen={setOpen}
        setValue={setValue}
        containerStyle={styles.dropdownContainer}
        onChangeValue={value => fetchTasks(value)}
        placeholder="Search...."
        dropDownStyle={styles.dropdown}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>List of Tasks</Text>
        <Text style={styles.headerText}>Status</Text>
      </View>
      <FlatList
        data={taskData}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  background: {
    width: '100%',
    height: 80,
    backgroundColor: '#228b22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    height: 40,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    backgroundColor: 'white',
    width: '100%',
    marginLeft: 0,
    padding: 10,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(34, 139, 34, 0.6)',
    height: 40,
    width: '100%',
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  dropdown: {
    backgroundColor: 'white',
  },
});
