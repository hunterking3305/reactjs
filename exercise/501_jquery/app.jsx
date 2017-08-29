var Item = React.createClass({
  getInitialState: function() {
    return {
      num: 2
    };
  },
  sub:function(){
    this.setState({num: this.state.num-1});
  },
  add:function(){
    this.setState({num: this.state.num+1});
  },
  //code here...








  render:function(){
    return (
      <div className='item'>
        <div className='title'>涼感內衣</div>
        <div className='img'/>
        <div className='num-group'>
          <div className='btn btn-left' onClick={this.sub}/>
          <div className='num' /*code here...*/>{this.state.num}</div>
          <div className='btn btn-right' onClick={this.add}/>
        </div>
        <div className='submit'/>
      </div>
    );
  }
});


ReactDOM.render(
  <Item/>,
  document.getElementById('content')
);
