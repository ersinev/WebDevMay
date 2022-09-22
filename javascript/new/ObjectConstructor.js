function TwitterApplication(username, email, password) {
   this.username = username;
   this.email = email;
   this.password = password;
   this.timeLine = [];

}
TwitterApplication.prototype.showInfo = function() {
    console.log("Username: " + this.username + " Email: " + this.email + " Password: " + this.password  + " Tweets: " + this.timeLine);
}    

TwitterApplication.prototype.updatePassword = function(newPassword) {
    return this.password = newPassword;
}

TwitterApplication.prototype.sendTweet = function(tweet) {
    this.timeLine.push(tweet);
};

TwitterApplication.prototype.deleteTweets = function() {
    this.timeLine.pop();
}

let user1 = new TwitterApplication('Jack', 'jack@jack.com', '123456');
user1.updatePassword("helooad")

user1.sendTweet("Hello world");
user1.sendTweet("Helloasdsdasdd");
user1.showInfo();
console.log(user1)

let user2 = new TwitterApplication('Ersin', 'ersin@ersin.com', 'ersin123');
user2.sendTweet("Hello world");
user2.sendTweet("i am ersin");
user2.deleteTweets();
console.log(user2)
// user2.timeLine.forEach(function(tweet) {
//     console.log(tweet);
// })
// console.log(user1.timeLine)

