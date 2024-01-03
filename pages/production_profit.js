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
    });

     // Chart:production_2_4_revenue_Type_wide
     Highcharts.chart('production_2_4_revenue_Type_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by crop/lvestock type'
        },
    
        data: {
            csvURL: "../data/production_2_4_revenue_Type_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue divided by crop/lvestock type (billion AU$)'
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
    });

     // Chart:production_2_5_revenue_crop_lvstk_wide
     Highcharts.chart('production_2_5_revenue_crop_lvstk_wide', {

        chart: {
            type: 'column',
            marginRight: 180
        },

        title: {
            text: 'Revenue divided by crop/lvestock total'
        },
    
        data: {
            csvURL: "../data/production_2_5_revenue_crop_lvstk_wide.csv",
        },
        
        yAxis: {
            title: {
                text: 'Revenue divided by crop/lvestock total (billion AU$)'
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
    });

});
    


