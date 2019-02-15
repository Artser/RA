'use strict';

const validate = function() {
  return function (Component) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {

        };
      }

      componentWillMount() {
        this.getTime();
      }
    
      getTime() {
        const 
          minute = 60000,
          hour = 60 * minute,
          day = 24 * hour,
          diff = (+(new Date())) - (+(new Date(this.props.date)));

        if (this.rounding(diff / day)) {
          return this.props.date = `${this.rounding(diff / day)} дней назад`;
        }

        if (this.rounding(diff / hour)) {
          return this.props.date = `${this.rounding(diff / hour)} часов назад`;
        } else {
          return this.props.date = `${this.rounding(diff / minute)} минут назад`;
        }
      }

      rounding(operand) {
        return Math.floor(operand);
      }

      static get displayName() {
        const name = Component || Component.displayName || 'Component';

        return `validate(${name})`;
      }

      render() {
        return (
          <Component {...this.props}/>
        );
      }
    }
  }
}

const DateTimePretty = validate()(DateTime);

const Video = props => {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
};