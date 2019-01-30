'use strict';

const parts = [
  {
    title: 'Компоненты',
    text: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
  },
  {
    title: 'Выучил раз, используй везде!',
    text: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
  },
  {
    title: 'Использование JSX',
    text: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
  }
];

const ShowTitle = (props) => {
  return (
    <h2 className="title">{props.children}</h2>
  );
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.elements = 6;
    this.data = new Array(this.elements).fill(0);
  }

  getElements() {
    return this.data.map((element, index) => parts[index]);
  }

  render() {
    const data = this.getElements();
    return (
      <main className="main">
        <ShowTitle>
          React
        </ShowTitle>
        {data.map((element, index) => {
          if (element) {
            return (
              <Accordeon key={index}>
                {element}
              </Accordeon>
            );
          }
        })}
      </main>
    );
  }
}

class Accordeon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.props = [];
  }

  render() {
    const openSection = () => {
      this.setState({
        open: !this.state.open
      });
    };

    const OnClick = () => {
      openSection();
    };

    const ShowSection = (props) => {
      return (
        <h3 className="sectionhead" onClick={OnClick}>{props.children}</h3>
      );
    };

    const ShowArticle = (props) => {
      return (
        <div className="articlewrap">
          <div className="article">
            {props.children}
          </div>
        </div>
      );
    };

    return (
      <section className={`section ${this.state.open ? "open" : ""}`}>
        <button onClick={OnClick}>
          toogle
        </button>
        <ShowSection>
          {this.props.children.title}
        </ShowSection>
        <ShowArticle>
          {this.props.children.text}
        </ShowArticle>
      </section>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('accordian')
)