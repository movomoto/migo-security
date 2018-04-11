layui.config({
    base:'js/'
}).use(['navtab'],function(){
    window.jQuery = window.$ = layui.jquery;
    window.layer = layui.layer;
    var element = layui.element(),
        navtab = layui.navtab({
            elem: '.larry-tab-box'
        });

    //iframe自适应
    $(window).on('resize', function() {
        var $content = $('#larry-tab .layui-tab-content');
        $content.height($(this).height() - 140);
        $content.find('iframe').each(function() {
            $(this).height($content.height());
        });
    }).resize();

    $(function(){
        $('#larry-nav-side').click(function(){
            if($(this).attr('lay-filter')!== undefined){
                $(this).children('ul').find('li').each(function(){
                    var $this = $(this);
                    if($this.find('dl').length > 0){
                        var $dd = $this.find('dd').each(function(){
                            $(this).on('click', function() {
                                var $a = $(this).children('a');
                                var href = $a.data('url');
                                var icon = $a.children('i:first').data('icon');
                                var title = $a.children('span').text();
                                var data = {
                                    href: href,
                                    icon: icon,
                                    title: title
                                }
                                navtab.tabAdd(data);
                            });
                        });
                    }else{
                        $this.on('click', function() {
                            var $a = $(this).children('a');
                            var href = $a.data('url');
                            var icon = $a.children('i:first').data('icon');
                            var title = $a.children('span').text();
                            var data = {
                                href: href,
                                icon: icon,
                                title: title
                            }
                            navtab.tabAdd(data);
                        });
                    }
                });
            }
        }).trigger("click");
    });
});


layui.use(['jquery','layer','element'],function(){
    window.jQuery = window.$ = layui.jquery;
    window.layer = layui.layer;
    var element = layui.element();

    // larry-side-menu向左折叠
    $('.larry-side-menu').click(function() {
        var sideWidth = $('#larry-side').width();
        if(sideWidth === 200) {
            $('#larry-body').animate({
                left: '0'
            });
            $('#larry-footer').animate({
                left: '0'
            });
            $('#larry-side').animate({
                width: '0'
            });
        } else {
            $('#larry-body').animate({
                left: '200px'
            });
            $('#larry-footer').animate({
                left: '200px'
            });
            $('#larry-side').animate({
                width: '200px'
            });
        }
    });
});
