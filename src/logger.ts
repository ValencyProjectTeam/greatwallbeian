/** 
 * GreatWall Beian - 代码备案合规检查工具
 * MIT 许可证
 * 
 * 版权所有 (c) 2026 Valency 和 Higashitani Yume
 * 
 * 你可以在遵守 MIT 许可证的前提下修改或者分发、复制此代码。
*/

import * as vscode from 'vscode';
export class Logger {
    static warn(arg0: string) {
        console.warn(arg0);
        if (this.channel) {
            this.channel.appendLine(`[${new Date().toLocaleTimeString()}] ${arg0}`);
        }
    }
    static error(arg0: string, err: unknown) {
        console.error(arg0, err);
        if (this.channel) {
            this.channel.appendLine(`[${new Date().toLocaleTimeString()}] ${arg0} ${err}`);
        }
    }
    private static channel: vscode.OutputChannel;

    static init(name: string) {
        this.channel = vscode.window.createOutputChannel(name);
    }

    static log(message: string) {
        // 同时在两个地方打印
        console.log(message);
        if (this.channel) {
            this.channel.appendLine(`[${new Date().toLocaleTimeString()}] ${message}`);
        }
    }

    static show() {
        this.channel.show();
    }
}