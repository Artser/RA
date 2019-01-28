'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: VIEW_MODULE,
      cardView: true
    }
  }

  getSwitch() {
    if (event.target.textContent === VIEW_LIST) {
      return VIEW_MODULE;
    } else {
      return VIEW_LIST;
    }
  }

  getCardView() {
    return !(this.state.cardView);
  }

  setSwitch() {
    this.setState({
      switch: this.getSwitch(),
      cardView: this.getCardView()
    })
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.switch}
            onSwitch={() => this.setSwitch()} />
        </div>
        {this.renderLayout(this.state.cardView)}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
