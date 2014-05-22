var request = require('request'),
  cheerio = require('cheerio');

module.exports = function (username, success) {
  request.get('https://untappd.com/user/' + username + '/beers', function (error, response, body) {
    // Grab last check-in on the page.
    // Click show more button.
    // If original last check-in matches current last check-in, stop clicking show more.
    // Parse all check-ins.
  });
};
