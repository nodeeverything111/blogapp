import alt from '../alt';
import NavActionIns from '../actions/navAction';

class NavbarStore {
  constructor() {
    this.bindActions(NavActionIns);
    this.entry=[false,false,false];
	if(window.location.pathname==='/'){
		this.entry[0]=true;
	}
	if(window.location.pathname==='/index/recommend'){
		this.entry[1]=true;
	}
	if(window.location.pathname==='/index/individual'){
		this.entry[2]=true;
	}
	console.log("nav store init....");
  }
  
  onUpdateEntry(data) {
    this.entry=this.entry.map(function(value,index){
		debugger;
		return (index===data)?true:false;
	})
  }
}

export default alt.createStore(NavbarStore);