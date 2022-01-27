/**
 * Note that this file cannot be modified.
 * If you would like to add your own unit tests, please put these in a separate test file.
*/

//Setup
import { TweetsAPIService } from '../tweets-api-service.js'
import { TweetsDataStatsGenerator } from '../tweets-data-stats-generator.js'

const tweetsDataStatsGenerator = new TweetsDataStatsGenerator(new TweetsAPIService());

describe("Tweets Data Stats Generator Tests", () => {

    describe("Tests for user joe_smith", () => {

        it("Test most tweets for joe_smith", async () => {
            const mostTweets = await tweetsDataStatsGenerator.getMostTweetsForAnyDay("joe_smith");
            expect(mostTweets).toEqual(10);
        });

        it("Test most tweets for joe_smith", async () => {
            const longestTweet = await tweetsDataStatsGenerator.getLongestTweet("joe_smith");
            expect(longestTweet).toEqual("0c2dc961-a0ae-470e-81a6-8320504dae14");
        });

        it("Test most days between tweets for joe_smith", async () => {
            const mostDays = await tweetsDataStatsGenerator.findMostDaysBetweenTweets("joe_smith");
            expect(mostDays).toEqual(120);
        });

        it("Test most popular hash tag for joe_smith", async () => {
            const mostPopularHashTag = await tweetsDataStatsGenerator.getMostPopularHashTag("joe_smith");
            expect(mostPopularHashTag).toEqual("#WorldCup2018");
        });

    });
    
});
