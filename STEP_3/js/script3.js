$(document).ready(function(){

$.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (graphs) {
        var datiLinea = graphs['fatturato'];
        var datiTorta = graphs['fatturato_by_agent'];
        var datiTeam = graphs['team_efficiency'];
            getLineChart(datiLinea);
            getPieChart(datiTorta);
            getEfficiencyChart(datiTeam);
    },
    error: function (error) {
        alert('Errore nella chiamata');
    }
});

// Funzione creazione tabella lineare
function getLineChart(data){
    var ctx = $('#line-chart');
    var chart = new Chart(ctx, {
        type: data['type'],
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets: [{
                label: 'Vendite',
                backgroundColor: 'rgb(128, 255, 170)',
                borderColor: 'rgb(0, 68, 102)',
                borderWidth: 4,
                lineTension: 0,
                data: data['data']
            }]
        },
    });
};

// Funzione creazione tabella a torta
function getPieChart(torta){
    var ctx = $('#pie-chart');
    var chart = new Chart(ctx, {
        type: torta['type'],
        data: {
            datasets: [{
                backgroundColor: ['rgb(0, 138, 208, 0.6)','rgb(227, 255, 102, 0.6)','rgb(255, 64, 0, 0.6)','rgb(0, 153, 0, 0.6)'],
                borderColor: ['#fff'],
                borderAlign: 'inner',
                hoverBackgroundColor: ['rgb(0, 138, 208)','rgb(227, 255, 102)','rgb(255, 64, 0)','rgb(0, 153, 0)'],
                data: [
                    torta['data']['Marco'],
                    torta['data']['Giuseppe'],
                    torta['data']['Mattia'],
                    torta['data']['Alberto']
                ]
            }],
            labels: [
                'Marco',
                'Giuseppe',
                'Mattia',
                'Alberto',
            ]

        },
    });
};

//Funzione creazione tabella lineare per teams
function getEfficiencyChart(team){
    var ctx = $('#team-chart');
    var chart = new Chart(ctx, {
        type: team['type'],
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets: [{
                label: 'Team 1',
                yAxisID: 'A',
                backgroundColor: 'rgb(255, 217, 179, 0.5)',
                borderColor: 'rgb(255, 51, 51)',
                borderWidth: 4,
                data: team['data']['Team1']
            }, {
                label: 'Team 2',
                yAxisID: 'B',
                backgroundColor: 'rgb(255, 217, 179, 0.5)',
                borderColor: 'rgb(26, 117, 255)',
                borderWidth: 4,
                data: team['data']['Team2']
            }, {
                label: 'Team 3',
                yAxisID: 'C',
                backgroundColor: 'rgb(255, 217, 179, 0.5)',
                borderColor: 'rgb(57, 172, 57)',
                borderWidth: 4,
                data: team['data']['Team3']
            }]
        },
        options: {
            scales: {
              yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
              },
              {
                id: 'B',
                type: 'linear'
                },
             {
                id: 'C',
                type: 'linear',
            }]
            }
          }
    });
};


});
