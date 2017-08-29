var CommentItem = React.createClass({
  render:function(){
    console.log(this)
    return (
      <div className='comment-item'>
        <div className='author'>
          {this.props.author}
        </div>
        <div className='text'>
          {this.props.children}
        </div>
      </div>
    );
  }
});
module.exports = CommentItem;
