import React , {useState , useEffect} from 'react';
import {Left,Right,Radio, Icon ,Label , Container, Header, ListItem , Content, Form, Item, Input, Picker,Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './../firebase';
import * as Location from 'expo-location';

export default function SignUp({navigation}) {
    const [Name,setName]=useState('');
    const [Age,setAge]=useState('');
    const [Phone,setPhone]=useState('');
    const [Address,setAddress]=useState('');
    const [Purpose,setPurpose]=useState('');
    const [Gender,setGender]=useState('');
    const [BloodGroup,setBloodGroup]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [ShowPassword,setShowPassword]=useState(false);
    const [location, setLocation] = useState(null);
    const [Longitude,setLongitude]=useState();
    const [Latitude,setLatitude]=useState();
    const [errorMsg,setErrorMsg]=useState();
    const [showpasswordA,setShowPasswordA]=useState('Show Password');
    const [show,setShow]=useState(true);
    const [hidepassword,setHidePassword]=useState('Hide Password');
    

    function signupFun(){
              
        async () => {
            if(Password!=ConfirmPassword)
            {   return;    }
            else{
              let { status } = await Location.requestPermissionsAsync();
              if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied\nTo create an account Please allow Location permession.');
                return;
              }
        else {
            let location = await Location.getCurrentPositionAsync({});
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);
            firebase.auth().createUserWithEmailAndPassword(Email, Password)
            .then(() => {
              // Signed in 
              var obj={
                  name :Name,
                  age:Age,
                  address:Address,
                  phone:Phone,
                  purpose:Purpose,
                  gender:Gender,
                  blood:BloodGroup,
                  email:Email,
                  longitude:Longitude,
                  latitude:Latitude
              }
              firebase.database().ref('/users').push(obj);
              firebase.database().ref(`/${BloodGroup}`).push(obj);
              navigation.navigate('Login')
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              setErrorMsg(errorMessage);
              // ..
            });
        }   }   } }
    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Full Name</Label>
                        <Input 
                        value={Name}
                        onChangeText={text => setName(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Age</Label>
                        <Input  
                        value={Age}
                        onChangeText={text => setAge(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Phone No.</Label>
                        <Input  
                        value={Phone}
                        onChangeText={text => setPhone(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Address</Label>
                        <Input  
                        value={Address}
                        onChangeText={text => setAddress(text)}
                        />
                    </Item>

                    {/* Purpose */}

                    <Item picker
                    style={styles.picker}
                    >
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Your Purpose"
                            selectedValue={Purpose}
                            onValueChange={text => setPurpose(text)}
                        >
                            <Picker.Item label="Donor" value="Donor" />
                            <Picker.Item label="Needer" value="Needer" />
                        </Picker>
                    </Item>

                    {/* Gender */}

                    <Item picker
                    style={styles.picker}
                    >
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Your Gender"
                            selectedValue={Gender}
                            onValueChange={ text => setGender(text) }
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </Item>

                    {/* Blood Group */}

                    <Item picker
                    style={styles.picker}
                    >
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Your Blood Group"
                            selectedValue={BloodGroup}
                            onValueChange={ text => setBloodGroup(text) }
                        >
                            <Picker.Item label="O" value="O" />
                            <Picker.Item label="AB" value="AB" />
                            <Picker.Item label="A" value="A" />
                            <Picker.Item label="B" value="B" />
                        </Picker>
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Email</Label>
                        <Input 
                        onChangeText={text => setEmail(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Password</Label>
                        <Input 
                         value={Password}
                         onChangeText={text => setPassword(text)}
                         secureTextEntry={show}/>
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Confirm Password</Label>
                        <Input 
                        value={ConfirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry={show} />
                    </Item>
                    <Text
                    value={errorMsg}></Text>
         <ListItem
            style={styles.input}
            >
            <Left>
            <Text 
            onPress={()=>setShow(!show)}
            >
{show ? showpasswordA : hidepassword}
            </Text>
            </Left>
        </ListItem>
                </Form>
                <Button block warning onPress={()=>{signupFun()}}>
            <Text>Submit</Text>
          </Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker:{
        marginTop:10,
    },
    input:{
        width:500,
        marginLeft:5
    }
});
