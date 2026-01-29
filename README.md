
# GreatWall Beian —— 长城备案 ~~（此项目介绍只是AI写的，如果有哪里不对或者想添加一些内容，谢谢大家帮忙修改一下捏~）~~

代码备案合规检查工具

## 功能

- **合规扫描**：实时检查代码中的元素是否已备案
- **哈希验证**：验证备案元素的完整性
- **快速备案**：为未备案的元素快速添加备案记录
- **配置灵活**：支持自定义配置文件和忽略关键字

## 安装

在 VS Code 扩展市场中搜索 "GreatWallBeian" 或访问 [GitHub 仓库](https://github.com/higashitaniyume/greatwallbeian)

## 命令

- `GreatWall Beian: 立即执行合规扫描` - 触发代码扫描检查
- `GreatWall Beian: 为该元素备案` - 为选中元素添加备案

## 配置

在工作区设置中配置以下选项：

| 选项 | 说明 | 默认值 |
|------|------|--------|
| `greatwallbeian.configFilePath` | 备案配置文件路径 | `.vscode/beian.json` |
| `greatwallbeian.ignoreKeywords` | 忽略的系统关键字 | 内置列表 |
| `greatwallbeian.errorNotRegistered` | 未备案错误信息 | 默认提示 |
| `greatwallbeian.errorTampered` | 篡改检测错误信息 | 默认提示 |
| `greatwallbeian.diagnosticSource` | 诊断来源名称 | `GreatWall-Security` |
| `greatwallbeian.diagnosticCode` | 错误代码标识 | `MUST_FILED` |
| `greatwallbeian.stopTaskMessage` | 任务停止提示信息 | 默认提示 |

## 版本

- 当前版本：1.1.0
- 最低 VS Code 版本：1.90.0
