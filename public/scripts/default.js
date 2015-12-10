$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubtract').on('click', subtractNumber);
    $('#btnDivision').on('click', divideNumber);
    $('#btnMultiplication').on('click', multiplyNumber);
});

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": Number(x), "y": Number(y) };
    $.getJSON('/addition', data, function (data) {
        $('#result').html(data.result);
    });
}
function subtractNumber() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.post('/subtraction', data, function (data) {
        $('#result').html(data.result);
    },'json');
}
function multiplyNumber() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: "json",
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}
function divideNumber() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}