class TodoProperties {

	/**
	 * @returns connection url for the mongodb.
	 * 
	 * @static
	 */
	static getDbConnection() {
		return 'mongodb://127.0.0.1:27017/todo';
	}
}

module.exports = TodoProperties;