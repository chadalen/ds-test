import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ds-icon.styles';

@customElement('ds-icon')
export class DSIcon extends LitElement {
  static override styles = styles;

  override render(): TemplateResult {
    return html`
    <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
      <path d="M1581.176 1750.588c0 31.06-25.411 56.47-56.47 56.47H395.294c-31.059 0-56.47-25.41-56.47-56.47V564.706H225.882v1185.882c0 93.403 76.01 169.412 169.412 169.412h1129.412c93.402 0 169.412-76.01 169.412-169.412V564.706h-112.942v1185.882Zm-903.529-169.412h112.941V677.647h-112.94v903.53Zm451.765 0h112.94V677.647h-112.94v903.53Zm211.211-1242.352L1217.065 0H694.6L571.268 338.824H.01v112.94h1920v-112.94h-579.388Zm-649.299 0 82.334-225.883h364.462l82.334 225.883h-529.13Z" fill-rule="evenodd"/>
    </svg>
    `;
  }
}
