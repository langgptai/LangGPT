# 🚀 LangGPT — 誰もが高品質なプロンプトを作成できる！

<div align="center">
<img src="imgs/logo.png" width="60%" height="auto">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Paper](https://img.shields.io/badge/arXiv-2402.16929-b31b1b.svg)](https://arxiv.org/abs/2402.16929)
[![Stars](https://badgen.net/github/stars/langgptai/LangGPT)](https://github.com/langgptai/LangGPT)

[English](README.md) | [简体中文](README_zh.md) | [日本語](README_ja.md)

[クイックスタート](#-クイックスタート) | [理論的基礎](#-理論的基礎) | [エコシステム](#-langgpt-エコシステム) | [コミュニティ](http://feishu.langgpt.ai)

</div>

---

## 📖 LangGPTとは？

**LangGPTは、構造化された再利用可能なプロンプト設計フレームワーク**であり、誰でも大規模言語モデル向けの高品質なプロンプトを作成できます。**「プロンプトのためのプログラミング言語」**と考えてください — 体系的、テンプレートベース、無限にスケーラブル。

### なぜLangGPT？

従来のプロンプトエンジニアリングは、散在するヒントと試行錯誤に依存しています。LangGPTはこの混沌を構造化された方法論に変換します：

- 🎯 **構造化テンプレート** — プログラミングパラダイムに着想を得た階層的組織
- 🔄 **再利用性** — コードモジュールのように、一度作成すれば無限に適応可能
- 📦 **モジュール性** — 変数、コマンド、条件ロジックを自在に使用
- ⚡ **効率性** — アイデアから動作するプロンプトまで数分
- 🌍 **コミュニティ主導** — 11,000+スター、数千人のユーザーによる実戦テスト済み

> **学術的基礎**: 研究論文 [arXiv:2402.16929](https://arxiv.org/abs/2402.16929) | [中文版](Papers/LangGPT_paper_cn.md)

---

## 🚀 クイックスタート

### 方法1: 自動化ツールを使用（最速）

AIにプロンプトを作成させる：

- **[LangGPT GPTs](https://chat.openai.com/g/g-Apzuylaqk-langgpt)** — フル機能ジェネレーター（GPT-4）
- **[Kimi+ LangGPT](https://kimi.moonshot.cn/kimiplus/conpg00t7lagbbsfqkq0)** — Moonshot Kimiユーザー向け
- **[PromptGPT](https://chat.openai.com/g/g-YKe3gmydD-promptgpt)** — ライト版（GPT-3.5）

### 方法2: テンプレートをマスター（5分）

基本的なLangGPT構造：

```markdown
# Role: あなたのロール名

## Profile
- Author: あなたの名前
- Version: 1.0
- Language: 日本語
- Description: 明確なロール説明とコア機能

### Skill-1
1. 具体的なスキルの説明
2. 期待される動作と出力

## Rules
1. いかなる状況でもキャラクター設定を破らない
2. 事実を捏造したり幻覚を起こさない

## Workflow
1. ユーザー入力を分析し、意図を特定
2. 関連スキルを体系的に適用
3. 構造化された実行可能な出力を提供

## Initialization
<Role>として、<Rules>に従い、デフォルトの<Language>でユーザーと会話し、ユーザーに挨拶する必要があります。次に自己紹介をし、<Workflow>を紹介します。
```

**前提条件**: 基本的なMarkdown知識（[クイックガイド](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)）| GPT-4またはClaudeを推奨

### 方法3: サンプルから始める

[サンプルライブラリ](https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe)を探索し、実証済みのテンプレートをニーズに合わせて調整してください。

---

## 🧠 理論的基礎

戦術に飛び込む前に、原理を理解しましょう。これらのエッセイは、効果的なプロンプティングの背後にある哲学を探求します：

- **[対話動力学](Docs/对话动力学.md)** — 人間とAIの対話のダイナミクス
- **[五種理性](Docs/五种理性.md)** — プロンプト設計における5つの合理性
- **[鏡像性傾向](Docs/镜像性倾向.md)** — LLM動作におけるミラーリング傾向
- **[统计重力井和边缘表达](Docs/统计重力井和边缘表达.md)** — 统计重力井和边缘表达
- **[看見與言說](Docs/看见与言说.md)** — AI インタラクションにおける観察と表現
- **[Prompt の本質](Docs/Prompt的本质.md)** — プロンプトの本質と性質
- **[AI意识](Docs/AI意识.md)** — AI が人間とどのように相互作用するかを理解する


*これらの基礎的洞察は、プロンプトに対する考え方を変革します。*

---

## 💡 コアコンセプト

### 1. 構造化ロール

明確でモジュール化されたセクションを通じてAIペルソナを定義：

| セクション | 目的 | 例 |
|---------|---------|---------|
| **Role** | ロール名/タイトル | "論理学者" / "エキスパートアナリスト" / "FitnessGPT" |
| **Profile** | アイデンティティと能力 | "10年の経験を持つPythonエキスパート開発者" |
| **Skills** | 具体的な能力 | "複雑なコードのデバッグ、パフォーマンス最適化" |
| **Rules** | 境界と制約 | "破壊的なコマンドを絶対に実行しない" |
| **Workflow** | インタラクションロジック | "1. 分析 → 2. 計画 → 3. 実行" |
| **Initialization** | オープニングメッセージと設定 | "<Role>として、挨拶し<Workflow>を紹介します" |

### 2. 変数と参照

動的コンテンツには`<Variable>`構文を使用：

```markdown
<Role>として、<Rules>に従い、<Language>でコミュニケーションする必要があります
```

これにより、複雑な指示全体で一貫性を維持する自己参照型プロンプトが作成されます。

### 3. コマンド

より良いUXのために再利用可能なアクションを定義：

```markdown
## Commands
- Prefix: "/"
- Commands:
    - help: すべての利用可能なコマンドを表示
    - continue: 中断された出力を再開
    - improve: より深い分析で現在の応答を強化
```

### 4. 条件ロジック

プロンプトにインテリジェンスを追加：

```markdown
ユーザーが[コード]を提供した場合、分析して改善を提案
そうでなく、ユーザーが[質問]をした場合、詳細な説明を提供
そうでなければ、明確化を促す
```

### 5. 高度なテクニック

**リマインダー** — 長い会話でのコンテキスト喪失に対抗：
```markdown
## Reminder
1. 応答前に常にロール設定を確認
2. 現在の言語：<Language>、アクティブなルール：<Rules>
```

**代替フォーマット** — markdownが理想的でない場合はJSON/YAMLを使用：
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

## 🌟 注目のサンプル

| プロンプト | 説明 | リンク |
|--------|-------------|------|
| 🎯 **FitnessGPT** | パーソナライズされた食事とワークアウトプランナー | [表示](examples/FitnessGPT.md) |
| 💻 **Code Master CAN** | デバッグの専門知識を持つ高度なコーディングアシスタント | [表示](examples/code_anything_now/ChatGPT-Code_Anything_Now_en.md) |
| ✍️ **小紅書ライター** | バイラルソーシャルメディアコンテンツジェネレーター | [表示](examples/chinese_xiaohongshu_writer/) |
| 🎨 **中国の詩人** | 伝統的なスタイルの古典詩作曲家 | [表示](examples/chinese_poet/) |

[100以上のサンプルを閲覧 →](https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe)

---

## 📚 学習リソース

### 必読ガイド

| リソース | 説明 | 日付 |
|----------|-------------|------|
| [学術論文](https://arxiv.org/abs/2402.16929) | LangGPT: 構造化された再利用可能なプロンプト設計の再考（[中文](Papers/LangGPT_paper_cn.md)） | 2024年2月 |
| [構造化プロンプトガイド](Docs/HowToWritestructuredPrompts.md) | 高性能プロンプト構築の包括的なチュートリアル | 2023年7月 |
| [プロンプトチェーン](Docs/PromptChain.md) | マルチプロンプト協力とタスク分解戦略 | 2023年8月 |
| [ビデオチュートリアル](https://www.bilibili.com/video/BV1rj411q78a) | BiliBiliウォークスルー（by AIGCLINK） | 2023年9月 |

### 高度なトピック

- **[推論モデルプロンプト手法の変革](https://mp.weixin.qq.com/s/FLY0sy1jYv6eT9151Yz_jw)** — 手続き型から目標指向型プロンプトへのパラダイムシフト
- **[プロンプトの道と術](https://langgptai.feishu.cn/wiki/AYMWwBPaSih46WkAo9jcfKkfntg)** — 李継剛によるプロンプトエンジニアリングの哲学と実践
- **[エンタープライズレベルのプロンプトエンジニアリング](https://langgptai.feishu.cn/wiki/UTyswvusTiRw0TkZLI5cIG0Tnhc)** — 本番環境対応プロンプトシステムの構築（百川智能）
- **[マルチモーダルプロンプト](https://mp.weixin.qq.com/s/Aan9NXO_vEZ9h0YrugpoGQ)** — GPT-4Vとマルチモーダルプロンプティング技術
- **[プロンプト攻撃と防御](https://mp.weixin.qq.com/s/aaABXnxRqDF716qRk79wYQ)** — セキュリティ：プロンプトインジェクション、ジェイルブレイク、防御
- **[大規模モデル描画ガイド](https://mp.weixin.qq.com/s/bJbZ9bwPXxlpyREqLKhDvA)** — 構造化プロンプトを使用したAI画像生成

### コミュニティハブ

**[Feishuナレッジベース](http://feishu.langgpt.ai)** — 厳選されたリソース、テンプレート、コミュニティ貢献

---

## 🎨 LangGPTエコシステム

### コアフレームワークとツール

| プロジェクト | 説明 | Stars |
|---------|-------------|-------|
| **[LangGPT](https://github.com/langgptai/LangGPT)** | コアフレームワークと方法論 | ![](https://badgen.net/github/stars/langgptai/LangGPT) |
| **[PromptVer](https://github.com/langgptai/PromptVer)** | プロンプトのセマンティックバージョニング — Gitのようなバージョン管理 | ![](https://badgen.net/github/stars/langgptai/PromptVer) |
| **[PromptShow](https://github.com/langgptai/PromptShow)** | 美しいプロンプト画像を作成（[試す](https://show.langgpt.ai/)） | ![](https://badgen.net/github/stars/langgptai/PromptShow) |
| **[Minstrel](https://github.com/langgptai/Minstrel)** | プロンプト自動生成のためのマルチエージェントシステム | ![](https://badgen.net/github/stars/langgptai/Minstrel) |

### モデル固有のプロンプトコレクション

さまざまなAIモデル向けに厳選・最適化されたプロンプト：

| コレクション | ターゲットモデル | Stars |
|------------|--------------|-------|
| [wonderful-prompts](https://github.com/langgptai/wonderful-prompts) | ChatGPT（中国語） | ![](https://badgen.net/github/stars/langgptai/wonderful-prompts) |
| [awesome-claude-prompts](https://github.com/langgptai/awesome-claude-prompts) | Anthropic Claude | ![](https://badgen.net/github/stars/langgptai/awesome-claude-prompts) |
| [awesome-deepseek-prompts](https://github.com/langgptai/awesome-deepseek-prompts) | DeepSeek & R1 | ![](https://badgen.net/github/stars/langgptai/awesome-deepseek-prompts) |
| [awesome-gemini-prompts](https://github.com/langgptai/awesome-gemini-prompts) | Google Gemini | ![](https://badgen.net/github/stars/langgptai/awesome-gemini-prompts) |
| [awesome-grok-prompts](https://github.com/langgptai/awesome-grok-prompts) | xAI Grok | ![](https://badgen.net/github/stars/langgptai/awesome-grok-prompts) |
| [qwen-prompts](https://github.com/langgptai/qwen-prompts) | Alibaba Qwen | ![](https://badgen.net/github/stars/langgptai/qwen-prompts) |
| [awesome-llama-prompts](https://github.com/langgptai/awesome-llama-prompts) | Meta Llama 2/3 | ![](https://badgen.net/github/stars/langgptai/awesome-llama-prompts) |
| [awesome-doubao-prompts](https://github.com/langgptai/awesome-doubao-prompts) | ByteDance Doubao | ![](https://badgen.net/github/stars/langgptai/awesome-doubao-prompts) |
| [awesome-system-prompts](https://github.com/langgptai/awesome-system-prompts) | AIツールからのシステムプロンプト | ![](https://badgen.net/github/stars/langgptai/awesome-system-prompts) |

### 専門分野

| リポジトリ | フォーカスエリア | Stars |
|------------|------------|-------|
| [Awesome-Multimodal-Prompts](https://github.com/langgptai/Awesome-Multimodal-Prompts) | GPT-4V、DALL-E 3、画像/動画プロンプト | ![](https://badgen.net/github/stars/langgptai/Awesome-Multimodal-Prompts) |
| [deep-research-prompts](https://github.com/langgptai/deep-research-prompts) | モデル横断的な深い研究 | ![](https://badgen.net/github/stars/langgptai/deep-research-prompts) |
| [awesome-voice-prompts](https://github.com/langgptai/awesome-voice-prompts) | 音声AIと会話エージェント | ![](https://badgen.net/github/stars/langgptai/awesome-voice-prompts) |
| [GraphRAG-Prompts](https://github.com/langgptai/GraphRAG-Prompts) | グラフベースの検索プロンプト | ![](https://badgen.net/github/stars/langgptai/GraphRAG-Prompts) |
| [LLM-Jailbreaks](https://github.com/langgptai/LLM-Jailbreaks) | セキュリティ研究と防御 | ![](https://badgen.net/github/stars/langgptai/LLM-Jailbreaks) |

### アプリケーション

| プロジェクト | 説明 | Stars |
|---------|-------------|-------|
| [BookAI](https://github.com/langgptai/BookAI) | AI駆動の書籍生成 | ![](https://badgen.net/github/stars/langgptai/BookAI) |
| [AI-Resume](https://github.com/langgptai/AI-Resume) | Claude Artifactsで美しい履歴書を作成 | ![](https://badgen.net/github/stars/langgptai/AI-Resume) |

---

## 🛠️ LangGPTで構築された人気のGPTs

これらの専門アシスタントでChatGPTを強化：

| GPT | 目的 | リンク |
|-----|---------|------|
| 🎯 **LangGPT Expert** | 構造化プロンプトの自動生成 | [起動](https://chat.openai.com/g/g-Apzuylaqk-langgpt) |
| ✍️ **PromptGPT** | プロフェッショナルプロンプトエンジニア | [起動](https://chat.openai.com/g/g-YKe3gmydD-promptgpt) |
| 🧠 **SmartGPT-5** | 決して怠けない、常に勤勉なアシスタント | [起動](https://chat.openai.com/g/g-sRQtxpN4C-smartgpt-5) |
| 💻 **Coding Expert** | 包括的なプログラミングアシスタント | [起動](https://chat.openai.com/g/g-ky06YjwaP-coding-expert) |
| 📊 **Data Table GPT** | 乱雑なデータをきれいなテーブルに変換 | [起動](https://chat.openai.com/g/g-nb6RjxHsb-data-table-gpt) |
| 🔥 **PytorchGPT** | PyTorchコードスペシャリスト | [起動](https://chat.openai.com/g/g-kyj3zKyHK-pytorchgpt) |
| 🎨 **LogoGPT** | プロフェッショナルロゴデザイナー | [起動](https://chat.openai.com/g/g-wdz2JlUBv-logogpt) |
| 📄 **PDF Reader** | 詳細なドキュメント分析と抽出 | [起動](https://chat.openai.com/g/g-YaMjCVW0t-pdf-reader) |
| 🏅 **MathGPT** | 正確な数学問題ソルバー | [起動](https://chat.openai.com/g/g-UIOlPhTjK-mathgpt) |
| 📝 **WriteGPT** | 業界横断的なプロフェッショナルライティング | [起動](https://chat.openai.com/g/g-jwTMtRiL8-writegpt) |
| 🎙️ **時事熱評員** | 時事コメンテーター | [起動](https://chat.openai.com/g/g-gbfs6fy7c-shi-shi-re-ping-yuan) |
| 🎀 **翻訳大小姐** | エレガントな中国語翻訳 | [起動](https://chat.openai.com/g/g-2V90YGvVD-fan-yi-da-xiao-jie) |

[20以上のGPTsを発見 →](https://github.com/langgptai/LangGPT#langgpt-gpts)

---

## 🤝 貢献

LangGPTをより良くするためのすべての貢献を歓迎します！

### どのように貢献できるか

1. ⭐ **スターと共有** — 可視性を高め、他の人がLangGPTを発見できるように支援
2. 📝 **サンプルを投稿** — LangGPTで構築した成功したプロンプトを共有
3. 🆕 **テンプレートを提案** — Role構造を超えた新しいテンプレートを作成
4. 📖 **ドキュメントを改善** — 誤字を修正し、説明を明確にし、翻訳を追加
5. 💡 **機能を提案** — 新機能のアイデアでissueを開く
6. 🔧 **コード貢献** — ツール、ユーティリティ、統合の構築を支援

### はじめに

GitHubへの貢献は初めてですか？この[GitHub最小貢献ガイド](https://github.com/datawhalechina/DOPMC/blob/main/GITHUB.md)をご覧ください

---

## 📊 スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=langgptai/LangGPT&type=Date)](https://star-history.com/#langgptai/LangGPT&Date)

---

## 📄 引用

研究やプロジェクトでLangGPTを使用する場合は、以下のように引用してください：

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

## 🙏 謝辞

LangGPTは以下の優れたプロジェクトに触発されました：

- [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor) — 構造化チュータリングプロンプト
- [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT) — 自律型AIエージェント
- [SoM](https://github.com/SkalskiP/SoM) — Set of Markプロンプティング
- [yolov10](https://github.com/THU-MIG/yolov10) — コンピュータビジョンの革新

### LangGPTで構築されたプロジェクト

LangGPTの原則が実際に適用されているのを見て誇りに思います：
- **[Prompt Optimizer](https://github.com/linshenkx/prompt-optimizer)** — LangGPT方法論を活用したインテリジェントプロンプト最適化ツール
- **[securityGPT](https://github.com/rryuliu/securityGPT)** — 漏洩に対する安全なプロンプト保護
- **[AIPainting-Structured-Prompts](https://github.com/zhutyler21/AIPainting-Structured-Prompts)** — AIアート生成のための構造化プロンプト

---

## 📬 お問い合わせ

### 著者

**雲中江樹（Yun Zhong Jiang Shu）**
- 📱 WeChat公式アカウント：**「雲中江樹」**
- 💼 LangGPTフレームワークの創設者
- 🎓 プロンプトエンジニアリング研究者

### コミュニティ

- 📚 [ナレッジベース](http://feishu.langgpt.ai) — 包括的なドキュメント
- 🐦 [Twitter/X](https://twitter.com/langgptai) — 最新アップデート
- 💬 [GitHub Discussions](https://github.com/langgptai) — コミュニティフォーラム
- 📧 メール：contact@langgpt.ai

---

<div align="center">

**[⬆ トップに戻る](#-langgpt--誰もが高品質なプロンプトを作成できる)**

[langgptaiコミュニティ](https://github.com/langgptai)が ❤️ を込めて制作

*誰もがプロンプトエキスパートになれるように* 🚀

</div>