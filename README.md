
Building a DashBoard:
● A table component that fetches and displays data from the /api/table endpoint.
● A pie chart component that fetches and visualizes data from the /api/pie-chart
endpoint.
● A graph component that fetches and displays data from the /api/graph endpoint.

## Deployment
npx create-react-app filename(myreact) 
//to install react app

//CompPie.js and CompGraph.js
npm i recharts 
          //for importing pieChart,pie,Legend

//CompApp.js
    npm install react-router-dom
    //for usage of routers,routes



/api/table to provide sample data for a table.
/api/pie-chart to provide sample data for a pie chart.
/api/graph to provide sample data for a graph.
## Documentation



The CompApp.css is imported in CompApp.js

The CompMenu.css is imported in CompMenu.js

The CompFooter.css is imported in CompFooter.js

Here recharts is used instaed of chartjs2 (due to non-functioning) and react bootstrap is installed for responsive and also to access card.The div at the right corner is done at CompMenu.js and its respective css file.
CompGraph,CompTable,CompPie uses the respective apis from the backend to fetch the data.


