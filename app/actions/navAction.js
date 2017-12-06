import alt from '../alt';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateEntry'
    );
  }
	changeEntry(ev){
		let data;
		ev.target.innerText==='Index'?data=0:(ev.target.innerText==='Recommend'?data=1:data=2);
		this.actions.updateEntry(data);
	}
  


}

export default alt.createActions(NavbarActions);