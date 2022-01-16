
const device = () => {
  const $element = $('#app');
  
  if ($element.length) {
    const _width = $element.width();

    switch (true) {
      case _width >= 1280 : 
        return 'desktop'
      case _width < 1280 && _width >= 768 : 
        return 'tablet'
      default : 
        return 'mobile'
    }
  }
}
