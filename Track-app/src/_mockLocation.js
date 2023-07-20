import * as Location from 'expo-location' 

const tenMeteresWithDegrees = 0.0001

const getLocation = (increment) => {
  return {
    timestamp:100000000,
    coords: {
      speed:0,
      heading:0,
      accuracy:5,
      altitideAccuracy:5,
      altitude:5,
      longitude: 77.0308019 + increment * tenMeteresWithDegrees,
      latitude: 28.4598397 + increment * tenMeteresWithDegrees
    }
  }
}

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: location._getCurrentWatchId(),
    location:getLocation(counter)
  })
  counter++
}, 1000);