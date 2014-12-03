/**
 * Created by nishad on 29/11/14.
 */

function filterColumns(columns) {
        var columnsOut = [];

        for (var city in columns) {
                if (columns[city]) {
                        columnsOut.push(city);
                }
        }

        return columnsOut;
}

function createScatterPlot(destinationDiv, columns, regions) {

}

function createPieChart(destinationDiv, columns, regions) {
        var chosen = filterColumns(columns)[0];
        var testdata = [];

    for (var i = 0; i < data.length; i++) {
            if (regions[data[i]["City"]]) {
                    testdata.push({"key": data[i]["City"], "y": data[i][chosen]});
            }
    }

    nv.addGraph(function() {
        var width = 1000;
        var height = 500;

        var chart = nv.models.pieChart()
        .x(function(d) { return d.key })
        .y(function(d) { return d.y })
        .color(d3.scale.category10().range())
        .width(width)
        .height(height);

            destinationDiv
                .append("svg")
                .datum(testdata)
                .transition().duration(1200)
                .attr('width', width)
                .attr('height', height)
                .call(chart);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    });
}

function createMultiBarChart(destinationDiv, columns, regions) {

}

function createBarChart(destinationDiv, columns, regions) {

    var testdata = [];
    var chosen = filterColumns(columns)[0];

    testdata.push({"key": "Bar Chart", "values": new Array()});   
    //console.log(data);        
    for (var i = 0; i < data.length; i++) {
        if (regions[data[i]["City"]]) {
             testdata[0].values.push({"label": data[i]["City"], 
                               "value": data[i][chosen]});
         }    
    }

    nv.addGraph(function() {  
      var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .staggerLabels(true)
        //.staggerLabels(testdata[0].values.length > 8)
        .tooltips(false)
        .showValues(true)
        .transitionDuration(250)
        ;

      destinationDiv
          .append("svg")
          .datum(testdata)
          .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });

}


function createParallelCoordinatesChart(destinationDiv, columns, regions) {
    var chartData = [];
    var chosen = filterColumns(columns); //["Minimum_Registered_Voters", "Maximum_Registered_Voters"];

    for (var i = 0; i < data.length; i++) {
      chartData.push({"name": regions[data[i]["City"]]}); 
      
      for (var j = 0; j < chosen.length; j++)
        chartData[i][chosen[j]] = data[i][chosen[j]];
    }
    //console.log(chartData);    
    
    var chart;
    nv.addGraph(function() {
        //["economy (mpg)", "cylinders", "displacement (cc)", "power (hp)", "weight (lb)", "0-60 mph (s)", "year"]);
        chart = nv.models.parallelCoordinates()
                      .dimensions(chosen);

        destinationDiv
            .append("svg")
            .datum(data)
            .call(chart);

        // chart.dispatch.on('brush', function(e) {
        //   nv.log(e);
        // });

        nv.utils.windowResize(chart.update);
    });
}

var DataTitleToModelTitle = {
        "Average_Crime_2012_Rank": "Crimes Ranked (rank)",
        "Sum_Crime_2012_Count": "Crimes Committed",
        "Average_Crimes_per_10000": "Crimes per 10,000",

        "Sum_Number_of_Votes": "Number of Votes",
        "Sum_Yes_Votes": "Yes votes",
        "Sum_No_Votes": "No votes",
        "Sum_Rejected_Papers": "Rejected Votes",

        "Sum_Total_Population": "Total Population",
        "Sum_Population": "Population",
        "Sum_Males": "Male Population",
        "Sum_Female": "Female Population",
        "Sum_Area_km": "Average Area (km2)",
        "Sum_Population_Density": "Population Density",
        "Average_Council_Expenditure_per_Capita": "Council Expenditure (per capita)",
        "Sum_Income_Rank": "Income (rank)",
        "Sum_Income_Score": "Income (score)",
        "Sum_Number_of_Deprived": "Number of Deprived",
        "Sum_Registered_Voters": "Registered Voters",

        "Average_Education_Score_2012": "Education (score)",
        "Average_Education_Rank_2012": "Education (rank)",
        "Sum_Working_Age_No_Qualifications": "Individuals with no qualifications",
        "Sum_Not_in_Full_Time_Education": "Not in full time education",
        "Sum_Entering_Higher_Education": "Entering Secondary School",
        "Average_Pupil_Performance": "Pupil Performance",
        "Sum_School_Pupil_Absences": "Pupil Absences"
};

var ModelTitleToDataTitle = {};

for (var key in DataTitleToModelTitle) {
        ModelTitleToDataTitle[DataTitleToModelTitle[key]] = key;
}
