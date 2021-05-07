const db = require('./dbConfig');

// Get all study data
const getStudyInfo = (req, res) => {
  db.query("SELECT * FROM study_info", (err, results, fields) => {
    if(err) {
      res.send(err);
    }
    else{
      res.send(results);
    }
  })
};

const addNewStudyInfo = (req, res) => {
  const program = req.body.program;
  const startDate = req.body.start_date;
  const endDate = req.body.end_date;
  const price = req.body.price;

  console.log(startDate);

  db.query("INSERT INTO study_info (program, start_date, end_date, price) VALUES (?, ?, ?, ?)", [program, startDate, endDate, price], (err, result) => {
    // console.log(err);
    return console.error(`Error in query execution`);
  });
};

module.exports = {
  getStudyInfo: getStudyInfo,
  addNewStudyInfo: addNewStudyInfo,
}
