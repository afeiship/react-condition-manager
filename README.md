# react-condition-manager
> React condition manager.

## installation
```shell
npm install -S @feizheng/react-condition-manager
```

## update
```shell
npm update @feizheng/react-condition-manager
```

## properties
| Name     | Type  | Default | Description             |
| -------- | ----- | ------- | ----------------------- |
| items    | array | []      | You condition list.     |
| nodeName | any   | 'div'   | The container tag name. |
| virtual  | bool  | false   | If use react.framgment. |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-condition-manager/dist/style.scss";

  // customize your styles:
  $react-condition-manager-options: ()
  ```
2. import js
  ```js
  import RCM from '@feizheng/react-condition-manager';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      index: 0,
      status: 'N'
    };

    handleClick(status) {
      console.log(status);
      if (status === 'F0') {
        this.setState({
          index: 0,
          status: 'F0'
        });
      } else if (status === 'F1') {
        this.setState({
          index: 1,
          status: 'F1'
        });
      } else {
        this.setState({ status });
      }
    }

    render() {
      const { index, status } = this.state;
      return (
        <div className="app-container">
          <RCM items={[true, false, true]}>
            <div>when condition 1</div>
            <div>when condition 2</div>
            <div>when condition 3</div>
          </RCM>

          <button className="button" onClick={this.handleClick.bind(this, 'N')}>
            Set Status - N
          </button>
          <button className="button" onClick={this.handleClick.bind(this, 'A')}>
            Set Status - A
          </button>
          <button className="button" onClick={this.handleClick.bind(this, 'F0')}>
            Set Status - F-0
          </button>
          <button className="button" onClick={this.handleClick.bind(this, 'F1')}>
            Set Status - F-1
          </button>
          <button className="button" onClick={this.handleClick.bind(this, null)}>
            Set DEFULA
          </button>

          <RCM
            virtual
            items={[
              index === 0 && status === 'N',
              index === 0 && status === 'A',
              index === 0 && status === 'F0',
              index === 1 && status === 'F1',
              null
            ]}>
            <div>when condition 1 ---. N</div>
            <div>when condition 2 ---. A</div>
            <div>when condition 3 ---. F (index = 0)</div>
            <div>when condition 4 ---. F (index = 1)</div>
            <div>default. null view..</div>
          </RCM>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-condition-manager/
