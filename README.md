# react-condition-manager
> React condition manager.

## properties
```js
static propTypes = {
  items: PropTypes.array,
  nodeName: PropTypes.any
};

static defaultProps = {
  items: [],
  nodeName: 'div'
};
```

## install
```shell
npm install -S afeiship/react-condition-manager
```

## usage
1. import css
  ```scss
  @import "~react-condition-manager/style.scss";

  // customize your styles:
  $react-condition-manager-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactConditionManager from 'react-condition-manager';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactConditionManager />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## docs
- https://afeiship.github.io/react-condition-manager/
