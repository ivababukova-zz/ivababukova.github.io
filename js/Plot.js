/**
 * Created by nishad on 29/11/14.
 */

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
