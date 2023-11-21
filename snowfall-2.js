document.addEventListener('DOMContentLoaded', function () {
  var _scrollSpider = {
      config: {
          side: 'right',
          offset: '0px',
          tooltip: 'spider',
          image: 'https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/bca09dd0-9c63-41d4-87e7-4e1c0b95ed7d/christmas-scroll.png',
          web: 'background: repeating-linear-gradient(45deg, #287843, #287843 3px, #579a6e 3px,  #579a6e 6px);width:2px;height:999em;position:absolute;right:66%;bottom:84%;'
      },
      move: function () {
          _scrollSpider.spider.style.top = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100) + '%';
      },
      goingUp: false,
      applyOffset: function () {
          var img = _scrollSpider.spider.getElementsByTagName('img')[0];
          if (img) {
              _scrollSpider.spider.style.marginTop = '-' + img.height + 'px';
              _scrollSpider.spider.style.display = '';
          } else {
              window.addEventListener('load', _scrollSpider.applyOffset);
          }
      },
      init: function () {
          var spider = document.createElement('DIV');
          spider.id = 'scrollSpider';
          spider.innerHTML = '<div style="' + _scrollSpider.config.web + '"></div><img class="js-scroll-top-spider hvr-wobble-vertical" src="' + _scrollSpider.config.image + '" title="' + _scrollSpider.config.tooltip + '" srcset="' + _scrollSpider.config.image + ', ' + _scrollSpider.config.image.replace('.png', '@2x.png') + ' 2x">';
          spider.style.position = 'fixed';
          spider.style.transform = 'scale(.7)';
          spider.style.zIndex = '4';
          spider.style[/left|right/i.test(_scrollSpider.config.side) ? _scrollSpider.config.side : 'right'] = _scrollSpider.config.offset;
          spider.style.top = '0%';
          spider.style.display = 'none';

          document.body.appendChild(spider);

          _scrollSpider.spider = spider;
          _scrollSpider.move();
          _scrollSpider.applyOffset();

          window.addEventListener('scroll', _scrollSpider.move);
          document.addEventListener('scroll', function (e) {
              var scrollTop = document.body.parentNode.scrollTop;
              if (scrollTop > 300) {
                  var img = _scrollSpider.spider.getElementsByTagName('img')[0];
                  _scrollSpider.spider.style.marginTop = '-' + img.height + 'px';
                  _scrollSpider.spider.style.display = '';
              }
          });
      }
  };

  _scrollSpider.init();
});
