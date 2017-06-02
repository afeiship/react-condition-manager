import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    conditionList:PropTypes.array,
  };

  static defaultProps = {
    conditionList:[]
  };
  /*===properties end===*/

  get children(){
    const {conditionList,children} = this.props;
    return conditionList.map((item,index)=>{
      return item ? children[index] : null;
    });
  }

  render(){
    const {className,conditionList,...props} = this.props;
    return (
      <section {...props} className={classNames('react-condition-manager',className)}>
        {this.children}
      </section>
    );
  }
}
