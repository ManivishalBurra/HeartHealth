const app = require("express")();
const Report = require("../../models/report")

app.post("/",(req,res)=>{
  var id = req.query.id;
  const report = new Report({
    age: req.body.age,
    ca: req.body.ca,
    chol: req.body.chol,
    cp: req.body.cp,
    exang: req.body.exang,
    fbs: req.body.fbs,
    gender: req.body.gender,
    maxRate: req.body.maxRate,
    oldpeak: req.body.oldpeak,
    restbp: req.body.restbp,
    restecg: req.body.restecg,
    sex: req.body.sex,
    slope: req.body.slope,
    result: req.body.result,
    user_id: id,
    createdOn: Date.now(),
  })
  report.save();
  res.send("success");
    
})

module.exports = app;