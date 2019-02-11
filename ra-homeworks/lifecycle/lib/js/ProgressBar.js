class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
    this.changeSize = this.changeSize.bind(this);
  }

  changeSize() {
    this.setState({
      height: this.canvas.height = this.canvas.offsetHeight,
      width:  this.canvas.width = this.canvas.offsetWidth
    })
    this.progress(this.props);
  }

  progress(props) {
    let 
      {completed, total} = props,
      percent = Math.floor(completed / total * 100),
      part = 2 * Math.PI * completed / total;
    this.drawCanvas(percent, part);
  }

  drawCanvas(percent, part) {
    this.canvas.height = this.state.height || this.canvas.offsetHeight;
    this.canvas.width = this.state.width || this.canvas.offsetWidth;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.lineWidth = 7;
    this.outRadius = 52 - this.context.lineWidth;
    this.innerRadius = 45 - this.context.lineWidth;
    this.context.font = "normal normal 21px Tahoma";
    this.context.fillText(`${percent}%`, this.canvas.width / 2 - 28, this.canvas.height);
    this.context.strokeStyle = '#4ca89a';
    this.context.beginPath();
    this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.outRadius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
    this.context.beginPath();
    this.context.strokeStyle = '#96d6f4';
    this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.innerRadius, 0, part);
    this.context.stroke();
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d');
    this.progress(this.props);
    window.addEventListener('resize', this.changeSize);
}

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSize);
  }

  componentWillReceiveProps(newProps) {
    this.progress(newProps);
  }

  shouldComponentUpdate({completed, total}) {
    return (!((completed === this.props.completed) && (total === this.props.total)));
  }


  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={canvas => this.canvas = canvas}/>
    );
  }
}
