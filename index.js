$("#input-db").on('input', fn_db);

function fn_db()//desimal ke biner
{
    valinputdb          = $(this).val();
    bilangan_tingkat    = 1;
    arr_bilangan        = [];
    arr_biner           = [];

    while(bilangan_tingkat <= valinputdb)
    {
        arr_bilangan.push(bilangan_tingkat);
        bilangan_tingkat = bilangan_tingkat * 2;
    }
    arr_bilangan.reverse();
    for(a = 0; a < arr_bilangan.length; a++)
    {
        cekdesimal = valinputdb - arr_bilangan[a];
        if(cekdesimal >= 0)
        {
            arr_biner.push(1);
            valinputdb = cekdesimal;
        }
        else
        {
            arr_biner.push(0);
        }
    }
    $("#hasil-db").val(arr_biner);
}
$("#input-bd").on('input', fn_bd);

function fn_bd()//biner ke desimal
{
    valinputbd = $(this).val();
    $("#hasil-bd").val(valinputbd);
}