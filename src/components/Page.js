import React, { Component } from 'react'

export default class Page extends Component {
  constructor() {
    super();
    this.onYearBtnClick = this.onYearBtnClick.bind(this);
  }
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
  }
  render() {
    const { year, photos } = this.props
    
    return (<div className='ib page'>
      <div>
        <button className='btn' onClick={this.onYearBtnClick}>2016</button>
        <button className='btn' onClick={this.onYearBtnClick}>2015</button>
        <button className='btn' onClick={this.onYearBtnClick}>2014</button>
      </div>
      <h3>{year} год</h3>
      <p>У тебя {photos.length} фото.</p>
    </div>
  )}
}