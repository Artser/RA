'use strict';

const navigation = [
  {
    component: Creator,
    link: '/creator',
    title: 'Криэйтор'
  },
  {
    component: Essay,
    link: '/',
    title: 'Рефераты'
  },
  {
    component: Fortune,
    link: '/fortune',
    title: 'Гадалка'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  route = function() {
    return (
      <Switch>
        <Route path={navigation[0].link} component={navigation[0].component}/>
        <Route exact path={navigation[1].link} component={navigation[1].component}/>
        <Route path={navigation[2].link} component={navigation[2].component}/>
      </Switch>
    );
  }

  nav = function() {
    return (
      <nav className="tabs__items">
        <NavLink to={navigation[0].link} activeClassName={'tabs__item-active'} className={'tabs__item'}>{navigation[0].title}</NavLink>
        <NavLink exact to={navigation[1].link} activeClassName={'tabs__item-active'} className={'tabs__item'}>{navigation[1].title}</NavLink>
        <NavLink to={navigation[2].link} activeClassName={'tabs__item-active'} className={'tabs__item'}>{navigation[2].title}</NavLink>
      </nav>
    );
  }

  render() {
    return (
      <Router>
        <div className="tabs">
          {this.nav()}
          <div className="tabs__content">
            {this.route()}
          </div>
        </div>
      </Router>
    );
  }
}