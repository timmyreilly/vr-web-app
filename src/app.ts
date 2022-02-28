import { LitElement, html, customElement, css } from "lit-element";
import "@google/model-viewer";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("vr-app")
export class VrApp extends LitElement {
  static get styles() {
    return css`
      .main {
        display: flex;
      }

      .main__left {
        width: 50%;
        text-align: center;
      }

      h1 {
        font-size: 10rem;
        letter-spacing: -0.5rem;
      }
    `;
  }
  render() {
    return html`
      <div class="main">
        <div class="main__left">
          <h1>Rocket 3</h1>
        </div>
        <div class="main__right">
          <model-viewer
            style="height: 100%; width: 50%; position:absolute"
            bounds="tight"
            src="src/assets/models/rocket.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            shadow-intensity="1"
            autorotate
          >
            <div class="progress-bar hide" slot="progress-bar">
              <div class="update-bar"></div>
            </div>
          </model-viewer>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "vr-app": VrApp;
  }
}
