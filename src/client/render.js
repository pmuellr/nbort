/** @typedef { import('vscode-notebook-renderer').RendererContext } RendererContext */
/** @typedef { import('../types').IRenderInfo } IRenderInfo */

// This function is called to render your contents.
/** @type { ( { container, mime, value }: IRenderInfo ) => void } */
export function render({ container, mime, value }) {
  // Format the JSON and insert it as <pre><code>{ ... }</code></pre>
  // Replace this with your custom code!
  const pre = document.createElement('pre');
  // pre.classList.add(style.json);
  const code = document.createElement('code');
  code.textContent = `mime type: ${mime}\n\n${JSON.stringify(value, null, 2)}`;
  pre.appendChild(code);
  container.appendChild(pre);
}
