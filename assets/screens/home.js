import { StatusBar } from 'expo-status-bar';
import { StyleProvider } from 'native-base';
import React from 'react';
import {  StyleSheet,SafeAreaView,ScrollView, Text, View ,ColorValue,Image,Button} from 'react-native';
import { floor } from 'react-native-reanimated';
import CardShowcaseExample from './assets/card';
// import Hoverable from "./Hoverable";
export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.maintain}>
    <View style={styles.container}>
      <Text style={styles.tex}>AA + Mobile Repairing Institute</Text>
      <StatusBar style="auto" />
      </View>
    <View style={styles.containert}>
    <Image style={{ width: 400, height: 200 }} source={require('./first.jpg')} />
    </View>
    <View style={styles.imgs}>
      <Text style={styles.text}>Our Services</Text>


 
      {/* <Image style={{ width: 150, height: 150 }} source={require('./iphone.png')} />
      <Image style={{ width: 150, height: 150 }} source={require('./samsung.jpg')} /> */}
      <View style={styles.main}>
            <View style={styles.maint}>
            <Image onPress={()=>props.navigation.navigate ('About',{name:"Saimoon ahmed"})} style={{ width: 100, height: 100 }} source={require('./first.jpg')} />
                  <Text></Text>
                   <Button title="mobile reapiring" onPress={() => navigation.navigate('edge')} style={styles.tnt}/>
            </View>
            <View style={styles.maint}>
            <Image style={{ width: 100, height: 100 }} source={require('./first.jpg')} />
            <Text></Text>
                   <Text style={styles.tnt}>Edge Master Glass Change</Text>
            </View>
            <View style={styles.maint}>
            <Image style={{ width: 100, height: 100 }} source={require('./first.jpg')} />
            <Text></Text>
                   <Text style={styles.tnt}>Mobile Software</Text>
            </View>
            <View style={styles.maint}> 
            <Image style={{ width: 100, height: 100 }} source={require('./first.jpg')} />
            <Text></Text>
                   <Text style={styles.tnt}>Mobile Parts</Text>
            </View>
            <View style={styles.maint} >
            <Image style={{ width: 100, height: 100 }} source={require('./first.jpg')} />
            <Text></Text>
                   <Text style={styles.tnt}> Mobile Institute</Text>
            </View>     
    </View> 

    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maintain:{
backgroundColor:'rgba(0, 0, 255, 0.034)',
  },
  container: {
    // flex: 0,
    height:60,
    alignItems: 'center',
    backgroundColor:'#07033d',
    marginTop:20,
    // color:'white',

    justifyContent: 'center',
  },
  tex:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
  },
  containert: {
    // flex: ,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // marginTop:'10',
    // justifyContent: 'center',
  },
  text:{
    fontSize:30,
    fontStyle:"italic",
    color:'#07033d',
    fontWeight:"bold",
    textAlign:"center",
  },
maint:{
  // flex: 2,
  alignItems:'center',
  marginTop:60,
  // borderColor:'black',
  // borderRadius:1 ,
  // fontSize:40,

},
// maintHoverable:{
// borderRadius:2,
// },
tnt:{
  fontSize:20,
  color:'#07033d',
  fontWeight:'bold',
},
mainl:{
  marginBottom:2,
},
});
