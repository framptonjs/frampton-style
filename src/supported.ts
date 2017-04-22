import { cached } from '@frampton/core';
import supportedByElement from './supported-by-element';


/**
 * supported :: String -> String
 *
 * @name supported
 * @method
 * @memberof Frampton.Style
 * @param {String} prop A standard CSS property name
 * @returns {String} The property name with any vendor prefixes required by the browser, or null if the property is not supported
 */
export default cached(supportedByElement(document.createElement('div')));