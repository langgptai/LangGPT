# LangGPT —— 人人都可编写高质量 Prompt 😀

<div align=center>
<img src="imgs/logo.png" width="60%" height="auto">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![简体中文 badge](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Simplified%20Chinese-blue)](README_zh.md)
</div>

🚀 LangGPT —— 人人都能写出高质量提示词!

LangGPT 项目旨在以结构化、模板化的方式编写高质量 ChatGPT prompt，你可以将其视为一种面向大模型的 prompt 编程语言。

* [**2024.06.10 更新**]：[多模态提示词与智能体](https://mp.weixin.qq.com/s/Aan9NXO_vEZ9h0YrugpoGQ) 

* [**2024.04.22 更新**]：[PromptShow 上线|轻松展示分享你的结构化提示词](https://show.langgpt.ai/) 欢迎访问 https://show.langgpt.ai/ 试用

* [**2024.04.13 更新**]：[提示词工程师必看系列：如何写好Prompt？](https://mp.weixin.qq.com/s/I2KfZt83c_7RmDNcDAuzCA)

* [**2024.04.03 更新**]：[如何让 LLM 应用性能登峰造极](https://mp.weixin.qq.com/s/Kr16ub_FN6pTF6acs-e6MA)
* [**2024.01.31 更新**]：[GPTs: LangGPT 提示词专家](https://chat.openai.com/gpts/editor/g-Apzuylaqk) 自动化创建结构化提示词的简易版 GPTs, 持续更新中
* [**2024.01.14 更新**]：[年度分享：“AI 交流的艺术：Prompt Engineering 2023 年度视角”](Docs/PromptAnnualReview.md)
* [**2023.12.20 更新**]：[【创业邦采访】欢迎来到提示词的美丽新世界](https://mp.weixin.qq.com/s/umWT_79m7MpohfrKdlqUiw)
  
* [**2023.10.31 更新**]：[AI 超级个体见面会分享发言稿](Docs/AgentsResume.md) 和 [PPT](Docs/PPT_Agents_LangGPT.pdf), 模板增加 tools 模块

* [**2023.9.03 更新**]：[BiliBili 视频教程（感谢 AIGCLINK）](https://www.bilibili.com/video/BV1rj411q78a)
  
* [**2023.8.31 更新**]：[Prompt 进阶 —— 提示链（Prompt Chain）和多提示词协同](Docs/PromptChain.md)

* [**2023.7.30 更新**]：[系统论述：构建高性能 Prompt 之路——结构化 Prompt](Docs/HowToWritestructuredPrompts.md)

相关项目：[ChatGPT 中文指南 🔥](https://github.com/yzfly/awesome-chatgpt-zh)

现有 Prompt 创建方法有如下缺点：
* 缺乏系统性：大多是细碎的规则，技巧，严重依赖个人经验
* 缺乏灵活性：对他人分享的优质 prompt 进行调整需要直接修改 prompt 内容
* 缺乏交互友好性：优质 prompt 的配置和使用太复杂，有时往往还要学习 prompt 用法
* 未充分结合大语言模型的特性：
  * 偏好分点、条理性叙述
  * 长对话会出现遗忘问题
  * 不同语言间性能存在差距

LangGPT 指在解决上面的问题：
* 系统性：提供`模板`，按照模板填鸭式写上相应内容即可
* 灵活性：
  * 使用`变量`，轻松引用、设置和更改 prompt 中的内容，可编程性好
  * 使用`命令`，轻松设置、执行预定义行为，可以**无损性能情况下轻松设置中英文切换**
* 交互友好：`Workflow` 轻松定义与用户交互，角色行为等，轻松引导用户使用
* 充分利用大模型能力：
  * 模块化配置
  * 分点条理性叙述
  * `Reminder` 缓解长期记忆缺失问题

通过掌握使用 LangGPT，你可以在几分钟内轻松上手大模型指令编写。🚀

> 你可以在[论文](https://arxiv.org/abs/2402.16929)中了解更多细节。LangGPT论文的[中文版](Docs/【论文中文版】LangGPT：面向大模型的自然语言编程框架.pdf)也已经上传。

## 教程
| 更新内容 | 简介 | 更新日期 |
|-|-|-|
| [LangGPT 论文](https://arxiv.org/abs/2402.16929) | LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language, [中文版](Papers/LangGPT_paper_cn.md) | 2024.2.26 |
| [GPTs: LangGPT 提示词专家](https://chat.openai.com/gpts/editor/g-Apzuylaqk) | 自动化创建结构化提示词的GPTs | 2024.1.31 |
| [视频 01-BiliBili 视频教程](https://www.bilibili.com/video/BV1rj411q78a) | B 站 UP 主 AIGCLINK 制作的 LangGPT 视频教程！感谢 AIGCLINK！ | 2023.9.03 |
| [文章 01-系统论述:构建高性能 Prompt 之路——结构化 Prompt](Docs/HowToWritestructuredPrompts.md) | 关于结构化提示词看这篇就够了！ | 2023.7.30 |
| [文章 02-Prompt 进阶 —— 提示链(Prompt Chain)和多提示词协同](Docs/PromptChain.md) | Prompt Chain 和 Prompt 协同，任务拆解等， LangGPT 社区联署联创文章. | 2023.8.31 |
| [知识库 01-LangGPT 提示词知识库](http://feishu.langgpt.ai) | LangGPT 提示词社区收集整理的提示词资料. | 2023.9.03 |

## 立即使用
你可以直接使用 LangGPT 助手咒语开始使用 LangGPT 编写咒语。
它可以帮助你快速创建强大的咒语，你也可以将它用来把一般咒语转换为 LangGPT 咒语。
（打开下面链接，并点击 `Continue this conversation`，描述你想创建的 prompt 即可）

* [LangGPT](https://chat.openai.com/g/g-Apzuylaqk-langgpt)  结构化提示词 LangGPT 的 GPTs 版本.
* [用于 ChatGPT-4 的 LangGPT助手](https://chat.openai.com/share/e63f35d6-16d5-4f4b-b4fe-46eb19a75c19) 
* [用于 ChatGPT-3.5 的 LangGPT助手](https://chat.openai.com/g/g-YKe3gmydD-promptgpt) 

你可以在 `LangGPT` 文件夹中找到相应的 Prompt. 请注意，版本仍然在迭代中。


## 前置条件
* Markdown，不会可参考[【Markdown 教程】](https://www.jianshu.com/p/335db5716248)。（实际使用 json， yaml 等格式也可以，有想法欢迎贡献）
*  GPT-4 (最佳) 或者 Claude.

## 快速上手

这里提供先提供一个小例子以便大家快速上手 LangGPT。LangGPT 提供了 Prompt 编写模板，套用模板即可快速编写高质量 Prompts。

### 诗人

```
# Role: 诗人

## Profile

- Author: YZFly
- Version: 1.0
- Language: 中文
- Description: 诗人是创作诗歌的艺术家，擅长通过诗歌来表达情感、描绘景象、讲述故事，具有丰富的想象力和对文字的独特驾驭能力。诗人创作的作品可以是纪事性的，描述人物或故事，如荷马的史诗；也可以是比喻性的，隐含多种解读的可能，如但丁的《神曲》、歌德的《浮士德》。

### 擅长写现代诗:
1. 现代诗形式自由，意涵丰富，意象经营重于修辞运用，是心灵的映现
2. 更加强调自由开放和直率陈述与进行“可感与不可感之间”的沟通。

### 擅长写七言律诗
1. 七言体是古代诗歌体裁
2. 全篇每句七字或以七字句为主的诗体
3. 它起于汉族民间歌谣

### 擅长写五言诗
1. 全篇由五字句构成的诗
2. 能够更灵活细致地抒情和叙事
3. 在音节上，奇偶相配，富于音乐美

## Rules
1. 内容健康，积极向上
2. 七言律诗和五言诗要押韵

## Workflow
1. 让用户以 "形式：[], 主题：[]" 的方式指定诗歌形式，主题。
2. 针对用户给定的主题，创作诗歌，包括题目和诗句。

## Initialization
作为角色 <Role>, 严格遵守 <Rules>, 使用默认 <Language> 与用户对话，友好的欢迎用户。然后介绍自己，并告诉用户 <Workflow>。
```

效果图：

<img src="examples/chinese_poet/write_poetry.jpg" width="60%" height="auto">

### 更多例子
上面的诗人 Prompt 就是通过用 LangGPT 的 Role 模板设计的。 `examples` 文件夹下提供了更多例子，包括 Prompt 以及和 ChatGPT 的完整对话，帮助你更好的上手使用 LangGPT。

* [小红书爆款生成器](examples/chinese_xiaohongshu_writer/ChatGPT-小红书爆款生成器对话.md)
* [编程大师 CAN](examples/code_anything_now/ChatGPT-CAN_zh.md)
* [健身计划制订专家](examples/Make_Custom_Fitness_Plan/ChatGPT-Custom_Fitness_Plan.md)

* [本项目收录的 LangGPT Prompt](examples/prompts_zh.md)
* [更多 LangGPT 风格的 prompt](https://github.com/lijigang/prompts)

## Role 模板
上面的例子都是使用 Role 模板编写的， Role 模板是 LangGPT 的核心。

ChatGPT 很擅长角色扮演，只要提供角色说明，角色行为，技能等描述，就能做出很符合角色的行为。

因此 LangGPT 设计了 Role 模板让 ChatGPT 更好的理解用户意图，并相应提供了一套角色设计方法。

### Role 模板

下面是用 markdown展示的 Role 模板：

```
# Role: Your_Role_Name

## Profile

- Author: YZFly
- Version: 0.1
- Language: English or 中文 or Other language
- Description: Describe your role. Give an overview of the character's characteristics and skills

### Skill-1
1.技能描述1
2.技能描述2

### Skill-2
1.技能描述1
2.技能描述2

## Rules
1. Don't break character under any circumstance.
2. Don't talk nonsense and make up facts.

## Workflow
1. First, xxx
2. Then, xxx
3. Finally, xxx

## Tools

### browser
You have the tool `browser` with these functions:
- Issues a query to a search engine and displays the results.
- Opens the webpage with the given id, displaying it.
- Returns to the previous page and displays it.
- Scrolls up or down in the open webpage by the given amount.
- Opens the given URL and displays it.
- Stores a text span from an open webpage. Specifies a text span by a starting int `line_start` and an (inclusive) ending int `line_end`. To quote a single line, use `line_start` = `line_end`.

### python

When you send a message containing Python code to python, it will be executed in a 
stateful Jupyter notebook environment. python will respond with the output of the execution or time out after 60.0
seconds. The drive at '/mnt/data' can be used to save and persist user files. Internet access for this session is disabled. Do not make external web requests or API calls as they will fail.

### dalle

Whenever a description of an image is given, use dalle to create the images and then summarize the prompts used to generate the images in plain text. If the user does not ask for a specific number of images, default to creating four captions to send to dalle that are written to be as diverse as possible.

### More Tools

## Initialization
As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Workflow>.
```

Role 模板主要包含四部分内容:

* `Profile` 角色的简历: 角色描述，角色特点，角色技能以及你想要的其他角色特性。
* `Rules` 角色必须遵守的规则，通常是角色必须做的或者禁止做的事情，比如 "不许打破角色设定" 等规则。
* `Workflow` 角色的工作流，需要用户提供怎样的输入，角色如何响应用户。
* `Initialization` 按照 Role 模板的配置初始化角色，大部分时候使用模板默认内容即可

Role 模板通过上面四个部分内容即可定义和配置一个角色。

同时如需要加入指令，记忆等功能编写复杂的 prompt，只需添加相应的段落即可，可参考高级用法部分。

### Role 模板使用步骤

1. 设置角色名：将 `Role: Your_Role_Name` 中的 `Your_Role_Name` 替换为你的角色名
2. 编写角色简历 `# Profile`：
   * 设置语言，`Language` 设置为 `中文` 或者 `English` 等其他语言, 用目标语言表达为佳
   * `Description` 后面简单描述角色
   * `### Skill` 部分添加角色技能，可以设置多个技能，技能下分点提供技能描述
3. 设定规则`## Rules` ：添加角色必须遵守的规则，通常是角色必须做的或者禁止做的事情，比如 "Don't break character under any circumstance." "禁止出戏" 等规则
4. 设定工作流`## Workflow`：角色如何与用户交互，需要用户提供怎样的输入，角色如何响应用户。
5. 初始化角色`## Initialization`：Role 模板依据模板内容对角色进行设定，一般不需要修改。
6. 将编写好的 Role 模板内容复制到 ChatGPT 对话框（or API）愉快使用~

## 更多模板
1. 项目 `LangGPT/emplates` 文件夹下提供了更多 Prompt 模板用于参考。
2. 你也可以借鉴结构化的思想在 LangGPT 提供的模板基础上自行添加、删除、修改得到自己的 Prompt。

## 高级用法

人们对大模型的能力还在探索过程中，因此 LangGPT 也还在开发完善中，欢迎大家一起共建 LangGPT 项目，降低大模型使用门槛！

### 变量

**变量为 Prompt 的编写带来了很大的灵活性。使用变量可以方便的引用角色内容，设置和更改角色属性。**

这是一般的 prompt 方法较难实现的。

Role 模板里的`Initialization`部分则大量使用的了变量：

    As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Workflow>.

LangGPT 中使用 "<>" 标识变量，这里的变量有：
* `<Role>` 变量，指代了整个 Role 角色的内容。
* `<Rules>` 变量，指代了 `## Rules` 一节的规则
* `<Language>` 变量，指代了 `Language` 字段的值

Markdown 的层级结构可以让 ChatGPT 很方便的识别变量所代表的内容：
* Role 是文章标题，作用域为全文
* Rule 是段落标题，作用域为段落
* Language 是一个字段，作用域为 ‘:’ 后的指定的文本

### 命令

使用命令可以方便的设置一些默认动作，例如` "/help" 提供帮助文档, "/continue" 续写文本` 等都是十分有用的命令

* 约定使用 '/' 来标识命令
* 在 Role 模板添加下面内容即可
```
## Commands
- Prefix: "/"
- Commands:
    - help: This means that user do not know the commands usage. Please introduce yourself and the commands usage.
    - continue: This means that your output was cut. Please continue where you left off.
```
### Reminder

使用 Reminder 可以缓解 ChatGPT 的遗忘问题。

在 Role 模板中添加 Reminder 即可:

```
## Reminder

1. 'Description: You will always remind yourself role settings and you output Reminder contents before responding to the user.'
2. 'Reminder: The user language is language (<language>), rules (<rules>).'
3. "<output>"
```

### 条件语句

像编程中一样使用条件语句，一个模板为：

If [situation1 happen], you will take [action1], else, you will take [action2]

### Json or Yaml 方便程序开发

**LangGPT 目前使用 markdown 语言，本质上能表达层级结构关系的标记方式如 json, yaml 等都可以**

也许可以让 ChatGPT 帮忙写个转换脚本？

## LangGPT GPTs
|GPTs|点击开玩|介绍|
|---|---|---|
|[LangGPT 提示词专家✍️](https://chat.openai.com/g/g-Apzuylaqk-langgpt)|[点击开玩](https://chat.openai.com/g/g-Apzuylaqk-langgpt)| 结构化提示词 GPTs 全量官方版本！🎯📚 简单一键，即可生成有条理的提示词，提升你的写作和创作效率！🔍✨|
|[PromptGPT✍️](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)|[点击开玩](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)| 结构化提示词lite版，年薪百万的大厂提示词工程师帮你写高质量提示词，快上车体验驾驭大模型的爽感！|
|[SmartGPT-5🧠](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5)|[点击开玩](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5)| 永不变懒，聪明勤奋的GPT！提前体验 GPT-5 的爽感！|
|[中文演讲标题大师🌈](https://chat.openai.com/g/g-zQsF8X4SY-zhong-wen-yan-jiang-biao-ti-da-shi)|[点击开玩](https://chat.openai.com/g/g-zQsF8X4SY-zhong-wen-yan-jiang-biao-ti-da-shi)| 想要完美的中文演讲标题？演讲标题大师来帮忙！🚀 提供10个精准、吸引人的标题，让您的演讲内容大放异彩！🌈！|
|[MathGPT🏅](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt)|[点击开玩](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt)| 解题能力又强又准的数学专家！🤓📚 将问题转化为方程并解决它们。你的数学伙伴来帮你做作业！🏅✏️！|
|[PPT Maker🎨](https://chat.openai.com/g/g-wko0Ifhjv-ppt-maker)|[点击开玩](https://chat.openai.com/g/g-wko0Ifhjv-ppt-maker)| PPT大师，帮你制作有内容的 PPT 🚀 它浏览网页以获取内容，概述您的PPT，并使用前沿内容填充幻灯片。🖥️✨|
|[WriteGPT✍️](https://chat.openai.com/g/g-jwTMtRiL8-writegpt)|[点击开玩](https://chat.openai.com/g/g-jwTMtRiL8-writegpt)| WriteGPT：专业写作专家！📝🚀 专业为任何行业制作高质量的文书。📈📚|
|[LogoGPT🎨](https://chat.openai.com/g/g-wdz2JlUBv-logogpt)|[点击开玩](https://chat.openai.com/g/g-wdz2JlUBv-logogpt)| 使用LogoGPT创建漂亮的Logo！🖌️ |
|[Data Table GPT📊](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt)|[点击开玩](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt)| 复制并粘贴您的杂乱数据！将杂乱的数据转换为整洁的数据表。📁✨|
|[Coding Expert👨‍💻](https://chat.openai.com/g/g-ky06YjwaP-coding-expert)|[点击开玩](https://chat.openai.com/g/g-ky06YjwaP-coding-expert)| 编程专家，轻松解决你的所有编码难题！🛠️💻！|
|[PDF Reader🧐](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader)|[点击开玩](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader)| PDF阅读器：深入文档！帮助你结构化高效阅读文档。📋👁️！|
|[Research Paper Reading📚](https://chat.openai.com/g/g-GLDYZOeQI-research-paper-reading)|[点击开玩](https://chat.openai.com/g/g-GLDYZOeQI-research-paper-reading)| 研究论文阅读助手：遵循阅读三步法来帮助你掌握学术论文。️📈📚！|
|[EmojiGPT🌈](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)|[点击开玩](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)| 将文本转换为表情符号艺术！💌💥！|
|[Travel Planning📅](https://chat.openai.com/g/g-mO2OuYxhX-travel-planning)|[点击开玩](https://chat.openai.com/g/g-mO2OuYxhX-travel-planning)| 旅行规划助理：您的旅程设计师！为您量身定制的个性化行程，让您的每一次旅行都令人难忘。️🌍🗺️🏖️！|
|[Picture Creator🎨](https://chat.openai.com/g/g-1Gm9C3UBT-picture-creator)|[点击开玩](https://chat.openai.com/g/g-1Gm9C3UBT-picture-creator)| 漂亮手办娃娃生成：释放你的想象力！为风格化的图像生成详细的、很酷的提示。🔥👾！|
|[LinuxGPT🐧](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)|[点击开玩](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)| LinuxGPT：释放Linux的力量！专注于bash脚本和命令行操作。提升您的linux技术！🚀👨‍💻！|
|[PytorchGPT🔥](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt)|[点击开玩](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt)| PytorchGPT：你的PyTorch代码耳语者！🤖🔥 熟练地制作和解释PyTorch模型代码，从简单的网络到复杂的架构。🧠💻！|
|[🎀翻译大小姐](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie)|[点击开玩](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie)| 来自刚哥的信达雅翻译，年薪百万的翻译小姐姐为你打工！最棒的中文翻译，信达雅，超级地道优雅的中文表达！|
|[时事热评员🎙️](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan)|[点击开玩](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan)|热评员：意见领袖！🎤💡 为您的主题提供深刻见解和热评，帮助您洞察核心价值！🌐🔖|
|[AI算法工程师](https://chat.openai.com/g/g-oCwXYY0x2-ai-gpt)|[点击开玩](https://chat.openai.com/g/g-oCwXYY0x2-ai-gpt)|AI 设计 AI|
|[StableAudioGPT](https://chat.openai.com/g/g-jAr0hpLsL-stableaudiogpt)|[点击开玩](https://chat.openai.com/g/g-jAr0hpLsL-stableaudiogpt)|Stable Audio 提示词生成|
|[🛠️AutoGPT(coding)](https://chat.openai.com/g/g-n3SaHyp2N-autogpt-coding)|[点击开玩](https://chat.openai.com/g/g-n3SaHyp2N-autogpt-coding)|AutoGPT👨‍💻，自动运行📈，输出超长，一键完成项目框架构建！🖲️|

## 🤝 伙伴项目

* [securityGPT](https://github.com/rryuliu/securityGPT) 通过安全 Prompt 保护你的 GPTs ，避免内容被恶意泄露
* [AIPainting-Structured-Prompts](https://github.com/zhutyler21/AIPainting-Structured-Prompts) 结构化生成 AI绘画创作的Prompt，适用于DALLE和MidJourney等多平台。

## 🤩 开发计划

目前项目还处于比较原始初级阶段，工作十分繁重，十分欢迎有兴趣有能力的同学参与项目！🆘

| 任务 | 描述 | 状态 |
| --- | --- | --- |
| Role 基础模板 | Prompt 角色设计基础模板，能覆盖大部分使用场景 | ✅ |
| 示例 | 提供更多 LangGPT 模板开发的 prompt 示例，并提供完整对话用法 | ✅|
| 文档和用法 | 基础的文档，用法和简单示例 | ✅ |
| 高级语法特性 | 随着大模型能力提升，如更长的上下文长度，更好的长期记忆，插件，开发更高级语法特性 | 📆 🆘|
| Prompt Chain | 多 Role 协同，Prompt Chain 协同 | 📆 🆘|
| 支持 Json/Yaml | 支持 Json,Yaml 等标记格式，方便编程开发 | 🔜 🆘|
| Role 进阶模板 | 在基础模板上增进指令，环境设置，插件功能，联网控制等高级功能 | 🔜 🆘|
| 网站 | 使用文档，案例展示 | 📆 🆘|


## 贡献指南

1. 欢迎转发、分享 LangGPT 项目，让更多人能编写更好的 prompt，同时扩大 LangGPT 项目的影响力！
2. 欢迎使用 LangGPT 的 Role 模板开发有趣的 Prompt，欢迎提交优质案例！
3. 欢迎贡献 Role 模板之外的更多模板！
4. 欢迎完善项目文档，改正字词、语法错误等！
5. 欢迎帮忙建设项目网站！
6. 欢迎提供可使用的 ChatGPT 插件能力的账号用于开发测试！
7. 欢迎一切对 LangGPT 项目有益的行为！

如果你不太熟悉 GitHub 使用可以参考：
[GitHub 极简贡献指南: Issue and PR](https://github.com/datawhalechina/DOPMC/blob/main/GITHUB.md)

## 交流

### 微信公众号

欢迎关注我的微信公众号，不过微信内容限制比较多，禁止外链以及内容审核等，所以会随缘发一些内容，欢迎关注~

![wx_gh](https://raw.githubusercontent.com/yzfly/awesome-chatgpt-zh/main/imgs/qrcode_for_wx_gh.jpg)

### 微信群

<img src="https://raw.githubusercontent.com/yzfly/wonderful-prompts/main/imgs/wx_tmp.jpg" width="200px">

若群满无法加入，添加我的微信 zephyr_ai，说明来意我邀请你进群。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yzfly/LangGPT&type=Date)](https://star-history.com/#yzfly/LangGPT&Date)

## 引用
如果您使用或参考了本项目，请按如下格式引用：

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

## 致谢
下列项目提供了很棒的 prompt，激发了本项目的灵感！
* [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) 
* [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) 
* [SoM](https://github.com/SkalskiP/SoM)
* [yolov10](https://github.com/THU-MIG/yolov10)