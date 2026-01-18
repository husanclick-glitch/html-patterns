
'use strict';

class Accordion {
  constructor() {
    this.rootElements = document.querySelectorAll("[data-accordion]");
  }

  init() {
    this.rootElements.forEach((element) => (
      element.addEventListener("click", this.onAccordionClick.bind(this))
    ))
  }

  onAccordionClick(event) {
    var target = event.target;
    var parent = target.closest("[data-accordion]");
    var control = target.closest("[aria-controls]");

    if (parent && control) {
      var contentId = control.getAttribute("aria-controls");

      var content = parent.querySelector(
        `#${contentId}`
      );

      this.toggle(target, parent, control, content);
    }
  }

  toggle(target, parent, control, content) {
    var open = control.getAttribute("aria-expanded") === "true";

    var toggler = !open;

    control.setAttribute("aria-expanded", `${toggler}`);
    if (toggler) {
      content.removeAttribute("hidden");
    } else {
      content.setAttribute("hidden", "");
    }
  }
}

new Accordion().init();

// class Accordion {
//   constructor(domNode) {
//     this.rootEl = domNode;
//     this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

//     const controlsId = this.buttonEl.getAttribute('aria-controls');
//     this.contentEl = document.getElementById(controlsId);

//     this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

//     this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
//   }

//   onButtonClick() {
//     this.toggle(!this.open);
//   }

//   toggle(open) {
//     if (open === this.open) {
//       return;
//     }

//     this.open = open;

//     this.buttonEl.setAttribute('aria-expanded', `${open}`);
//     if (open) {
//       this.contentEl.removeAttribute('hidden');
//     } else {
//       this.contentEl.setAttribute('hidden', '');
//     }
//   }

//   open() {
//     this.toggle(true);
//   }

//   close() {
//     this.toggle(false);
//   }
// }

// const accordions = document.querySelectorAll('.accordion h3');
// accordions.forEach((accordionEl) => {
//   new Accordion(accordionEl);
// });
