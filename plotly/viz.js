fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
     sortByCountryPopulation(data);

  const top30Countries = data.slice(0, 30);
  const countries = top30Countries.map((item) => item.country);
  const populations = top30Countries.map((item) => item.population);

  const trace = {
  x: countries,
  y: populations,
  type: 'bar',
  marker: {
      color: 'rgb(142,124,195)'
  }
  };

  const chartdata = [trace];

  const layout = {
  title: 'Data distribution of countries population',
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('data-viz', chartdata, layout);

}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? 1 : -1);
}