function openModal(file, type) {
    const modal = document.getElementById("modalViewer");
    const content = document.getElementById("modalContent");

    // CLEAR OLD CONTENT
    content.innerHTML = "";

    if (type === "image") {
        content.innerHTML = `<img src="${file}">`;
    }

    if (type === "pdf") {
        content.innerHTML = `<iframe src="${file}"></iframe>`;
    }
    modal.classList.add("show");
}

/* CLOSE WHEN CLICK OUTSIDE */
document.getElementById("modalViewer").addEventListener("click", function(e) {
    if (e.target.id === "modalViewer") {
        this.classList.remove("show");
    }
});


/* =====================================================
   SUS GAUGE
===================================================== */

new Chart(document.getElementById('susGauge'),{

    type:'doughnut',

    data:{
        datasets:[{
            data:[82.5,17.5],
            backgroundColor:[
                '#22c55e',
                '#dcfce7'
            ],
            borderWidth:0
        }]
    },

    options:{
        responsive:true,
        maintainAspectRatio:false,
        cutout:'75%',
        plugins:{
            legend:{
                display:false
            }
        }
    }

});

/* ================= AGE ================= */

new Chart(document.getElementById('ageChart'), {

    type: 'bar',

    data: {

        labels: [
            '18 Years old',
            '19 Years old',
            '20 Years old',
            '21 Years old',
            '22 Years old'
        ],

        datasets: [{

            label: 'Respondents',

            data: [5, 11, 16, 6, 2],

            percentages: [12.5, 27.5, 40, 15, 5],

            backgroundColor: '#2ecc71',

            borderRadius: 10

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        },

        scales: {

            x: {

                ticks: {
                    color: '#000'
                },

                title: {
                    display: true,
                    text: 'Age Range',
                    color: '#000',
                    font: {
                        size: 16,
                        weight: 'normal'
                    }
                }

            },

            y: {

                beginAtZero: true,

                max: 20,

                ticks: {
                    color: '#000'
                },

                title: {
                    display: true,
                    text: 'Number of Respondents',
                    color: '#000',
                    font: {
                        size: 16,
                        weight: 'normal'
                    }
                }

            }

        }
    }
});


/* ================= GENDER PIE ================= */

new Chart(document.getElementById('genderChart'), {

    type: 'pie',

    data: {

        labels: ['Male Student', 'Female Student'],

        datasets: [{

            label: 'Respondents',

            data: [16, 24],

            percentages: [40, 60],

            backgroundColor: [
                '#27ae60',
                '#d4f5df'
            ]

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                        weight: 'normal'
                    }
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        }
    }
});

/* ================= PROGRAM DISTRIBUTION ================= */

new Chart(document.getElementById('programChart'), {

    type: 'bar',

    data: {

        labels: [
            'BSED-ENTREP',
            'BSED-VE',
            'BSED-FIL',
            'BSED-MATH'
        ],

        datasets: [{

            label: 'Respondents',

            data: [4, 28, 2, 6],

            percentages: [10, 70, 5, 15],

            backgroundColor: [
                '#2ecc71',
            ],

            borderRadius: 10

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        },

        scales: {

            x: {

                ticks: {
                    color: '#000'
                },

                title: {
                    display: true,
                    text: 'Programs',
                    color: '#000',
                    font: {
                        size: 16,
                        weight: 'normal'
                    }
                }

            },

            y: {

                beginAtZero: true,

                max: 30,

                ticks: {
                    color: '#000'
                },

                title: {
                    display: true,
                    text: 'Number of Respondents',
                    color: '#000',
                    font: {
                        size: 16,
                        weight: 'normal'
                    }
                }

            }

        }
    }
});

/* ================= YEAR LEVEL ================= */

new Chart(document.getElementById('yearChart'), {

    type: 'pie',

    data: {

        labels: [
            'First Year',
            'Second Year',
            'Third Year'
        ],

        datasets: [{

            label: 'Respondents',

            data: [7, 26, 7],

            percentages: [17.5, 65, 17.5],

            backgroundColor: [
                '#157347',
                '#2ecc71',
                '#b7eac8'
            ]

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                        weight: 'normal'
                    }
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        }
    }
});


/* ================= EXPERIENCE ================= */

new Chart(document.getElementById('experienceChart'), {

    type: 'doughnut',

    data: {

        labels: ['Yes', 'No'],

        datasets: [{

            label: 'Respondents',

            data: [19, 21],

            percentages: [47.5, 52.5],

            backgroundColor: [
                '#2ecc71',
                '#27ae60'
            ]

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                        weight: 'normal'
                    }
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        }
    }
});



/* ================= TECHNOLOGY USE ================= */

new Chart(document.getElementById('technologyChart'), {

    type: 'doughnut',

    data: {

        labels: [
            'Daily',
            'Weekly',
            'Monthly',
            'Rarely'
        ],

        datasets: [{

            label: 'Respondents',

            data: [37, 1, 1, 1],

            percentages: [92.5, 2.5, 2.5, 2.5],

            backgroundColor: [
                '#2ecc71',
                '#27ae60',
                '#157347',
                '#d4f5df'
            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                        weight: 'normal'
                    }
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        const respondents = context.dataset.data[context.dataIndex];
                        const percentage = context.dataset.percentages[context.dataIndex];

                        return `Respondents: ${respondents} (${percentage}%)`;
                    }
                }
            }
        }
    }
});

/* =====================================================
   TASK PERFORMANCE
===================================================== */

new Chart(document.getElementById('taskChart'),{

    type:'bar',

    data:{

        labels:[
            'Create Account',
            'Login',
            'Book Appointment',
            'View Appointment',
            'Logout'
        ],

        datasets:[{

            label:'Completion Time (Seconds)',

            data:[45,25,95,40,15],

            backgroundColor:'#22c55e',

            borderRadius:10

        }]
    },

    options:{
        responsive:true,
        maintainAspectRatio:false,
        indexAxis:'y'
    }

});



