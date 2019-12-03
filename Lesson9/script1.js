$(function () {
    $('#task1_btn').on('click', function () {
        let link = $('#task1_inp').val();
        if (link && (/https?\:\/\/\w/).test(link)) {
            let $link = $("#task1_link");
            
            $link.attr("href", link).text(`link: ${link}`);
            
            if ((/https\:\/\/\w/).test(link)) {
                $link.attr("target", '_blank');
            } 
            else{
                $link.removeAttr("target");
            }            
        }
    })
})