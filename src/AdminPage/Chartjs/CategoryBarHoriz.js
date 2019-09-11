import {HorizontalBar} from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart({
      labels: ['Category01', 'Category02', 'Category03', 'Category04', 'Category05', 'Category06', 'Category07', 'Category08', 'Category09', 'Category10'],
      datasets: [
        {
          label: 'Category dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'round',
          data: [65, 59, 80, 81, 56, 55, 25, 46, 25, 76]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
