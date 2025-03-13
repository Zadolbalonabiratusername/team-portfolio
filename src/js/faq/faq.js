import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 500,
  showMultiple: true,
  elementClass: 'faq-item',
  triggerClass: 'faq-question',
  panelClass: 'faq-description',
  activeClass: 'is-active',
});
