const K_WIDTH = 40;
const K_HEIGHT = 40;

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
  fontSize: 16,
  fontWeight: 'bold',
  padding: 6
};

export {markerStyles};
