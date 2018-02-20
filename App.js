import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Edit Profile</Text>
        </View>
        <View style={{flexDirection:'column', justifyContent: 'center',alignItems: 'center', paddingTop:30, paddingBottom:20}}>
          <Image style={{width:140, height:120, padding:50}}
          source={{uri:'https://images.pexels.com/photos/34950/pexels-photo.jpg'}}/>
          <Text>change profile photo</Text>
        </View>
        <View style={styles.common}>
          <Text style={{fontSize: 20, color: 'white', paddingLeft:10}}>Profile Settings</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>General information</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Local host information</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Contact & identification</Text>
        </View>
        <View style={styles.common}>
          <Text style={{fontSize: 20, color: 'white', paddingLeft:10}}>Notifications</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Notifications Settings</Text>
        </View>
        <View style={styles.common}>
          <Text style={{fontSize: 20, color: 'white', paddingLeft:10}}>Other Settings</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Create Password</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Close account</Text>
        </View>
        <View style={styles.common2}>
          <Text style={{fontSize:13, paddingLeft: 10}}>Contact & support</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 70,
    flexDirection:'row',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 20,
  },
  common: {
    backgroundColor: 'red',
    height: 40,
    justifyContent:'center',
  },
  common2: {
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1 ,
    borderBottomColor: 'lightgrey',
  },
});
