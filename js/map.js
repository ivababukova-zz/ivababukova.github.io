/**
 * Created by nishad on 29/11/14.
 */

var selectedOnMap = {};
var allSelected = false;

function getIdName(name) {
    return name.replace(/\s/g, '');
}

function toggleSelection(name) {
    setSelected(name, selectedOnMap[name] != true)
}

function updateSelectedColour(name) {
    d3.select("#" + name).style('fill', selectedOnMap[name] == true? "#88FF88" : "#BBBBBB");
}

function clearSelected() {
    for (var key in GeoToDataMapping) {
        setSelected(getIdName(key), false);
    }
}

function setSelected(name, state) {
    selectedOnMap[name] = state;
    for (var key in GeoToDataNameMapping) {
        if (getIdName(key) == name) {
            selectionModel.places[GeoToDataNameMapping[key]] = state;
            updateSelectedColour(name);
        }
    }

    updatePlotSelected();
}

function toggleAll() {
    allSelected = !allSelected;

    for (var key in selectedOnMap) {
        setSelected(key, allSelected);
    }
}

var size = 30;

var width = 9.3 * size;
var height = 17 * size;

var regionsMap;

function createMap(container, regions) {

    var mapObject = {
        svg: "",
        regions: ""
    };

    var svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("path")
        .datum(regions)
        .attr("d", path);

    var projection = d3.geo.albers()
        .center([0, 55.4])
        .rotate([4.4, 0])
        .parallels([50, 60])
        .scale(size * 150)
        .translate([width / 2, height * (17/20)]);

    var path = d3.geo.path()
        .projection(projection);

    var region = svg.selectAll(".region")
        .data(regions.features)
        .enter()
        .append('g')
        .classed('node', 'true');

    var path = region.append("path")
        .attr("d", path)
        .attr("id", function(d) { return getIdName(d.properties.name) })
        .attr("class", function(d) { return getIdName(d.properties.name) + " region "; })
        .on("click", function(d) { return toggleSelection(getIdName(d.properties.name)); })
        .style("fill", function(d) { return "#BBBBBB"; })
        .style("stroke", "#000000")
        .style("stroke-width", "0.1px");

    path
        .append("svg:title")
        .text(function(d, i) { return d.properties.name });

    region
        .each(function(d, i) { selectedOnMap[getIdName(d.properties.name)] = false });

    mapObject.regions = path;
    mapObject.svg = svg;

    //svg.append("path")
    //    .datum(mesh)
    //    .attr("d", path)
    //    .attr("class", "region-boundary");

    return mapObject;
}

function createMapPlot(container, columns, places, midPoint) {

    var column = container
        .append("div")
        .attr("class", "row");

    column
        .append("div")
        .attr("class", "col-md-3");

    var mapObj = createMap(column, regionsMap);
    var chosen = filterColumns(columns)[0];
    var values = {};

    // Calculate min & max
    var minVal = 10000000;
    var maxVal = -10000000;
    for (var i in data) {
        if (places[data[i]["City"]]) {
            var value = data[i][chosen];
            values[data[i]["City"]] = value;

            if (value > maxVal) {
                maxVal = value;
            }

            if (value < minVal) {
                minVal = value;
            }
        }
    }

    // Adjust them to get the correct midpoint.
    var colours;
    if (midPoint) {
        var dMax = maxVal - midPoint;
        var dMin = midPoint - minVal;

        if (dMax > dMin) {
            minVal = midPoint - dMax;
        } else {
            maxVal = midPoint + dMin;
        }

        colours = ["red", "white", "green"];
    } else {
        colours = ["white", "green"];
    }

    var colour  = d3.scale.linear()
        .domain([minVal, maxVal])
        .range(colours);

    mapObj
        .regions
        .style("fill", function(d) {
            var nameInDataSet = GeoToDataNameMapping[d.properties.name];
            var value = values[nameInDataSet];
            return colour(value);
        });

    return mapObj;
}

d3.json("data/osod_sco_locauth.topojson", function(error, map) {

    if (error) {
        return console.error(error);
    }

    var div = d3.select("#mapBox");
    regionsMap = topojson.feature(map, map.objects.lad);
    createMap(div, regionsMap, function (d) {
        d3.find("mapHovering")
            .clear();

        d3.select("#mapHovering")
            .enter().append("text")
            .text(function(d) {return d.properties.name;})
            .attr("x", function(d) {return x(d.x);})
            .attr("y", function (d) {return y(d.y);});
    });
});

//    d3.select("selectall").on("click", toggleAll);

// This maps city names from the grographic data to the provded dataset
var GeoToDataNameMapping = {
    "Aberdeen City": "Aberdeen City",
    "Aberdeenshire": "Aberdeenshire",
    "Angus": "Angus",
    "Argyll and Bute": "Argyll & Bute",
    "Clackmannanshire": "Clackmannanshire",
    "Eilean Siar": "Eilean Siar",
    "Dumfries and Galloway": "Dumfries & Galloway",
    "Dundee City": "Dundee City",
    "East Ayrshire": "East Ayrshire",
    "East Dunbartonshire": "East Dunbartonshire",
    "East Lothian": "East Lothian",
    "East Renfrewshire": "East Renfrewshire",
    "City of Edinburgh": "Edinburgh, City of",
    "Falkirk": "Falkirk",
    "Fife": "Fife",
    "Glasgow City": "Glasgow City",
    "Highland": "Highland",
    "Inverclyde": "Inverclyde",
    "Midlothian": "Midlothian",
    "Moray": "Moray",
    "North Ayrshire": "North Ayrshire",
    "North Lanarkshire": "North Lanarkshire",
    "Orkney Islands": "Orkney Islands",
    "Perth and Kinross": "Perth & Kinross",
    "Renfrewshire": "Renfrewshire",
    "Scottish Borders": "Scottish Borders",
    "Shetland Islands": "Shetland Islands",
    "South Ayrshire": "South Ayrshire",
    "South Lanarkshire": "South Lanarkshire",
    "Stirling": "Stirling",
    "West Dunbartonshire": "West Dunbartonshire",
    "West Lothian": "West Lothian"
};

// and the reverse.
var DataToGeoNameMapping = {
    "Aberdeen City": "Aberdeen City",
    "Aberdeenshire": "Aberdeenshire",
    "Angus": "Angus",
    "Argyll & Bute": "Argyll and Bute",
    "Clackmannanshire": "Clackmannanshire",
    "Eilean Siar": "Eilean Siar",
    "Dumfries & Galloway": "Dumfries and Galloway",
    "Dundee City": "Dundee City",
    "East Ayrshire": "East Ayrshire",
    "East Dunbartonshire": "East Dunbartonshire",
    "East Lothian": "East Lothian",
    "East Renfrewshire": "East Renfrewshire",
    "Edinburgh, City of": "City of Edinburgh",
    "Falkirk": "Falkirk",
    "Fife": "Fife",
    "Glasgow City": "Glasgow City",
    "Highland": "Highland",
    "Inverclyde": "Inverclyde",
    "Midlothian": "Midlothian",
    "Moray": "Moray",
    "North Ayrshire": "North Ayrshire",
    "North Lanarkshire": "North Lanarkshire",
    "Orkney Islands": "Orkney Islands",
    "Perth & Kinross": "Perth and Kinross",
    "Renfrewshire": "Renfrewshire",
    "Scottish Borders": "Scottish Borders",
    "Shetland Islands": "Shetland Islands",
    "South Ayrshire": "South Ayrshire",
    "South Lanarkshire": "South Lanarkshire",
    "Stirling": "Stirling",
    "West Dunbartonshire": "West Dunbartonshire",
    "West Lothian": "West Lothian"
};

var DataColumnsGroupings = {
    education: [
        ['Minimum_Education_Score_2012', 'Maximum_Education_Score_2012', 'Education_Score_2012'],
        ['Minimum_Education_Rank_2012', 'Maximum_Education_Rank_2012', 'Average_Education_Rank_2012'],
        ['Minimum_Working_Age_No_Qualifications', 'Maximum_Working_Age_No_Qualifications', 'Average_Working_Age_No_Qualifications'],
        ['Minimum_Not_in_Full_Time_Education', 'Maximum_Not_in_Full_Time_Education', 'Average_Not_in_Full_Time_Education'],
        ['Minimum_Entering_Higher_Education', 'Maximum_Entering_Higher_Education', 'Average_Entering_Higher_Education'],
        ['Minimum_Pupil_Performance', 'Maximum_Pupil_Performance', 'Average_Pupil_Performance'],
        ['Minimum_School_Pupil_Absences', 'Maximum_School_Pupil_Absences', 'Average_School_Pupil_Absences']
    ], demographic: [
        ['Minimum_Total_Population', 'Maximum_Total_Population', 'Average_Total_Population'],
        ['Minimum_Population', 'Maximum_Population', 'Average_Population'],
        ['Minimum_Males', 'Maximum_Males', 'Average_Males'],
        ['Minimum_Female', 'Maximum_Female', 'Average_Female'],
        ['Minimum_Area_km', 'Maximum_Area_km', 'Average_Area_km'],
        ['Minimum_Population_Density', 'Maximum_Population_Density', 'Average_Population_Density'],
        ['Minimum_Council_Expenditure_per_Capita', 'Maximum_Council_Expenditure_per_Capita', 'Average_Council_Expenditure_per_Capita'],
        ['Minimum_Income_Rank', 'Maximum_Income_Rank', 'Average_Income_Rank'],
        ['Minimum_Income_Score', 'Maximum_Income_Score', 'Average_Income_Score'],
        ['Minimum_Number_of_Deprived', 'Maximum_Number_of_Deprived', 'Average_Number_of_Deprived'],
        ['Minimum_Registered_Voters', 'Maximum_Registered_Voters', 'Average_Registered_Voters']
    ], referendum: [
        ['Minimum_Number_of_Votes', 'Maximum_Number_of_Votes', 'Average_Number_of_Votes'],
        ['Minimum_Yes_Votes', 'Maximum_Yes_Votes', 'Average_Yes_Votes'],
        ['Minimum_No_Votes', 'Maximum_No_Votes', 'Average_No_Votes'],
        ['Minimum_Rejected_Papers', 'Maximum_Rejected_Papers', 'Average_Rejected_Papers']
    ], crime: [
        ['Minimum_Crime_2012_Rank', 'Maximum_Crime_2012_Rank', 'Average_Crime_2012_Rank'],
        ['Minimum_Crime_2012_Count', 'Maximum_Crime_2012_Count', 'Average_Crime_2012_Count'],
        ['Minimum_Crimes_per_10000', 'Maximum_Crimes_per_10000', 'Average_Crimes_per_10000']
    ]
};
