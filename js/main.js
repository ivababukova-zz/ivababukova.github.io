
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
        title: "Population Map.",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"mapplotCreate","dataSelected":{"Average_Education_Rank_2012":false,"Sum_Number_of_Deprived":false,"Average_Income_Rank":false,"Sum_Total_Population":true,"Sum_Population_Density":false}},
        notes: "This is a nice and simple population map, just hover to see where people live. All of the cities are clearly visible on this map. what it does show is the rough impact each region had on the voting results."
    },
    {
        title: "Education, Turnout Correlation",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"scatterplotCreate","dataSelected":{"No_Minus_Yes_Votes":false,"Average_Education_Score_2012":false,"Average_Education_Rank_2012":true,"Percentage_Voter_Turnout":true}},
        notes: "Counter intuitively a higher education level correlates inversely with voter turnout, where are intuitively you may expect the opposite. But upon further thought, this can be explain by the belief that the less educated are more willing to engage in the political process in an effort to improve their circumstances, whereas the more educated tend t be jaded to it.\n"+
        "This trend of lower turnout for more educated is also visible in figure one, where the turnout for the most educated isn’t (although not very predictable) is generally on the lower end of the turnout, whereas as the less educated consistently tend towards higher turnout.\n" +
        "One phenomenon which may just be an artifact of the data, or is more significant, is that there appear to be two separate groups to the data, one above the other, with a gap in between. We could not attribute any specific reasoning for it, but it is a curiosity worth further thought."
    },
    {
        title: "Education",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"barchartCreate","dataSelected":{"No_Minus_Yes_Votes":false,"Average_Education_Score_2012":true}},
        notes: "Its rather clear using this graph, that the most educated areas are Glasgow, North Lanarkshire and East Ayrshire, in that order. Glasgow and its surroundings are both the most educated and the most undereducated regions of Scotland, with East Renfrewshire and East Dunblane pulling up the rear, where they are very strongly behind the rest of the area, country and any of the other measured areas. Both of these regions also voted very strongly No, which indicates that the hypothesis that there is geographic relationship between Yes and No voting is unlikely to be true and it more than likely to be related to their wealth and education."
    },
    {
        title: "Population Distribution",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":false,"East Ayrshire":false,"East Lothian":false,"East Renfrewshire":true,"Eilean Siar":false,"Falkirk":true,"Fife":true,"Highland":false,"Inverclyde":true,"Midlothian":true,"Moray":false,"North Ayrshire":true,"Orkney Islands":false,"Perth & Kinross":false,"Scottish Borders":false,"Shetland Islands":false,"South Ayrshire":false,"South Lanarkshire":false,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":false,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":false,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"piechartCreate","dataSelected":{"Sum_Total_Population":true}},
        notes: "These are the cities in which people live."
    },
    {
        title: "How the Money Votes",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"parallelcoordinatesCreate","dataSelected":{"Percentage_Unqualified":false,"Percentage_Voter_Turnout":true,"Average_Council_Expenditure_per_Capita":true,"No_Minus_Yes_Votes":true,"Average_Income_Score":true,"Average_Education_Rank_2012":true}},
        notes: "This highlights how the richest cities in Scotland vote, highlight them  to see how they vote. You can see in those cities that they vote mostly in the Low No, slightly yes category. Which may be indicative that they feel stable enough to take a risk, whereas the proper regions dont eel that they have the stability to risk what little they have for a dubious at best benefit."
    },
    {
        title: "Yes (%)",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"mapplotCreate","dataSelected":{"No_Minus_Yes_Votes":false,"Yes_Percentage":true}},
        notes: "You can see here that the stronghold of yes voters was north and south of the central belt, which was more yes leaning than the majority of the country."
    },
    {
        title: "Council Expenditure (£ per Capita)",
        model: {"places":{"Clackmannanshire":true,"Dumfries & Galloway":true,"East Ayrshire":true,"East Lothian":true,"East Renfrewshire":true,"Eilean Siar":true,"Falkirk":true,"Fife":true,"Highland":true,"Inverclyde":true,"Midlothian":true,"Moray":true,"North Ayrshire":true,"Orkney Islands":true,"Perth & Kinross":true,"Scottish Borders":true,"Shetland Islands":true,"South Ayrshire":true,"South Lanarkshire":true,"Stirling":true,"Aberdeen City":true,"Aberdeenshire":true,"Argyll & Bute":true,"Edinburgh, City of":true,"Renfrewshire":true,"West Dunbartonshire":true,"West Lothian":true,"Angus":true,"Dundee City":true,"North Lanarkshire":true,"East Dunbartonshire":true,"Glasgow City":true},"plotType":"barchartCreate","dataSelected":{"Sum_Total_Population":false,"Average_Council_Expenditure_per_Capita":true}},
        notes: "Look how uneven it is... Its sucks, doesn't it? If only they had more money, or less people."
    }
]
