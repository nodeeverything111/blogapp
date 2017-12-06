import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../store/navStore';
import NavbarActions from '../actions/navAction';

class Nav extends React.Component {
	constructor(props){
		super(props);
		debugger;
		this.state = NavbarStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		NavbarStore.listen(this.onChange);
		
	}
	onChange(state) {
		this.setState(state);
	}
	handleClick(ev){
		debugger;
		NavbarActions.changeEntry(ev);
	}

	render() {
		return (
			<div>
				<div className="page-header"><h1 className="text-center">Blog</h1><p className={this.props.loginStatus?'col-md-offset-10':'navHide'}>welcome:&nbsp;&nbsp;<span className='navaccount'>{this.props.account}</span></p><p className={this.props.loginStatus?'navHide':'col-md-offset-10'}><a href="/login.html">login</a></p></div>
				<ul className="nav nav-tabs" onClick={(ev)=>{this.handleClick(ev)}}>
					<li role="presentation" className={this.state.entry[0]?'active':''}><Link to='/'>Index</Link></li>
					<li role="presentation" className={this.state.entry[1]?'active':''}><Link to='/index/recommend'>Recommend</Link></li>
					<li role="presentation" className={this.props.loginStatus?(this.state.entry[2]?'active':''):'navHide'}><Link to='/index/individual'>Individual</Link></li>
				</ul>
				
			</div>
			);
	}
}



export default Nav;