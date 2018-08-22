import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style/btnBox.less'

function TabTag(props){
  
  return (
    <div className="pf-select-btn-box">
      <p onClick={resetBtn}>重置</p>
      <p onClick={confirmBtn}>确定</p>
    </div>
  )
}

TabTag.propTypes = {

}

TabTag.defaultProps = {

}

export default btnBox