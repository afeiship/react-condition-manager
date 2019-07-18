import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    items: PropTypes.array,
    nodeName: PropTypes.any,
    virtual: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    nodeName: 'div',
    virtual: false
  };
  /*===properties end===*/

  get children() {
    const { items, children } = this.props;
    const allFalsy = !items.some((item) => item);
    return items.map((item, index) => {
      if (item) {
        return children[index] || children;
      } else {
        if (item === null && allFalsy && children[index]) {
          return children[index];
        }
      }
      return null;
    });
  }

  render() {
    const { nodeName, items, children, virtual, ...props } = this.props;
    const _nodeName = virtual ? React.Fragment : nodeName;
    return React.createElement(_nodeName, {
      children: this.children,
      ...props
    });
  }
}
