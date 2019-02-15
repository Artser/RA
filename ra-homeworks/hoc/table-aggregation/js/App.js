'use strict';

const withData = function (callback) {
  return function (Component) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }

      componentWillReceiveProps(receivedProps) {
        receivedProps.list.sort(function (first,second) {
          return new Date(first.date) - new Date(second.date);
        });
        receivedProps.list = callback(receivedProps);
      }

      static get displayName() {
        const name = Component || Component.displayName || 'Component';

        return `withData(${name})`;
      }

      render() {
        return (
          <Component {...this.props}/>
        );
      }
    }
  }
}

const newData = function(unit, props) {
  const 
    data = [],
    currentElement = {};
  const getValid = function(element) {
    if(isNaN(parseInt(element))) {
      return element;
    } else {
      return parseInt(element);
    }
  }

  props.list.forEach(function(element) {
    if(!(unit(element) in currentElement)) {
      currentElement[unit(element)] = 0;
    }
  });

  Object.keys(currentElement).forEach(function(objectElement) {
    props.list.forEach(function(element) {
      if(getValid(objectElement) === unit(element)) {
        currentElement[objectElement] += element.amount;
      }
    });
    data.push({[`${unit.name}`]: objectElement, amount: currentElement[objectElement]});
  });
  return data;
}

const getMonthTable = function(props) {
  const month = function(element) {
    return new Date(element.date).toLocaleDateString('en-EN', {month: 'long'});
  }
  return newData(month, props);
}

const getSortTable = function(props) {
  return props.list;
}

const getYearTable = function(props) {
  const year = function(element) {
    return new Date(element.date).getFullYear();
  }
  return newData(year, props);
}

const 
  Month = withData(getMonthTable)(MonthTable),
  Sort = withData(getSortTable)(SortTable),
  Year = withData(getYearTable)(YearTable);


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        list: []
      };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <Month list={this.state.list} />
        <Year list={this.state.list} />
        <Sort list={this.state.list} />
      </div>
    );
  }
};