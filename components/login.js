import React , {useState , useEffect} from 'react';
import { Container, Label ,ListItem,Left,Right , Header, Content, Form, Item, Input ,Button ,Radio} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './../firebase';
export default function Login({navigation}) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showpassword,setShowPassword]=useState('Show Password');
  const [show,setShow]=useState(true);
  const [hidepassword,setHidePassword]=useState('Hide Password');
  signupFun=()=>{
navigation.navigate('SignUp');
  }

  loginFun=()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    navigation.navigate('DonorData')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
  return (
<Container style={styles.container}>
        <Content>
        <Form>
            <Item floatingLabel
            style={styles.input}
            >
            <Label>Email</Label>
              <Input 
              value={email}
              onChangeText={text=>setEmail(text)}
              />
            </Item>
            <Item last floatingLabel
            style={styles.input}
            >
            <Label>Password</Label>
              <Input 
             value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={show}
              />
            </Item>
            <ListItem
            style={styles.input}
            >
            <Left>
            <Text 
            onPress={()=>setShow(!show)}
            >
{show ? showpassword : hidepassword}
            </Text>
            </Left>
        </ListItem>
          </Form>
          <Button block info
            onPress={()=>loginFun()}>
            <Text>login</Text>
          </Button>
          <Text
          style={styles.create_account}
          >
            Or Create an account.   
            </Text>
            <Button block success
            onPress={()=>signupFun()}>
              <Text>
              SignUp
              </Text>            
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
  input:{
    marginLeft:0,
    width:350,

  },
  create_account:{
    width:350,
    marginTop:10,
    marginBottom:10,
    textAlign:'center',
  }

});
