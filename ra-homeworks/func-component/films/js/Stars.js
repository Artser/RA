'use strict';
const 
  isFunction = input => typeof input === 'function',
  renderIf = count => element => 
    ((count < 1) || (count > 5) || (typeof (count) !== 'number')) ? null : (isFunction(element) ? element() : element); 

function Stars({count}) {
  return (
  <ul className="card-body-stars u-clearfix">
    {renderIf(count)(
      ShowStars(count)
    )}
  </ul>
  );
}

function ShowStars(count) {
  let 
    stars = [],
    newStars;


  for(let i = 0; i < count; i++) {
    stars.push(<Star />);
  
  }
  newStars = stars.map((star, index) => <li key={index}>{star}</li>);
  return newStars;
}

Stars.defaultProps = {
  count: 0
};