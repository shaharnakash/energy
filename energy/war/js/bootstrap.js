$(document).ready(function(){
    // Form validator
    
    $('form').each(function(){
        $(this).attr('action', $(this).attr('rel')); 
        if ($(this).is('.validate')) {
            $(this).validate({
                errorElement: 'legend',
                onkeyup: false
            });
        }
        if ($(this).is('.validate_no_ignore')) {
            $(this).validate({
                errorElement: 'legend',
                ignore: "",
                onkeyup: false
            });
        }
    });
    
    /* le tendine nell'header */
    $('#language ul li:first').bind({
        'mouseover': function(){
            $('#menu_language').show()
            },
        'mouseout': function(){
            $('#menu_language').hide()
            }
    });
    
    
    $('#country ul li:first').bind({
        'mouseover': function(){
            $('#menu_country').show()
            },
        'mouseout': function(){
            $('#menu_country').hide()
            }
    });
    
    /* E le tendine nel footer */
    $("#footer_category li.first_step").bind('mouseover',function(){
        $(this).find('ul.second_step').show();
    });
    
    $("#footer_category li.first_step").bind('mouseout',function(){
        $(this).find('ul.second_step').hide();
    });
    
        
    
    $("#menu_language li a").bind('click',function(){
        change_language($(this).attr('rel'))
        });
    
    
    $("div.back, div.back a").bind('click',function(){
        
        history.go(-1);
        return false;
        
    });
    
    $("form a.button:not(.no_submit)").live('click',submitform);
    
    
    $(".wrap_radio a.radio").live('click',select_radio);
        
    $('div#search form').live('submit', function() {
       var testo_da_cercare = $('div#search form input[name="testo"]').val();
       if(testo_da_cercare == "") {
           return false;
       }
    });
    
});


var select_radio = function(){
    
    var parent = $(this).parents("div.wrap_radio");
    
    if($(parent).find('a.radio').length == 1){
        $(this).toggleClass('selected');
    }else{
        $(parent).find('a.radio').each(function(a,element){

            $(element).removeClass('selected');

        });
        $(this).addClass('selected');
    }
    
    
    
    /*
     * Se il mio Wrapper ha un input andiamo a popolarlo. 
     * 
     * 1.L'input da popolare è quello che ha come id il rel del wrapper. 
     * 2.Come valore prendo il rel del link che è stato cliccato
     */
    if($(parent).find('a.radio').length > 0){
       
        var id_hidden = $(parent).attr('rel');
    
        if($(this).hasClass('selected'))   
            $("#"+id_hidden).val($(this).attr('rel'));
        else
            $("#"+id_hidden).val("");
    
    }

    if($(this).attr('href') == "#"){
        return false;
    }
    return true;
 
}

var submitform = function(){
    
    if($(this).parents('form').length == 1){
    
        $(this).parents('form').submit();
        
        return false;
    
    }
    
    
    var id_form = $(this).attr('rel');
    
    if(undefined != id_form){
        
        $("#"+id_form).submit();
        
        return false;
        
    }
    
    return false;
    return true;
    
}

// cambio lingua
var change_language = function(id_lang){
    
    $.ajax({
        type: "GET",
        url: "/_lang.php",
        data: "id_lang=" + id_lang,
        success: function(msg){
            window.document.location.reload();
        }
    });
}



    
    
