import React, { Component, createElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    nodeName: PropTypes.any,
  };

  static defaultProps = {
    items: [],
    nodeName: 'div'
  };
  /*===properties end===*/

  get children() {
    const { items, children } = this.props;
    return items.map((item, index) => {
      return item ? (children[index] || children) : null;
    });
  }

  render() {
    const { className, items, ...props } = this.props;
    return createElement( nodeName, {
      children: this.children,
      ...props,
    });
  }
}
