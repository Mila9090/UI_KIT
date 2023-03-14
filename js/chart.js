
window.addEventListener('DOMContentLoaded', () => {  

    const ctx = document.getElementById('myChart');
    const ctxLine = document.getElementById('myChartLine');
    const ctxSale = document.getElementById('myChartSale');
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Unit'];
    const data1 = [32, 25, 14, 22, 28, 34, 24];
    const data2 = [42, 34, 16, 30, 38, 44, 34];
    const maxDataValue = Math.max(...data1, ...data2);
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: labels,
            datasets: [{
                backgroundColor: 'rgb(214, 207, 110)',
                data: data1,
                barPercentage: 1,
            }, {
                backgroundColor: 'rgb(20, 163, 139)',
                data: data2,
                barPercentage: 1,
            }]
            },
            options: {
            hover: {
                mode: null
            },
            plugins: {
                legend: {
                display: false
                }
            },
            scales: {

                x: {
                    grid: {
                        display: false,
                        color: 'transparent'
                    },
                    ticks: {
                        color: 'rgba(124, 156, 191)',
                        font: {
                            size: 14
                        }
                    },
                },
                y: {

                    ticks: {
                        display: true,
                        callback: (value) => `${value}K`,
                        stepSize: 10,
                        suggestedMax: maxDataValue,
                        color: 'rgba(124, 156, 191)',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 14,
                            weight: 500
                        },
                        padding: 26
                        
                    },
                    grid: {
                        display: true,
                        drawBorder: false,
                        drawTicks: false,
                    },
                    border: {
                        dash: [4, 4]
                    },
                }
                
            },
            }
        });

    const data3 = [10, 110, 100, 40, 50, 150, 175];
        
    const data4 = [180, 140, 60, 50, 100, 110, 70];


        new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                borderColor: 'rgb(214, 207, 110)',
                backgroundColor: 'rgb(214, 207, 110)',
                data: data3,
                tension: 0.4,
                barPercentage: 1,
                }, {
                borderColor: 'rgb(20, 163, 139)',
                backgroundColor: 'rgb(20, 163, 139)',
                data: data4,
                tension: 0.4,
                barPercentage: 1,
                }]
            },
            options: {
                plugins: {
                legend: {
                    display: false
                }
                },
                font: {
                    family: 'IBM Plex Sans',
                    size: 100,
                    weight: '500',
                    color: '#7C9CBF',
                },
                scales: {
                
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: 'rgba(124, 156, 191)',
                        font: {
                            size: 14
                        }
                    },
                },
                y: {
                    border: {
                        color: 'red'
                    },
                    ticks: {
                        stepSize: 50,
                        suggestedMax: maxDataValue,
                        color: 'rgba(124, 156, 191)',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 14,
                            weight: 500
                        },
                        padding: 26
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Количество'
                    },
                    border: {
                        dash: [4, 4]
                    },
                    grid: {
                        display: true,
                        drawBorder: false,
                        drawTicks: false,
                    },
                    }
                },
            }
            });


        const data5 = {
            labels: ['45% Mobile', '35% Web', '20% Social'],
            datasets: [{
                data: [45, 35, 20],
                backgroundColor: ['rgb(214, 207, 110)', 'rgb(20, 163, 139)', 'rgb(8, 128, 174)']
            }]
        };
        const options1 = {
            hover: {
                mode: null
            },
            borderWidth: 0,
            plugins: {
                legend: {
                    display: false,
                },
            },
            rotation: 170,
        };

        const myDoughnutChart = new Chart(ctxSale, {
            type: 'doughnut',
            data: data5,
            options: options1
        });
              
              
              
});      