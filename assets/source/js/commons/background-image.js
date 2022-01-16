const backgroundImage = (selector, deviceSize = device()) => {  
  const $elements = $(selector).length ? $(selector) : $('picture.background-image');

  $elements.each(function() {
    const $children = $(this).children();
    let _background = null;

    $children.each(function() {
      const device = $(this).data('device');

      if (device === deviceSize) {
        _background = $(this).attr('srcset');
      } else if (!_background && ($(this).prop('tagName') || "").toLocaleLowerCase() === 'img') {
        _background = $(this).attr('src')
      }
    });

    $(this).find('img').hide();

    if (_background) {
      
      $(this).css('background-image', `url(${_background})`);
    }
  });
}
