import React from 'react';
import IndStore from '../store/IndividualStore';
import IndActions from '../actions/individualAction';

class Individual extends React.Component {
	constructor(props){
		super(props);
		this.state = IndStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		console.log("home did mount!!!");
		IndStore.listen(this.onChange);
		IndActions.getLoginStatus();
	}
  
	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<div>
			{this.state.blogList.map(function(val,index){
				debugger;
				this;
				return <div><p><strong>{val.title}</strong></p><br/><span>{val.abstract}</span></div>
			})}
			</div>
			);
	}
}



export default Individual;