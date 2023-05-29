# Prompting tips you should known

## Use “Be Concise” to save 40-90% money. 

Asking an LLM to be concise can save you a lot of money. This can be achieved by appending “Be Concise” to your prompt. About 40-90% amount can be saved.

reference:
> https://github.com/ray-project/llm-numbers


## Write prompts in a native English style.

for example:
- use "join the mission" instead of "complete the task" in business situations.

## Explore the capability boundaries of LLMs.

- Complex prompt structures are ineffective for weaker LLMs, you should use a simple structure.
- Weaker LLMs is cheaper. It is roughly 50 times cheaper to use GPT-3.5-Turbo than GPT-4

## Tips from Microsoft

* **Be Specific**. Leave as little to interpretation as possible. Restrict the operational space.
* **Be Descriptive.** Use analogies.
* **Double Down**. Sometimes you may need to repeat yourself to the model. Give instructions before and after your primary content, use an instruction and a cue, etc.
* **Order Matters**. The order in which you present information to the model may impact the output. Whether you put instructions before your content (“summarize the following…”) or after (“summarize the above…”) can make a difference in output. Even the order of few-shot examples can matter. This is referred to as recency bias.
* **Give the model an “out”.** It can sometimes be helpful to give the model an alternative path if it is unable to complete the assigned task. For example, when asking a question over a piece of text you might include something like "respond with ‘not found’ if the answer is not present". This can help the model avoid generating false responses.

from:
> https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering


More tips and tools is on the way ......