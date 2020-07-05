// Nossos rótulos para o eixo X
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];

// Para desenhar as linhas
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
        { 
            data: africa,
            label: "África",
            borderColor: "#8e5ea2",
            fill: false
          },
          { 
            data: asia,
            label: "Asia",
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: europe,
            label: "Europa",
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: latinAmerica,
            label: "América Latina",
            borderColor: "#c45850",
            fill: false
          },
          { 
            data: northAmerica,
            label: "América do Norte",
            borderColor: "#3e95cd",
            fill: false
          }
    ]
  }
});

let ctx2 = document.getElementById("primeiroGrafico");
let chart = new Chart(primeiroGrafico, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005'],
        datasets: [{
                label: 'Crecimento Populacional',
                data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806],
                backgroundColor: "rgba(255, 34, 0, 0.3)",
                borderColor: "#0000ff"
            },
            {
                label: 'Exemplo de Gráfico Comparativo',
                data: [173448346, 185150806, 175885229, 182911487, 178276128, 180619108],
                backgroundColor: "rgba(0, 255, 0, 0.3)",
                borderColor: "#002200"
            }
        ]
    }
});
  
//pie
let ctxP = document.getElementById("pieChart").getContext('2d');
let myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [{
    data: [300, 50, 100, 40, 120],
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
},
options: {
    responsive: true
}
});