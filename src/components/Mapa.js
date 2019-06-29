import React from 'react'
import { MapView } from 'expo'
import { Text, View, StyleSheet } from 'react-native' 
import GerenteCores from './GerenteCores'


export default function() {
    return(
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.9646387,
          longitude: -46.3230136,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
        customMapStyle={EstiloMapaCustomizado}
      >


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
        </MapView.Marker>


        <MapView.Marker //Pin Subway
          title = 'Subway'
            coordinate = {{
            latitude: -23.9642757,
            longitude: -46.3231924,
          }}
          pinColor = {GerenteCores(20,18)}
        />

        <MapView.Marker //Texto Pin Subway
          coordinate = {{
            latitude: -23.9642757,
            longitude: -46.3228924,
          }}
        >
          <Text>Subway</Text>
        </MapView.Marker>

        <MapView.Marker // Pin Panificadora Vila Rica
          title = 'Panificadora Vila Rica'
          coordinate = {{
            latitude: -23.9647329,
          longitude: -46.3238177,
          }}
          pinColor = {GerenteCores(20,12)}
        />

        <MapView.Marker //Texto Pin Panificadora Vila Rica
          coordinate = {{
            latitude: -23.9647329,
            longitude: -46.3231177,
          }}
        >
          <Text>Panificadora Vila Rica</Text>
        </MapView.Marker>

      </MapView>
    )
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