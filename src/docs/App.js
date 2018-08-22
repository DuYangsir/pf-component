import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from '../components/index'

const Item = List.Item

export default class App extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <List>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('button')
            }}
          >
            Button
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('switch')
            }}
          >
            Switch
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('list')
            }}
          >
            List
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('screen')
            }}
          >
            screen
          </Item>
        </List>
      </div>
    )
  }
}
