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

function gerarDataSets(){
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
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area2_geral = document.getElementById('area2_geral').getContext('2d');

new Chart(area2_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area3_geral = document.getElementById('area3_geral').getContext('2d');

new Chart(area3_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area4_geral = document.getElementById('area4_geral').getContext('2d');

new Chart(area4_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area5_geral = document.getElementById('area5_geral').getContext('2d');

new Chart(area5_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area6_geral = document.getElementById('area6_geral').getContext('2d');

new Chart(area6_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area7_geral = document.getElementById('area7_geral').getContext('2d');

new Chart(area7_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area8_geral = document.getElementById('area8_geral').getContext('2d');

new Chart(area8_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area9_geral = document.getElementById('area9_geral').getContext('2d');

new Chart(area9_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area10_geral = document.getElementById('area10_geral').getContext('2d');

new Chart(area10_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area11_geral = document.getElementById('area11_geral').getContext('2d');

new Chart(area11_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area12_geral = document.getElementById('area12_geral').getContext('2d');

new Chart(area12_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area13_geral = document.getElementById('area13_geral').getContext('2d');

new Chart(area13_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area14_geral = document.getElementById('area14_geral').getContext('2d');

new Chart(area14_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area15_geral = document.getElementById('area15_geral').getContext('2d');

new Chart(area15_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area16_geral = document.getElementById('area16_geral').getContext('2d');

new Chart(area16_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area17_geral = document.getElementById('area17_geral').getContext('2d');

new Chart(area17_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area18_geral = document.getElementById('area18_geral').getContext('2d');

new Chart(area18_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area19_geral = document.getElementById('area19_geral').getContext('2d');

new Chart(area19_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area20_geral = document.getElementById('area20_geral').getContext('2d');

new Chart(area20_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area21_geral = document.getElementById('area21_geral').getContext('2d');

new Chart(area21_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area22_geral = document.getElementById('area22_geral').getContext('2d');

new Chart(area22_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

const area23_geral = document.getElementById('area23_geral').getContext('2d');

new Chart(area23_geral, {
    type: 'line',
    data: {
        labels: ['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'], 
        datasets: [gerarDataSets()]
    },
    options: options_specific_geral
});

