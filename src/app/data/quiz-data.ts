import { QuizTest } from '../models/quiz.model';

export const practiceTest1: QuizTest = {
  id: 'practice_test_1',
  title: 'Agentforce & Einstein Generative AI – Practice Test 1',
  totalQuestions: 60,
  questions: [
    {
      id: 1,
      question: "What is the correct process to leverage Prompt Builder in a Salesforce org?",
      options: {
        "A": "Select a standard prompt and associate it to an action",
        "B": "Select template type, build prompt, add CRM grounding data, choose model, test and validate",
        "C": "Enable object, fine-tune records, enable Trust Layer, associate to action"
      },
      correctAnswer: "B",
      explanation: "Prompt Builder requires selecting a prompt template type, authoring the prompt, grounding it with CRM data, choosing the model, and validating outputs."
    },
    {
      id: 2,
      question: "Which options are available for deploying Agentforce agents with flows and Apex to production?",
      options: {
        "A": "Only change sets are supported",
        "B": "Use change sets or Salesforce CLI / Metadata API",
        "C": "Deploy flows and Apex only, manually recreate agents"
      },
      correctAnswer: "B",
      explanation: "Agentforce metadata, flows, and Apex can be deployed using either change sets or the Salesforce CLI / Metadata API."
    },
    {
      id: 3,
      question: "A required field is missing while configuring a retriever after index creation. How should this be resolved?",
      options: {
        "A": "Update the search index to include the field",
        "B": "Modify retriever configuration",
        "C": "Create a new custom Data Cloud object"
      },
      correctAnswer: "A",
      explanation: "The retriever depends on the search index schema. Missing fields must be added at the index level."
    },
    {
      id: 4,
      question: "Agent answers from PDFs are unsatisfactory. How should UC troubleshoot?",
      options: {
        "A": "Verify retriever filters and data source connection",
        "B": "Check PDF file permissions",
        "C": "Analyze source-to-object field mapping"
      },
      correctAnswer: "A",
      explanation: "Incorrect filters or data source connectivity issues commonly cause irrelevant or incomplete retrieval results."
    },
    {
      id: 5,
      question: "What preparation is required to use Record Snapshots grounding?",
      options: {
        "A": "Configure page layout",
        "B": "Create a field set for grounding",
        "C": "Enable dynamic forms"
      },
      correctAnswer: "B",
      explanation: "Record Snapshots use field sets to define which fields are grounded in prompts."
    },
    {
      id: 6,
      question: "Which feature provides automatic post-call visibility into mentions of competitors and products?",
      options: {
        "A": "Call Insights",
        "B": "Call Explorer",
        "C": "Call Summaries"
      },
      correctAnswer: "A",
      explanation: "Call Insights analyzes call transcripts to surface key topics, competitors, and custom phrases."
    },
    {
      id: 7,
      question: "Which permission sets are required to create and execute prompt templates?",
      options: {
        "A": "Prompt Template Manager and Prompt Template User",
        "B": "Prompt Template Manager and Data Cloud Admin",
        "C": "Data Cloud Admin and Prompt Template User"
      },
      correctAnswer: "A",
      explanation: "Creation requires Prompt Template Manager, while execution requires Prompt Template User."
    },
    {
      id: 8,
      question: "What should be considered when using Record Snapshots grounding?",
      options: {
        "A": "Activities are excluded",
        "B": "Email addresses are excluded",
        "C": "Empty fields and sections are filtered out"
      },
      correctAnswer: "C",
      explanation: "Record Snapshots automatically filter empty or non-populated fields to optimize token usage."
    },
    {
      id: 9,
      question: "Which configuration improves retriever performance and reduces latency?",
      options: {
        "A": "Increase recency bias",
        "B": "Define efficient filters",
        "C": "Enable dynamic index modification"
      },
      correctAnswer: "B",
      explanation: "Well-defined filters reduce the search scope, improving response time."
    },
    {
      id: 10,
      question: "Which Agentforce feature provides AI-generated replies grounded in knowledge for chat?",
      options: {
        "A": "Einstein Knowledge Recommendations",
        "B": "Einstein Service Replies",
        "C": "Einstein Reply Recommendations"
      },
      correctAnswer: "C",
      explanation: "Einstein Reply Recommendations generate contextual, grounded responses for agents."
    },
    {
      id: 11,
      question: "How does the AI retriever function in Data Cloud?",
      options: {
        "A": "Transforms raw data for analytics",
        "B": "Monitors data quality",
        "C": "Performs contextual search over indexed content"
      },
      correctAnswer: "C",
      explanation: "The retriever searches indexed content to fetch the most relevant information for grounding."
    },
    {
      id: 12,
      question: "How is Data Cloud leveraged by Answer Questions with Knowledge?",
      options: {
        "A": "Stores and manages indexed Knowledge articles",
        "B": "Is not required",
        "C": "Streams real-time updates"
      },
      correctAnswer: "A",
      explanation: "Data Cloud hosts indexed Knowledge articles used for grounded responses."
    },
    {
      id: 13,
      question: "What is true about Agentforce Testing Center?",
      options: {
        "A": "Tests modify production data",
        "B": "Tests do not consume Einstein Requests",
        "C": "Only works in production"
      },
      correctAnswer: "B",
      explanation: "Agentforce Testing Center allows testing without consuming Einstein request limits."
    },
    {
      id: 14,
      question: "Which API should UC use to generate summaries via the Generative API?",
      options: {
        "A": "REST API",
        "B": "Metadata API",
        "C": "SOAP API"
      },
      correctAnswer: "A",
      explanation: "The REST API supports generative AI interactions for external integrations."
    },
    {
      id: 15,
      question: "What is required for an Agentforce Service Agent to run a new flow-based action?",
      options: {
        "A": "Manage Users permission",
        "B": "Run Flows permission",
        "C": "Recreate flow as agent user"
      },
      correctAnswer: "B",
      explanation: "Agents must have the Run Flows permission to execute flow-based actions."
    },
    {
      id: 16,
      question: "How should UC ensure agents retrieve the latest policy information?",
      options: {
        "A": "Set up an Agentforce Data Library",
        "B": "Search all internal records",
        "C": "Manually inject responses"
      },
      correctAnswer: "A",
      explanation: "Data Libraries enable indexed, up-to-date, grounded knowledge retrieval."
    },
    {
      id: 17,
      question: "Which standard Agent action is used for 'Show me all customers in New York'?",
      options: {
        "A": "Select Records",
        "B": "Query Records",
        "C": "Fetch Records"
      },
      correctAnswer: "B",
      explanation: "Query Records dynamically filters records based on conditions."
    },
    {
      id: 18,
      question: "Why does knowledge grounding work in Prompt Builder but not in Agent Builder?",
      options: {
        "A": "Missing access to prompt template",
        "B": "Missing Manage Knowledge",
        "C": "Missing Data Cloud User permission"
      },
      correctAnswer: "A",
      explanation: "Agents require explicit access to the prompt template used for grounding."
    },
    {
      id: 19,
      question: "Which solution best supports hyper-personalized outreach at scale?",
      options: {
        "A": "Einstein Sales Assistant",
        "B": "Prompt Builder",
        "C": "Einstein Lead Follow-Up"
      },
      correctAnswer: "C",
      explanation: "Einstein Lead Follow-Up automates personalized communications at scale."
    },
    {
      id: 20,
      question: "What change enables an Agentforce user to access a new custom object?",
      options: {
        "A": "AI training permission",
        "B": "Read access to the object",
        "C": "Access to related flow"
      },
      correctAnswer: "B",
      explanation: "Agents require object-level read access to reference custom objects."
    }
  ]
};

export const practiceTest2: QuizTest = {
  id: 'practice_test_2',
  title: 'Agentforce & Einstein Generative AI – Practice Test 2',
  totalQuestions: 40,
  questions: [
    {
      id: 21,
      question: "Which Salesforce feature ensures generative AI responses comply with data privacy and security policies?",
      options: {
        "A": "Einstein Prompt Builder",
        "B": "Einstein Trust Layer",
        "C": "Agentforce Reasoning Engine"
      },
      correctAnswer: "B",
      explanation: "The Einstein Trust Layer enforces data masking, zero data retention, audit logging, and compliance controls for AI interactions."
    },
    {
      id: 22,
      question: "What is the primary purpose of the Agentforce Reasoning Engine?",
      options: {
        "A": "Generate natural language responses",
        "B": "Determine topics and select appropriate actions",
        "C": "Store conversation history"
      },
      correctAnswer: "B",
      explanation: "The reasoning engine interprets user intent, identifies the correct topic, and selects the appropriate action sequence."
    },
    {
      id: 23,
      question: "Which grounding technique should be used to include structured CRM record data in a prompt?",
      options: {
        "A": "Knowledge grounding",
        "B": "Record Snapshots",
        "C": "Semantic search"
      },
      correctAnswer: "B",
      explanation: "Record Snapshots allow structured CRM fields to be included in prompts using field sets."
    },
    {
      id: 24,
      question: "Which prompt template type allows multiple unrelated objects as inputs?",
      options: {
        "A": "Record Summary",
        "B": "Field Generation",
        "C": "Flex"
      },
      correctAnswer: "C",
      explanation: "Flex templates support multiple inputs, including unrelated standard and custom objects."
    },
    {
      id: 25,
      question: "What happens if a user does not have field-level access to grounded fields?",
      options: {
        "A": "The prompt fails",
        "B": "The field values appear as placeholders",
        "C": "The agent ignores grounding"
      },
      correctAnswer: "B",
      explanation: "If users lack field-level access, placeholders appear instead of populated values."
    },
    {
      id: 26,
      question: "Which Agentforce testing capability supports large-scale, repeatable utterance testing?",
      options: {
        "A": "Agent Builder Preview",
        "B": "Agentforce Testing Center",
        "C": "Model Playground"
      },
      correctAnswer: "B",
      explanation: "Agentforce Testing Center supports CSV-based, repeatable utterance testing at scale."
    },
    {
      id: 27,
      question: "What determines which action is selected when multiple actions match an utterance?",
      options: {
        "A": "Action execution order",
        "B": "Action Instructions uniqueness",
        "C": "Agent user permissions"
      },
      correctAnswer: "B",
      explanation: "Clear, unique Action Instructions help the reasoning engine select the correct action."
    },
    {
      id: 28,
      question: "Which object stores the transcript of a messaging conversation?",
      options: {
        "A": "Case",
        "B": "Messaging End User",
        "C": "Messaging Session"
      },
      correctAnswer: "C",
      explanation: "Messaging Session stores the full conversation transcript between the agent and customer."
    },
    {
      id: 29,
      question: "Which permission is required to execute a prompt template?",
      options: {
        "A": "Prompt Template Manager",
        "B": "Prompt Template User",
        "C": "Data Cloud Admin"
      },
      correctAnswer: "B",
      explanation: "Prompt Template User permission allows users to run prompt templates."
    },
    {
      id: 30,
      question: "Once a data source is selected for an Agentforce Data Library, what is true?",
      options: {
        "A": "The data source can be changed later",
        "B": "The data source can be changed via Data Cloud settings",
        "C": "The data source cannot be changed"
      },
      correctAnswer: "C",
      explanation: "After creation, the data source for a Data Library is immutable."
    },
    {
      id: 31,
      question: "Which flow type should be used to bring Data Cloud unified object data into prompt templates?",
      options: {
        "A": "Template-triggered prompt flow",
        "B": "Data Cloud-triggered flow",
        "C": "Unified-object linking flow"
      },
      correctAnswer: "A",
      explanation: "Template-triggered prompt flows are designed to supply data to prompt templates."
    },
    {
      id: 32,
      question: "Which tool helps review real-world utterances before activating a custom Agent action?",
      options: {
        "A": "Agent Builder",
        "B": "Model Playground",
        "C": "Agentforce"
      },
      correctAnswer: "A",
      explanation: "Agent Builder allows testing and validating utterances against actions before activation."
    },
    {
      id: 33,
      question: "When is an Agentforce Data Library most useful?",
      options: {
        "A": "When vectorizing Snowflake data",
        "B": "When answering from curated, indexed documents",
        "C": "When joining multiple objects via IDs"
      },
      correctAnswer: "B",
      explanation: "Data Libraries excel when grounding responses in curated, indexed document repositories."
    },
    {
      id: 34,
      question: "Which object stores agent-to-customer messaging conversations?",
      options: {
        "A": "Case",
        "B": "Messaging End User",
        "C": "Messaging Session"
      },
      correctAnswer: "C",
      explanation: "Messaging Session holds the conversation transcript."
    },
    {
      id: 35,
      question: "Users receive incorrect summaries when multiple custom actions exist. What should be reviewed?",
      options: {
        "A": "Action Instructions uniqueness",
        "B": "Agent assignment",
        "C": "Input/output types"
      },
      correctAnswer: "A",
      explanation: "Overlapping Action Instructions can confuse the reasoning engine."
    },
    {
      id: 36,
      question: "What is required when deploying Apex used by Agent actions?",
      options: {
        "A": "Less than 75% coverage is allowed",
        "B": "At least 75% coverage and dependencies included",
        "C": "Coverage rules do not apply"
      },
      correctAnswer: "B",
      explanation: "Standard Salesforce deployment rules apply, including minimum test coverage."
    },
    {
      id: 37,
      question: "Why might generated emails show unresolved placeholders?",
      options: {
        "A": "Einstein Sales Emails not enabled",
        "B": "User lacks field access",
        "C": "Unsupported locale"
      },
      correctAnswer: "B",
      explanation: "Without field-level security, merge fields remain unresolved."
    },
    {
      id: 38,
      question: "Which standard Agent action helps draft personalized sales emails?",
      options: {
        "A": "Draft or Revise Sales Email",
        "B": "Find Similar Opportunities",
        "C": "Summarize Record"
      },
      correctAnswer: "A",
      explanation: "Draft or Revise Sales Email generates personalized outreach content."
    },
    {
      id: 39,
      question: "Which prompt template supports human-in-the-loop review?",
      options: {
        "A": "Field Generation",
        "B": "Record Summary",
        "C": "Sales Email"
      },
      correctAnswer: "B",
      explanation: "Record Summary allows review before saving generated content."
    },
    {
      id: 40,
      question: "How does an Agentforce Data Library simplify accurate AI responses?",
      options: {
        "A": "Uses OCR and SQL queries",
        "B": "Creates default retrievers and indexes automatically",
        "C": "Performs keyword-only searches"
      },
      correctAnswer: "B",
      explanation: "Data Libraries automatically handle ingestion, indexing, and retriever creation."
    },
    {
      id: 41,
      question: "How are actions assigned to an Agent?",
      options: {
        "A": "Assign to Topic in Action Builder",
        "B": "Assign to Topic in Agent Builder",
        "C": "Assign directly from action detail page"
      },
      correctAnswer: "B",
      explanation: "Actions are assigned to topics within Agent Builder."
    },
    {
      id: 42,
      question: "What is the best way to test a large number of utterances?",
      options: {
        "A": "Deploy to sandbox and review logs",
        "B": "Use Agentforce Testing Center with CSV",
        "C": "Manually test in LLM UI"
      },
      correctAnswer: "B",
      explanation: "Testing Center supports scalable, repeatable testing via CSV."
    },
    {
      id: 43,
      question: "What is the primary role of the reasoning engine?",
      options: {
        "A": "Generate record queries",
        "B": "Identify topics and actions",
        "C": "Respond in natural language"
      },
      correctAnswer: "B",
      explanation: "It determines intent and selects actions."
    },
    {
      id: 44,
      question: "Which object does the SDR Agent support?",
      options: {
        "A": "Standard Lead only",
        "B": "Opportunities only",
        "C": "Custom objects only"
      },
      correctAnswer: "A",
      explanation: "The SDR Agent currently supports the standard Lead object."
    },
    {
      id: 45,
      question: "How can UC use five unrelated objects in one prompt?",
      options: {
        "A": "Prompt-triggered flow",
        "B": "Temporary custom object",
        "C": "Flex prompt template"
      },
      correctAnswer: "C",
      explanation: "Flex templates support multiple unrelated inputs."
    },
    {
      id: 46,
      question: "How should opportunities be referenced in a prompt template?",
      options: {
        "A": "Formula fields",
        "B": "Default related list merge fields",
        "C": "Custom related list merge fields"
      },
      correctAnswer: "B",
      explanation: "Default related lists are supported for merge fields."
    },
    {
      id: 47,
      question: "What does data preparation involve in Data Cloud?",
      options: {
        "A": "Normalization and governance",
        "B": "Chunking, vectorizing, and indexing",
        "C": "Real-time ingestion only"
      },
      correctAnswer: "B",
      explanation: "Vector-based retrieval requires chunking and vectorization."
    },
    {
      id: 48,
      question: "How should agents usability be monitored?",
      options: {
        "A": "Agent Analytics",
        "B": "Metadata API",
        "C": "Debug Logs"
      },
      correctAnswer: "A",
      explanation: "Agent Analytics provides insights into agent usage and performance."
    },
    {
      id: 49,
      question: "What is a best practice for refining prompt accuracy?",
      options: {
        "A": "Clear instructions and effective grounding",
        "B": "Random prompt testing",
        "C": "Submitting cases to Salesforce"
      },
      correctAnswer: "A",
      explanation: "Clear instructions, grounding, and iteration improve accuracy."
    },
    {
      id: 50,
      question: "Why does a Field Generation prompt not show the sparkle icon?",
      options: {
        "A": "Field not added to Lightning layout",
        "B": "Layout not reactivated",
        "C": "Case object unsupported"
      },
      correctAnswer: "A",
      explanation: "The field must be placed on the Lightning page layout."
    },
    {
      id: 51,
      question: "How should irrelevant retriever results be reduced?",
      options: {
        "A": "Define filters",
        "B": "Change data model object",
        "C": "Increase max results"
      },
      correctAnswer: "A",
      explanation: "Filters narrow the retriever scope to relevant data."
    },
    {
      id: 52,
      question: "What components are created when saving a Data Library?",
      options: {
        "A": "Pipeline, index engine, query processor",
        "B": "Connector, dashboard, workflow",
        "C": "Data stream, search index, retriever"
      },
      correctAnswer: "C",
      explanation: "These components enable ingestion and retrieval."
    },
    {
      id: 53,
      question: "What is the main benefit of Knowledge articles in Data Libraries?",
      options: {
        "A": "Structured, approved repository",
        "B": "External website access",
        "C": "Higher retriever accuracy"
      },
      correctAnswer: "A",
      explanation: "Knowledge ensures trusted, approved information."
    },
    {
      id: 54,
      question: "Why is Knowledge not available when creating a Data Library?",
      options: {
        "A": "Knowledge not enabled",
        "B": "Missing Einstein permissions",
        "C": "Not using Lightning Experience"
      },
      correctAnswer: "A",
      explanation: "Salesforce Knowledge must be enabled org-wide."
    },
    {
      id: 55,
      question: "Which tool routes a conversation to a human agent queue?",
      options: {
        "A": "Screen Flow",
        "B": "Prompt Flow",
        "C": "Outbound Omni-Channel Flow"
      },
      correctAnswer: "C",
      explanation: "Outbound Omni-Channel Flow enables escalation to human agents."
    },
    {
      id: 56,
      question: "What does enabling 'Enrich event logs with conversation data' allow?",
      options: {
        "A": "Unlimited reporting",
        "B": "Click-path tracking",
        "C": "Session data visibility for 7 days"
      },
      correctAnswer: "C",
      explanation: "Conversation data is retained for 7 days for analysis."
    },
    {
      id: 57,
      question: "How does the LLM execute a request for open opportunities?",
      options: {
        "A": "Interprets intent, plans actions, executes retrieval",
        "B": "Matches static dialog rules",
        "C": "Uses predefined scripts"
      },
      correctAnswer: "A",
      explanation: "The LLM dynamically plans and executes actions."
    },
    {
      id: 58,
      question: "Which use case requires Prompt Builder?",
      options: {
        "A": "Drafting support bulletin posts",
        "B": "Ticket volume forecasting",
        "C": "Agent performance scoring"
      },
      correctAnswer: "A",
      explanation: "Prompt Builder is used for generative content creation."
    },
    {
      id: 59,
      question: "Which approach supports reusable AI-written sales emails?",
      options: {
        "A": "Sales Email prompt template",
        "B": "Standard email templates",
        "C": "Field Generation template"
      },
      correctAnswer: "A",
      explanation: "Sales Email templates support personalization and reuse."
    },
    {
      id: 60,
      question: "Why do token limit errors appear randomly in Field Generation prompts?",
      options: {
        "A": "Template type limitation",
        "B": "LLM capacity varies",
        "C": "Token usage varies by record"
      },
      correctAnswer: "C",
      explanation: "Dynamic record content causes variable token usage."
    }
  ]
};
