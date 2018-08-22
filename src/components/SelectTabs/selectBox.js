import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Tag from './tag'
import SelectListChild from './selectListChild'
import './style/selectBox.less'
import './style/btnBox.less'

class SelectBox extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {data} = this.props

    const resetBtn = () => {
      this.props.resetBtn(data)
    }
    const confirmBtn = () => {
      this.props.confirmBtn()
    }

    const stopPropagation = (e) => {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
    }

    return (
      <div className="pf-select-box" onClick={(event) => stopPropagation(event)}>
        <div className="pf-select-wrap">
          <SelectListChild data={data}
            selects={data.selects}
          />
        </div>
        {data.selects?
          (<div className="pf-select-btn-box">
            <p onClick={resetBtn}>重置</p>
            <p onClick={confirmBtn}>确定</p>
          </div>): null
        }
      </div>
    )
  }
}

SelectBox.propTypes = {
  data: PropTypes.object
}

SelectBox.defaultProps = {
  data: {
    title: '默认标题',
    children: [],
    selects: false
  }
}

export default SelectBox