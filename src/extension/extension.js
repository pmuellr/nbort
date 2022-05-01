module.exports = {
  activate,
  deactivate,
}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode")
const { createSerializer } = require('./serializer')

// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
/** @type { (context: vscode.ExtensionContext) => void } */
function activate(context) {
  context.subscriptions.push(
    vscode.workspace.registerNotebookSerializer(
      'nbort', createSerializer(), { transientOutputs: true }
    ),
  )
}

// This method is called when your extension is deactivated
function deactivate() { }
