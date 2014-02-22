<?php
$spreadsheet_url="https://docs.google.com/spreadsheet/pub?key=0AtrJrDy31bXbdEg3N1R6Q3d6XzVKVVdXenh1a1hzNFE&single=true&gid=0&output=csv";
$row_count = 0;

if(!ini_set('default_socket_timeout',    15)) echo "<!-- unable to change socket timeout -->";

if (($handle = fopen($spreadsheet_url, "r")) !== FALSE) {

    // while CSV data rows
  while (($data = fgetcsv($handle, 10000, ",")) !== FALSE) {
      // if not the header row
    if ( $row_count > 0 ) {
      // store each row in an associative array
      $spreadsheet_data[]= array(
	    'owner' => $data[0],
        'ssid' => $data[1],
        'passphrase' => $data[2],
        'notes' => $data[3],
        'latitude' => $data[4],
        'longitude' => $data[5],
      );
    }  // end if, not the header row
    $row_count++;
  } // end while, loop through CSV data

  fclose($handle);
}  // end if , read file handler opened

  // else, file didn't open for reading
else {
    die("Problem reading csv");
}  // end else, file open fail

  // render JSON and no cache headers
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json; charset=utf-8');

?>
{ "type": "FeatureCollection",
  "features": [
<?php
	foreach ( $spreadsheet_data AS $row  ) {
	  $row_count--;
?>
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [<?php print $row['latitude'];?>, <?php print $row['longitude'];?>]},
        "properties": {
           "owner" : "<?php print $row['owner'];?>",
           "ssid": "<?php print $row['ssid'];?>",
           "passphrase": "<?php print $row['passphrase'];?>",
           "notes": "<?php print $row['notes'];?>",
           "category" : "guest"
         }
    }<?php print ($row_count >1) ? ',' : ''; ?> 
<?php
	} // end foreach, row
?>
  ]
}