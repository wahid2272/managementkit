const db = require('./dbConfig');
let instance = null;

class DbService {
  static getDbServiceInstance() {
      return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "select * from users";

        db.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        })
      });
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  


}

module.exports = DbService;
