$(function() {

    var scTrails = { "docs": []},
        obj = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [120.6, 30.1]
            },
            "properties": {
                "type": "trails",
                "activity": "hiking",
                "region": "The Upcountry",
                "area": ""
            }
        }
        baseUrl = "data/UPCOUNTRY.html";

    $.get(baseUrl, function(data) {

        $.each($(data).find('p.MsoBodyTextIndent'), function() {

            if ($(this).find('b').length > 0) {
                addCounty(this);
                resetArea();
            } else {

                if ($(this).find('a').length > 0) {
                    //console.log(this);
                    // check for obj.area,
                    // if not empty, make sure we're in a <blockquote>,
                    // otherwise resetArea.
                    if (isAreaSet && !isInBlockquote(this)) {
                        resetArea();
                    }

                    addLink(this);
                    addName(this);
                    addMileage(this);

                    //then push this obj into the docs array
                    scTrails.docs.push(JSON.parse(JSON.stringify(obj, null, 2)));
                    //console.log(JSON.stringify(obj.properties, null, 2));

                } else {
                    addArea(this);
                }

            }

        });
        console.log(JSON.stringify(scTrails, null, 2));
    });



    // $.getJSON('http://whateverorigin.org/get?url=' +               encodeURIComponent(baseUrl) + '&callback=?',
    //     function(data){
    //         console.log(data.contents)

    //         //$("#content").html(data.contents);
    //     });
    var addCounty = function(element) {
        // County
        // in the <b> tag, remove ' County', and replace the weird ↵
        obj.properties.county = $(element).find('b').text().split(' County')[0].replace(/[_\W]+/g, "");
        obj.properties.area = '';
    }

    var addArea = function(element) {

        if ($(element).html() != '&nbsp;') {
            obj.properties.area = $(element).find('span').text().replace(/[_\W]+/g, " ");
        }

    }

    var resetArea = function() {
        obj.properties.area = '';
    }

    var isAreaSet = function() {
        return (obj.properties.area != '');
    }

    var isInBlockquote = function(element) {
        return ($(element).parent('blockquote').length);
    }

    var addLink = function(element) {
        obj.properties.link = $(element).find('a').attr('href');
    }

    var addName = function(element) {
        obj.properties.name = $(element).find('a').text().replace(/[_\W]+/g, " ");
    }

    var addMileage = function(element) {
        obj.properties.mileage =  $(element).text().substring($(element).text().indexOf('(') +1, $(element).text().lastIndexOf(')')).split(' mile')[0];
    }

});
