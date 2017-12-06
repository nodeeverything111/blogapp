import Waterline from 'waterline';

export default Waterline.Collection.extend({
	identity: 'user',
	connection: 'myLocalMysql',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	schema: true,
	attributes: {
		userId: {type:'string',primaryKey: true, unique: true,index: true},
		userName: 'string',
		passwd: 'string'
	}
});