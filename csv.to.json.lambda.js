// create a POST endpoint that can take in data from the dropbox.lambda.js lambda (if a csv file was grabbed).
// with that data (with the papaparse csv to json conversion module), just have the csv file converted into json (this file should be a small, stand-alone lambda so that it is loosely-coupled with other types of raw format conversion lambda's)
// make a post request to the proper conversion lambda based on a conditional

// for now, just make a little node.js api to get this flowing...
