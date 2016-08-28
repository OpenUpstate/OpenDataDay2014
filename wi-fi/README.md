This code is out of date. Please see the Code For Greenville example at
https://github.com/codeforgreenville/leaflet-wi-fi-map-using-google-sheets

This repo was not easily forkable as a subdirectory, so created an entirely new repo at
https://github.com/codeforgreenville/leaflet-wi-fi-map-using-google-sheets

~~Created during OpenData Day 2014 in Greenville SC~~
https://github.com/OpenUpstate/OpenDataDay2014

* ~~[Resources](https://github.com/OpenUpstate/OpenDataDay2014/wiki/Wifi-Greenville)~~
* ~~[Map Source Google Spreadsheet Data](http://joinopenworks.com/r/wifi)~~

~~PHP is used to generate GeoJSON using a Google Docs / Drive Spreadsheet as the source and then render markers and Wi-Fi data from the spreadsheet into a Leaflet Javascript-based map that will work in any modern web browser.~~

~~Updates to Google the spreadsheet appear on the map somewhere between immediately or as much as a few minutes later.~~

~~It's also possible to connect to a Google spreadsheet using an API call, but this code requires the spreadsheet to be published to the web, and therefore doesn't use the Google APIs to get the data. To publish the Google spreadsheet open the file and go to (File -> Publish to Web) for~~

~~Look at the normal Google spreadsheet and notice the key name, which will be a bunch of random numbers and letters.~~

~~The source URL used in the PHP script is one which renders a CSV version of the Google spreadsheet. Insert the Google key into the URL below to create the source file.~~

~~That file is of the format https://docs.google.com/spreadsheet/pub?key={insert the key Google spreadsheet value here}&single=true&gid=0&output=csv~~

~~The column values are used to generate the GeoJSON hard-coded, so they need to be in the following format, with these exact names owner, ssid, passphrase, notes, latitude, longitude~~

~~On eay to get latitude and longitude numbers is to go to Google Maps, zoom in and center the position you want in the middle of the map. ~~
~~The Google Maps URL for the map will contain the longitude,latitude (in that order) ex: 34.8509174,-82.3987371~~

~~The index.html file loads the GeoJSON file into a local Javascript variable. Point this at your GeoJSON file and Leaflet will render the GeoJSON data. For example, you'll need to change this line to point at your PHP script that renders the JSON~~

~~var geoJsonData = JSON.parse(readJSON('http://example.com/wifi/guest-wi-fi-google-spreadsheet-to-geojson.php'));~~

~~Leaflet JS is using open MapQuest tiles. If you register with CloudMade you can use their map tiles instead, as described by Leaflet example http://leafletjs.com/examples/geojson.html~~

~~Leaflet has a bunch of other plug-ins and options, so the maps can be tweaked in all sorts of ways.~~
