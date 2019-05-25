$(document).ready(function() {

    // Copy import
    $('.copycode').click(function() {
        var text = $('.code').text();
        var tempCopy = $('<input>').val(text).appendTo('body').select();
        document.execCommand('copy');
        tempCopy.remove();
        $(this).text('Copied!');
    });

})
