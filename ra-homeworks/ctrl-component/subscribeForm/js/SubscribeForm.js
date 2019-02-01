'use strict';

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.error = 'is-error';
    this.valid = 'is-valid';
    this.state = {
      valid: ''
    };
  }

  isValid(input) {
    if (input.value !== '') {
      if (input.validity.valid) {
        return this.valid;
      } else {
        return this.error;
      }
    } else {
      return false;
    }
  }

  onChange() {
    this.setState({
      valid: this.isValid(event.currentTarget)
    });
  }

  render() {
    let changeHandler = this.onChange.bind(this);

    return (
      <div className="subscribe__form">
        <form className={`form form--subscribe ${this.state.valid}`}>
          <h4 className="form-title">Подписаться:</h4>
          <Subform
              onChange={changeHandler}
          />
        </form>
      </div>
    );
  }
}


class Subform extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let changeHandler = this.props.onChange;

    return (
      <div className="form-group">
        <label htmlFor="input-email" className="sr-only">Email</label>
        <input
          type="email"
          id="input-email"
          placeholder="Email"
          className="form-control"
          onChange={changeHandler}
          />
        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
        <button type="submit" className="form-next">
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    );
  }
}