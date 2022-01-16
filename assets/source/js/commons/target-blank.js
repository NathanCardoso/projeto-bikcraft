
const targetBlank = () => {
  $("a[href^='http']").not("[href*='"+window.location.host.toLowerCase()+"']").attr('target','_blank');
}
