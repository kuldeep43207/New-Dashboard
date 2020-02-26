$('#menu-action').click(function() {
    $('.sidebar').toggleClass('active');
    $('.main').toggleClass('active');
    $(this).toggleClass('active');
  
    if ($('.sidebar').hasClass('active')) {
      $(this).find('i').addClass('fa-close');
      $(this).find('i').removeClass('fa-bars');
    } else {
      $(this).find('i').addClass('fa-bars');
      $(this).find('i').removeClass('fa-close');
    }
});

  $(".navbar .notifications").click(function(){
    $(".notification-wrapper").toggle();
  }); 

// $(".responsive-mobile-menus").click(function(){
//   $(".header-notification-bar").toggle();
// });  

$(".device-toggle-arrow").click(function(){
  $(".device-text").toggle();
});

$(".responsive-mobile-menus a").click(function(){
  $(".responsive-mobile-notify").toggleClass("responsive-mobile-notify-show");
});


// Add hover feedback on menu
// $('#menu-action').hover(function() {
//   $('.sidebar').toggleClass('hovered');
// });

$('.sidebar').hover(
  function(){ $(this).addClass('active-heading') },
  function(){ $(this).removeClass('active-heading') }
)

// $('.main-list-menus').mouseout(
//   function(){ $(".sub-drop-menu").removeClass('show') },
// )

window.onload = function () {

  var dps = []; // dataPoints
  var chart = new CanvasJS.Chart("chartContainer", {
    title :{
      text: "Temperture"
    },
    axisY: {
      includeZero: false
    },      
    data: [{
      type: "line",
      dataPoints: dps
    }]
  });
  
  var xVal = 0;
  var yVal = 100; 
  var updateInterval = 1000;
  var dataLength = 20; // number of dataPoints visible at any point
  
  var updateChart = function (count) {
  
    count = count || 1;
  
    for (var j = 0; j < count; j++) {
      yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
      dps.push({
        x: xVal,
        y: yVal
      });
      xVal++;
    }
  
    if (dps.length > dataLength) {
      dps.shift();
    }
  
    chart.render();
  };
  
  updateChart(dataLength);var ctx = document.getElementById('tempChart').getContext('2d');
  ctx.canvas.width = 320;
  ctx.canvas.height = 240;
  
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        legend: {
           display: true
        },
        datasets: [{
            fill: false,
            data: getHotTempData(),
            label: 'Hot Temperature',
            backgroundColor: "#FF2D00",
            borderColor: "#FF2D00",
            type: 'line',
            pointRadius: 1,
            lineTension: 2,
            borderWidth: 2
        },
        {
            fill: false,
            data: getColdTempData(),
            label: 'Cold Temperature',
            backgroundColor: "#0027FF",
            borderColor: "#0027FF",
            type: 'line',
            pointRadius: 1,
            lineTension: 2,
            borderWidth: 2
        }]
    },
    options: {
      animation: false,
      responsive: true,
      scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time ( UTC )'
            },
            type: 'time',
            time: {
              tooltipFormat: "hh:mm:ss",
              displayFormats: {
                hour: 'MMM D, hh:mm:ss'
              }
            },
            ticks: {
                      maxRotation: 90,
                      minRotation: 90
            }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Temperature ( Celcius )'
          },
        }]
      }
    }
  });
  
  function getHotTempData() {
    return [
      { x: new Date(2019, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 35 },
      { x: new Date(2019, 0, 1, 14, 1, 26, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 27, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 28, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 29, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 30, 0) }
    ];
  }
  
  function getColdTempData() {
    return [
      { x: new Date(2019, 0, 1, 14, 1, 19, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 20, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 21, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 22, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 23, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 24, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 25, 0), y: Math.random() * 0.5 + 23.5 },
      { x: new Date(2019, 0, 1, 14, 1, 26, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 27, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 28, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 29, 0) },
      { x: new Date(2019, 0, 1, 14, 1, 30, 0) }
    ];
  }
  setInterval(function(){updateChart()}, updateInterval);
  
  }


  