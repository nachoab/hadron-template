import { LitElement, html, css } from 'lit-element/lit-element.js';

class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: sans-serif;
        display: block;
        box-sizing: border-box;
      }
      .tabs {
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        justify-content: flex-end;
        border-bottom-width: 1px;
        border-bottom-style: dotted;
        border-bottom-color: #ff9191;
      }
      .tab {
        margin-right: 10px;
      }
    `;
  }

  render() {
    return html`
      <slot __track__="-MGwiFglpbLmHXt88zgr" name="foo"></slot>
      <div __track__="-MHH0i2_PfPl2Gt1on9g" class="tabs">
        <a
          class="tab"
          part="tab"
          href="pages/team"
          __track__="-MHHW2-ttJlu7d-FQ_aX"
          >Team</a
        >
      </div>
    `;
  }
}

customElements.define("p-navbar", MyElement);
