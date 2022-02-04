$(() => {

    let aggiungiLista = [];

    function scriviTask() {
        let lista = '';
        for (i = 0; i < aggiungiLista.length; i++) {
            lista += '<li class="border border-1 d-flex justify-content-between mx-3 me-4 my-1 p-2">' + '&bull; ' + aggiungiLista[i] + '<button onclick="rimuoviTask(' + i + ')" class="btnX text-end me-5 bg-danger text-white rounded p- px-2">Cancella</button>' + '</li>'
        }
        $('#lista').html(lista);
    }

    $('#addBtn').on('click', function () {
        let nuovaTask = $('#nuovaTask').val();
        if (nuovaTask != '') {
            aggiungiLista.push(nuovaTask);
            scriviTask();
            $('#nuovaTask').val('');
            $('#error').text('');
        } else {
            $('#error').text('Devi inserire un nuovo task!');
            return;
        }
    });

    function rimuoviTask(index) {
        aggiungiLista.splice(index, 1);
        scriviTask();

    }
    rimuoviTask();
    $('#lista').on('click', '.btnX', function () {
        let index  = $(this.parentElement).index();
        rimuoviTask(index);
        scriviTask();
    });
});