import React , {useState , useEffect} from 'react';
import { Container, Header, Content, Form, Item, Input ,Button ,Radio} from 'native-base';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function GetMap(){
return(    
<View style={styles.container}>
<MapView style={styles.map} 
initialRegion={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}> 
<MapView.Marker
      coordinate={{latitude: 37.73538,
          longitude: -122.4324,}}
      title={"marker.title"}
      description={"desss"}
    />

    </MapView>
</View>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
