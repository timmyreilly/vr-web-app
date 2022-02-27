import { LitElement, html, customElement } from "lit-element";
import "@google/model-viewer";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("vr-app")
export class VrApp extends LitElement {
    render() {
        return html`
            <model-viewer
                style="height:100vh; width: 100%"
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="src/assets/NeilArmstrong.glb"
                ar-modes="webxr scene-viewer quick-look"
                environment-image="src/assets/moon_1k.hdr"
                seamless-poster
                shadow-intensity="1"
                camera-controls
            ></model-viewer>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "vr-app": VrApp;
    }
}
