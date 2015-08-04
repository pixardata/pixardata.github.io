$(document).ready(function(){
     colors:['#058DC7', '#504B32'];

     $('.allContainers').css('width', '500px');
     $('#singleChartView').hide();
     
     var chartName = ['Total Gender Distribution','Animation','Story & Art','Camera & Electrical','Casting','Editorial','Production Management','Sound & Music','Directors and Producers','Visual Effects','Screenplay','Other','Average'];
     var chartList = ["#container1","#container2","#container3","#container4","#container5","#container6","#container7","#container8","#container9","#container10","#container11","#container12","#container13"];
     var tableList = ["table1","table2","table3","table4","table5","table6","table7","table8","table9","table10", "table11","table12","table13",];
    
     var gridClicked = false;
     var bars = true;
     var Type = 'area';
     var Transparent = '#d8d8d8';
     var gridSize = '80%';
     $('#barCharts').click(function(){
          if(bars) {
               bars = false;
               Type = 'column';
               $('#barCharts').html("Polar Charts");
          } else {
               bars = true;
               Type = 'area';
               $('#barCharts').html("Bar Charts");
                
          }
          $('#barCharts').attr('disabled','disabled');

          drawCharts(bars);
          $('#barCharts').removeAttr('disabled');
     });

     $('#grid').click(function(){
          gridClicked = true;
          Transparent = 'transparent';
          gridSize = '65%';
          $('.allContainers').css('width', '400px');
          console.log(gridClicked);
          $('.section-heading').hide();
          $('#braveToolTip').hide();
          $('.bg-primary').css("background-color", "#000000");
          $('#learnMore').css('background-color', '#ffffff');
          for ( var i=1; i<13; i++) {
               $("#container" + i).show();
          }
          $("#container1").hide();
          $('#grid').hide();
          $('#singleChartView').hide();
          $('#Main').show();
          drawCharts(true);
     });
     $('#Main').click(function(){
          gridSize = '80%';
          $('.allContainers').css('width', '500px');
          gridClicked = false;
          Transparent = '#D8D8D8';
          $('.section-heading').show();
          $('#braveToolTip').show();
          $('.bg-primary').css("background-color", "#000000");
          $('#learnMore').css('background-color', '#ffffff');
          for (var i = 1; i < 13; i++) {
               $("#container" + i).hide();
          }
          $("#container1").show();
          $('#grid').show();
          $('#Main').hide();
          drawCharts(true);
     });

     var drawCharts= function(showPolar){
        
     for(var i=0; i<chartList.length; i++){
          console.log(i);
          var graph = chartList[i];
          var percent = ' ';
          var Title = chartName[i];
          var Bars = showPolar;
          var mainChartColor = ['#00cc00', '#ffc0cb'];
          
          if (i == 0) {
               mainChartColor = ['#000099', '#66ccff'];
          }
          else {
               mainChartColor = ['#cc3300', '#ff9933'];
          }
          
          if (bars == true) {
               if ( i == 0 | i == 12) {
                    percent = '%';
                    Type = 'column';
               }
               else {
                    percent = ' ';
                    Type = 'area';
               };
          };

          $(graph).highcharts({
               exporting: {
                    enabled: false
               },
               data: {
                    table: tableList[i],
                    startRow: 1,
                    endRow: 17,
                    endColumn: 7
               },
               colors: mainChartColor,
               chart: {
                    polar: Bars,
                    type: Type,
                    backgroundColor: '#000000'
                },
        
                title: {
                    text: Title,
                    style: {
                        color: '#c9c8c8',
                        fontWeight: 'bold'
                    }
                },
        
                subtitle: {
                    text: 'Source: imdb'
                },
        
                pane: {
                    size: gridSize
                },
        
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 100,
                    layout: 'vertical',
                    labels:{
                         style:{
                              color:'#c9c8c8'
                         }
                    }
                },
        
                xAxis: {
                    /*lineColor: Transparent,
                    gridLineColor: Transparent,
                    minorGridLineColor: Transparent,*/
                    tickmarkPlacement: 'on',
                    labels:{
                         style: {
                              color:'#c9c8c8'
                         }
                    }
                },
        
                yAxis:{
                    /*lineColor: Transparent,
                    gridLineColor: Transparent,
                    minorGridLineColor: Transparent,*/
                    min: 0,
                    max: null,
                    endOnTick: false,
                    showLastLabel: true,
                    title: {
                        text: 'Number',
                        style: {
                         color: '#c9c8c8'
                        }
                    },
                    labels: {
                         style: {
                              color: '#c9c8c8'
                          },
                         formatter: function () {
                             return this.value + percent;
                         }
                    },
                    reversedStacks: true
                },
        
                tooltip: {
                valueSuffix: percent
                },
    
        
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        shadow: false,
                        groupPadding: 0,
                        pointPlacement: 'on'
                    }
                }
            });
               
               var pathNum = 0;
               $("#container13 path").each(function() {
                  $(this).attr('id','id'+pathNum);
                  pathNum++;
               });
               
               //for(var j = 2; j < 13; j++){
                    $("#id16").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container2").html());
                         }
                    });
                    $("#id17").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container3").html());
                         }
                    });
                    $("#id18").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container4").html());
                         }
                    });
                    $("#id19").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container5").html());
                         }
                    });
                    $("#id20").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container6").html());
                         }
                    });
                    $("#id21").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container7").html());
                         }
                    });
                    $("#id22").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container8").html());
                         }
                    });
                    $("#id23").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container9").html());
                         }
                    });
                    $("#id24").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container10").html());
                         }
                    });
                    $("#id25").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container11").html());
                         }
                    });
                    $("#id26").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container12").html());
                         }
                    });
               //}
                    $("#singleChartView").click(function(){
                         $('#singleChartView').hide();
                         $("#container13").show();
                         $('#singleChartView').html("");
                    });   
                         
               //}
//               j += 1;
          };
     };
    
     drawCharts(true);
     $(function () {
     $('[data-toggle="tooltip"]').tooltip()
     });
     $('#example').tooltip(options);
});