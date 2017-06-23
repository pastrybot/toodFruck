const K_SIZE = 20;


const markerStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates

  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 4,
  top: -K_SIZE / 4,

  borderRadius: K_SIZE,
  backgroundColor: '#70C1B3',
  textAlign: 'center',
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  opacity: '0.9',
  paddingTop: 21

};

const markerHoverStyles = {
  ...markerStyles,
  backgroundColor: 'orange',
};

export {markerStyles, markerHoverStyles, K_SIZE};
