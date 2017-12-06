import alt from '../alt';
import { HistoryLocation } from 'react-router'

class IndActions {
  constructor() {
    this.generateActions(
      'getIndividualBlog'
      
    );
  }

   getLoginStatus(){
	   $.ajax({ url: '/api/getloginstatus',type:'post',data:{token:window.sessionStorage.getItem('token')}})
			.done( data=> {
				debugger;
				console.log("getloginstatus success");
				if(data.status==='success'){
					
				}
				else{
					window.sessionStorage.removeItem('token');
					HistoryLocation.push('/');
				}
			})
			.fail( jqXhr=> {
				//返回异常，清除token，回到首页
				console.log("getloginstatus fail");
				window.sessionStorage.removeItem('token');
				HistoryLocation.push('/');
			});
   }
}

export default alt.createActions(IndActions);