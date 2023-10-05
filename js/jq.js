$(document).ready(() => {  
   
    $(window).scroll(() => {
        hdaction();
    });
        
        function hdaction(){

        if($(window).scrollTop() > 0){
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        }  
        $(".dropdown").click();
    }

}
)
