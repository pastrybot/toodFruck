import React, {PropTypes, Component} from 'react';
import {markerStyles, markerHoverStyles} from './MarkerStyles.js';

export default class MarkerHover extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};


  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? markerHoverStyles : markerStyles;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}
