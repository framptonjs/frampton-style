# Frampton Style

Frampton-style is a library for working with CSS selectors in JavaScript. This is widely used by the frampton-events library to filter events.


## Instalation

```
> npm install --save-dev @frampton/core
> npm install --save-dev @frampton/style
```


## Usage

All exported functions of >1 arguments is curried.

```
import * as Style from '@frampton/style';


// Add class to element
Style.addClass('my-class', element);

// Apply a hash of styles to a given element
Style.applyStyles({
  'box-shadow': '1px 1px 5px rgba(0,0,0,0.5)',
  'padding': '10px 20px',
  'color': 'red'
}, element);

// The applyStyles function will apply vendor prefixes if needed for the current browser

// Find closest parent element matching selector
Style.closest('.my-class', element);

// Does the element or one of it's children match the given selector
Style.contains('.my-class', element);

// What is the current value of a CSS property on an element
Style.currentValue('height', element);

// Does the given element have the given class
Style.hasClass('my-class', element);

// Does the element match the given selector
Style.matches('.my-class', element);

// Remove given class from element
Style.removeClass('my-class', element);

// Remove style from element
Style.removeStyle('height', element);

// Is the element contained within an element matching selector
Style.selectorContains('.my-class', element);

// Set value of a style
Style.setStyle('height', '100px', element);

// Get the vendor-prefixed prop supported by this browser
Style.supported('transform');

// Get the vendor-prefixed version of a hash of styles
Style.supportedProps({
  transform: 'translate(100px)',
  opacity: '0.8',
  perspective: '300px'
});
```