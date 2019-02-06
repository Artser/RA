'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const getURL = function (props, prop) {
  const url = props[prop];
  if ((typeof(url) === 'string') && (/^(https:\/\/vk\.com\/)(\(id[0-9]+|[A-Za-z0-9_-]+)/g.test(url))) {
    return null;
  } else {
    return new Error ('Неверный URL');
  }
}

const getDate = function (props, prop) {
  const date = props[prop];
  if ((typeof (date) === 'string') && (/^\d{4}-\d{2}-\d{2}$/.test(date))) {
    if (new Date(date) > new Date()) {
      return new Error ('Указанная в компоненте дата превышает текущую');
    } else {
      return null;
    }
  } else {
    return new Error ('Неверный формат даты');
  }
}

const isValid = function (getURL) {
  const check = function (isRequired, props, prop) {
    if (props[prop]) {
      return getURL(props, prop);
    } else {
      if (isRequired) {
        return new Error('Не все обязательные атриуты переданы');
      } else {
        return null;
      }
    }
  };
  return check.bind(null, false).isRequired = check.bind(null, false);
}



class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      url: isValid.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      img: PropTypes.string,
      birthday: getDate
    }
  }

  static get defaultProps() {
    return {
      first_name: 'Name',
      last_name: 'Surname',
      img: './images/profile.jpg',
      birthday: '2001-01-01'
    }
  }

  render() {
    return (
      <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
        <div style={profileStyle}>
          <h2>{this.props.first_name} {this.props.last_name}</h2>
          <div>
            <img src={this.props.img} className="img-thumbnail" style={imageStyle}/>
          </div>
          <p>vk: <a href={this.props.url}>{this.props.url}</a></p>
          <p>birthday: <a href={this.props.birthday}>{this.props.birthday}</a></p>
        </div>
      </div>
    );
  }
}