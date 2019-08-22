import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function degsToRadians(degs) {
  return (degs / 360) * (2 * Math.PI)
}

class PieChart extends React.Component {
  
  static propTypes = {
    colors: PropTypes.array,
    data: PropTypes.array.isRequired,
    size: PropTypes.number,
    lineWidth: PropTypes.number,
    width:PropTypes.number
  };
  
  static defaultProps = {
    colors: ['#505974', '#366ba3', '#4E78A0', '#0276FD'],
    size: 200,
    width:230,
    lineWidth: 25
  };
  
  componentDidMount() {

    this.draw();
  }
  

  componentDidUpdate(){
    this.draw();
  }
  draw() {
    // eslint-disable-next-line react/no-find-dom-node
    
    // eslint-disable-next-line react/no-find-dom-node
    const canvas = ReactDOM.findDOMNode(this);
    const c = canvas.getContext('2d');
    c.fillStyle = "white";
     c.fillRect(0, 0, canvas.width, canvas.height);
    const center = this.props.size / 2;
    const lineWidth = this.props.lineWidth;
    const radius = center - (lineWidth / 2);
    c.lineWidth = lineWidth;
    
    const dataTotal = this.props.data.reduce((r, dataPoint) => r + dataPoint, 0);
    let startAngle = degsToRadians(-90);
    let colorIndex = 0;
    this.props.data.forEach((dataPoint, i) => {
      const section = dataPoint / dataTotal * 360;
      const endAngle = startAngle + degsToRadians(section);
      const color = this.props.colors[colorIndex];
      colorIndex++;
      if (colorIndex >= this.props.colors.length) {
        colorIndex = 0;
      }
      c.strokeStyle = color;
      c.beginPath();
      c.arc(center, center, radius, startAngle, endAngle);
      c.stroke();
      startAngle = endAngle;
    });
  }

  render() {
    return (
      <canvas
        height={this.props.size}
        width={this.props.width}
      />
    );
  }
}
PieChart.propTypes = {
  data: PropTypes.array.isRequired
};
export default PieChart;
