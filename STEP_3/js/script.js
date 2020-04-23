$(document).ready(function(){

$.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (graphs) {
        var datiLinea = graphs['fatturato'];
            getLineChart(datiLinea);
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

});
