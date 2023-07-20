import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
  
  return (
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: 28.4598397,
        longitude: 77.0308019,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  );
};

const styles = StyleSheet.create({
    map:{
        width:"100%",
        height:"100%"
    }
});

export default Map;

//test
