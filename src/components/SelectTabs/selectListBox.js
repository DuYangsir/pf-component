import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Tag from './tag'
import SelectListChild from './selectListChild'
import './style/selectListBox.less'
import './style/btnBox.less'

class SelectListBox extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const {data} = this.props

    const resetBtn = () => {
      this.props.resetBtn(data, true)
    }
    const confirmBtn = () => {
      this.props.confirmBtn()
    }

    const stopPropagation = (e) => {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
    }

    return (
      <div className="pf-select-list-box" onClick={(event) => stopPropagation(event)}>
        <div className="pf-select-wrap">
          {
            data.map(item => 
              <SelectListChild 
                key={item.id}
                data={item}
                selects={item.selects}
                foldMode={true}
              />
            )
          }
          
        </div>
        <div className="pf-select-btn-box">
          <p onClick={resetBtn}>重置</p>
          <p onClick={confirmBtn}>确定</p>
        </div>
      </div>
    )
  }
}

SelectListBox.propTypes = {
  data: PropTypes.array
}

SelectListBox.defaultProps = {
  data: [{
    id: 'id',
    value: '默认标题',
    children: [],
    selects: false
  }]
}

export default SelectListBox