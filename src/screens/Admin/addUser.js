import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import DropDownPicker from 'react-native-dropdown-picker';
import { addUserRequest, getUserDepartment, getUserRole } from '../../services/action/action';
import Input from '../../components/TextInput/TextInput';
import { fetchDepartments } from '../../api/userRole';


export default function AddUser({ navigation }) {
  const [value, setValue] = useState('');
  const [depValue, setDepValue] = useState('');
  const [open, setOpen] = useState(false);
  const [opendep, setOpenDep] = useState(false);
  const [depData, setDepData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedDepValue, setSelectedDepValue] = useState([]);
  const dispatch = useDispatch();
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    phone_no: '',
    designation: '',
  });
///////////////////////////////////////////////////////////////////////////////
const User = useSelector(state => state.loginReducer);
const user = User.user.user.role_id;
let roleData = useSelector((state) => state.getRoleReducer);
roleData = roleData.flat();
//////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchDepartments()
      .then(departments => {
        setDepData(departments);
      })
      .catch(error => {
        console.error('Error fetching departments: ', error);
      });

   dispatch(getUserRole(user.name));
  }, [navigation]);

  useEffect(() => {
    setFdata({
      ...fdata,
      role_id: selectedValue,
      department_id: selectedDepValue,
    });
  }, [selectedValue, selectedDepValue]);

  const handleAddUser = () => {
    if (fdata.password.length < 8) {
      alert('Password should be at least 8 characters long');
    } else {
      dispatch(addUserRequest(fdata));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
<Text style={styles.heading}>
  <Text style={styles.headingText}>Add</Text>
  <Text style={styles.headingAccent}> User</Text>
</Text>
      <Input
        placeHolder={'Name'}
        width={wp('80%')}
        fieldHeight={hp('7%')}
        onChangeText={text => setFdata({ ...fdata, name: text })}
      />
      <Input
        placeHolder={'Email'}
        width={wp('80%')}
        fieldHeight={hp('7%')}
        numericKeyBoard="email-address"
        onChangeText={text => setFdata({ ...fdata, email: text })}
      />
      <Input
        placeHolder={'Password'}
        width={wp('80%')}
        fieldHeight={hp('7%')}
        onChangeText={text => setFdata({ ...fdata, password: text })}
      />
      <Input
        placeHolder={'Phone No'}
        width={wp('80%')}
        fieldHeight={hp('7%')}
        onChangeText={text => setFdata({ ...fdata, phone_no: text })}
        numericKeyBoard="numeric"
      />
      <Input
        placeHolder={'Designation'}
        width={wp('80%')}
        fieldHeight={hp('7%')}
        onChangeText={text => setFdata({ ...fdata, designation: text })}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={roleData.map(item => ({
          label: item.name,
          value: item._id,
        }))}
        setOpen={setOpen}
        setValue={setValue}
        defaultValue={selectedValue}
        placeholder="Role"
        containerStyle={styles.dropdown}
        placeholderStyle={{ color: 'grey' }}
        style={{ borderColor: "white" }}
        onChangeValue={value => setSelectedValue(value)}
        listMode={'MODAL'}
      />
      <DropDownPicker
        open={opendep}
        value={depValue}
        items={depData.map(item => ({
          label: item.name,
          value: item._id,
        }))}
        setOpen={setOpenDep}
        setValue={setDepValue}
        defaultValue={selectedDepValue}
        placeholder="Department"
        placeholderStyle={{ color: 'grey' }}
        containerStyle={styles.dropDownContainer}
        style={{ borderColor: "white" }}
        onChangeValue={value => setSelectedDepValue(value)}
        listMode={'MODAL'}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddUser}>
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: wp('4%'),
  },
  heading: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#333',
  },
  dropdown: {
    width: wp('80%'),
    height: hp('7%'),
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
    borderColor: "white"
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    borderRadius: hp('2%'),
    marginTop: hp('5%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  dropDownContainer: {
    width: wp('80%'),
    height: hp('7%'),
    marginTop: -hp('0.5%'),
    marginBottom: hp('2%')
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'rgba(0, 0, 0, 0.9)' // Your desired text color
  },
  headingAccent: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#007bff', // Your desired accent color
    marginLeft: wp('1%'), // Add some margin between "Add" and "User"
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Add a subtle text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});