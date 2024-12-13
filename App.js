import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Box from './components/box';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%', borderBottomWidth:1, backgroundColor: '#fff'}}>
        <Image source={{uri:"https://i.pinimg.com/originals/b5/df/6e/b5df6e88db58a19e85ebec90898425cf.jpg"}} style={{width: 46, height: 46, borderRadius:50}}></Image>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'red', fontWeight: 700}}>Andika</Text>
          <Text >Personal Account</Text>
        </View>
        <View style={{flex: 1}}>
            
        </View>
        <Image source={require('./assets/sun-svgrepo-com.svg')} style={{width: 40, height: 40}}></Image>
      </View>
      <View style={{flexDirection: 'row', elevation: 2, paddingHorizontal: 20, display: 'flex', alignItems: 'center', width: '100%', paddingVertical:35}}>
        <View style={{width:250}}>
            <Text style={{fontWeight:700,fontSize:20, lineHeight:30, marginBottom:10}}>Good Morning, Chelsea</Text>
            <Text style={{fontWeight:400, fontSize:16}}>Check all your incoming and outgoing transactions here</Text>
        </View>
        <View>
            <Image source={require('./assets/Group.png')} style={{width:80, height:80}}></Image>
        </View>
      </View>
      <View style={{backgroundColor:"teal", height:37, width:337, borderRadius:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <Text style={{color:'#fff', fontSize: 16, fontWeight:400}}>Account No.</Text>
            <Text style={{color:'#fff', fontSize:16, fontWeight:600}}>100899</Text>
      </View>
      <View style={{flexDirection:'row', padding:20, backgroundColor:'#fff', marginVertical:20, borderRadius:20, width:337, justifyContent: 'space-between', alignItems:'center'}}>
        <View>
            <Text style={{fontWeight:400, fontSize:14}}>Balance</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontWeight:600, fontSize:24, width:160}}>Rp 10.000.000</Text>
                <Image source={require('./assets/eye.svg')} style={{width:19, height:11}}></Image>
            </View>
        </View>
        <View style={{justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=> console.log('Button Plus Pressed')} style={{alignItems: 'center', backgroundColor:'teal', padding:10, borderRadius:10, marginBottom:15}}> 
                <Image source={require('./assets/plus.svg')} style={{width:20, height:20}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log('Button Send Pressed')} style={{alignItems: 'center', backgroundColor:'teal', padding:10, borderRadius:10}}> 
                <Image source={require('./assets/send.svg')} style={{width:20, height:20}}></Image>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{width:337, borderRadius:10, backgroundColor: '#fff', padding:20}}>
        <View style={{borderBottomColor:'gray', alignItems:'flex-start'}}>
            <Text style={{fontWeight:700,fontSize:16, textAlign:'left'}}>Transaction History</Text>
        </View>
        <View style={{flexDirection:'row', elevation:3}}>
            <Image source={{uri:"https://i.pinimg.com/originals/b5/df/6e/b5df6e88db58a19e85ebec90898425cf.jpg"}} style={{width: 30, height: 30, borderRadius:50}}></Image>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E9E9E9"
    // #fafbfd
  }
});
