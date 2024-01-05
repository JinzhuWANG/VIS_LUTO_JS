// create chart
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

    // Chart:production_1_quantity_df_wide
    Highcharts.chart('production_1_quantity_df_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Agricultural Production'
        },

        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/production_1_quantity_df_wide.csv",
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
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }
    });

    // Chart:production_2_1_revenue_Irrigation_wide
    Highcharts.chart('production_2_1_revenue_Irrigation_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by irrigation'
        },

        credits: {
            enabled: false
        },
    
        data: {
            csvURL: "../data/production_2_1_revenue_Irrigation_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue (billion AU$)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'left',
            layout: 'vertical',
            x: -100,
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
            }
        }, 
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }
    });

    // Chart:production_2_2_revenue_Source_wide
    Highcharts.chart('production_2_2_revenue_Source_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by products'
        },

        credits: {
            enabled: false
        },
    
        data: {
            csvURL: "../data/production_2_2_revenue_Source_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue divided by products(billion AU$)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'left',
            layout: 'vertical',
            x: 10,
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
            }
        }, 
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }

    });

    // Chart:production_2_3_revenue_Source_type_wide
    Highcharts.chart('production_2_3_revenue_Source_type_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by commodity type'
        },

        credits: {
            enabled: false
        },
    
        data: {
            csvURL: "../data/production_2_3_revenue_Source_type_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue divided by commodities (billion AU$)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'left',
            layout: 'vertical',
            x: 30,
            y: 80
      
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
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }
    });

     // Chart:production_2_4_revenue_Type_wide
     Highcharts.chart('production_2_4_revenue_Type_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by crop/livestock type'
        },
        
        credits: {
            enabled: false
        },

        data: {
            csvURL: "../data/production_2_4_revenue_Type_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue divided by crop/livestock type (billion AU$)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'left',
            layout: 'vertical',
            x: -50,
            y: 280
      
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
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }

    });

     // Chart:production_2_5_revenue_crop_lvstk_wide
     Highcharts.chart('production_2_5_revenue_crop_lvstk_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by crop/livestock total'
        },
    
        data: {
            csvURL: "../data/production_2_5_revenue_crop_lvstk_wide.csv",
        },
        
        credits: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'Revenue divided by crop/livestock total (billion AU$)'
            },
        },

        legend: {
            align: 'right',
            verticalAlign: 'left',
            layout: 'vertical',
            x: -50,
            y: 280
      
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
        
        exporting: {
            sourceWidth: 1200,
            sourceHeight: 600,
        }
    });

});
    


