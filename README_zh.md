# 🚀 LangGPT — 让每个人都能创建高质量提示词！

<div align="center">
<img src="imgs/logo.png" width="60%" height="auto">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Paper](https://img.shields.io/badge/arXiv-2402.16929-b31b1b.svg)](https://arxiv.org/abs/2402.16929)
[![Stars](https://badgen.net/github/stars/langgptai/LangGPT)](https://github.com/langgptai/LangGPT)

[English](README.md) | [简体中文](README_zh.md) | [日本語](README_ja.md)

[快速开始](#-快速开始) | [理论基础](#-理论基础) | [生态系统](#-langgpt-生态系统) | [社区](http://feishu.langgpt.ai)

</div>

---

## 📖 什么是 LangGPT？

**LangGPT 是一个结构化、可复用的提示词设计框架**，让任何人都能为大语言模型创建高质量提示词。可以把它看作是"**提示词的编程语言**" — 系统化、模板化、无限可扩展。

### 为什么选择 LangGPT？

传统的提示词工程依赖零散的技巧和反复试错。LangGPT 将这种混乱转变为结构化方法论：

- 🎯 **结构化模板** — 借鉴编程范式的层次化组织
- 🔄 **可复用性** — 像代码模块一样，创建一次，无限适配
- 📦 **模块化** — 变量、命令和条件逻辑随手可用
- ⚡ **高效率** — 几分钟内从想法到可工作的提示词
- 🌍 **社区驱动** — 11,000+ 星标，经过数千用户实战检验

> **学术基础**: 发表论文见 [arXiv:2402.16929](https://arxiv.org/abs/2402.16929) | [中文版](Papers/LangGPT_paper_cn.md)

---

## 🚀 快速开始

### 方法一：使用自动化工具（最快）

让 AI 为你创建提示词：

- **[LangGPT GPTs](https://chat.openai.com/g/g-Apzuylaqk-langgpt)** — 完整功能生成器（GPT-4）
- **[Kimi+ LangGPT](https://kimi.moonshot.cn/kimiplus/conpg00t7lagbbsfqkq0)** — 适用于 Moonshot Kimi 用户
- **[PromptGPT](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)** — 精简版（GPT-3.5）

### 方法二：掌握模板（5 分钟）

基础 LangGPT 结构：

```markdown
# Role: 你的角色名称

## Profile
- Author: 你的名字
- Version: 1.0
- Language: 中文
- Description: 清晰的角色描述和核心能力

### Skill-1
1. 具体技能描述
2. 预期行为和输出

## Rules
1. 在任何情况下都不要打破角色设定
2. 不要编造事实或产生幻觉

## Workflow
1. 分析用户输入并识别意图
2. 系统性地应用相关技能
3. 提供结构化、可操作的输出

## Initialization
作为 <Role>，你必须遵守 <Rules>，你必须用默认 <Language> 与用户对话，你必须向用户问好。然后介绍自己并介绍 <Workflow>。
```

**前置要求**: 基础 Markdown 知识（[快速指南](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)）| 推荐使用 GPT-4 或 Claude

### 方法三：从示例开始

浏览我们的[示例库](https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe)，根据需求改编经过验证的模板。

---

## 🧠 理论基础

在深入技巧之前，先理解原理。这些文章探讨了有效提示词背后的哲学：


- **[对话动力学](Docs/对话动力学.md)** — 人机对话的动力学
- **[五种理性](Docs/五种理性.md)** — 提示词设计中的五种理性
- **[镜像性倾向](Docs/镜像性倾向.md)** — 大语言模型行为中的镜像倾向
- **[统计重力井和边缘表达](Docs/统计重力井和边缘表达.md)** — 统计重力井和边缘表达的影响
- **[关系表达](Docs/关系表达.md)** — 关系表达：压缩式表达之外的另一种可能
- **[看见与言说](Docs/看见与言说.md)** — AI 交互中的观察与表达
- **[Prompt 的本质](Docs/Prompt的本质.md)** — 提示词的本质和特性
- **[面向结果的提示词写作方法](Docs/面向结果的提示词写作方法.md)** — 编写关注实现目标的提示词
- **[AI意识](Docs/AI意识.md)** — 理解 AI 在人类-AI 交互中的角色
- **[AI时代的新管理：机器负责优化，人类定义应该](Docs/AI时代的新管理：机器负责优化，人类定义应该.md)** —  AI 时代的新管理：机器负责优化，人类定义应该

*这些基础见解将改变你对提示词的思考方式。*

---

## 💡 核心概念

### 1. 结构化角色

通过清晰的模块化部分定义 AI 角色：

| 部分 | 用途 | 示例 |
|---------|---------|---------|
| **Role** | 角色名称/标题 | "逻辑学家" / "专家分析师" / "FitnessGPT" |
| **Profile** | 身份和能力 | "拥有 10 年经验的 Python 专家开发者" |
| **Skills** | 具体能力 | "调试复杂代码，优化性能" |
| **Rules** | 边界和约束 | "永远不要执行破坏性命令" |
| **Workflow** | 交互逻辑 | "1. 分析 → 2. 计划 → 3. 执行" |
| **Initialization** | 开场白和设置 | "作为 <Role>，我将向你问好并介绍 <Workflow>" |

### 2. 变量和引用

使用 `<Variable>` 语法实现动态内容：

```markdown
作为 <Role>，你必须遵守 <Rules> 并用 <Language> 交流
```

这创建了自引用提示词，在复杂指令中保持一致性。

### 3. 命令

定义可复用的操作以改善用户体验：

```markdown
## Commands
- Prefix: "/"
- Commands:
    - help: 显示所有可用命令
    - continue: 恢复中断的输出
    - improve: 通过更深入的分析增强当前响应
```

### 4. 条件逻辑

为提示词增加智能：

```markdown
如果用户提供[代码]，则分析并建议改进
否则如果用户提问[问题]，则提供详细解释
否则，提示澄清
```

### 5. 高级技巧

**提醒** — 对抗长对话中的上下文丢失：
```markdown
## Reminder
1. 在响应前始终检查角色设置
2. 当前语言：<Language>，活跃规则：<Rules>
```

**替代格式** — 当 markdown 不理想时使用 JSON/YAML：
```yaml
role: DataAnalyst
profile:
  version: "2.0"
  language: "Python"
skills:
  - statistical_analysis
  - data_visualization
```

---

## 🌟 精选示例

| 提示词 | 描述 | 链接 |
|--------|-------------|------|
| 🎯 **FitnessGPT** | 个性化饮食和锻炼计划 | [查看](examples/FitnessGPT.md) |
| 💻 **Code Master CAN** | 具有调试专长的高级编程助手 | [查看](examples/code_anything_now/ChatGPT-Code_Anything_Now_en.md) |
| ✍️ **小红书写手** | 爆款社交媒体内容生成器 | [查看](examples/chinese_xiaohongshu_writer/) |
| 🎨 **中国诗人** | 传统风格的古典诗歌创作 | [查看](examples/chinese_poet/) |

[浏览 100+ 更多示例 →](https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe)

---

## 📚 学习资源

### 必读指南

| 资源 | 描述 | 日期 |
|----------|-------------|------|
| [学术论文](https://arxiv.org/abs/2402.16929) | LangGPT：重新思考结构化可复用提示词设计（[中文](Papers/LangGPT_paper_cn.md)） | 2024年2月 |
| [结构化提示词指南](Docs/HowToWritestructuredPrompts.md) | 构建高性能提示词的综合教程 | 2023年7月 |
| [提示词链](Docs/PromptChain.md) | 多提示词协作和任务分解策略 | 2023年8月 |
| [视频教程](https://www.bilibili.com/video/BV1rj411q78a) | B站详解（by AIGCLINK） | 2023年9月 |

### 进阶主题

- **[推理模型提示方法变革](https://mp.weixin.qq.com/s/FLY0sy1jYv6eT9151Yz_jw)** — 从过程导向到目标导向提示的范式转变
- **[提示词的道和术](https://langgptai.feishu.cn/wiki/AYMWwBPaSih46WkAo9jcfKkfntg)** — 李继刚的提示词工程哲学与实践
- **[企业级提示词工程](https://langgptai.feishu.cn/wiki/UTyswvusTiRw0TkZLI5cIG0Tnhc)** — 构建生产就绪的提示词系统（百川智能）
- **[多模态提示词](https://mp.weixin.qq.com/s/Aan9NXO_vEZ9h0YrugpoGQ)** — GPT-4V 和多模态提示技术
- **[提示词攻击与防护](https://mp.weixin.qq.com/s/aaABXnxRqDF716qRk79wYQ)** — 安全：提示词注入、越狱和防御
- **[大模型绘画指南](https://mp.weixin.qq.com/s/bJbZ9bwPXxlpyREqLKhDvA)** — 使用结构化提示词的 AI 图像生成

### 社区中心

**[飞书知识库](http://feishu.langgpt.ai)** — 精选资源、模板和社区贡献

---

## 🎨 LangGPT 生态系统

### 核心框架与工具

| 项目 | 描述 | Stars |
|---------|-------------|-------|
| **[LangGPT](https://github.com/langgptai/LangGPT)** | 核心框架和方法论 | ![](https://badgen.net/github/stars/langgptai/LangGPT) |
| **[PromptVer](https://github.com/langgptai/PromptVer)** | 提示词的语义化版本控制 — 像 Git 一样的版本管理 | ![](https://badgen.net/github/stars/langgptai/PromptVer) |
| **[PromptShow](https://github.com/langgptai/PromptShow)** | 创建精美的提示词图片（[试试看](https://show.langgpt.ai/)） | ![](https://badgen.net/github/stars/langgptai/PromptShow) |
| **[Minstrel](https://github.com/langgptai/Minstrel)** | 自动生成提示词的多智能体系统 | ![](https://badgen.net/github/stars/langgptai/Minstrel) |

### 特定模型的提示词集合

针对不同 AI 模型的精选优化提示词：

| 集合 | 目标模型 | Stars |
|------------|--------------|-------|
| [wonderful-prompts](https://github.com/langgptai/wonderful-prompts) | ChatGPT（中文） | ![](https://badgen.net/github/stars/langgptai/wonderful-prompts) |
| [awesome-claude-prompts](https://github.com/langgptai/awesome-claude-prompts) | Anthropic Claude | ![](https://badgen.net/github/stars/langgptai/awesome-claude-prompts) |
| [awesome-deepseek-prompts](https://github.com/langgptai/awesome-deepseek-prompts) | DeepSeek & R1 | ![](https://badgen.net/github/stars/langgptai/awesome-deepseek-prompts) |
| [awesome-gemini-prompts](https://github.com/langgptai/awesome-gemini-prompts) | Google Gemini | ![](https://badgen.net/github/stars/langgptai/awesome-gemini-prompts) |
| [awesome-grok-prompts](https://github.com/langgptai/awesome-grok-prompts) | xAI Grok | ![](https://badgen.net/github/stars/langgptai/awesome-grok-prompts) |
| [qwen-prompts](https://github.com/langgptai/qwen-prompts) | 阿里巴巴通义千问 | ![](https://badgen.net/github/stars/langgptai/qwen-prompts) |
| [awesome-llama-prompts](https://github.com/langgptai/awesome-llama-prompts) | Meta Llama 2/3 | ![](https://badgen.net/github/stars/langgptai/awesome-llama-prompts) |
| [awesome-doubao-prompts](https://github.com/langgptai/awesome-doubao-prompts) | 字节跳动豆包 | ![](https://badgen.net/github/stars/langgptai/awesome-doubao-prompts) |
| [awesome-system-prompts](https://github.com/langgptai/awesome-system-prompts) | AI 工具的系统提示词 | ![](https://badgen.net/github/stars/langgptai/awesome-system-prompts) |

### 专业领域

| 仓库 | 专注领域 | Stars |
|------------|------------|-------|
| [Awesome-Multimodal-Prompts](https://github.com/langgptai/Awesome-Multimodal-Prompts) | GPT-4V、DALL-E 3、图像/视频提示词 | ![](https://badgen.net/github/stars/langgptai/Awesome-Multimodal-Prompts) |
| [deep-research-prompts](https://github.com/langgptai/deep-research-prompts) | 跨模型深度研究 | ![](https://badgen.net/github/stars/langgptai/deep-research-prompts) |
| [awesome-voice-prompts](https://github.com/langgptai/awesome-voice-prompts) | 语音 AI 和对话智能体 | ![](https://badgen.net/github/stars/langgptai/awesome-voice-prompts) |
| [GraphRAG-Prompts](https://github.com/langgptai/GraphRAG-Prompts) | 基于图的检索提示词 | ![](https://badgen.net/github/stars/langgptai/GraphRAG-Prompts) |
| [LLM-Jailbreaks](https://github.com/langgptai/LLM-Jailbreaks) | 安全研究与防御 | ![](https://badgen.net/github/stars/langgptai/LLM-Jailbreaks) |

### 应用

| 项目 | 描述 | Stars |
|---------|-------------|-------|
| [BookAI](https://github.com/langgptai/BookAI) | AI 驱动的图书生成 | ![](https://badgen.net/github/stars/langgptai/BookAI) |
| [AI-Resume](https://github.com/langgptai/AI-Resume) | 使用 Claude Artifacts 制作精美简历 | ![](https://badgen.net/github/stars/langgptai/AI-Resume) |

---

## 🛠️ 基于 LangGPT 构建的热门 GPTs

使用这些专业助手增强 ChatGPT：

| GPT | 用途 | 链接 |
|-----|---------|------|
| 🎯 **LangGPT Expert** | 自动生成结构化提示词 | [启动](https://chat.openai.com/g/g-Apzuylaqk-langgpt) |
| ✍️ **PromptGPT** | 专业提示词工程师 | [启动](https://chat.openai.com/g/g-YKe3gmydD-promptgpt) |
| 🧠 **SmartGPT-5** | 永不偷懒，始终勤奋的助手 | [启动](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5) |
| 💻 **Coding Expert** | 全面的编程助手 | [启动](https://chat.openai.com/g/g-ky06YjwaP-coding-expert) |
| 📊 **Data Table GPT** | 将混乱数据转换为整洁表格 | [启动](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt) |
| 🔥 **PytorchGPT** | PyTorch 代码专家 | [启动](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt) |
| 🎨 **LogoGPT** | 专业标志设计师 | [启动](https://chat.openai.com/g/g-wdz2JlUBv-logogpt) |
| 📄 **PDF Reader** | 深度文档分析与提取 | [启动](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader) |
| 🏅 **MathGPT** | 精确的数学问题求解器 | [启动](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt) |
| 📝 **WriteGPT** | 跨行业专业写作 | [启动](https://chat.openai.com/g/g-jwTMtRiL8-writegpt) |
| 🎙️ **时事热评员** | 时事评论员 | [启动](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan) |
| 🎀 **翻译大小姐** | 优雅的中文翻译 | [启动](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie) |

[发现 20+ 更多 GPTs →](https://github.com/langgptai/LangGPT#langgpt-gpts)

---

## 🤝 贡献

我们欢迎所有让 LangGPT 更好的贡献！

### 你可以如何帮助

1. ⭐ **点赞和分享** — 提高可见度，帮助他人发现 LangGPT
2. 📝 **提交示例** — 分享你用 LangGPT 构建的成功提示词
3. 🆕 **提出模板** — 创建超越 Role 结构的新模板
4. 📖 **改进文档** — 修正错别字、澄清说明、添加翻译
5. 💡 **建议功能** — 提出新功能的想法并开 issue
6. 🔧 **代码贡献** — 帮助构建工具、实用程序和集成

### 入门指南

不熟悉 GitHub 贡献？查看这个 [GitHub 最小贡献指南](https://github.com/datawhalechina/DOPMC/blob/main/GITHUB.md)

---

## 📊 Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=langgptai/LangGPT&type=Date)](https://star-history.com/#langgptai/LangGPT&Date)

---

## 📄 引用

如果你在研究或项目中使用 LangGPT，请引用：

```bibtex
@misc{wang2024langgpt,
      title={LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language}, 
      author={Ming Wang and Yuanzhong Liu and Xiaoming Zhang and Songlian Li and Yijie Huang and Chi Zhang and Daling Wang and Shi Feng and Jigang Li},
      year={2024},
      eprint={2402.16929},
      archivePrefix={arXiv},
      primaryClass={cs.SE}
}
```

---

## 🙏 致谢

LangGPT 受到以下优秀项目的启发：

- [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) — 结构化辅导提示词
- [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) — 自主 AI 智能体
- [SoM](https://github.com/SkalskiP/SoM) — Set of Mark 提示
- [yolov10](https://github.com/THU-MIG/yolov10) — 计算机视觉创新

### 使用 LangGPT 构建的项目

我们很自豪地看到 LangGPT 原则在实际应用中：
- **[Prompt Optimizer](https://github.com/linshenkx/prompt-optimizer)** — 利用 LangGPT 方法论的智能提示词优化工具
- **[securityGPT](https://github.com/rryuliu/securityGPT)** — 防止泄漏的安全提示词保护
- **[AIPainting-Structured-Prompts](https://github.com/zhutyler21/AIPainting-Structured-Prompts)** — AI 艺术生成的结构化提示词

---

## 📬 联系我们

### 作者

**云中江树**
- 📱 微信公众号：**「云中江树」**
- 💼 LangGPT 框架创建者
- 🎓 提示词工程研究者

### 社区

- 📚 [知识库](http://feishu.langgpt.ai) — 全面的文档
- 🐦 [Twitter/X](https://twitter.com/langgptai) — 最新更新
- 💬 [GitHub Discussions](https://github.com/langgptai) — 社区论坛
- 📧 邮箱：contact@langgpt.ai

---

<div align="center">

**[⬆ 返回顶部](#-langgpt--让每个人都能创建高质量提示词)**

由 [langgptai 社区](https://github.com/langgptai) 用 ❤️ 制作

*让每个人都成为提示词专家* 🚀

</div>