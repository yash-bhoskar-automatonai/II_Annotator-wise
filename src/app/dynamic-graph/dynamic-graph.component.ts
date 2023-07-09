import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
const data = [
  { time: '10:00 AM', reviewers: 5 },
  { time: '11:00 AM', reviewers: 8 },
  { time: '12:00 PM', reviewers: 12 },
  { time: '1:00 PM', reviewers: 9 },
  { time: '2:00 PM', reviewers: 7 },
  { time: '3:00 PM', reviewers: 6 },
  { time: '4:00 PM', reviewers: 10 },
  { time: '5:00 PM', reviewers: 13 },
  { time: '6:00 PM', reviewers: 11 },
  { time: '7:00 PM', reviewers: 9 },
  { time: '8:00 PM', reviewers: 8 },
  { time: '9:00 PM', reviewers: 6 },
  // Add more data points here...
];


@Component({
  selector: 'app-dynamic-graph',
  templateUrl: './dynamic-graph.component.html',
  styleUrls: ['./dynamic-graph.component.css']
})
export class DynamicGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('dynamicGraph') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(item => item.time),
        datasets: [{
          label: 'Reviewers',
          data: data.map(item => item.reviewers),
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
