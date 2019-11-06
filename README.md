# react-condition-manager
> React condition manager.

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

## documentation
- https://afeiship.github.io/react-condition-manager/
