import { LitElement, html, customElement, css } from "lit-element";
import rocketUrl from "./assets/models/rocket.glb?url";

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
                text-align: right;
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
                <!-- <div class="main__left">
                    <h1>Rocket 3</h1>
                </div> -->
                <div class="main__right">
                    <model-viewer
                        style="height: 100%; width: 100%; position:absolute"
                        bounds="tight"
                        src=${rocketUrl}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        environment-image="neutral"
                        shadow-intensity="1"
                    >
                        <div class="progress-bar hide" slot="progress-bar">
                            <div class="update-bar"></div>
                        </div>
                        <button slot="ar-button" id="ar-button">
                            View in your space
                        </button>
                        <div id="ar-prompt">
                            <img
                                src="https://modelviewer.dev/shared-assets/icons/hand.png"
                            />
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
