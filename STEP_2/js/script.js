$(document).ready(function(){

$.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (graphs) {
        var datiLinea = graphs['fatturato'];
        getLineChart(datiLinea);

        var datiTorta = graphs['fatturato_by_agent'];
        getPieChart(datiTorta);
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
                data: [torta['data']['Marco'], torta['data']['Giuseppe'], torta['data']['Mattia'], torta['data']['Alberto']]
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











});
