// make charts

document.addEventListener('DOMContentLoaded', function () {

    Highcharts.setOptions({
        colors: [
            '#7cb5ec',
            '#434348',
            '#90ed7d',
            '#f7a35c',
            '#8085e9',
            '#f15c80',
            '#e4d354',
            '#2b908f',
            '#f45b5b',
            '#91e8e1'
        ],
    });

    // Chart:GHG_1_cunsum_emission_Mt
    Highcharts.chart('GHG_1_cunsum_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emissions Cumulative'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_1_cunsum_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (Mt CO2e)'
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
                dataLabels: {
                    enabled: false
                }
            }
        },

    });

    // Chart:GHG_2_individual_emission_Mt
    let options = {
        chart: {
            renderTo: 'GHG_2_individual_emission_Mt',
            marginRight: 180
        },
        title: {
            text: 'GHG Emissions by Sector'
        },
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: 'Emissions (Mt CO2e)'
            },
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 10,
            y: 250
      
        },
        series: [{
            name: 'Series 0',
            data: [],
            type: 'column'
        }, {
            name: 'Series 1',
            data: [],
            type: 'column'
        }, {
            name: 'Series 2',
            data: [],
            type: 'column'
        }, {
            name: 'Series 3',
            data: [],
            type: 'column'
        }, {
            name: 'Series 4',
            data: [],
            type: 'spline'
        }],
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },

    };

    // push data into options
    $.get("../data/GHG_2_individual_emission_Mt.csv", function(data) {
        // Split the lines
        var lines = data.split('\n');
    
        // Push column data into data list
        for (let i=0; i < lines.length; i++) {

            
            if (i == 0){
                // push column names into series names
                options.series[0].name = lines[i].split(",")[1]
                options.series[1].name = lines[i].split(",")[2]
                options.series[2].name = lines[i].split(",")[3]
                options.series[3].name = lines[i].split(",")[4]
                options.series[4].name = lines[i].split(",")[5]
            }
            else {
                // push row data into series data
                let year = lines[i].split(",")[0]
                let col1 = lines[i].split(",")[1]
                let col2 = lines[i].split(",")[2]
                let col3 = lines[i].split(",")[3]
                let col4 = lines[i].split(",")[4]
                let col5 = lines[i].split(",")[5]
                
                options.xAxis.categories.push(year)
                options.series[0].data.push(parseFloat(col1))
                options.series[1].data.push(parseFloat(col2))
                options.series[2].data.push(parseFloat(col3))
                options.series[3].data.push(parseFloat(col4))
                options.series[4].data.push(parseFloat(col5))
            }
            
        }
        
        // Create the chart
        var chart = new Highcharts.Chart(options);
    });

    // Chart:GHG_3_crop_lvstk_emission_Mt
    Highcharts.chart('GHG_3_crop_lvstk_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emission by Crop|Livestock'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_3_crop_lvstk_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (million t CO2e)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 10,
            y: 250
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },

    });

    // Chart:GHG_4_dry_irr_emission_Mt
    Highcharts.chart('GHG_4_dry_irr_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emission by Irrigation Type'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_4_dry_irr_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (million t CO2e)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 10,
            y: 300
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },

    });

    // Chart:GHG_5_category_emission_Mt
    Highcharts.chart('GHG_5_category_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emission by CH4/N2O/CO2'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_5_category_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (million t CO2e)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 10,
            y: 300
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },

    });

    // Chart:GHG_6_sources_emission_Mt
    Highcharts.chart('GHG_6_sources_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emission by Source'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_6_sources_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (million t CO2e)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 170,
            y: 100
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },

    
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                events: {
                  legendItemClick: function(event) {
                    var series = this.chart.series;
                              
                              series.forEach(function(item) {
                                  if (this.name == 'Show all' || this == item) {
                                      item.setVisible(true);
                                  } else {
                                      item.setVisible(false);
                                  }
                              }, this);
                    
                    return false;
                  }
                }
              }
        },

    });

    // Chart:GHG_7_1_lu_lm_emission_Mt
    Highcharts.chart('GHG_7_1_lu_lm_emission_Mt', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'GHG Emission in the Start year'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/GHG_7_1_lu_lm_emission_Mt.csv",
        },
        
        yAxis: {
            title: {
                text: 'Emissions (t CO2e/ha)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: -50,
            y: 200
      
        },

        tooltip: {
            formatter: function () {
                return `<b>Year:</b> ${this.x}<br><b>${this.series.name}:</b>${this.y.toFixed(2)}<br/>`;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },

    });

});