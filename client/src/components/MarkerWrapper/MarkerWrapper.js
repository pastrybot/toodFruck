import React, {PropTypes, Component} from 'react';

class MarkerWrapper extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    console.log(this.props, "PROPS");
    return (
       <div onClick={() => this.props.toggleCard(this.props.id)}>
          {this.props.children}
       </div>
    );
  }
}

export default MarkerWrapper;
