// $(document).on('click', '.block_button_custom__center', function(){
//     // alert(3);
//     // $(this).toggleClass('btn_acnive');
//     // alert('l:' + $('.blockcards').length);
//     // $('.blockcards').toggleClass('visibleblock');
//     // $('.block_button_custom__left').toggleClass('bold_text');
//     // $('.block_button_custom__right').toggleClass('bold_text');


//     // $('.blockcardsitem').removeClass('itemactive');
//     // $('.blockcards > .itemwrap:nth-of-type(2) .blockcardsitem ').addClass('itemactive');
    
// });

window.swithblockcards = function () {
    alert(3);
    // $('.block_button_custom__center').toggleClass('btn_acnive');
    // alert('l:' + $('.blockcards').length);
    // $('.blockcards').toggleClass('visibleblock');
    // $('.block_button_custom__left').toggleClass('bold_text');
    // $('.block_button_custom__right').toggleClass('bold_text');


    // $('.blockcardsitem').removeClass('itemactive');
    // $('.blockcards > .itemwrap:nth-of-type(2) .blockcardsitem ').addClass('itemactive');
}












          
// клик на карточку



    $(document).on('click', '.itemwrap', function(){
        $('.blockcardsitem').removeClass('itemactive');
        $(this).find('.blockcardsitem').addClass('itemactive');
    });




// $('.blockcardsitem').click(function() {
   
//     $('.blockcardsitem').removeClass('itemactive');
//     $(this).find('.blockcardsitem__texttop').addClass('itemactive');
    
// });


                                // popaps

$('.callback').click(function() {
    $('.modalDialog').fadeIn(300);
    $('.modalDialog').css('display','flex');
    $('body').css('overflow','hidden');
    
}); 

$('.popap_form').click(function() {
    $('.modalDialog2').fadeIn(300);
    $('.modalDialog2').css('display','flex');
    $('body').css('overflow','hidden');
    
});

$('.closebutton').click(function() {
    $('.modalDialog2').css('display','none');
    $('.modalDialog').css('display','none');
    $('body').css('overflow','visible');
    
});