'use strict'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active: 'All',
      projects: this.props.projects
    }
  }

  setFilter(filter) {
    this.setState({
      active: filter,
      projects: this.getProjects(filter)
    })
  }

  getProjects(filter) {
    let newFilter = this.props.projects.slice(0).filter(element => element.category === filter);
    if (!(newFilter.length)) {
      newFilter = this.props.projects.slice(0);
    }
    return newFilter;
  }


  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.active}
          onSelectFilter={(filter) => this.setFilter(filter)} />
        <Portfolio projects={this.state.projects} />
      </div>
    );
  }

}