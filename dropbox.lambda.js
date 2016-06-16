// have an POST endpoint setup where I can make a POST request with required token creation and path data for the dropbox API
// write code to create the access token with the dropbox api (is this a long-term option token?)
// if it's a long-term token, store that shit into MongoDB (mlab) or Something like DynamoDB, if not; use it when called and I'll have to request to create another token each time.
// use the token and the path to the file to grab it (can I choose a most recent each time?)
// with the grabbed file, make POST request that sends the file data to the appropriate lambda for processing based on a certain conditional (like the file's name?)

// for now, just make a little node.js api to get this flowing...
