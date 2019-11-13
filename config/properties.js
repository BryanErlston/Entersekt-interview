class TodoProperties {

	/**
	 * @returns connection url for the mongodb.
	 * 
	 * @static
	 */
	static getDbConnection() {
		return 'mongodb://localhost:27017/todo';
	}
}

module.exports = TodoProperties;