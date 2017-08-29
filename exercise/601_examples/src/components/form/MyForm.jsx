require('./myForm.scss');

var cities = require('./cities');

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      tel: '',
      gender: 'male',
      time:{
        morning: false,
        afternoon: false,
        night: false
      },
      city: 1,
      comments:'',
      image:''
    };
  },
  setName:function(e){
    this.setState({name:e.target.value});
  },
  setTel:function(e){
    this.setState({tel:e.target.value});
  },
  setGender:function(e){
    this.setState({gender: e.target.value});
  },
  setTime:function(e){
    var key = e.target.value;
    var checked = e.target.checked;
    this.state.time[key] = checked;
    this.forceUpdate();
  },
  setCity:function(e){
    this.setState({city:e.target.value});
  },
  setComments:function(e){
    this.setState({comments:e.target.value});
  },
  setImage:function(e){
    // code here...






  },
  submit:function(){
    alert(JSON.stringify(this.state, null, '  '));
  },
  render: function() {
    return (
      <div className='form'>
        <h1>聯絡我們</h1>
        <table>
          <tr>
            <th>您的大名</th>
            <td>
              <input
                type='text'
                placeholder='請輸入姓名'
                value={this.state.name}
                onChange={this.setName}
                />
            </td>
          </tr>

          <tr>
            <th>您的電話</th>
            <td>
              <input
                type='text'
                placeholder='請輸入電話'
                value={this.state.tel}
                onChange={this.setTel}
                />
            </td>
          </tr>

          <tr>
            <th>性別</th>
            <td>
              <input
                type='radio'
                id='radio-male'
                // code here...


                />
              <label /* code here... */>男</label>
              <input
                type='radio'
                id='radio-female'
                // code here...


                />
              <label /* code here... */>女</label>
              <input
                type='radio'
                id='radio-other'
                // code here...


                />
              <label /* code here... */>其他</label>
            </td>
          </tr>

          <tr>
            <th>可聯絡時間</th>
            <td>
              <input
                type='checkbox'
                id='check1'
                // code here...


                />
              <label /* code here... */>上午</label>
              <input
                type='checkbox'
                id='check2'
                // code here...


                />
              <label /* code here... */>下午</label>
              <input
                type='checkbox'
                id='check3'
                // code here...


                />
              <label /* code here... */>晚上</label>
            </td>
          </tr>

          <tr>
            <th>居住地:</th>
            <td>
              {/* code here... */}






            </td>
          </tr>

          <tr>
            <th>您的意見</th>
            <td>
              {/* code here... */}



            </td>
          </tr>

          <tr>
            <th>上傳圖片</th>
            <td>
              <input
                type='file'
                // code here...

                />
              <img className='image' src={this.state.image}/>
            </td>
          </tr>
        </table>

        <button onClick={this.submit}>確認送出</button>
      </div>
    );
  }
});
module.exports = MyForm;
