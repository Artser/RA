'use strict';

const navigation = [
  {
    link: '/',
    title: 'Главная'
  },
  {
    link: '/drift',
    title: 'Дрифт-такси'
  },
  {
    link: '/timeattack',
    title: 'Time Attack'
  },
  {
    link: '/forza',
    title: 'Forza Karting'
  }
];

const Menu = function() {
  return (
    <nav className="menu">
      <NavLink exact to={navigation[0].link} activeClassName='menu__item-active' className='menu__item'>{navigation[0].title}</NavLink>
      <NavLink to={navigation[1].link} activeClassName='menu__item-active' className='menu__item'>{navigation[1].title}</NavLink>
      <NavLink to={navigation[2].link} activeClassName='menu__item-active' className='menu__item'>{navigation[2].title}</NavLink>
      <NavLink to={navigation[3].link} activeClassName='menu__item-active' className='menu__item'>{navigation[3].title}</NavLink>
    </nav>
  );
}
