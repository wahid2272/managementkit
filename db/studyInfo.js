const db = require('./dbConfig');

// Get all study data
const getStudyInfo = async (req, res) => {
  await db.query("SELECT * FROM study_info", (err, results, fields) => {
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
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const price = req.body.price;

  db.query("INSERT INTO study_info (program, start_date, end_date, price) VALUES (?, ?, ?, ?)", [program, startDate, endDate, price], (err, result) => {
    if(err){
      return console.error('Error in query execution');
    };
  });
  // req.send({status: 1})
  res.status(200).send('New study info added to database');
};

module.exports = {
  getStudyInfo: getStudyInfo,
  addNewStudyInfo: addNewStudyInfo,
}
