## 二、Prompt Engineering（进阶版）：程序员要“工程化提示词”
你之前理解的是“多轮对话、写文案”，那是**“用户级 Prompt Engineering”**。  
程序员需要的是**“代码级 Prompt Engineering”**：把 Prompt 当成代码的一部分来设计和管理。
### 2.1 Prompt 为什么要“进阶版”？
在企业系统中，Prompt 有这些特征：
- 需要动态拼接：根据用户信息、业务状态、检索结果实时生成。
- 需要版本管理：不同版本 Prompt 需要回滚、A/B 测试。
- 需要模板化：同一套业务逻辑，在多个产品线复用。
如果只是手写几句提示词，很快就会失控。
---
### 2.2 动态拼接与管理：把 Prompt 当“代码”来写
#### 1）Prompt 模板化
常见做法：
- 使用 Jinja2 / Python f-string / 模板引擎，定义 Prompt 模板。
- 在模板里预留变量：`{user_question}`, `{retrieved_chunks}`, `{system_instruction}`。
示例（伪代码）：
```python
from langchain.prompts import PromptTemplate
template = """
你是一个企业知识库助手，请根据以下参考资料回答用户问题。
【参考资料】
{context_str}
【用户问题】
{question}
请用清晰、简洁的语言回答，并注明引用的文档编号。
"""
PROMPT = PromptTemplate(
    input_variables=["context_str", "question"],
    template=template,
)
```
#### 2）在代码中动态组装 Prompt
在 RAG 场景中，典型流程是：
- 从向量库拿到 chunks；
- 将 chunks 拼成一个长字符串 `context_str`；
- 与用户问题一起填进模板；
- 丢给 LLM。
程序员要掌握：
- 如何在代码里组织 Prompt 的结构：系统角色、安全指令、输出格式、示例等。
- 如何避免 Prompt 注入：对用户输入做长度限制、过滤敏感词、转义。
#### 3）Prompt 的版本管理与实验
- 把 Prompt 模板放在配置文件 / 数据库里，而不是写死在代码中。
- 记录每次对话使用的 Prompt 版本，方便效果回溯。
- 使用 A/B 测试，比较不同 Prompt 的质量、长度、成本。
---
### 2.3 Prompt Engineering 的工程要点
程序员要重点学习：
- **结构化提示词设计**：
  - Role（角色）
  - Instruction（任务）
  - Context（上下文）
  - Output Format（输出格式）
  - Examples / Few-shot（示例）
- **控制输出结构**：让 LLM 返回 JSON、Markdown 表格、代码等结构化结果，方便后端解析。
- **安全与合规**：避免 Prompt 注入、数据泄露、越权输出。