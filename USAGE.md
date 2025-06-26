# 🧠 Cognito - 个人知识管理系统使用指南

## 📁 项目结构
```
cognito/
├── index.html              # 主页面 (GitHub Pages 首页)
├── From-Idea-to-Product.html  # 产品开发流程指南
├── data/
│   └── content.json        # 内容数据文件
├── manage.js              # 命令行管理工具
├── README.md              # 项目说明
└── USAGE.md              # 使用说明 (本文件)
```

## 🌐 在线访问

### GitHub Pages 设置
1. 在 GitHub 仓库中进入 Settings
2. 滚动到 Pages 部分
3. 在 Source 中选择 "Deploy from a branch"
4. 选择 `main` 分支，目录选择 `/ (root)`
5. 保存后即可通过 `https://[用户名].github.io/[仓库名]` 访问

### 主要功能
- **侧边栏导航**: 显示分类和搜索功能
- **内容展示**: 网格布局展示收集的网页
- **分类筛选**: 按技术文档、设计资源、学习资料分类
- **搜索功能**: 支持标题、描述、标签搜索
- **收藏功能**: 标记重要内容
- **响应式设计**: 支持手机、平板、桌面设备

## 💻 本地访问

### 使用网页界面
1. 打开 `index.html` 
2. 使用侧边栏进行分类浏览
3. 使用搜索框查找特定内容
4. 点击内容卡片访问原始网页

## 📝 管理内容

### 直接编辑JSON文件
编辑 `data/content.json` 文件，添加新的内容项：

```json
{
  "id": 6,
  "title": "新的学习资源",
  "url": "https://example.com",
  "description": "这是一个很有用的学习资源",
  "category": "learning",
  "tags": ["学习", "教程"],
  "dateAdded": "2024-12-26",
  "favorite": false
}
```

### 使用命令行工具查看内容

```bash
# 查看所有内容列表
node manage.js list

# 交互式浏览（仅查看功能）
node manage.js
```

## 🗂️ 分类说明

- **tech**: 技术文档 (绿色标签)
- **design**: 设计资源 (紫色标签)  
- **learning**: 学习资料 (黄色标签)

可以通过修改代码添加新的分类。

## 🔍 搜索和筛选

- **分类筛选**: 点击左侧边栏的分类按钮
- **关键词搜索**: 在搜索框中输入关键词，支持标题、描述、标签搜索
- **收藏筛选**: 点击内容卡片右上角的书签图标进行收藏

## 📱 移动端使用

- 点击左上角的菜单按钮打开侧边栏
- 支持触摸滑动和缩放
- 响应式布局自动适配屏幕大小

## 🚀 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 确保 `index.html` 在根目录
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://[用户名].github.io/[仓库名]`

## 🛠️ 自定义和扩展

### 添加新分类
1. 在 `index.html` 中的 `categoryConfig` 对象添加新分类
2. 在侧边栏添加对应的按钮
3. 更新 CSS 样式

### 修改样式
- 主要使用 Tailwind CSS 框架
- 自定义样式在 `<style>` 标签中
- 配色方案基于蓝色系主题

### 数据持久化
当前版本使用静态 JSON 文件存储数据。如需要更高级的功能，可以考虑：
- 连接到后端 API
- 使用 localStorage 浏览器存储
- 集成数据库

## 🔧 故障排除

### 内容不显示
- 检查 `data/content.json` 文件是否存在
- 确保 JSON 格式正确
- 检查浏览器控制台错误信息

### GitHub Pages 不显示内容
- 确保 `index.html` 在仓库根目录
- 检查 GitHub Pages 设置
- 等待几分钟让更改生效

### 添加内容失败
- 检查所有必填字段是否填写
- 确保 URL 格式正确
- 查看浏览器控制台错误

## 📞 支持

如有问题或建议，请：
1. 创建 GitHub Issue
2. 发送邮件到 robin@rnode.me
3. 查看项目 README 文档

---

**享受您的个人知识管理之旅！** 🎉
