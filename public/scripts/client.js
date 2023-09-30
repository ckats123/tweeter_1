/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json
$(document).ready(function () {
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


const renderTweets = function (tweets) {
  const $tweetsContainer = $(".tweet-container");

  // Empty container to avoid duplicates
  $tweetsContainer.empty();

  // Loop through tweets first, then append to container
  tweets.forEach(function (tweet) {
    console.log("tweet", tweet)
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  });
};

const createTweetElement = function (tweet) {
  // Construct the tweet element using template literals
  const $tweet = $(`
    <article class="posted-tweet">
    <header class="recent-tweets-header">
        <div class="profile-of-new-tweets">

          <img src="${tweet.user.avatars}" />
          <h2>${tweet.user.name}</h2>
        </div>
        <div class="username-of-new-tweets">
            <h2>${tweet.user.handle}</h2>
        </div>
    </header>
    <p class="tweet-content">${tweet.content.text}</p>
    <footer class="days-and-logos">
        <div class="x-days-ago">
            <p>${timeago.format(tweet.created_at)}</p>
        </div>
        <div class="logos">
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-heart"></i>

        </div>
    </footer>
</article>
  `);

  return $tweet;
};


renderTweets(data);
})