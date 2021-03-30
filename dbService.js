const db = require('./dbConfig');

class DbService {
  static getDbServiceInstance() {
      return instance ? instance : new DbService();
  }
}

module.exports = DbService;
