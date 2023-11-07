const Test = require("../models/Test");

function addTest(test) {
  return Test.create(test);
}

async function getTests() {
  const tests = await Test.find();

  return tests;
}

async function editTest(id, test) {
  const newTest = await Test.findByIdAndUpdate(id, test, {
    returnDocument: "after",
  });
  return newTest;
}

function deleteTest(id) {
  return Test.deleteOne({ _id: id });
}

function getTest(id) {
  return Test.findById(id);
}

module.exports = {
  addTest,
  getTests,
  editTest,
  deleteTest,
  getTest,
};
