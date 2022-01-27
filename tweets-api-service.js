export class TweetsAPIService {

    static tweetsEndpointUrl = "https://app.codescreen.com/api/assessments/tweets";

    // Your API token. Needed to successfully authenticate when calling the tweets endpoint. 
    // This needs to be included in the Authorization header (using the Bearer authentication scheme) in the request you send to the tweets endpoint.
    static apiToken = "8c5996d5-fb89-46c9-8821-7063cfbc18b1";

    /**
     * Retrieves all tweets for the given user by calling the https://app.codescreen.com/api/assessments/tweets endpoint.
     * The username should be passed in the request as a query parameter called userName.
    */
    async getTweets(userName) {
        //TODO Implement...
    }

}
