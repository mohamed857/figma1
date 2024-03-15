import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  values={
    name: 'إحصايات إستخدام القسيمة',
    data: [30, 50, 15, 20, 25, 150, 100, 200, 120, 90, 150, 70],
    // type: 'spline', // Use spline curve type
        // name: 'Series 1',
        // data: [10, 20, 5, 40, 50],
        color: '#e511c5',
        fillColor: 'rgba(255, 255, 255, 0.05)',
  } as any
  

  lineChart = new Chart({
    chart: {
      type: 'areaspline',
      backgroundColor:'#0B1739',
      height: 200 // Set the height of the chart
    },
    title: {
      text: 'patien Vist',
      
    },
    // subtitle: {
    //   text: "new Date(5/11/2022)"
    // },
    
    legend: {
      enabled: false ,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
        visible:false
    },
    yAxis: {
      title: {
        text: 'Value',
      },
      tickPositions: [0,50, 100,150, 200] // Set custom tick positions for the y-axis
    },
    series: [
      this.values
    ]
  });

  add = () => {
    this.lineChart.addPoint(Math.floor(Math.random() * 10))
  }
}

