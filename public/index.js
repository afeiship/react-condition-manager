import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import RCM from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    a: null,
    dynamic: 1,
    index: 0,
    status: 'N'
  };

  handleClick(status) {
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
    const { index, dynamic, status } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-condition-manager">
        <RCM
          only
          items={[
            dynamic === 1,
            dynamic === 2,
            dynamic === 3,
            dynamic === 4,
            dynamic === 5
          ]}>
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
          <div>4444</div>
        </RCM>

        <button
          className="button mb-1 is-primary"
          onClick={(e) => {
            const val = Math.floor(Math.random() * 5);
            console.log('dynamic only value:', val);
            this.setState({ dynamic: val });
          }}>
          SetDynamic
        </button>

        <RCM items={[true, false, true]}>
          <div>when condition 1</div>
          <div>when condition 2</div>
          <div>when condition 3</div>
        </RCM>

        <button
          className="button mr-1 is-primary"
          onClick={this.handleClick.bind(this, 'N')}>
          Set Status - N
        </button>
        <button
          className="button mr-1 is-primary"
          onClick={this.handleClick.bind(this, 'A')}>
          Set Status - A
        </button>
        <button
          className="button mr-1 is-primary"
          onClick={this.handleClick.bind(this, 'F0')}>
          Set Status - F-0
        </button>
        <button
          className="button mr-1 is-primary"
          onClick={this.handleClick.bind(this, 'F1')}>
          Set Status - F-1
        </button>
        <button
          className="button is-primary"
          onClick={this.handleClick.bind(this, null)}>
          Set DEFULA
        </button>

        <RCM
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
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
