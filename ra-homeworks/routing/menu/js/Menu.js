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
      {navigation.map((obj, index) =><NavLink exact to={obj.link} activeClassName='menu__item-active' className='menu__item' key={index}>{obj.title}</NavLink>)}
    </nav>
  );
}