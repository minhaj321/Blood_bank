import React , {useState , useEffect} from 'react';
import { Footer , FooterTab, Container, Header, Content, Form, Item, Input ,Button ,Radio} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './../firebase';

export default function DonorData({navigation}){
    const [BloodGroup,setBloodGroup]=useState('A');
    const [Donor_Data,setDonor_Data]=useState([]);
    useEffect(()=>{
    firebase.database().ref(`/${BloodGroup}`).on('child_added',function(data){
        setDonor_Data(data.val())
    })
},[BloodGroup])
    return(
    <View style={styles.container}>
        <Content>
        {
            Donor_Data.map((v,i)=>{return
                (
              <Card>
            <CardItem>
              <Body>
                <Text>
                  Name : {v.name}
                </Text>
                <Text>
                   Gender : {v.gender}
                </Text>
                <Text>
                   Age : {v.age}
                </Text>
                <Text>
                   BloodGroup : {v.blood}
                </Text>
                <Text>
                   Phone No. : {v.phone}
                </Text>
                <Text>
                   Address : {v.address}
                </Text>
                <Button block primary
                onPress={()=>navigation.navigate('GetMap',
                {
                  long:longitude,
                  lati:latitude
                }
                )}
                >
                  <Text>See Location On Map</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>   
                )
       }) 
       }
        </Content>
    <Footer>
          <FooterTab>
            <Button vertical active
            onPress={()=>setBloodGroup('AB')}
            >
              <Text>AB</Text>
            </Button>
            <Button vertical
            onPress={()=>setBloodGroup('A')}
            >
              <Text>A</Text>
            </Button>
            <Button vertical
            onPress={()=>setBloodGroup('B')}
            >
              <Text>B</Text>
            </Button>
            <Button vertical
            onPress={()=>setBloodGroup('O')}
            >
              <Text>O</Text>
            </Button>
          </FooterTab>
        </Footer>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
