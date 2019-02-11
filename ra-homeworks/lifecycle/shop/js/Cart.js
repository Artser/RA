class Cart extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate({isOpen, items}) {
    let result;
    result = ((isOpen !== this.props.isOpen) || ((isOpen) && (items.length !== this.props.length)));
    return result;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
