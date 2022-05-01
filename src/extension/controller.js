module.exports = {
  createController,
}

const controllerId = 'nbort-controller-id'
const notebookType = 'nbort'
const label = 'Observable runtime Notebook'
const supportedLanguages = ['javascript']


const vscode = require("vscode")

/** @type { () => Controller }  */
function createController() {
  return new Controller()
}

class Controller {
  constructor() {
    this._controller = vscode.notebooks.createNotebookController(
      controllerId,
      notebookType,
      label
    )

    this._controller.supportedLanguages = supportedLanguages
    this._controller.supportsExecutionOrder = true
    this._controller.executeHandler = this._execute.bind(this)

    this._executionOrder = 0
  }

  dispose() {
		this._controller.dispose()
	}  

  /** @type { (cells: vscode.NotebookCell[], _notebook: vscode.NotebookDocument, _controller: vscode.NotebookController) => void} */
  _execute(cells, _notebook, _controller) {
    for (let cell of cells) {
      this._doExecution(cell)
    }
  }

  /** @type { (cell: vscode.NotebookCell) => Promise<void> } */
  async _doExecution(cell) {
    const execution = this._controller.createNotebookCellExecution(cell)
    execution.executionOrder = ++this._executionOrder
    execution.start(Date.now())

    /* Do some execution here not implemented */

    execution.replaceOutput([
      new vscode.NotebookCellOutput([
        vscode.NotebookCellOutputItem.text('Dummy output text!'),
        vscode.NotebookCellOutputItem.text(cell.document.getText(), 'nbort/cell')
      ])
    ])
    execution.end(true, Date.now())
  }
}