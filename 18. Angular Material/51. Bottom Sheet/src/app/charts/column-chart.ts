export const columnChartOptions: any = {
  chart: {
    type: "column"
  },
  title: {
    text: "Monthly Revenue"
  },
  subtitle: {
    text: "Hotel Reveneue (in thousands)"
  },
  xAxis: {
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: { text: 'Revenue (millions)' }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
    }
  },
  series: [{
    name: 'Revenue',
    data: [49.9, 71.5, 106.4, 129.2, 140.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};
