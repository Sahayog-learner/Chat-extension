// extension.ts
import * as vscode from "vscode";

import { ChatSystem } from "./Chat";

export function activate(context: vscode.ExtensionContext) {
  const chat = new ChatSystem();

  const chatDisposable = vscode.commands.registerCommand(
    "extension.triggerChat",
    () => {
      vscode.window.showInformationMessage("Chat Extension activated!");
      chat.activateChat();
    }
  );

  context.subscriptions.push(chatDisposable);

  // DropdownButton code
  let dropdownStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );

  dropdownStatusBarItem.text = "Dropdown Button";
  dropdownStatusBarItem.show();

  dropdownStatusBarItem.command = "dropdownButton.showQuickPick";

  let dropdownDisposable = vscode.commands.registerCommand(
    "dropdownButton.showQuickPick",
    () => {
      let options = ["Botpress", "Chat", "STS"];
      let optionsQuickPick = vscode.window.createQuickPick();
      optionsQuickPick.items = options.map((option) => ({ label: option }));
      optionsQuickPick.onDidChangeSelection((selection) => {
        if (selection[0]) {
          const selectedOption = selection[0].label;
          vscode.window.showInformationMessage(selectedOption);

          // Check if the selected option is "Chat" and activate the chat window
          if (selectedOption === "Chat") {
            chat.activateChat();
          }
        }
        optionsQuickPick.hide();
      });
      optionsQuickPick.show();
    }
  );
  //Create a button in the status bar
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right
  );

  statusBarItem.text = "$(comment) Select";
  statusBarItem.tooltip = "Select option from above";
  statusBarItem.command = "dropdownButton.showQuickPick";
  statusBarItem.show();

  context.subscriptions.push(dropdownDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

// {
//   "command": "extension.triggerChat",
//   "title": "Chat"
// },
