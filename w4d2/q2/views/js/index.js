$(() => {

    const sucess = (resData)=>{
        $('#qn').val(resData);
    };

    $('#qn').on('keyup', function(e){
        console.log(e);
        if(e.keyCode === 13) {
            $.get( '/8ball',null, sucess);
        };
    });

    $("#ask").click(() => {
        const data = {
            question: $("#qn").val(),
        };
        console.log(data);
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(sucess)
            .fail(()=>{});
        return false;
    });
});