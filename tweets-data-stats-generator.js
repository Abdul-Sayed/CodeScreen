export class TweetsDataStatsGenerator {

    constructor(tweetsApiService) {
        this.tweetsApiService = tweetsApiService;
    }

    /**
     * Retrieves the highest number of tweets that were created on any given day by the given user.
     * A day's time period here is defined from 00:00:00 to 23:59:59
     * If there are no tweets for the given user, this method should return 0.
    */
   async getMostTweetsForAnyDay(userName) {
        //TODO Implement...
    }

    /**
     * Finds the ID of longest tweet for the given user.
     * You can assume there will only be one tweet that is the longest.
     * If there are no tweets for the given user, this method should return null.
    */
   async getLongestTweet(userName) {
        //TODO Implement...
    }

    /**
     * Retrieves the most number of days between tweets by the given user.
     * This should always be rounded down to the complete number of days, i.e. if the time is 12 days & 3 hours, this
     * method should return 12.
     * If there are no tweets for the given user, this method should return null.
    */
   async findMostDaysBetweenTweets(userName) {
        //TODO Implement...
    }

    /**
     * Retrieves the most popular hash tag tweeted by the given user.
     * Note that the string returned by this method should include the hashtag itself.
     * For example, if the most popular hash tag is "#JavaScript", this method should return "#JavaScript".
     * If there are no tweets for the given user, this method should return null.
    */
   async getMostPopularHashTag(userName) {
        //TODO Implement...
    }   
    
}
