const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function (request, response) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = request.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "Three or more"){
    // Send user to next page
    response.redirect('/juggling-trick')
  }
  else {
    // Send user to ineligible page
    response.redirect('/ineligible')
  }

})


module.exports = router
