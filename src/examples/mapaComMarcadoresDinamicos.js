import React from 'react'
import { MapView, Permissions } from 'react-native-maps'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
// import { Marker } from 'react-native-maps'
import Polyline from '@mapbox/polyline'
import GerenteCores from './GerenteCores'

const locations = require('../data/locations.json')
const { width, height } = Dimensions.get('screen')


export default class Mapa extends React.Component {
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
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log('Error:', error)
    )

    const { locations: [ sampleLocation ] } = this.state

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    }, this.mergeCoords)
  }

  mergeCoords = () => {
    const {
      latitude,
      longitude,
      desLatitude,
      desLongitude
    } = this.state

    const hasStartAndEnd = latitude !== null && desLatitude !== null

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`
      const concatEnd = `${desLatitude},${desLongitude}`
      this.getDirections(concatStart, concatEnd)
    }
  }

  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}`)
      const respJson = await resp.json();
      const response = respJson.routes[0]
      const distanceTime = response.legs[0]
      const distance = distanceTime.distance.text
      const time = distanceTime.duration.text
      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords, distance, time })
    } catch(error) {
      console.log('Error: ', error)
    }
  }

  onMarkerPress = location => () => {
    const { coords: { latitude, longitude } } = location
    this.setState({
      destination: location,
      desLatitude: latitude,
      desLongitude: longitude
    }, this.mergeCoords)
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: { name, latitude, longitude }
            } = location
            return (
              <Marker
                key={idx}
                title = {{name}}
                coordinate={{ latitude, longitude }}
                onPress={this.onMarkerPress(location)}
                pinColor = {GerenteCores(20,2)}
              />
            )
          })
        }
      </View>
    )
  }
render(){

  const {
    time,
    coords,
    distance,
    latitude,
    longitude,
    destination
  } = this.state

  if (latitude) {
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
        <MapView.Polyline
          strokeWidth={2}
          strokeColor="red"
          coordinates={coords}
        />
        <Image
          source={{ uri: destination && destination.image_url }}
          style={{
            flex: 1,
            width: width * 0.95,
            alignSelf: 'center',
            height: height * 0.15,
            position: 'absolute',
            bottom: height * 0.05
          }}
        />

{/* 
        <MapView.Marker //Pin Seven King
          title = 'Seven King'
          coordinate = {{
            latitude: -23.9649106,
            longitude: -46.3222352,
          }}
          pinColor = {GerenteCores(20,2)}
        />

        <MapView.Marker //Texto Seven King
          coordinate = {{
            latitude: -23.9649106,
            longitude: -46.3218,
          }}
        >
          <Text>Seven King</Text>
        </MapView.Marker>         */}

      </MapView>
    )
        }
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>We need your permission!</Text>
          </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});