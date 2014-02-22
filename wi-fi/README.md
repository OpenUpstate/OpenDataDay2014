Created during OpenData Day 2014 in Greenville SC
https://github.com/OpenUpstate/OpenDataDay2014

* [Resources](https://github.com/OpenUpstate/OpenDataDay2014/wiki/Wifi-Greenville)
* [Map Source Google Spreadsheet Data](http://joinopenworks.com/r/wifi)

Updates to Google Maps appear on the map somewhere between immediately or as much as a few minutes later

Generates GeoJSON using a Google Docs / Drive Spreadsheet as the source.

The Google spreadsheet must be Published (File -> Publish to Web) for this to work.

The source URL is one which renders the spreadsheet data as a CSV. Look at the normal Google spreadsheet and notice the key name,
which will be a bunch of random numbers and letters.

https://docs.google.com/spreadsheet/pub?key={insert the key Google spreadsheet value here}&single=true&gid=0&output=csv

The column values are hard-coded, so they need to be in the following format, with these exact names
owner, ssid, passphrase, notes, latitude, longitude

To get latitude and longitude numbers go to Google Maps, zoom in and center the position you want in the middle of the map. The 
URL for the map wil contain the longitude,latitude (in that order) ex: 34.8509174,-82.3987371

The index.html file loads the GeoJSON file into a local Javascript variable. Point this at your GeoJSON file and Leaflet will 
render the GeoJSON data.

Leaflet JS is using open MapQuest tiles. If you register with CloudMade you can use their map tiles instead, as described by Leaflet 
example http://leafletjs.com/examples/geojson.html
