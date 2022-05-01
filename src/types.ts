import * as vscode from 'vscode'
import type { RendererContext } from 'vscode-notebook-renderer';

export interface RawNotebookCell {
  language: string
  value: string
  kind: vscode.NotebookCellKind
}

export interface IRenderInfo {
  container: HTMLElement;
  mime: string;
  value: any;
  context: RendererContext<unknown>;
}
