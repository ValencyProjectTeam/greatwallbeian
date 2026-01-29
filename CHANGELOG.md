
# Changelog

## [1.1.0] - 2026-01-29

### ✨ 新增功能

- **配置系统升级**
    - 新增 `greatwallbeian.configFilePath` 设置项，支持自定义备案配置文件路径（默认：`.vscode/beian.json`）
    - 新增 `greatwallbeian.ignoreKeywords` 设置项，可指定需忽略的系统关键字（如 `True`、`False`、`None` 等）
    - 新增 `greatwallbeian.errorNotRegistered` 自定义错误消息配置
    - 新增 `greatwallbeian.errorTampered` 哈希校验失败的错误消息配置
    - 新增 `greatwallbeian.diagnosticSource` 诊断来源名称配置
    - 新增 `greatwallbeian.diagnosticCode` 诊断错误代码配置
    - 新增 `greatwallbeian.stopTaskMessage` 任务拦截消息配置

- **新增命令**
    - `GreatWall Beian: 为该元素备案` - 快速为未备案元素办理备案

- **合规拦截功能**
    - 实时拦截调试运行（F5 / Run）- 检测到未备案元素时停止调试会话
    - 阻止任务执行 - 拦截编译、生成等构建任务的运行
    - 保存文件警告 - 文件包含未备案元素时提示用户

- **日志系统**
    - 新增 `Logger` 工具类，支持输出通道日志记录
    - 所有关键操作现可在输出面板查看详细日志

### 🔧 改进

- **备案数据结构优化**
    - 备案条目从简单字符串改为对象结构：`{ name, date, hash }`
    - 添加了 SHA-256 哈希校验机制，检测备案记录是否被篡改
    - 支持备案日期记录

- **扫描引擎增强**
    - 正则表达式改进：现支持更多标识符匹配（包括下划线开头）
    - 支持忽略系统关键字，避免误报
    - 优化防抖机制，扫描延迟调整为 400ms

- **激活事件优化**
    - 将激活事件从 `onStartupFinished` 改为 `*`，确保插件更早启动

- **快速修复界面**
    - 优化快速修复提示文本：`✨ 立即为 "{typeName}" 备案` → `为 "{typeName}" 办理备案`
    - 诊断信息来源更清晰，便于识别

- **代码质量**
    - 完整的 TypeScript 类型定义（`BeianEntry`、`BeianConfig` 接口）
    - 改进错误处理和异常捕获机制
    - 增强单文件模式的路径解析鲁棒性

### 🐛 修复

- 修复了 JSON 解析失败时的异常处理
- 修复了单文件模式下目录创建的问题
- 改进了快速修复命令的参数校验逻辑
- 调整配置获取的默认值机制

### 📦 其他

- 更新 `package.json` 版本号至 1.1.0
- 在 Repository 字段添加 `type: "git"` 标识
- 删除了过时的单元测试文件 (`extension.test.ts`)
