import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style/tag.less'

function noop() {}

class Tag extends Component{

  static contextTypes = {
    onTag: PropTypes.func
  }

  constructor(props){
    super(props)
  }

  render(){

    const {data, selects} = this.props

    const tagClassName = classNames('pf-tag-box', {
      [`pf-tag-box-active`]: data.state
    })
  
    const tagClick = () => {
      let datas = data
      datas.selects = selects
      this.context.onTag(datas)
    }
  
    let text = data.value
    if(data.value.length > 4){
      text = `${data.value.slice(0,4)}...`
    }
  
    return (
      <div className="pf-tag-wrap">
        <div className={tagClassName} 
            onClick={tagClick}
        >
          <p>{text}</p>
        </div>
      </div>
      
    )
  }
}

Tag.propTypes = {
  data: PropTypes.object,
  selects: PropTypes.bool,
  tagClicks: PropTypes.func
}

Tag.defaultProps = {
  data: {
    id: 1,
    value: "默认选项",
    state: false
  },
  selects: false,
  tagClicks: noop
}

export default Tag