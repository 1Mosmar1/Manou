const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
    datasets: [{
      label: 'Moyenne de progression (%)',
      data: [65, 70, 75, 80],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 10 }
      }
    }
  }
});