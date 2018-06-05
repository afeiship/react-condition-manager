import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  get children() {
    const { items, children } = this.props;
    return items.map((item, index) => {
      return item ? ( children[index] || children ) : null;
    });
  }

  render() {
    const { className, items, ...props } = this.props;
    return <section {...props} className={classNames('react-condition-manager', className)} children={this.children} />;
  }
}
