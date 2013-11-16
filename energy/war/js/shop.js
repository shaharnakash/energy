$(document).ready(function(){
    
    $(".sidebar label").bind({
        'click':function(){ 
            $(this).toggleClass('close');
            $(this).next('ul.filters').toggle();
        
        }
    });
    
    $(".sidebar ul.filters:not(.exclusive) li:not(.disabled)").bind({
        'click':function(){
            $(this).toggleClass('selected');
            return false;
        }
    });
    
    $('.pantone_variante').live("click",
        function(){
            
            
            $.each($(this).parents('div.colors').find('.pantone_variante'),function(index, element){
                
                var new_src = $(element).attr('src').replace("sel_", "");
                
                $(element).attr('src',new_src);
                
            })
            
            var img = $(this);
            var arr = img.attr('rel').split('|');
            load_variante(arr[1],arr[0]);
                        
            var src = $(this).attr('src');
            
            var n = src.lastIndexOf('/');
            
            var path = src.substring(0,n);
            var img = src.substring(n+1);
            
            var new_src = path+"/sel_"+img;
            
            $(this).attr('src',new_src);
        });
    
    init_listing();
    
  
    
    
});

var submit_listing = function(p){
    
        
    if((p==undefined) || (p=='')){
                    
        var params = $('#frm').serialize();
        update_location(params);
                        
    }else{
        params = p;
    }

		
    $('#container_listing').fadeOut(1000,
        function(){
            
            $(".ajax_loader_big").show();
            
            $('#listing').load('/listing.php?' + params + "&output=listing", function(){
                
                
                $(".ajax_loader_big").hide();
                
                $("#product_results_update").html($("#n_prodotti").val());
                
                $('#container_listing').fadeIn('slow');
                
                init_listing();
                
				
            });
            
            
            
        }
        );
}
        
function update_location(params){
    
    var str_location = new String(window.document.location);
    
    if(str_location.indexOf('#')>0){
        
        var new_location=str_location.slice(0,str_location.indexOf('#')) + '#' + params;
        
    }else{
        
        var new_location=str_location + '#' + params;		
        
    }
    
    window.document.location = new_location;
    
}

function update_from_location(){
    
    var str_location = new String(window.document.location);
    
    if(str_location.indexOf('#')>0){
        
        var str_filtri=str_location.slice(str_location.indexOf('#')+1);
        
        submit_listing(str_filtri);
        
        submit_filtri(str_filtri);
    }
}



function load_variante(id_prodotto,id_prodotto_variante){
    
    $('li#prodotto_' + id_prodotto + ' img.imglisting').fadeTo("slow", 0.20,
        function(){
            $.getJSON("/ajax/json_product.php?id=" + id_prodotto_variante, function(json){		
                            
                //cambio l'immagine
                $('li#prodotto_' + id_prodotto + ' img.imglisting')[0].src=json.immagine;
                
                //cambio il nome
                $('li#prodotto_' + id_prodotto + ' p.product_name')[0].innerHTML = json.nome;
                                
                //controllo lo sconto   
                if(json.scontato){
                    $('li#prodotto_' + id_prodotto + ' div.price')[0].innerHTML = 
                    '<span class="barrato">' + json.prezzo + '</span>' + 
                    '<span class="scontato">' + json.prezzo_scontato + '</span>' 
                    

                }else{
                    $('li#prodotto_' + id_prodotto + ' div.price')[0].innerHTML = json.prezzo ;
                }
                                
                //cambio il link alla scheda prodotto
                $('li#prodotto_' + id_prodotto + ' a.link_a_prodotto').each(function(){
                    this.href=json.url
                });

                //cambio il link alla scheda prodotto
                $('li#prodotto_' + id_prodotto + ' a.buy_product.add_to_cart').each(function(){
                    this.href=json.url
                });


                $('li#prodotto_' + id_prodotto +  ' div.link_add_to_cart_product').html(json.links_prodotto);
                                
                
                                
                $('li#prodotto_' + id_prodotto + ' img.imglisting').load(function(){
                    $(this).fadeTo("slow", 1)
                });
                                
            });	
        }
        )
	

	
}
