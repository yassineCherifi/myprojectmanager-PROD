const mongoose = require('mongoose');
require('../models/project');
require('../models/test');
const Project = mongoose.model('Project');
const Test = mongoose.model('Test');

/**
 * Get the test list of the project.
 */
module.exports.getTests = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate('tests')
        .exec(function (err, project) {
            if (err) res.json({ error: 'error' });
            res.json({ tests: project.tests });
        });
};

/**
 * Add a new test in the project.
 */
module.exports.createTest = (req, res) => {
    const test = new Test();
    test.title = req.body.title;
    test.description = req.body.description;
    test.type = req.body.type;
    test.date = req.body.dp;
    test.link = req.body.Lien;
    test.status = req.body.status;
    test.save()
        .then(() => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.tests.push(test);
                    project.save();
                    res.json({ message: 'Test created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/**
 * Edit a test of the project.
 */
module.exports.editTest = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'tests',
            match: { _id: req.params.idTest }
        })
        .then((result) => {
            result.tests[0].title = req.body.title;
            result.tests[0].description = req.body.description;
            result.tests[0].type = req.body.type;
            result.tests[0].date = req.body.dp;
            result.tests[0].link = req.body.Lien;
            result.tests[0].status = req.body.status;
            result.tests[0].save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'test edited' });
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/**
 * Delete a test from the project.
 */
module.exports.deleteTest = (req, res) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: 'no project found' });
        Test.deleteOne({ _id: req.params.idTest }, function (err) {
            if (err) res.json({ error: 'test not removed' });
            project.tests.remove({ _id: req.params.idTest });
            project.save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'test removed' });
            });
        });

    });
};
