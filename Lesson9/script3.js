$(function () {
    $('h3').each(function (i, el) {
        let $h3 = $(el);
        let $div = $h3.next('div');
        $h3.before($div);
    })
})
