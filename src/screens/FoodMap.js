import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';
import MapView,{Marker} from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'

export default class FoodMap extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        region: {
            latitude: 20.5937,
            longitude: 78.9629,
            latitudeDelta: 22,
            longitudeDelta: 22,
    
        },
      };
    }
  
    render() {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={this.state.region}
            >
            <Marker
              coordinate={{ latitude: 20.5937, longitude: 78.9629 }}
              title="Marker Title"
              description="Marker Description"
            />
            
          </MapView>
        </View>
      );
    }
  
    // onRegionChange = (region) => {
    //   this.setState({ region });
    // };
  }

  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
  })
  
  
  
  
  