import * as vscode from "vscode";

export class ChatSystem {
  private chatPanel: vscode.WebviewPanel | undefined;

  constructor() {
    // Initialize the chat system
    // Set up event listeners, commands, etc.
  }

  private createChatPanel() {
    // Create a webview panel for the chat interface

    this.chatPanel = vscode.window.createWebviewPanel(
      "chatPanel",
      "Chat",
      vscode.ViewColumn.One,
      {}
    );

    // Load`` the HTML content for the chat interface
    this.chatPanel.webview.html = this.getWebviewContent();
  }

  private getWebviewContent() {
    // Return the HTML content for the chat UI
    return `<!DOCTYPE html>
    <html>
      <head>
      <style>
      /* Chat containers */
      .container {
        border: 2px solid #dedede;
        background-color: #100c08;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
      }
      
      /* Darker chat container */
      .darker {
        border-color: #ccc;
        background-color: #98777b;
      }
      
      /* Clear floats */
      .container::after {
        content: "";
        clear: both;
        display: table;
      }
      
      /* Style images */
      .container img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 50%;
      }
      
      /* Style the right image */
      .container img.right {
        float: right;
        margin-left: 20px;
        margin-right: 0;
      }
      
      /* Style time text */
      .time-right {
        float: right;
        color: #aaa;
      }
      
      /* Style time text */
      .time-left {
        float: left;
        color: #999;
      }      
      </style>
      </head>
      <body>
        <div class="container">
          <img src="/w3images/bandmember.jpg" alt="Avatar" />
          <p>Hi. How are you today?</p>
          <span class="time-right">11:00</span>
        </div>
    
        <div class="container darker">
          <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" />
          <p>Hi,I'm fine. Thanks for asking!</p>
          <span class="time-left">11:01</span>
        </div>
    
        <div class="container">
          <img src="/w3images/bandmember.jpg" alt="Avatar" />
          <p>what do you wanna do today?</p>
          <span class="time-right">11:02</span>
        </div>
    
        <div class="container darker">
          <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" />
          <p>Play soccer or learn coding</p>
          <span class="time-left">11:05</span>
        </div>
      </body>
    </html>
    `;
  }
  activateChat() {
    this.createChatPanel();
  }
}
