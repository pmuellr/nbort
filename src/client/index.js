/** @typedef { import('vscode-notebook-renderer').ActivationFunction } ActivationFunction */
import { render } from './render.js';

// ----------------------------------------------------------------------------
// This is the entrypoint to the notebook renderer's webview client-side code.
// This contains some boilerplate that calls the `render()` function when new
// output is available. You probably don't need to change this code; put your
// rendering logic inside of the `render()` function.
// ----------------------------------------------------------------------------

/** @type {ActivationFunction} */
export function activate(context) {
  return {
    renderOutputItem(outputItem, element) {
      let shadow = element.shadowRoot;
      if (!shadow) {
        shadow = element.attachShadow({ mode: 'open' });
        const root = document.createElement('div');
        root.id = 'root';
        shadow.append(root);
      }
      const root = shadow.querySelector('#root');
      root.innerHTML = '';
      const node = document.createElement('div');
      root.appendChild(node);

      render({ container: node, mime: outputItem.mime, value: outputItem.text(), context });
    },

    disposeOutputItem(outputId) {
      // Do any teardown here. outputId is the cell output being deleted, or
      // undefined if we're clearing all outputs.
    }
  };
};
