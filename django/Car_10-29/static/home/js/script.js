let ctx = document.getElementById('myChart3').getContext('2d');
let labels = ['2WD', '4WD','AWD'];
let colorHex = ['#253D5B','#ffc107','#17a2b8'];

let myChart3 = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [53195,9263,2912],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})