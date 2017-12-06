import alt from '../alt';
import IndActionIns from '../actions/individualAction';

class IndStore {
  constructor() {
    this.bindActions(IndActionIns);
	console.log("ind store init....");
	this.blogList=[{title:'111',abstract:'qwerttt'},{title:'222',abstract:'qwerttt'}]
  }

}

export default alt.createStore(IndStore);