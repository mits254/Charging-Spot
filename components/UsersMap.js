import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const usersMap = props =>{
    let userLocationMarker = null;

   if(props.userLocation){
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>;
   }
   const usersMarkers = props.usersPlaces.map(userPlace => 
   <MapView.Marker coordinate={userPlace} key ={userPlace.id}/>);
    return (
      <View style={styles.mapContainer}>
          <MapView 
          //provider={PROVIDER_GOOGLE}
           initialRegion={{
            latitude: 30.2672,
            longitude: -97.7431,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          }}
          region = {props.userLocation}
          style={styles.map}>
          {userLocationMarker}
          {usersMarkers}
          </MapView>
      </View>
    );
}
const styles = StyleSheet.create ({
    mapContainer : {
        width : '100%',
        height : 200,
        marginTop : 20
    },
    map : {
        width : '100%',
        height : '100%'
    }
})

export default  usersMap;
