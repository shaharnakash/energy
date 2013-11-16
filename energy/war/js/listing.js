$(document).ready(function(){
    
    
    $('ul.filters.exclusive a').bind("click",function(){
        
        if($(".slider_hp_shop").length > 0)
            $(".slider_hp_shop").slideUp(750);
        
        
        $("#listing").hide();
        $(".header_shop").hide();
        $(".sidebar").hide();
        $(".ajax_loader_big").show();
        
        
        
        return true;
        
        
    });
    
    
    
    $(".back, .back_to").live('click',function(){
        
        $("#listing").hide();
        $(".header_shop").hide();
        $(".sidebar").hide();
        $(".ajax_loader_big").show();
        
        
        return true;
        
    });
    
    
   
   
   if($(".slider_hp_shop").length > 0){
       
                     
         $(".slider_hp_shop").slideDown(750);
          
   }
    

   
    
    
    update_from_location();
    
});

var trigger = function(carousel, state)
{
//    console.log(carousel.first);  
}



var initCallback = function(carousel){
    $("div.prev").bind('click',function() {
        carousel.next();
        return false;
    });
    
    
    $("div.next").bind('click',function() {
        carousel.prev();
        return false;
    });
    
}





