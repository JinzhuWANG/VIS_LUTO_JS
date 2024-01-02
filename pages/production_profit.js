// read csv file
let df;
let df_sorted;
var serieses = [];
var year = [];

dfd.readCSV("../data/quantity.csv").then(data => {
  
    df = data
 
    }).catch(err=>{
        console.log(err);
    })



 // create chart
 document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Agricultural Production'
        },
    
        data: {
            csvURL: '../data/quantity.csv',
        },
        
        yAxis: {
            title: {
                text: 'Production Quantity (million tons)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 10,
            y: 50
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
            }
        },
    
        
    });
});
    


