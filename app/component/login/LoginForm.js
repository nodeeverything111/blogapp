import React from 'react';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state ={account:'',passwd:'',passwdtip:'logintiphide'};
	}
	handleClick(ev){
		debugger;
		$.ajax({
			type: 'POST',
			url: '/login/loginaction',
			data: { account: this.state.account, passwd: this.state.passwd}
		})
        .done((data) => {
			debugger;
			window.sessionStorage.setItem('token', data.token);
			window.sessionStorage.setItem('account', data.account);
			
			window.location.href="/";
		})
		.fail((jqXhr) => {
			debugger;
			this.setState({passwdtip:'col-xs-6 loginPasswd'});
		});
	}
	
	updateAccount(ev){
		debugger;
		this.setState({account:event.target.value});		
	}
	updatePasswd(ev){
		debugger;
		this.setState({passwd:event.target.value});
	}
	render() {
	return (
	
	<div className='loginForm'>
		<div className='loginTitle'>Welcome to blog</div>
		<br/>
		<br/>
		<div  className='col-md-offset-4'>
		
		<div className="input-group input-group-lg col-xs-6">
			<span className="input-group-addon" id="basic-addon1">Account:</span>
			<input type="text" value={this.state.account} onChange={(ev)=>{this.updateAccount(ev)}} className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
		</div>
		<br/>
		<div className="input-group input-group-lg col-xs-6">
			<span className="input-group-addon" id="basic-addon2">Passwd:</span>
			<input type="text" value={this.state.passwd} onChange={(ev)=>{this.updatePasswd(ev)}} className="form-control" placeholder="Passwd" aria-describedby="basic-addon2"/>
		</div>
		<div className={this.state.passwdtip}>password is not correct</div>
		<br/>
		<br/>
		<br/>
		<div className="col-xs-6">
		<button className="btn btn-block btn-success" onClick={(ev)=>{this.handleClick(ev)}}>submit</button>
		</div>
		</div>
	</div>

	)}
}


export default LoginForm;