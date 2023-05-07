# 🚀 LangGPT — Empowering everyone to quickly create high-quality prompts!

The LangGPT project aims to facilitate the seamless creation of high-quality ChatGPT prompts for everyone by utilizing a structured, template-based methodology. View it as a programming language specifically crafted for designing prompts for large language models.

Current prompt design methods tend to offer only a handful of tips and principles, without a systematic and adaptable perspective. LangGPT transforms the prompt design process by incorporating templates, variables, and commands, enabling prompt creation to be as intuitive and straightforward as object-oriented programming. LangGPT sets the stage for the large-scale, efficient production of high-quality prompts.

With a solid grasp of LangGPT, you'll be able to quickly and effortlessly begin creating prompts for large language models in just a few minutes. 🚀

## Prerequisites
* Markdown; if you're not familiar with it, you can refer to this [Markdown Tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). (JSON, YAML, and other formats are also acceptable; contributions are welcome)
* GPT-4 is preferred

## Getting Started

Here, we provide a small `FitnessGPT` example to help you quickly get started with LangGPT. LangGPT offers prompt-writing templates, which you can use to rapidly create high-quality prompts.

Here is the `FitnessGPT: Create personal diet and exercise plan for you` example:

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
Here are more [LangGPT prompts](LangGPT-Prompts.md). The `examples` folder contains LangGPT prompt examples, including prompts and complete conversations with ChatGPT, to help you create wonderful prompt with LangGPT's template.

* [Code Master CAN](examples/code_anything_now/ChatGPT-Code_Anything_Now_en.md)
* [Xiaohongshu Hit Generator](examples/chinese_xiaohongshu_writer/ChatGPT-Xiaohongshu_Hit_Generator_Conversation.md)
* [Chinese Poet](examples/chinese_poet/ChatGPT-chinese_poet.md)


## Role Template
The examples above were all created using the Role template, which is the core of LangGPT.

ChatGPT excels at role-playing. By providing role descriptions, role behaviors, and skills, it can produce actions that align well with the character.

Therefore, LangGPT designed the Role template to help ChatGPT better understand user intentions and developed a corresponding method for character design.

### Role Template

Here is the Role template displayed using markdown:
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

## Workflow
1. First, xxx
2. Then, xxx
3. Finally, xxx

## Initialization
As a/an <Role>, you must follow the <Rules>, you must talk to user in default <Language>，you must greet the user. Then introduce yourself and introduce the <Workflow>.
```

The `Role template` primarily consists of four sections:

* `Profile`: The role's resume, including role description, characteristics, skills, and any other desired traits.
* `Rules`: Rules the role must follow, usually involving actions they must take or avoid, such as "Never break character" and so on.
* `Workflow`: The role's workflow, detailing the type of input users should provide and how the character should respond.
* `Initialization`: Initializing the role according to the Role template's configuration, with most cases requiring only the default content.

A character can be defined and configured using the four sections above.

Additionally, if you need to incorporate complex prompts with commands, memory, and other features, simply add the corresponding sections, as demonstrated in the advanced usage section.

### Steps to Use the Role Template

1. Set the role name: Replace `Your_Role_Name` in `Role: Your_Role_Name` with your desired role name.
2. Write the character's resume in the `# Profile` section:
   * Set the language by specifying `Language` as `中文`, `English`, or any other language, using the target language for expression.
   * Briefly describe the character after `Description`.
   * Add character skills under the `### Skill` section. You can set multiple skills with bulleted descriptions for each skill.
3. Establish rules under `## Rules`: Add rules that the character must follow, typically covering required or prohibited actions, such as "Don't break character under any circumstance," "禁止出戏," etc.
4. Define the workflow under `## Workflow`: Explain how the character should interact with users, the input users should provide, and how the character should respond.
5. Initialize the character under `## Initialization`: The Role template sets up the character based on the template content, typically without modifications needed.
6. Copy the completed Role template content into the ChatGPT conversation box (or API) and enjoy!

## Advanced Usage

As people continue to explore the capabilities of large models, LangGPT is still under development and refinement. Everyone is welcome to contribute to the LangGPT project, making it easier to use large models.

