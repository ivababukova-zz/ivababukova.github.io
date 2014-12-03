
function createPlotSpace(parentDiv, title, note) {

    var topRow = parentDiv
        .append("div")
        .attr("class", "row");

    topRow.append("h1")
        .attr("class", "container title")
        .text(title);


    var out = parentDiv
        .append("div")
        .attr("class", "row plotNoteContainer");

    out
        .append("div")
        .attr("class", "plotContainer col-md-9");

    out
        .append("div")
        .attr("class", "noteContainer col-md-3")
        .append("textarea")
        .attr("class", "form-control")
        .attr("style", "height: 100vh")
        .text(note || "");

    return out;
}

d3.createPlotSpace = createPlotSpace;

var premade = [
    {
        title: "Correlation of Wealth, Performance and Crime",
        model: {
            "places": {
                "Clackmannanshire": true,
                "Dumfries & Galloway": true,
                "East Ayrshire": true,
                "East Lothian": true,
                "East Renfrewshire": true,
                "Eilean Siar": true,
                "Falkirk": true,
                "Fife": true,
                "Highland": true,
                "Inverclyde": true,
                "Midlothian": true,
                "Moray": true,
                "North Ayrshire": true,
                "Orkney Islands": true,
                "Perth & Kinross": true,
                "Scottish Borders": true,
                "Shetland Islands": true,
                "South Ayrshire": true,
                "South Lanarkshire": true,
                "Stirling": true,
                "Aberdeen City": true,
                "Aberdeenshire": true,
                "Argyll & Bute": true,
                "Edinburgh, City of": true,
                "Renfrewshire": true,
                "West Dunbartonshire": true,
                "West Lothian": true,
                "Angus": true,
                "Dundee City": true,
                "North Lanarkshire": true,
                "East Dunbartonshire": true,
                "Glasgow City": true
            },
            "plotType": "parallelcoordinatesCreate",
            "dataSelected": {
                "Average_Income_Rank": true,
                "Average_Council_Expenditure_per_Capita": true,
                "Average_Pupil_Performance": true,
                "Average_Crimes_per_10000": true,
                "Average_Income_Score": false
            }
        },
        notes: "If you highlight the top three performing regions, you can really see how the links between student performance and crime rates, which is to say inverse, but also that these are the richest areas. " +
        "\n\n" +
        "Interestingly you can also see that the poorest areas are middling on their council expenditure but still not achieving as well as others in their expenditure group, but these do give the expected result of being the highest crime areas."
    },
    {
        title: "",
        model: {},
        notes: ""
    },
    {
        title: "",
        model: {},
        notes: ""
    },
    {
        title: "",
        model: {},
        notes: ""
    },
    {
        title: "",
        model: {},
        notes: ""
    },
    {
        title: "",
        model: {},
        notes: ""
    },
    {
        title: "",
        model: {},
        notes: ""
    },


]
