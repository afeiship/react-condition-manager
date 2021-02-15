# react-condition-manager
> React condition manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-condition-manager
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-condition-manager/dist/style.css";

  // or use sass
  @import "~@jswork/react-condition-manager/dist/style.scss";

  // customize your styles:
  $react-condition-manager-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactConditionManager from '@jswork/react-condition-manager';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-condition-manager">
          <ReactConditionManager className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-condition-manager/


## license
Code released under [the MIT license](https://github.com/afeiship/react-condition-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-condition-manager
[version-url]: https://npmjs.org/package/@jswork/react-condition-manager

[license-image]: https://img.shields.io/npm/l/@jswork/react-condition-manager
[license-url]: https://github.com/afeiship/react-condition-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-condition-manager
[size-url]: https://github.com/afeiship/react-condition-manager/blob/master/dist/react-condition-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-condition-manager
[download-url]: https://www.npmjs.com/package/@jswork/react-condition-manager
