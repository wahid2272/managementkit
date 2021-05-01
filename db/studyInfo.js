const db = require('./dbConfig');

// Get all study data
const getStudyInfo = (req, res) => {
  db.query(`SELECT * FROM study_info`, (err, results, fields) => {
    if(err) {
      res.send(err);
    }
    else{
      res.send(results);
    }
  })
};

module.exports = {
  getStudyInfo: getStudyInfo,
}
