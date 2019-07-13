import React, {Component} from 'react'
import { MapView, Permissions, Marker } from 'expo'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import GerenteCores from './GerenteCores'

const locations = require('../data/locations.json')



export default class Mapa extends Component{
  state = {
    latitude: null,
    longitude: null,
    locations: locations
  } 

  async componentDidMount(){
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude } = () => this.state),
      (error) => console.log('Error:', error)
    )

    const { locations: [ sampleLocation ] } = this.state

    // this.setState({
    //   desLatitude: sampleLocation.coords.latitude,
    //   desLongitude: sampleLocation.coords.longitude
    // }, this.mergeCoords)
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: {  latitude, longitude }
            } = location
            return (
              <Marker
                key={idx}
                // title = {{name}}
                coordinate={{ latitude, longitude }}
                // onPress={this.onMarkerPress(location)}
                pinColor = {GerenteCores(20,2)}
              />
            )
          })
        }
      </View>
    )
  }
  render () {

    const {
      latitude,
      longitude
    } = this.location
   
      return(
        
        <MapView
        showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
          }}
          customMapStyle={EstiloMapaCustomizado}
        >
          {this.renderMarkers()}
          
  
        </MapView>
        
      )
          
    }
}

const EstiloMapaCustomizado = [
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

