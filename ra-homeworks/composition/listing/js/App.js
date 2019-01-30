'use strict';

const App = (props) => (
  <main>
    {props.items.map((item, index) => 
      <ChangeColor item={item} key={index} />
    )}
  </main>
);

const ChangeColor = function ({item}) {
  switch(item.type) {
    case 'unisex':
      return <Item color="black" item={item} />;
    case 'male':
      return <Item color="blue" item={item} />;
    case 'female':
      return <Item color="orange" item={item} />;
  }
};