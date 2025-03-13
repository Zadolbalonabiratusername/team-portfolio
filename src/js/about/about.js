import Accordion from 'accordion-js';

new Accordion('.about-description-list', {
  openOnInit: [0],
  showMultiple: true,
  elementClass: 'about-item',
  triggerClass: 'about-title',
  panelClass: 'about-description',
  activeClass: 'is-active',
});