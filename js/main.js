
function createPlotSpace(parentDiv, title) {

    parentDiv.append("h1")
        .attr("class", "row title")
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
        .attr("style", "height: 100vh");

    return out;
}

d3.createPlotSpace = createPlotSpace;

