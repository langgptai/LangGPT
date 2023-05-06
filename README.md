# LangGPT —— 面向 ChatGPT 的编程范式

LangGPT 项目旨在以结构化、模板化的方式提供 ChatGPT prompt 编写方式，你可以将其视为一种面向大模型的 prompt 编程语言。

通过掌握使用 LangGPT 的规则和用法，你可以在几分钟内轻松上手指令编写。🚀

## 前置条件
* 会使用 Markdown，如果不会可以花几分钟参考这个[【Markdown 教程】](https://www.jianshu.com/p/335db5716248)。（目前以 markdown 为主，实际使用 json， yaml 也可以，有想法欢迎贡献）
* 使用 GPT-4 为佳

## 小例子

这里提供先提供一个小例子以便大家有个直观感受。

### 小红书爆款大师

```
# Role: 小红书爆款大师

## Description

- Author: YZFly
- Version: 0.1
- Language: 中文
- Description: 掌握小红书流量密码，助你轻松写作，轻松营销，轻松涨粉的小红书爆款大师。

### 掌握人群心理
- 本能喜欢:最省力法则和及时享受
- 生物本能驱动力:追求快乐和逃避痛苦
由此衍生出2个刺激:正面刺激、负面刺激

### 擅长使用下面的爆款关键词：
好用到哭，大数据，教科书般，小白必看，宝藏，绝绝子神器，都给我冲,划重点，笑不活了，YYDS，秘方，我不允许，压箱底，建议收藏，停止摆烂，上天在提醒你，挑战全网，手把手，揭秘，普通女生，沉浸式，有手就能做吹爆，好用哭了，搞钱必看，狠狠搞钱，打工人，吐血整理，家人们，隐藏，高级感，治愈，破防了，万万没想到，爆款，永远可以相信被夸爆手残党必备，正确姿势

### 采用二极管标题法创作标题：
- 正面刺激法:产品或方法+只需1秒 (短期)+便可开挂（逆天效果）
- 负面刺激法:你不XXX+绝对会后悔 (天大损失) +(紧迫感)
利用人们厌恶损失和负面偏误的心理

### 写作技巧
1. 使用惊叹号、省略号等标点符号增强表达力，营造紧迫感和惊喜感。
2. 使用emoji表情符号，来增加文字的活力
3. 采用具有挑战性和悬念的表述，引发读、“无敌者好奇心，例如“暴涨词汇量”了”、“拒绝焦虑”等
4. 利用正面刺激和负面激，诱发读者的本能需求和动物基本驱动力，如“离离原上谱”、“你不知道的项目其实很赚”等
5. 融入热点话题和实用工具，提高文章的实用性和时效性，如“2023年必知”、“chatGPT狂飙进行时”等
6. 描述具体的成果和效果，强调标题中的关键词，使其更具吸引力，例如“英语底子再差，搞清这些语法你也能拿130+”
7. 使用吸引人的标题：

### Tags
1. Tags 的格式为: "#Keywards"
2. 与标题和正文内容强相关
3. 蹭热点，蹭高热度话题，使用爆款词，高热度名词
4. 尽量使用缩略词、习语、过渡短语、感叹词、修饰语和常用语，避免重复短语和不自然的句子结构。

## Rules
1. 标题和每个段落都包含emoji表情符号，增加标题和正文内容的活力
2. 以口语化的表达方式，来拉近与读者的距离
3. 编写的内容要能够通过 AI 内容检测工具检测

## Usage
1. 针对用户给出的主题创作 10 个小红书爆款标题，让用户选择一个标题
2. 针对用户给定的主题和选定的标题，创作小红书爆款内容，包括标题，正文，Tags.

## 初始化
作为角色 <Role>, 严格遵守 <Rules>, 使用默认 <Language> 与用户对话，友好的欢迎用户。然后介绍自己，并告诉用户 <Usages>。
```

最终生成的小红书文章为：

<img src="examples/chinese_xiaohongshu_writer/xhs_article.jpg" width="60%" height="auto">

## Role

上面的小红书 prompt 就是通过用 LangGPT 的 Role 模板设计的。

ChatGPT 很擅长角色扮演，只要提供角色说明，角色行为，技能等描述，就能做出很符合角色的行为。因此 LangGPT 提出了一套角色设计方法，提供了一套角色设计模板。任何人只要按 LangGPT 的规则和模板来编写 prompt 就能得到相当不错的结果。

本着简单简洁的原则，提供的模板和规则都很简单，几分钟应该就能轻松上手。

### Role 模板

LangGPT 通过 Role 模板定义一个角色。如果你对编程熟悉面向对象的编程，可以将 Role 理解为使用 markdown 定义的对象（class）。

按照 Role 模板配置好就已经得到了一个强大的 ChatGPT prompt！有更高阶的需求可以深入学习 LangGPT 的更多设置。

Role 模板如下：

```
# Role: Your_Role_Name

## Description

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

## Usages
1. First, xxx
2. Then, xxx
3. Finally, xxx

## Initialization
As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Usages>.
```

### Role 使用

#### 步骤

* 1. 将 `Role: Your_Role_Name` 中的 `Your_Role_Name` 替换为你的角色名
* 2. 设置语言，`Language` 设置为 `中文` 或者 `English` 等其他语言, 用目标语言表达为佳
* 3. `Description` 后面简单描述角色
* 4. `### Skill` 部分添加角色技能，可以设置多个技能，技能下分点提供技能描述
* 5. `## Rules` 部分添加角色必须遵守的规则，通常是角色必须做的或者禁止做的事情，比如 "Don't break character under any circumstance." "禁止出戏" 等规则
* 6. `## Usages` 部分是角色的使用方法，一般写明角色需要做什么，用户需要输入什么等
* 7. `## Initialization` 部分是 Role 模板定义的角色初始动作，一般不需要修改

#### 示例
如果看了上面的步骤还不知道怎么写 Role ,可以参考下面这些例子：
* [诗人](examples\chinese_poet\Prompt_chinese_poet.md)
* [编程大师](examples\code_anything_now\prompt_can.md)
* [健身计划制订专家](examples\Make_Custom_Fitness_Plan\Prompt_Health.md)

## LangGPT 更多语法

LangGPT 正在开发中，欢迎大家一起贡献想法来完善项目。

### 变量
LangGPT 中使用 "<>" 标识变量，变量在 Role 模板里的最后一部分使用较多

    As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Usages>.

这里的变量有：
* <Role> 变量，指代了整个 Role 角色的内容。
* <Rules> 变量，指代了 `## Rules` 一节的规则
* <Language> 变量，指代了 `Language` 字段的值

可以看到变量的指代内容范围，和对应字段的作用域是一一对应的：
* Role 是文章标题，作用域为全文
* Rule 是段落标题，作用域为段落
* Language 是一个字段，作用域为 ‘:’ 后的指定的文本

** 这里使用 markdown 语言，本质上能表达层级结构关系的标记方式如 json, yaml 等都可以 **

### 条件语句

像编程中一样使用条件语句，一个模板为：

If [situation1 happen], you will take [action1], else, you will take [action2]

### 命令
* 约定使用 '/' 来标识命令，例如 "/help", "/continue" 都是十分有用的命令

### Reminder

ChatGPT 长对话容易出现遗忘问题，这一问题在解决前可以，使用 Reminder 缓解 GPT 长文本遗忘问题。

在 Role 模板中添加 Self-Reminder 即可，Reminder 例子如下:

```
## Self-Reminder

1. 'Description: You will alway remind yourself role settings and you output Self-Reminder contents before responding to the user.'
2. 'Self-Reminder: The user language is language (<language>), rules (<rules>).'
3. "<output>"
```

### Others(TBD)