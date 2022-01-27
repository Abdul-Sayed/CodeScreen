# JavaScript-CodeScreen-Tweets-Test

The CodeScreen Tweets API is a service that contains one endpoint,<br>
`GET` https://app.codescreen.com/api/assessments/tweets, which returns the details of all tweets for a given user. <br><br>The user name must be passed in as a `query parameter` called `userName` in the endpoint URL.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

Here is an example of how to send a request from `cURL`:

    curl -H "Authorization: Bearer 8c5996d5-fb89-46c9-8821-7063cfbc18b1" \
    https://app.codescreen.com/api/assessments/tweets?userName=joe_smith
    
When you send an `HTTP GET` request to the endpoint, the response will be a `200 OK`, which includes a body containing a list of tweet data in `JSON` format. 
<br><br> 
An example response is the following:

     [
       {
           "id": "52f83d7c-ad2c-4ca0-b742-b03bc27f0c96",
           "createdAt": "2017-12-01T11:12:42",
           "text": "Chrome or Firefox? #Browsers",
           "user": {
               "id": "75343078-b5dd-306f-a3f9-8203a3915144",
               "userName": "joe_smith"
           }
       },
       {
           "id": "5f52e882-36a5-4460-a33b-e834b406650e",
           "createdAt": "2017-12-02T12:17:52",
           "text": "Bought a real Christmas tree, smells a lot more christmassy! #Xmas",
           "user": {
               "id": "75343078-b5dd-306f-a3f9-8203a3915144",
               "userName": "joe_smith"
           }
       }
     ]


The `id` field represents the unique id for the tweet. The `createdAt` field contains the time at which the tweet was
published, in ISO-8601 extended offset date-time format. You can assume all date-times are in the same timezone. </br>
The `user` field contains a JSON object which is made up of the unique id and name of the user who published the tweet.

## Your Task

You are required to implement all the methods marked with `TODO Implement` in the [TweetsAPIService](tweets-api-service.js) and [TweetDataStatsGenerator](tweets-data-stats-generator.js) classes in such a way that
all the unit tests in the [tests/tweets-data-stats-generator.spec.js](tests/tweets-data-stats-generator.spec.js) file pass.

[TweetsAPIService](tweets-api-service.js) should be implemented in such a way that you only need to call out to the CodeScreen Tweets API
endpoint once per full run of the [tests/tweets-data-stats-generator.spec.js](tests/tweets-data-stats-generator.spec.js) test suite.

## Requirements

The [tests/tweets-data-stats-generator.spec.js](tests/tweets-data-stats-generator.spec.js) file should not be modified. If you would like to add your own unit tests, you
can add these in a separate file in the `tests` folder.

You are free to use whichever libraries you want (Node.js or third-party) when implementing your solution.

Note we recommend using the <a href="https://momentjs.com/" target="_blank">`Moment.js`</a> library for working with dates & times, and the <a href="https://www.npmjs.com/package/axios" target="_blank">`Axios`</a> HTTP client library to interact with the CodeScreen Film API service.

The [package.json](package.json) file should only be modified in order to add any third-party dependencies required for your solution. The `jest` and `babel` versions should not be changed.

The [.github/workflows/node.js.yml](.github/workflows/node.js.yml) file should also not be modified.

Your solution must use/be compatible with `Node.js` version `15.5.1`.

## Tests
Run `npm install` to install all dependencies and then run `npm run test` to run the unit tests. These should all pass if your solution has been implemented correctly.

##

This test should take no longer than 2 hours to complete successfully.

Good luck!

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.com/#/codescreentest723ff538-6bce-4027-a154-8952ca4dfe1e" target="_blank">this screen</a>.