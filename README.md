# 🚀 LangGPT — Empowering everyone to create high-quality prompts!
<div align=center>
<img src="imgs/logo.png" width="60%" height="auto">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![简体中文 badge](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Simplified%20Chinese-blue)](README_zh.md)
</div>

[【中文文档】](README_zh.md)

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

The LangGPT project aims to facilitate the seamless creation of high-quality ChatGPT prompts for everyone by utilizing a structured, template-based methodology. It can be viewed as a programming language specifically crafted for designing prompts for large language models.

Current prompt design methods tend to offer only a handful of tips and principles, without a systematic and adaptable perspective. LangGPT transforms the prompt design process by incorporating templates, variables, and commands, enabling prompt creation to be as intuitive and straightforward as object-oriented programming. LangGPT sets the stage for the large-scale, efficient production of high-quality prompts.

With a solid grasp of LangGPT, you'll be able to quickly and effortlessly begin creating prompts for large language models in just a few minutes. 🚀 No need to save so many prompts anymore!

> You can find out more details in the [paper](https://arxiv.org/abs/2402.16929). For Chinese version you can check:[中文版](Docs/【论文中文版】LangGPT：面向大模型的自然语言编程框架.pdf)

## 教程
| 更新内容 | 简介 | 更新日期 |
|-|-|-|
| [LangGPT 论文](https://arxiv.org/abs/2402.16929) | LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language, [中文版](Papers/LangGPT_paper_cn.md) | 2024.2.26 |
| [GPTs: LangGPT 提示词专家](https://chat.openai.com/gpts/editor/g-Apzuylaqk) | 自动化创建结构化提示词的GPTs | 2024.1.31 |
| [视频 01-BiliBili 视频教程](https://www.bilibili.com/video/BV1rj411q78a) | B 站 UP 主 AIGCLINK 制作的 LangGPT 视频教程！感谢 AIGCLINK！ | 2023.9.03 |
| [文章 01-系统论述:构建高性能 Prompt 之路——结构化 Prompt](Docs/HowToWritestructuredPrompts.md) | 关于结构化提示词看这篇就够了！ | 2023.7.30 |
| [文章 02-Prompt 进阶 —— 提示链(Prompt Chain)和多提示词协同](Docs/PromptChain.md) | Prompt Chain 和 Prompt 协同，任务拆解等， LangGPT 社区联署联创文章. | 2023.8.31 |
| [知识库 01-LangGPT 提示词知识库](http://feishu.langgpt.ai) | LangGPT 提示词社区收集整理的提示词资料. | 2023.9.03 |

## Quick Start

You can begin utilizing LangGPT for crafting potent prompts by simply continue the shared chat using GPT-4. This tool will empower you to craft, or adeptly transform traditional prompts into powerful LangGPT prompts.

* [LangGPT GPTs](https://chat.openai.com/g/g-Apzuylaqk-langgpt)  GPTs for LangGPT
* [LangGPT Helper **For GPT-3.5**](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)

You can find the corresponding Prompt in the `LangGPT` folder. Note that the prompt is still in developing.



## Prerequisites
* Markdown. If you're not familiar with it, you can refer to this [Markdown Tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). (JSON, YAML, and other formats are also acceptable; contributions are welcome)
* GPT-4 (preferred) or Claude.

## Getting Started

Here, we provide a small `FitnessGPT` example to help you quickly get started with LangGPT. LangGPT offers prompt-writing templates, which you can use to rapidly create high-quality prompts.

```
# Role: FitnessGPT

## Profile

- Author: YZFly
- Version: 0.1
- Language: English
- Description: You are a highly renowned health and nutrition expert FitnessGPT. Take the following information about me and create a custom diet and exercise plan. 

### Create custom diet and exercise plan
1. Take the following information about me
2. I am #Age years old, #Gender, #Height. 
3. My current weight is #Currentweight. 
4. My current medical conditions are #MedicalConditions. 
5. I have food allergies to #FoodAllergies. 
6. My primary fitness and health goals are #PrimaryFitnessHealthGoals. 
7. I can commit to working out #HowManyDaysCanYouWorkoutEachWeek days per week. 
8. I prefer and enjoy his type of workout #ExercisePreference. 
9. I have a diet preference #DietPreference. 
10. I want to have #HowManyMealsPerDay Meals and #HowManySnacksPerDay Snacks. 
11. I dislike eating and cannot eat #ListFoodsYouDislike. 

## Rules
1. Don't break character under any circumstance. 
2. Avoid any superfluous pre and post descriptive text.

## Workflow
1. You will analysis the given the personal information.
2. Create a summary of my diet and exercise plan. 
3. Create a detailed workout program for my exercise plan. 
4. Create a detailed Meal Plan for my diet. 
5. Create a detailed Grocery List for my diet that includes quantity of each item.
6. Include a list of 30 motivational quotes that will keep me inspired towards my goals.

## Initialization
As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Workflow>.
```
With the help of prompt above, you will create a Role named FitnessGPT, he/her will help you design wonderful personal diet and exercise plan.

### More Examples
Here are more [LangGPT prompts](examples/prompts_en.md). The `examples` folder contains LangGPT prompt examples, including prompts and complete conversations with ChatGPT, to help you create wonderful prompt.

* [Code Master CAN](examples/code_anything_now/ChatGPT-Code_Anything_Now_en.md)
* [Xiaohongshu Hit Generator](examples/chinese_xiaohongshu_writer/ChatGPT-Xiaohongshu_Hit_Generator_Conversation.md)
* [Chinese Poet](examples/chinese_poet/ChatGPT-chinese_poet.md)

## Role 

ChatGPT excels at role-playing. By providing role descriptions, role behaviors, and skills, it can produce actions that align well with the role.

Therefore, LangGPT designed the Role template to help ChatGPT better understand user intentions. The Role template is the core of LangGPT.

### Role Template

Here is the markdown Role template:
```
# Role: Your_Role_Name

## Profile

- Author: YZFly
- Version: 1.0
- Language: English or 中文 or Other language
- Description: Describe your role. Give an overview of the role's characteristics and skills

### Skill-1
1.skill description 1
2.skill description 2

### Skill-2
1.skill description 1
2.skill description 2

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

The `Role template` primarily consists of four sections:

* `Profile`: The role's resume, including role description, characteristics, skills, and any other desired traits.
* `Rules`: Rules the role must follow, usually involving actions they must take or avoid, such as "Never break role" and so on.
* `Workflow`: The role's workflow, detailing the type of input users should provide and how the role should respond.
* `Initialization`: Initializing the role according to the Role template's configuration, with most cases requiring only the default content.

A role can be defined and configured using the four sections defined above.

Additionally, if you need to create complex prompts with commands, reminder, and other features, simply add the corresponding sections, as demonstrated in the advanced usage section.

### Steps to Use the Role Template

1. Set the role name: Replace `Your_Role_Name` in `Role: Your_Role_Name` with your desired role name.
2. Write the role's resume in the `# Profile` section:
   * Set the language by specifying `Language` as `中文`, `English`, or any other language, using the target language for expression.
   * Briefly describe the role after `Description`.
   * Add role skills under the `### Skill` section. You can set multiple skills with bulleted descriptions for each skill.
3. Establish rules under `## Rules`: Add rules that the role must follow, typically covering required or prohibited actions, such as "Don't break role under any circumstance," etc.
4. Define the workflow under `## Workflow`: Explain how the role should interact with users, the input users should provide, and how the role should respond.
5. Initialize the role under `## Initialization`: The Role template sets up the role based on the template content, typically without modifications needed.
6. Copy the completed Role template content into the ChatGPT conversation box (or API) and enjoy!

## Advanced Usage

As people continue to explore the capabilities of large models, LangGPT is still under development and refinement. Everyone is welcome to contribute to the LangGPT project, making it easier to use large models.

### Variables

**Variables offer significant versatility in prompt writing, simplifying the process of referencing role content, setting, and modifying role attributes.**

This is an aspect that traditional prompt methods often find challenging to execute.

The `Initialization` part of the Role template makes extensive use of variables:

    As a/an <Role>, you must follow the <Rules>, you must talk to the user in the default <Language>, you must greet the user. Then introduce yourself and introduce the <Workflow>.

In LangGPT, variables are denoted by "<>". The variables here are:
* `<Role>` variable, representing the content of the entire Role.
* `<Rules>` variable, representing the rules in the `## Rules` section.
* `<Language>` variable, representing the value of the `Language` field.

Markdown's hierarchical structure allows ChatGPT to easily identify the content represented by variables:
* Role is the article title, with a scope covering the entire text.
* Rule is a paragraph title, with a scope limited to the paragraph.
* Language is a field with a scope limited to the text specified after the colon.

### Commands

`Commands` make it easy to set some default actions, such as `"/help" to provide help documentation, "/continue" to continue writing text` etc. which are all very useful commands.

* Use '/' as the convention to indicate commands.
* Add the following content to the Role template:
```
## Commands
- Prefix: "/"
- Commands:
    - help: This means that user do not know the commands usage. Please introduce yourself and the commands usage.
    - continue: This means that your output was cut. Please continue where you left off.
```

### Reminder

Using a `Reminder` can help alleviate ChatGPT's forgetting issue.

Add a `Reminder` to the Role template:

```
## Reminder

1. 'Description: You will always remind yourself role settings and you output Reminder contents before responding to the user.'
2. 'Reminder: The user language is language (<language>), rules (<rules>).'
3. "<output>"
```

### Conditional Statements

Use conditional statements just like in programming, with a template like:

If [situation1 happen], you will take [action1], else, you will take [action2]

### Json or Yaml for Convenient Program Development

**Although LangGPT currently employs markdown language, any markup method capable of expressing hierarchical relationships, such as JSON or YAML, can also be utilized.**

Maybe ChatGPT could assist in creating a conversion script?

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

## 🤝 Partnership

* [securityGPT](https://github.com/rryuliu/securityGPT) Protect your GPTs through secure prompts to prevent malicious data leaks.
* [AIPainting-Structured-Prompts](https://github.com/zhutyler21/AIPainting-Structured-Prompts) 结构化生成 AI绘画创作的Prompt，适用于DALLE和MidJourney等多平台。

## 🤩 Development Plan

The project is currently in its early and primitive stages, with a significant workload. We wholeheartedly welcome interested and skilled individuals to join and contribute to the project! 🆘

| Task | Description | Status |
| --- | --- | --- |
| Role Basic Template | Basic Prompt role design template, encompassing a majority of use cases | ✅ |
| Documentation and Usage | Fundamentals of documentation, usage, and simple examples | ✅ |
| Advanced Syntax Features | Develop more advanced syntax features alongside improvements in large model capabilities, such as longer context lengths, better long-term memory, and plugins | 📆 🆘|
| Prompt Chain | Collaboration between multi-role and prompt chains | 📆 🆘|
| Support for JSON/YAML | Support for JSON, YAML, and other markup formats to streamline development | 🔜 🆘|
| Role Advanced Template | Build upon the basic template by incorporating commands, environment settings, plugin functionality, network control, and other advanced features | 🔜 🆘|
| Examples | Supply more LangGPT template-based prompt examples and comprehensive conversation usage | ✅|
| Documentation | Enhance documentation and perfect usage | ✅|
| Website | Display documentation and examples for easy access | 📆 🆘|

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yzfly/LangGPT&type=Date)](https://star-history.com/#yzfly/LangGPT&Date)

## Contribution Guidelines

1. Please feel free to share and promote the LangGPT project, enabling more people to create better prompts and expand the project's influence!
2. We encourage the development of interesting Prompts using the LangGPT Role template and invite submissions of high-quality examples!
3. Contributions beyond the Role template, such as additional templates, are welcomed!
4. Help enhance project documentation by correcting typos, grammar errors, and more!
5. Assist in building the project website for better accessibility!
6. Offer access to ChatGPT plugin capabilities for development testing purposes!
7. We appreciate any and all contributions that positively impact the LangGPT project!


If you are not familiar with using GitHub, you can refer to:
[GitHub Minimal Contribution Guide: Issue and PR](https://github.com/datawhalechina/DOPMC/blob/main/GITHUB.md)

## Citation
If you used or referenced this project, please cite it in the following format:

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

## Acknowledgments
Following projects provided great prompts, which inspired the creation of LangGPT:

* [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) 
* [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) 
* [SoM](https://github.com/SkalskiP/SoM)
* [yolov10](https://github.com/THU-MIG/yolov10)