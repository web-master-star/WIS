import {HorizontalBar} from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart({
      labels: ['Product01', 'Product02', 'Product03', 'Product04', 'Product05', 'Product06', 'Product07'],
      datasets: [
        {
          label: 'Product dataset',
          backgroundColor: 'rgba(100,220,132,0.2)',
          borderColor: 'rgba(100,220,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(100,220,132,0.4)',
          hoverBorderColor: 'rgba(100,220,132,1)',
          borderCapStyle: 'round',
          data: [83, 59, 66, 67, 80, 55, 48]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
