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
    link: '/firtune',
    title: 'Гадалка'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  route = function() {
    return navigation.map((obj) => <Route exact path={obj.link} component={obj.component}/>);
  }

  nav = function() {
    return navigation.map((obj, index) => <NavLink exact to={obj.link} activeClassName={'tabs__item-active'} className={'tabs__item'} key={index}>{obj.title}</NavLink>);
  }

  render() {
    return (
      <Router>
        <div className="tabs">
          <nav className="tabs__items">
            {this.nav()}
          </nav>
          <div className="tabs__content">
            <Switch>
              {this.route()}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}