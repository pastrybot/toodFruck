const K_WIDTH = 20;
const K_HEIGHT = 20;

const markerStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates

  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 4,
  top: -K_HEIGHT / 4,

  borderRadius: K_HEIGHT,
  backgroundColor: '#70C1B3',
  textAlign: 'center',
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  opacity: '0.9',
  paddingTop: 21

};

export {markerStyles};
