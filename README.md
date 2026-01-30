# AI技术学习平台

这是一个基于最新AI技术知识的静态学习网站，采用现代化设计，响应式布局，支持多种设备。

## 网站特点

- **纯静态网站**：无需服务器，可直接在浏览器中打开
- **响应式设计**：支持桌面端、平板和移动设备
- **现代化UI**：采用深色主题，渐变色彩和动画效果
- **交互丰富**：平滑滚动、卡片动画、移动端菜单等
- **最新知识**：包含多模态AI、AGI、AI代理等前沿技术

## 文件结构

```
ai-tutorial/
├── index.html          # 主页面
├── css/
│   └── styles.css      # 样式文件
├── js/
│   └── main.js         # JavaScript交互
└── README.md           # 说明文档
```

## 使用方法

### 方法1：直接打开
1. 双击 `index.html` 文件
2. 在浏览器中查看网站

### 方法2：使用本地服务器（推荐）
```bash
# 使用Python 3
python -m http.server 8000

# 使用Python 2
python -m SimpleHTTPServer 8000

# 使用Node.js (需要先安装http-server)
npx http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

### 方法3：使用VS Code Live Server
1. 安装VS Code扩展 "Live Server"
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 内容模块

### 核心技术
- 多模态大模型
- AI代理系统
- AI安全与对齐
- 边缘AI部署
- AGI通用智能
- 可解释AI (XAI)

### 学习路径
- 入门阶段：AI基础概念、Python编程、经典算法
- 进阶阶段：深度学习框架、大模型技术、多模态学习
- 高级阶段：AI代理开发、系统优化、工程实践

### 实战项目
- 智能对话助手
- 多模态内容生成
- 自主任务执行Agent
- 智能数据分析

### 技术趋势
- 具身智能的普及
- AI原生应用爆发
- 模型小型化与效率提升
- AI安全标准化
- 个性化AI助手
- AI协作网络

## 技术栈

- **HTML5**：语义化标签，结构清晰
- **CSS3**：Flexbox/Grid布局，动画效果，响应式设计
- **JavaScript (ES6+)**：原生JavaScript，无需依赖框架

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 特性说明

### 动画效果
- 英雄区域淡入动画
- 卡片滚动进入动画
- 悬停效果
- 平滑滚动

### 响应式设计
- 桌面端 (> 768px)：完整布局
- 平板端 (481px - 768px)：调整网格布局
- 移动端 (<= 480px)：单列布局，移动端菜单

### 交互功能
- 导航栏滚动效果
- 锚点平滑滚动
- 卡片点击反馈
- 键盘导航支持
- 触摸设备优化

## 自定义修改

### 修改颜色主题
在 `css/styles.css` 文件中修改 `:root` 变量：
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... 其他变量 */
}
```

### 添加新内容
在 `index.html` 中找到对应的部分，复制卡片结构并修改内容。

### 修改样式
直接编辑 `css/styles.css` 文件，网站会自动应用更改。

## 性能优化

- 使用CSS动画而非JavaScript动画
- 图片使用emoji代替，减少HTTP请求
- CSS和JS内联，减少文件数量
- 使用现代CSS特性（Grid、Flexbox）

## 部署建议

### GitHub Pages
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择 `main` 分支作为源

### Netlify
1. 将代码推送到GitHub仓库
2. 在Netlify中导入仓库
3. 设置构建命令（静态网站无需构建）

### Vercel
1. 安装Vercel CLI
2. 运行 `vercel` 命令
3. 按提示完成部署

## 许可证

MIT License

## 更新日志

### v1.0.0
- 初始版本发布
- 包含最新AI技术知识
- 响应式设计
- 丰富的交互效果

## 联系方式

如有问题或建议，欢迎反馈！

---

**Enjoy Learning AI!**
