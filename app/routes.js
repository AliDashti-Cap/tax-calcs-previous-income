//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'more-than-one-job-answer'
router.post('/more-than-one-job-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var moreThanOneJob = req.session.data['more-than-one-job']

  // Check whether the variable matches a condition
  if (moreThanOneJob == "yes"){
    // Send user to next page
    res.redirect('/5-how-many-jobs');
    console.log("Yes")
  } else {
    // Send user to ineligible page
    res.redirect('/6-total-earnings');
    console.log("No")
  }

})
