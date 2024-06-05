// Define SVG dimensions
const width = 800;
const height = 600;

// Create SVG element
const svg = d3.select("#map").attr("width", width).attr("height", height);

// Load New Jersey GeoJSON data
d3.json("new_jersey.json").then(function (nj) {
  // Create a path generator
  const path = d3.geoPath();

  // Draw New Jersey outline
  svg.append("path").datum(nj).attr("class", "state").attr("d", path);

  // Draw colleges on the map
  svg
    .selectAll("circle")
    .data(colleges)
    .enter()
    .append("circle")
    .attr("class", "college")
    .attr("cx", (d) => projection(d.coordinates)[0])
    .attr("cy", (d) => projection(d.coordinates)[1])
    .attr("r", 5)
    .on("click", handleClick);

  // Function to handle click event
  function handleClick(event, d) {
    alert(`You clicked on ${d.name}`);
  }
});
