const options_specific_geral = {
    responsive: true,
    scales: {
        x: {
            display: false, // remove o eixo x do gráfico
        },
        y: {
            display: false, // remove o eixo y do gráfico
        }
    },
    plugins: {
        legend: {
            display: false // remove a legenda do gráfico
        }
    }
}

const data1 = [3, 4, 3.5, 10, 12, 16, 20, 25, 10, 30, 27]; // dados do gráfico
const area1_geral = document.getElementById('area1_geral').getContext('2d');
const gradient = area1_geral.createLinearGradient(0, 0, 0, 90); // criando gradiente para o fundo do gráfico
gradient.addColorStop(0, 'rgb(0, 109, 172, .2)'); // cor azul para o início do gráfico
gradient.addColorStop(1, 'rgba(0, 123, 255, 0)'); // adicionando cor transparente para o fundo do gráfico

function gerarDataSets() {
    return {
        data: [
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30),
            Math.round(Math.random() * 30)
        ],
        borderColor: '#006DAC',
        backgroundColor: gradient, // aplicando o gradiente como fundo do gráfico
        fill: true,
        tension: 0.4, // deixa o gráfico mais suave
        pointRadius: 0 // remove os pontos do gráfico
    }
}


new Chart(area1_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [{
            data: [10, 14, 15, 16, 10, 5, 10, 16, 20, 30, 39],
            borderColor: '#006DAC',
            backgroundColor: gradient, // aplicando o gradiente como fundo do gráfico
            fill: true,
            tension: 0.4, // deixa o gráfico mais suave
            pointRadius: 0 // remove os pontos do gráfico
        }]
    },
    options: options_specific_geral
});

const limitPerArea_graph = document.getElementById('limitPerArea_graph');
new Chart(limitPerArea_graph, {
    type: 'bar',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [
            {
                label: 'Nível de gás (ppm)',
                data: [10, 14, 15, 16, 10, 5, 10, 16, 20, 30, 45],
                borderColor: '#006DAC',
                backgroundColor: '#006DAC',
                fill: true,
                borderRadius: 5
            },
            {
                label: 'Límite de ppm (39ppm)',
                data: [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
                type: 'line',
                order: 4,
                fill: false,
                borderColor: '#f00',
                borderDash: [5, 5],
                tension: 0.3,
                pointRadius: 0
            }
        ]
    },
    options: {
        responsive: true,
    }
});

const bubble_chart = document.getElementById('bubble_chart');
new Chart(bubble_chart, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Sensores espalhados pela ',
            data: [{
                x: 20,
                y: 20,
                r: 15
            },
            {
                x: 50,
                y: 20,
                r: 20
            },
            {
                x: 80,
                y: 20,
                r: 30
            },
            {
                x: 20,
                y: 40,
                r: 18
            },
            {
                x: 50,
                y: 40,
                r: 24
            },
            {
                x: 80,
                y: 40,
                r: 25
            },
            {
                x: 20,
                y: 60,
                r: 20
            },
            {
                x: 50,
                y: 60,
                r: 30
            },
            {
                x: 80,
                y: 60,
                r: 40,
            },
            {
                x: 20,
                y: 80,
                r: 5
            },
            {
                x: 50,
                y: 80,
                r: 19
            },
            {
                x: 80,
                y: 80,
                r: 20
            },

            ],
            borderColor: '#006DAC',
            backgroundColor: '#006DAC',
        }]
    },

    options: {
        scales: {
            y: {
                min: 10,
                max: 90
            },
            x: {
                min: 10,
                max: 90
            }
        }
    }
})