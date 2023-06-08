import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  Highcharts = Highcharts;
  title = 'demo2'
  @Input() chosenChart?: String
  linechart: any = {
    series: [
      {
        data: [1, 2, 3, 10],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };
  piechart: any = {
    series: [
      {
        data: [1, 2, 3, 10],
      },
    ],
    chart: {
      type: 'pie',
    },
    title: {
      text: 'piechart',
    },
  };
  barchart: any = {
    series: [
      {
        data: [1, 2, 3, 10],
      },
    ],
    chart: {
      type: 'bar',
    },
    title: {
      text: 'barchart',
    },
  }

  check() {
    if (this.chosenChart == "linechart") {
      return this.linechart
    } else if (this.chosenChart == "piechart") {
      return this.piechart
    } else {
      return this.barchart
    }
  }
}


