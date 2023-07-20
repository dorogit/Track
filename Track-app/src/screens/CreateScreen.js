import React,{useEffect,useState} from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';
import '../_mockLocation'

const CreateScreen = () => {
  const [err, setErr] = useState(null)
  const startWatching = async () =>{
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permissions not granted!')
      }
    } catch (error) {
      setErr(error)
    }
  }
  useEffect(() => {
    startWatching()
  }, [])
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      {err ? <Text> Please enable location permissions</Text> : null}
      <Text style={{alignSelf:"center"}} h2>Create a Track!</Text>
      <Map />
    </SafeAreaView>
  );
};

export default CreateScreen;

//test
