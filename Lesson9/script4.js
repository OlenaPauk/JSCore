$(function () {
    let count = 0;
    $('.chec').on('change', function () {
        if (this.checked) {
            count++;
            if (count == 3) {
                $('.chec').each(function (i, el) {
                    let $el = $(el);
                    if (!el.checked) {
                        $el.attr('disabled','true');
                    }
                });
            }
        }
    })
})