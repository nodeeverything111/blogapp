import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Nav';
class App extends React.Component {
  constructor(props){
		super(props);
		debugger;
		this.state = {loginstatus:window.sessionStorage.getItem('token'),account:window.sessionStorage.getItem('account')};
		
	} 
	componentDidMount(){
		//window.onstorage事件只能监听同源网页之间的改变，如果要监听同一网页的改变，需要自定义事件
		let _removeItem=window.sessionStorage.removeItem;
		
		let _this=this;
		window.sessionStorage.removeItem=function(key){
			let removeItemEvent=new Event('removeItemEvent');
			window.dispatchEvent(removeItemEvent);
			_removeItem.apply(this,arguments);
		}
		 window.addEventListener("removeItemEvent", function (e) {
			 debugger;
			_this.setState({loginstatus:null})
		});
		
		
	}
  
  render() {
	 
    return (
      <div id='appdiv'>
	  <Navbar loginStatus={this.state.loginstatus} account={this.state.account}/>
        <RouteHandler />
      </div>
    );
  }
}

export default App;