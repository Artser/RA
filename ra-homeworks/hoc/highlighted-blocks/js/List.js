'use strict';

const wrapperFunction = function (Wrap, Component, props) {
  return (
    <Wrap>
      <Component {...props}/>
    </Wrap>
  );
}

const getWrapper = function (callback, [Popular, New]) {
  return function (Component) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {

        };
      }

      static get displayName() {
        const name = Component || Component.displayName || 'Component';

        return `getWrapper(${name})`;
      }

      getContent() {
        if (this.props.views > 1000) {
          return callback(Popular, Component, this.props);
        } else if (this.props.views < 100) {
          return callback(New, Component, this.props);
        } else {
          return <Component {...this.props}/>
        }
      }

      render() {
        return (
          this.getContent()
        );
      }
    }
  }
}

const 
  components = [Popular, New],
  VideoWrapper = getWrapper(wrapperFunction, components)(Video),
  ArticleWrapper = getWrapper(wrapperFunction, components)(Article);


const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWrapper {...item} />
        );

      case 'article':
        return (
          <ArticleWrapper {...item} />
        );
      }
  });
};
