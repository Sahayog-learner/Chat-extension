// extension.ts
import * as vscode from "vscode";

import { ChatSystem } from "./Chat";

// Initialize the chat system
export function activate(context: vscode.ExtensionContext) {
  const chat = new ChatSystem();

  // Register a command to trigger the chat
  const disposable = vscode.commands.registerCommand(
    "extension.triggerChat",
    () => {
      vscode.window.showInformationMessage("Chat Extension activated!");

      chat.activateChat();
    }
  );
  //Create a button in the status bar
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right
  );

  statusBarItem.text = "$(comment) Chat";
  statusBarItem.tooltip = "Chat";
  statusBarItem.command = "extension.triggerChat";
  statusBarItem.show();

  context.subscriptions.push(disposable);
  // statusBarItem.color = new vscode.ThemeColor(
  //   "statusBarItem.prominentForeground"
  // );

  // // Show the status bar item

  //  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
