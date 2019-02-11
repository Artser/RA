class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    this.setPosition();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    this.elementY = document.querySelector('input').getBoundingClientRect().top;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    let result;
    result = (this.elementY < window.pageYOffset);
    return result;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
