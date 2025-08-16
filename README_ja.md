# 🚀 LangGPT — 誰でも高品質なプロンプトを作成できるように！

<div align=center>
<img src="imgs/logo.png" width="60%" height="auto">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![简体中文 badge](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Simplified%20Chinese-blue)](README_zh.md)
</div>

[【中文文档】](README_zh.md)

* [**2024.12.13 更新**]: [プロンプトの道と術](https://langgptai.feishu.cn/wiki/AYMWwBPaSih46WkAo9jcfKkfntg) 中国プロンプトエンジニア大会で、中国のプロンプト伝道師である李継刚氏が自身のプロンプト作成の経験を共有しました。

* [**2024.12.13 更新**]: [デモから商用へ — エンタープライズレベルのプロンプトエンジニアリングの構築、AIアプリケーションの商用展開を加速](https://langgptai.feishu.cn/wiki/UTyswvusTiRw0TkZLI5cIG0Tnhc) 中国プロンプトエンジニア大会で、中国のAI大規模モデル企業百川智能の商業技術ディレクター郭美青氏が、エンタープライズレベルのプロンプトエンジニアリング構築の経験を共有しました。

* [**2024.12.13 更新**]: [システム解説：大規模モデルの描画ガイド、AIによる生産的な描画の新時代の幕開け！](https://mp.weixin.qq.com/s/bJbZ9bwPXxlpyREqLKhDvA) 用大模型绘制文字卡片

* [**2024.09.10 更新**]：[プロンプト攻撃、脱獄、漏洩と防護](https://mp.weixin.qq.com/s/aaABXnxRqDF716qRk79wYQ), 本文介绍了国内外 AI大模型的安全现状，有关提示注入、越狱、系统提示泄露等攻击方法和防护手段

* [**2024.06.10 更新**]：[マルチモーダルプロンプトとエージェント](https://mp.weixin.qq.com/s/Aan9NXO_vEZ9h0YrugpoGQ), 本文介绍了 GPT-4O 等多模态模型可使用的标记提示法和标记集提示法。

应用案例推荐：[gptpdf 项目](https://github.com/CosmosShadow/gptpdf) , 使用 GPT4o 完美解析 PDF。 方法简单但是很有效，使用 PyMuPDF 库，对 PDF 进行解析出所有非文本区域，并做好标记，然后使用视觉大语言模型（如 GPT-4o）将 PDF 解析为 markdown。几乎可以完美地解析排版、数学公式、表格、图片、图表等。

* [**2024.04.22 更新**]：[PromptShow 上线|轻松展示分享你的结构化提示词](https://show.langgpt.ai/) 欢迎访问 https://show.langgpt.ai/ 试用

* [**2024.04.13 更新**]：[プロンプトエンジニア必見シリーズ：プロンプトの書き方](https://mp.weixin.qq.com/s/I2KfZt83c_7RmDNcDAuzCA)

* [**2024.04.03 更新**]：[LLMアプリケーションのパフォーマンスを最大化する方法](https://mp.weixin.qq.com/s/Kr16ub_FN6pTF6acs-e6MA)
  
* [**2024.01.31 更新**]：[GPTs: LangGPT プロンプトエキスパート](https://chat.openai.com/gpts/editor/g-Apzuylaqk) 自動化された構造化プロンプト作成の簡易版GPTs, 継続的に更新中

* [**2024.01.14 更新**]：[年間シェア：「AI交流の芸術：プロンプトエンジニアリング2023年の視点」](Docs/PromptAnnualReview.md)
  
* [**2023.12.20 更新**]：[【起業家インタビュー】プロンプトの美しい新世界へようこそ](https://mp.weixin.qq.com/s/umWT_79m7MpohfrKdlqUiw)
  
* [**2023.10.31 更新**]：[AIスーパーインディビジュアルミーティングの発表原稿](Docs/AgentsResume.md) と [PPT](Docs/PPT_Agents_LangGPT.pdf), テンプレートにツールモジュールを追加
  
* [**2023.9.03 更新**]：[BiliBiliビデオチュートリアル（AIGCLINKに感謝）](https://www.bilibili.com/video/BV1rj411q78a)

* [**2023.8.31 更新**]：[プロンプトの進化 - プロンプトチェーンとマルチプロンプト協調](Docs/PromptChain.md)

* [**2023.7.30 更新**]：[システム論：高性能プロンプトの構築 - 構造化プロンプト](Docs/HowToWritestructuredPrompts.md)

LangGPTプロジェクトは、誰もが高品質なChatGPTプロンプトを簡単に作成できるようにすることを目的としています。構造化されたテンプレートベースの方法論を使用して、プロンプト作成をシンプルかつ直感的にします。LangGPTは、大規模言語モデルのためのプロンプト設計に特化したプログラミング言語と見なすことができます。

現在のプロンプト設計方法は、いくつかのヒントや原則を提供するだけで、体系的かつ適応的な視点を欠いています。LangGPTは、テンプレート、変数、およびコマンドを組み込むことで、プロンプト作成プロセスを直感的かつ簡単にします。LangGPTは、高品質なプロンプトの大規模かつ効率的な生産のための基盤を提供します。

LangGPTをしっかりと理解すれば、数分で大規模言語モデルのためのプロンプト作成を迅速かつ簡単に始めることができます。🚀 もうプロンプトを保存する必要はありません！

> 詳細は[論文](https://arxiv.org/abs/2402.16929)で確認できます。中国語版については、こちらをご覧ください：[中文版](Docs/【论文中文版】LangGPT：面向大模型的自然语言编程框架.pdf)

## チュートリアル
| 更新内容 | 概要 | 更新日 |
|-|-|-|
| [LangGPT 論文](https://arxiv.org/abs/2402.16929) | LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language, [中文版](Papers/LangGPT_paper_cn.md) | 2024.2.26 |
| [GPTs: LangGPT プロンプトエキスパート](https://chat.openai.com/gpts/editor/g-Apzuylaqk) | 自動化された構造化プロンプト作成のGPTs | 2024.1.31 |
| [ビデオ 01-BiliBili ビデオチュートリアル](https://www.bilibili.com/video/BV1rj411q78a) | B 站 UP 主 AIGCLINK 制作的 LangGPT 视频教程！感谢 AIGCLINK！ | 2023.9.03 |
| [記事 01-システム論：高性能プロンプトの構築 - 構造化プロンプト](Docs/HowToWritestructuredPrompts.md) | 構造化プロンプトに関する記事 | 2023.7.30 |
| [記事 02-プロンプトの進化 - プロンプトチェーンとマルチプロンプト協調](Docs/PromptChain.md) | プロンプトチェーンとプロンプト協調、タスク分解など、LangGPTコミュニティの共同創作記事 | 2023.8.31 |
| [知識ベース 01-LangGPT プロンプト知識ベース](http://feishu.langgpt.ai) | LangGPT プロンプトコミュニティが収集整理したプロンプト資料 | 2023.9.03 |

## クイックスタート

LangGPTを使用して強力なプロンプトを作成するには、GPT-4を使用して共有チャットを続行するだけで始められます。このツールを使用すると、従来のプロンプトを強力なLangGPTプロンプトに変換することができます。

* [LangGPT GPTs](https://chat.openai.com/g/g-Apzuylaqk-langgpt)  GPTs for LangGPT
* [LangGPT Helper **For GPT-3.5**](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)

対応するプロンプトは `LangGPT` フォルダにあります。プロンプトはまだ開発中であることに注意してください。



## 前提条件
* Markdown。Markdownに不慣れな場合は、この[Markdownチュートリアル](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)を参照してください。（JSON、YAML、その他の形式も使用可能です。貢献を歓迎します）
* GPT-4（推奨）またはClaude。

## 始め方

ここでは、LangGPTを使用してプロンプトを迅速に作成するための小さな `FitnessGPT` の例を提供します。LangGPTはプロンプト作成テンプレートを提供しており、これを使用して高品質なプロンプトを迅速に作成できます。

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
上記のプロンプトを使用すると、FitnessGPTという名前のロールが作成され、個別の食事と運動計画を設計するのに役立ちます。

### さらに多くの例
ここに、より多くの[LangGPTプロンプト](examples/prompts_en.md)があります。`examples`フォルダにはLangGPTプロンプトの例が含まれており、プロンプトとChatGPTとの完全な会話が含まれています。

* [コードマスターCAN](examples/code_anything_now/ChatGPT-Code_Anything_Now_en.md)
* [Xiaohongshuヒットジェネレーター](examples/chinese_xiaohongshu_writer/ChatGPT-Xiaohongshu_Hit_Generator_Conversation.md)
* [中国の詩人](examples/chinese_poet/ChatGPT-chinese_poet.md)

### 追加プロンプトリソース  
もっとインスピレーションが欲しいですか？[God Tier Prompts](https://www.godtierprompts.com) をチェックしましょう —— コミュニティ主導のリーダーボードで、最高のプロンプトが浮かび上がります。  

## ロール

ChatGPTはロールプレイングが得意です。ロールの説明、行動、スキルを提供することで、ロールに合った行動を取ることができます。

したがって、LangGPTはChatGPTがユーザーの意図をよりよく理解できるようにするためにロールテンプレートを設計しました。ロールテンプレートはLangGPTのコアです。

### ロールテンプレート

ここにMarkdownのロールテンプレートがあります：
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

`ロールテンプレート`は主に4つのセクションで構成されています：

* `Profile`: ロールの履歴書、ロールの説明、特性、スキル、およびその他の望ましい特性を含む。
* `Rules`: ロールが従うべきルール、通常は取るべき行動や避けるべき行動に関するもの。
* `Workflow`: ロールのワークフロー、ユーザーが提供すべき入力の種類とロールの応答方法を詳細に説明。
* `Initialization`: ロールテンプレートの設定に従ってロールを初期化する。ほとんどの場合、デフォルトの内容で十分。

上記の4つのセクションを使用してロールを定義および設定できます。

さらに、コマンド、リマインダーなどの機能を追加して複雑なプロンプトを作成する必要がある場合は、高度な使用法セクションで示されているように、対応するセクションを追加するだけです。

### ロールテンプレートの使用手順

1. ロール名を設定：`Role: Your_Role_Name`の`Your_Role_Name`を希望のロール名に置き換えます。
2. `# Profile`セクションでロールの履歴書を作成：
   * 言語を設定し、`Language`を`中文`、`English`、または他の言語に指定します。ターゲット言語で表現するのが最適です。
   * `Description`の後にロールを簡単に説明します。
   * `### Skill`セクションでロールのスキルを追加します。複数のスキルを設定し、各スキルの説明を箇条書きで提供します。
3. `## Rules`セクションでルールを設定：ロールが従うべきルールを追加します。通常は取るべき行動や避けるべき行動に関するものです。
4. `## Workflow`セクションでワークフローを定義：ロールがユーザーとどのように対話するか、ユーザーが提供すべき入力の種類、ロールの応答方法を説明します。
5. `## Initialization`セクションでロールを初期化：ロールテンプレートの内容に基づいてロールを設定します。ほとんどの場合、デフォルトの内容で十分です。
6. 完成したロールテンプレートの内容をChatGPTの会話ボックス（またはAPI）にコピーして楽しんでください！

## 高度な使用法

大規模モデルの能力を探索し続ける中で、LangGPTはまだ開発と改良の段階にあります。LangGPTプロジェクトに貢献し、大規模モデルの使用を容易にするために、誰でも歓迎します。

### 変数

**変数はプロンプト作成に大きな柔軟性をもたらし、ロールの内容を参照し、属性を設定および変更するプロセスを簡素化します。**

これは、従来のプロンプト方法が実行するのが難しい側面です。

ロールテンプレートの`Initialization`部分は変数を多用しています：

    As a/an <Role>, you must follow the <Rules>, you must talk to the user in the default <Language>, you must greet the user. Then introduce yourself and introduce the <Workflow>.

LangGPTでは、変数は"<>"で示されます。ここでの変数は次のとおりです：
* `<Role>`変数は、ロール全体の内容を表します。
* `<Rules>`変数は、`## Rules`セクションのルールを表します。
* `<Language>`変数は、`Language`フィールドの値を表します。

Markdownの階層構造により、ChatGPTは変数が表す内容を簡単に識別できます：
* Roleは記事のタイトルであり、範囲は全文に及びます。
* Ruleは段落のタイトルであり、範囲は段落に限定されます。
* Languageはフィールドであり、範囲はコロンの後に指定されたテキストに限定されます。

### コマンド

`コマンド`を使用すると、いくつかのデフォルトアクションを簡単に設定できます。たとえば、`"/help"でヘルプドキュメントを提供し、"/continue"でテキストの続きを書く`など、非常に便利なコマンドです。

* コマンドを示すために'/'を使用します。
* ロールテンプレートに次の内容を追加します：
```
## Commands
- Prefix: "/"
- Commands:
    - help: This means that user do not know the commands usage. Please introduce yourself and the commands usage.
    - continue: This means that your output was cut. Please continue where you left off.
```

### リマインダー

`リマインダー`を使用すると、ChatGPTの忘却問題を軽減できます。

ロールテンプレートにリマインダーを追加します：

```
## Reminder

1. 'Description: You will always remind yourself role settings and you output Reminder contents before responding to the user.'
2. 'Reminder: The user language is language (<language>), rules (<rules>).'
3. "<output>"
```

### 条件文

プログラミングと同様に条件文を使用します。テンプレートは次のようになります：

If [situation1 happen], you will take [action1], else, you will take [action2]

### プログラム開発のためのJsonまたはYaml

**LangGPTは現在Markdown言語を使用していますが、階層関係を表現できるマークアップ方法（JSONやYAMLなど）も使用できます。**

もしかしたら、ChatGPTが変換スクリプトの作成を手伝ってくれるかもしれません。

## LangGPT GPTs
|GPTs|クリックしてプレイ|紹介|
|---|---|---|
|[LangGPT プロンプトエキスパート✍️](https://chat.openai.com/g/g-Apzuylaqk-langgpt)|[クリックしてプレイ](https://chat.openai.com/g/g-Apzuylaqk-langgpt)| 構造化プロンプト GPTs フルバージョン！🎯📚 ワンクリックで整理されたプロンプトを生成し、執筆と創作の効率を向上させます！🔍✨|
|[PromptGPT✍️](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)|[クリックしてプレイ](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)| 構造化プロンプトライト版。大手企業のプロンプトエンジニアが高品質なプロンプトを作成します。大規模モデルの操作感を体験してください！|
|[SmartGPT-5🧠](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5)|[クリックしてプレイ](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5)| 怠けない、賢く勤勉なGPT！GPT-5の体験を先取り！|
|[中国語スピーチタイトルマスター🌈](https://chat.openai.com/g/g-zQsF8X4SY-zhong-wen-yan-jiang-biao-ti-da-shi)|[クリックしてプレイ](https://chat.openai.com/g/g-zQsF8X4SY-zhong-wen-yan-jiang-biao-ti-da-shi)| 完璧な中国語スピーチタイトルが欲しいですか？スピーチタイトルマスターが手伝います！🚀 10個の正確で魅力的なタイトルを提供し、スピーチの内容を際立たせます！🌈！|
|[MathGPT🏅](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt)|[クリックしてプレイ](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt)| 解題能力が高く正確な数学の専門家！🤓📚 問題を方程式に変換し、それを解決します。数学のパートナーが宿題を手伝います！🏅✏️！|
|[PPTメーカー🎨](https://chat.openai.com/g/g-wko0Ifhjv-ppt-maker)|[クリックしてプレイ](https://chat.openai.com/g/g-wko0Ifhjv-ppt-maker)| PPTマスターが内容のあるPPTを作成します🚀 ウェブページを閲覧して内容を取得し、PPTの概要を作成し、最先端の内容でスライドを埋めます。🖥️✨|
|[WriteGPT✍️](https://chat.openai.com/g/g-jwTMtRiL8-writegpt)|[クリックしてプレイ](https://chat.openai.com/g/g-jwTMtRiL8-writegpt)| WriteGPT：プロの執筆専門家！📝🚀 あらゆる業界の高品質な文書を作成します。📈📚|
|[LogoGPT🎨](https://chat.openai.com/g/g-wdz2JlUBv-logogpt)|[クリックしてプレイ](https://chat.openai.com/g/g-wdz2JlUBv-logogpt)| LogoGPTを使用して美しいロゴを作成します！🖌️ |
|[データテーブルGPT📊](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt)|[クリックしてプレイ](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt)| 雑然としたデータをコピーして貼り付けます！雑然としたデータを整然としたデータテーブルに変換します。📁✨|
|[コーディングエキスパート👨‍💻](https://chat.openai.com/g/g-ky06YjwaP-coding-expert)|[クリックしてプレイ](https://chat.openai.com/g/g-ky06YjwaP-coding-expert)| コーディングの専門家がすべてのコーディングの難題を解決します！🛠️💻！|
|[PDFリーダー🧐](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader)|[クリックしてプレイ](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader)| PDFリーダー：文書を深く読み解きます！文書を構造化して効率的に読むのを手伝います。📋👁️！|
|[研究論文の読み方📚](https://chat.openai.com/g/g-GLDYZOeQI-research-paper-reading)|[クリックしてプレイ](https://chat.openai.com/g/g-GLDYZOeQI-research-paper-reading)| 研究論文の読み方アシスタント：三段階の読み方を遵守して学術論文を理解するのを手伝います。️📈📚！|
|[EmojiGPT🌈](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)|[クリックしてプレイ](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)| テキストを絵文字アートに変換します！💌💥！|
|[旅行計画📅](https://chat.openai.com/g/g-mO2OuYxhX-travel-planning)|[クリックしてプレイ](https://chat.openai.com/g/g-mO2OuYxhX-travel-planning)| 旅行計画アシスタント：あなたの旅程デザイナー！個別の旅程を提供し、すべての旅行を忘れられないものにします。️🌍🗺️🏖️！|
|[画像クリエーター🎨](https://chat.openai.com/g/g-1Gm9C3UBT-picture-creator)|[クリックしてプレイ](https://chat.openai.com/g/g-1Gm9C3UBT-picture-creator)| 美しいフィギュア生成：想像力を解き放ちます！スタイリッシュな画像の詳細でクールなプロンプトを生成します。🔥👾！|
|[LinuxGPT🐧](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)|[クリックしてプレイ](https://chat.openai.com/g/g-Q41Hltsbw-emojigpt)| LinuxGPT：Linuxの力を解き放ちます！bashスクリプトとコマンドライン操作に焦点を当てます。Linuxの技術を向上させます！🚀👨‍💻！|
|[PytorchGPT🔥](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt)|[クリックしてプレイ](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt)| PytorchGPT：あなたのPyTorchコードのささやき者！🤖🔥 PyTorchモデルコードを熟練して作成し、シンプルなネットワークから複雑なアーキテクチャまで。🧠💻！|
|[🎀翻訳お嬢様](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie)|[クリックしてプレイ](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie)| 剛哥の信達雅翻訳。年収百万の翻訳お嬢様があなたのために働きます！最高の中国語翻訳。信達雅。非常に地道で優雅な中国語表現！|
|[時事熱評員🎙️](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan)|[クリックしてプレイ](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan)|熱評員：意見リーダー！🎤💡 あなたのテーマに深い洞察と熱評を提供し、核心価値を洞察するのを手伝います！🌐🔖|
|[AIアルゴリズムエンジニア](https://chat.openai.com/g/g-oCwXYY0x2-ai-gpt)|[クリックしてプレイ](https://chat.openai.com/g/g-oCwXYY0x2-ai-gpt)|AIがAIを設計します|
|[StableAudioGPT](https://chat.openai.com/g/g-jAr0hpLsL-stableaudiogpt)|[クリックしてプレイ](https://chat.openai.com/g/g-jAr0hpLsL-stableaudiogpt)|Stable Audio プロンプト生成|
|[🛠️AutoGPT(coding)](https://chat.openai.com/g/g-n3SaHyp2N-autogpt-coding)|[クリックしてプレイ](https://chat.openai.com/g/g-n3SaHyp2N-autogpt-coding)|AutoGPT👨‍💻、自動実行📈、超長出力、ワンクリックでプロジェクトフレームワークを構築します！🖲️|

## 🤝 パートナーシップ

* [securityGPT](https://github.com/rryuliu/securityGPT) 安全なプロンプトを通じてGPTsを保護し、悪意のあるデータ漏洩を防ぎます。
* [AIPainting-Structured-Prompts](https://github.com/zhutyler21/AIPainting-Structured-Prompts) 结构化生成 AI绘画创作的Prompt，适用于DALLE和MidJourney等多平台。

## 🤩 開発計画

プロジェクトは現在初期段階にあり、作業量が多いため、興味と能力のある方々の参加と貢献を心から歓迎します！ 🆘

| タスク | 説明 | ステータス |
| --- | --- | --- |
| Role 基本テンプレート | 基本的なプロンプトロール設計テンプレート、大部分の使用ケースをカバー | ✅ |
| ドキュメントと使用法 | 基本的なドキュメント、使用法、簡単な例 | ✅ |
| 高度な構文機能 | 大規模モデルの能力向上に伴い、より高度な構文機能を開発。長いコンテキスト長、より良い長期記憶、プラグインなど | 📆 🆘|
| プロンプトチェーン | マルチロールとプロンプトチェーンの協調 | 📆 🆘|
| JSON/YAMLのサポート | JSON、YAML、その他のマークアップ形式のサポートを追加し、開発を簡素化 | 🔜 🆘|
| Role 高度なテンプレート | 基本テンプレートに基づき、コマンド、環境設定、プラグイン機能、ネットワーク制御などの高度な機能を追加 | 🔜 🆘|
| 例 | LangGPTテンプレートベースのプロンプト例を提供し、完全な会話の使用法を提供 | ✅|
| ドキュメント | ドキュメントを強化し、使用法を完璧にする | ✅|
| ウェブサイト | ドキュメントと例を表示し、簡単にアクセスできるようにする | 📆 🆘|

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yzfly/LangGPT&type=Date)](https://star-history.com/#yzfly/LangGPT&Date)

## 貢献ガイドライン

1. LangGPTプロジェクトを共有および宣伝し、より多くの人々がより良いプロンプトを作成できるようにし、プロジェクトの影響力を拡大してください！
2. LangGPTのRoleテンプレートを使用して興味深いプロンプトを開発し、高品質な例を提出してください！
3. Roleテンプレート以外の追加テンプレートの貢献を歓迎します！
4. プロジェクトのドキュメントを強化し、誤字、文法エラーなどを修正してください！
5. プロジェクトウェブサイトの構築を手伝ってください！
6. 開発テストのためにChatGPTプラグイン機能へのアクセスを提供してください！
7. LangGPTプロジェクトにプラスの影響を与えるすべての貢献を歓迎します！

GitHubの使用に不慣れな場合は、次のガイドを参照してください：
[GitHub Minimal Contribution Guide: Issue and PR](https://github.com/datawhalechina/DOPMC/blob/main/GITHUB.md)

## 引用
このプロジェクトを使用または参照した場合は、次の形式で引用してください：

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

## 謝辞
以下のプロジェクトは素晴らしいプロンプトを提供し、LangGPTの作成にインスピレーションを与えました：

* [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) 
* [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) 
* [SoM](https://github.com/SkalskiP/SoM)
* [yolov10](https://github.com/THU-MIG/yolov10)
