$("#input-db").on('input', fn_db);

function fn_db()//desimal ke biner
{
    valinputdb = $(this).val();
    $("#hasil-db").val(valinputdb);
}
$("#input-bd").on('input', fn_bd);

function fn_bd()//biner ke desimal
{
    valinputbd = $(this).val();
    $("#hasil-bd").val(valinputbd);
}