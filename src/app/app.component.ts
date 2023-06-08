import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts = Highcharts;
  title = 'demo2'
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
}
