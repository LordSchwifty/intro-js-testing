var assert = require('chai').assert;
var Tweet = require('./tweet.js');

describe('Tweet', function() {

  it('exists', function() {
    assert.isFunction(Tweet);
  });

  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });

  it.skip('can have a different sender', function() {
    var tweet = new Tweet('@ameseee', 'something else');

    assert.equal(tweet.sender, '@ameseee');
  });

  it.skip('has content', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.content, 'something brilliant');
  });

  it.skip('can have different content', function() {
    var tweet = new Tweet('@ameseee', 'something else');

    assert.equal(tweet.content, 'something else');
  });

  it.skip('can contain a link', function() {
    var tweet = new Tweet('@ameseee', 'a thought about something', 'www.somevideo.io');

    assert.equal(tweet.link, 'www.somevideo.io');
  })

  it.skip('should have a default link value', function() {
    var tweet = new Tweet('@ameseee', 'something else');

    assert.equal(tweet.link, 'no link provided');
  })

  it.skip('starts with no likes', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.likes, 0)
  });

  it.skip('starts with no retweets', function() {
    var tweet = new Tweet('@maxcell', 'something wonderful');

    assert.equal(tweet.retweets, 0);
  });

  it.skip('starts with no replies', function() {
    var tweet = new Tweet('@jwanliu', 'something amazing');

    assert.deepEqual(tweet.replies, []);
  });

  it.skip('starts with zero replies', function() {
    var tweet = new Tweet('@jwanliu', 'something amazing');

    assert.equal(tweet.replyCount, 0);
  });

  it.skip('can be liked', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.likes, 0);
    tweet.like();
    assert.equal(tweet.likes, 1);
  });

  it.skip('can be liked many times!', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.likes, 0);
    tweet.like();
    assert.equal(tweet.likes, 1);
    tweet.like();
    tweet.like();
    tweet.like();
    tweet.like();
    assert.equal(tweet.likes, 5);
  });

  it.skip('can be retweeted', function() {
    var tweet = new Tweet('@jwanliu', 'something amazing');

    assert.equal(tweet.retweets, 0);
    tweet.retweet();
    assert.equal(tweet.retweets, 1);
  });

  it.skip('can be replied to, and keep track of its replies', function() {
    var tweet = new Tweet('@maxcell', 'something wonderful');

    tweet.reply('great tweet');
    assert.deepEqual(tweet.replies, ['great tweet']);
  });

  it.skip('can be replied to many time', function() {
    var tweet = new Tweet('@maxcell', 'something wonderful');

    tweet.reply('great tweet');
    tweet.reply('cool tweet');
    tweet.reply('nice tweet');
    tweet.reply('viral tweet');

    var expected = ['great tweet', 'cool tweet', 'nice tweet', 'viral tweet'];
    assert.deepEqual(tweet.replies, expected);
  });

  it.skip('can count how many replies it has', function() {
    var tweet = new Tweet('@maxcell', 'something wonderful');

    tweet.reply('great tweet');
    tweet.reply('cool tweet');
    tweet.reply('nice tweet');
    tweet.reply('viral tweet');

    assert.equal(tweet.replyCount, 4);
  });

});
