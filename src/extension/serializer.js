module.exports = {
  createSerializer,
}

/** @typedef { import('../types').RawNotebookCell } RawNotebookCell */

const { TextDecoder, TextEncoder } = require('util')
const vscode = require('vscode')

/** @type { () => vscode.NotebookSerializer }  */
function createSerializer() {
  return new Serializer()
}

/** @implements vscode.NotebookSerializer */
class Serializer {
  /** @type {(content: Uint8Array, _token: vscode.CancellationToken) => Promise<vscode.NotebookData> } */
  async deserializeNotebook(content, _token) {
    var contents = new TextDecoder().decode(content)

    let rawCells
    try {
      rawCells = JSON.parse(contents)
      if (!Array.isArray(rawCells)) rawCells = []
    } catch {
      rawCells = []
    }

    const cells = rawCells
      .filter(isRawNotebookCell)
      .map(cell => new vscode.NotebookCellData(cell.kind, cell.value, cell.language))
      
    return new vscode.NotebookData(cells)
  }

  /** @type {(data: vscode.NotebookData, _token: vscode.CancellationToken) => Promise<Uint8Array> } */
  async serializeNotebook(data, _token) {
    const rawCells = data.cells.map(cell => ({ 
      kind: cell.kind, 
      language: cell.languageId, 
      value: cell.value 
    }))

    return new TextEncoder().encode(JSON.stringify(rawCells, null, 2))
  }
}

/**
 * @param {any} data
 * @return {data is RawNotebookCell}
 */  
function isRawNotebookCell(data) {
  if (data == null) return false

  if (typeof data.language !== 'string') return false
  if (typeof data.value !== 'string') return false
  if (typeof data.kind !== 'number') return false

  return true
}