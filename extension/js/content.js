(function() {
    setInterval(function() {
        var $stock = $(".text-part");
        $stock.each(function(idx, item) {
            $(item).html(
                item.innerHTML.replace(/(\(S[H,Z].*\)) /gi, function(a, b) {
                    var code = b.substr(1, b.length-2);
                    return "<a href='http://gu.qq.com/" + code + "' target='_blank' data-code='" + code + "'>" + b + "</a>  ";
                })
            )
        });
        var $code = $("[data-code]");
        $code.each(function(idx, item) {
            console.log($(item).attr("data-code"));
        });

    }, 1000);
})();
