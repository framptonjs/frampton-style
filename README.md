# Frampton Style

Frampton-style is a library for working with CSS selectors in JavaScript. This is widely used by the frampton-events library to filter events.


## Instalation

```
> npm install --save-dev @frampton/core
> npm install --save-dev @frampton/style
```


## Usage

```
import * as Style from '@frampton/style';
```

All exported functions of >1 arguments is curried.

For example the addClass function could be used as such.

```
import { addClass } from '@frampton/style';

const addActive = addClass('active');
addActive(document.getElementById('my-id'));
```

### addClass

Adds class to element.

```
import { addClass } from '@frampton/style';

// Add class to element
addClass('my-class', element);
```

### applyStyles

Apply a hash of styles to a given element.

The applyStyles function will apply vendor prefixes if needed for the current browser.

```
import { addClass } from '@frampton/style';

applyStyles({
  'box-shadow': '1px 1px 5px rgba(0,0,0,0.5)',
  'padding': '10px 20px',
  'color': 'red'
}, element);
```

### closest

Returns the closest parent to given element matching selector.

```
import { closest } from '@frampton/style';

const closestElement: HTMLElement =
  closest('.my-class', element);
```

### contains

Returns a boolean indicating if the given element, or one of its children, matches the given selector.

```
import { contains } from '@frampton/style';

const doesContain: boolean =
  contains('.my-class', element);
```

### currentValue

Returns the current value of the given CSS property on given element. Uses getComputedStyle under the hood.

```
import { currentValue } from '@frampton/style';

const currentHeight: string =
  currentValue('height', element);
```

### hasClass

Returns a boolean indicating if given element has given class.

```
import { hasClass } from '@frampton/style';

const doesHaveClass: boolean =
  hasClass('my-class', element);
```

### matches

Returns a boolean indicating the element matches the given selector.

```
import { matches } from '@frampton/style';

const doesMatch: boolean =
  matches('.my-class', element);
```

### removeClass

Removes given class from element.

```
import { removeClass } from '@frampton/style';

removeClass('my-class', element);
```

### removeStyle

Removes given style from element.

```
import { removeStyle } from '@frampton/style';

removeStyle('height', element);
```

### selectorContains

Returns a boolean indicating if the given element is contained inside of an element matching given selector. Returns true if the element itself matches selector.

```
import { selectorContains } from '@frampton/style';

selectorContains('.my-class', element);
```

### setStyle

Set value of a style on a given element.

```
import { setStyle } from '@frampton/style';

setStyle('height', '100px', element);
```

### supported

Returns a string indicating the supported version of a given CSS property on the current browser (vendor prefix applied if needed);

```
import { supported } from '@frampton/style';

const transformOnBrowser: string =
  supported('transform');
```

### supportedProps

Given a hash of CSS name/value pairs returns a new hash where the property names have any needed vendor prefixes applied.

```
import { supportedProps } from '@frampton/style';

const browserOpenState =
  supportedProps({
    transform: 'translate(100px)',
    opacity: '0.8',
    perspective: '300px'
  });
```