'use strict';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    this.props.filterBooks(event.currentTarget.value);
  }

  render() {
    let changeHandler = this.onChange.bind(this);

    return (
      <input
        type="text"
        placeholder="Search by title or author"
        value={this.props.value}
        onChange={changeHandler}
      />
    );
  }
}