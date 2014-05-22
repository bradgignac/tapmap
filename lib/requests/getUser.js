var request = require('request'),
  cheerio = require('cheerio');

module.exports = function (username, success) {
  request.get('https://untappd.com/user/' + username, function (error, response, body) {
    var $, userInfo, statsBar, user;

    $ = cheerio.load(body);
    userInfo = $('.user-info .info');
    statsBar = $('.stats-bar .stats');

    user = {};
    user.name = $('h1', userInfo).text();
    user.username = $('.username', userInfo).text();
    user.checkins = {
      total: $('a[data-href=":stats/general"] .stat').text(),
      unique: $('a[data-href=":stats/beerhistory"] .stat').text()
    };

    success(user);
  });
};
