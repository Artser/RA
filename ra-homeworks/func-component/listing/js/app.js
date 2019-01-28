'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
  .then(response => response.json())
  .then(response => response.map((item) => <Listing items={item}/>))
  .then(response => {
    ReactDOM.render(
      <div className="item-list">{response}</div>,
      document.getElementById('root')
    );
  });

function Listing({items}) {
  
  function getTitle(title) {
    if (title.length > 50) {
      let newTitle = title.slice(0, 50) + '...';
      return newTitle;
    } else {
      return title;
    }
  }

  function getQuantity(quantity) {
    let className = '';
    if (quantity <= 10) {
      className = 'low';
    } else if (quantity <= 20) {
      className = 'medium';
    } else {
      className = 'high';
    }

    return `item-quantity level-${className}`
  }

  function getPrice(currency, price) {
    let code = '';
    if ((currency === 'USD')|| (currency === 'EUR')) {
      if (currency === 'USD') {
        code = '$';
      } else {
        code = '€';
      }
      return code + price;
    } else {
      return price + ' ' + currency
    }
  }
  
  return (
    <div key={items.listing_id} className="item">
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(items.title)}</p>
        <p className="item-price">{getPrice(items.currency_code, items.price)}</p>
        <p className={getQuantity(items.quantity)}>{items.quantity} left</p>
      </div>
    </div>
  );
}

Listing.defaultProps = {
  items: []
};