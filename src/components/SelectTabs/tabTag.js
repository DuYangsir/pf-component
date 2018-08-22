import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style/tabTag.less'

function TabTag(props){
  const tabClassName = classNames('pf-tab-tag', {
    [`pf-tab-tag-active`]: props.data.state
  })

  const tabClick = () => {
    if(props.active){
      props.tabScreenClicks(props.data)
      return
    }
    props.tabClicks(props.data)
  }
  
  return (
    <div className={tabClassName} 
      onClick={tabClick}
    >
      <span>{props.data.value || '筛选'}</span>
    </div>
  )
}

TabTag.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool
}

TabTag.defaultProps = {
  data: {
    value: "筛选",
    state: false,
    id: 'shaixuan'
  },
  active: false
}


export default TabTag