'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

const addDate = function() {
  const date = new Date(),
    options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
  let formatDate = date.toLocaleString('Ru-ru', options).split('.').reverse().join('-');
  return formatDate;
};

const dateProps = function (props, prop) {
  const date = props[prop];
  if ((typeof(date) === 'string') && (/^\d{4}\-\d{2}\-\d{2}$/.test(date))) {
    return null;
  } else {
    return new Error('Дата должна быть формата "ГГГГ-ММ-ДД"');
  }
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: dateProps,
  required: PropTypes.bool
}

DateInput.defaultProps = {
  value: addDate
}