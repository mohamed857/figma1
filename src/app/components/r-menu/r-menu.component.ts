import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-r-menu',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './r-menu.component.html',
  styleUrl: './r-menu.component.css'
})
export class RMenuComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [65, 35, 30],
          chart: {
          width: 350,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                }
              }
            }
          }
        },
        labels: ["Excellent", "Good", "Poor"],
        colors: ['#0000FF', '#FFFF00', '#008000'],
        dataLabels: {
          dropShadow: {
            blur: 1,
            opacity: 0.1
          }
        },
        fill: {
        type: 'pattern',
          opacity: 1,
          pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines'],
          },
        },
        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette2'
        },
        title: {
          text: 'Donut Chart',
        },
        
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };
    new ApexCharts(
      document.querySelector('#chart1'),
      this.chartOptions
    ).render();
  }
}
