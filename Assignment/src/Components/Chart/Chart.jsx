import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Chart from 'chart.js/auto';
import './Chart.css';

export const Graph = () => {
  const chartReference = useRef(null);
  const chartIn = useRef(null);

  useEffect(() => {
    if (chartIn.current) {
      chartIn.current.destroy();
    }
    const myChart = chartReference.current.getContext('2d');

    const colors = [
      'rgb(255, 165, 0)',
      'rgba(20, 40, 225, 0.8)',
      'rgba(138, 25, 25, 0.8)',
      'rgba(20, 40, 225, 0.8)',
      'rgba(216, 13, 214, 0.8)',
      'rgba(20, 40, 225, 0.8)',
      'rgba(12, 90, 7, 0.8)',
    ];

    const color = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    chartIn.current = new Chart(myChart, {
      type: 'bubble',
      data: {
        labels: [
          '12:00 PM',
          '12:05 PM',
          '12:10 PM',
          '12:15 PM',
          '12:20 PM',
          '12:25 PM',
          '12:30 PM',
          '12:35 PM',
          '12:40 PM',
          '12:45 PM',
          '12:50 PM',
          '12:55 PM',
        ],
        datasets: [
          {
            label: 'Bubble Chart',
            data: [
              { x: '12:00 PM', y: 70, r: 10 },
              { x: '12:05 PM', y: 50, r: 15 },
              { x: '12:10 PM', y: 65, r: 20 },
              { x: '12:15 PM', y: 90, r: 12 },
              { x: '12:20 PM', y: 75, r: 18 },
              { x: '12:25 PM', y: 70, r: 14 },
              { x: '12:30 PM', y: 50, r: 22 },
              { x: '12:35 PM', y: 80, r: 16,},
            ],
            backgroundColor: colors,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            title: {
              display: true,
            },
          },
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartReference} width={400} height={133} />
    </div>
  );
};
