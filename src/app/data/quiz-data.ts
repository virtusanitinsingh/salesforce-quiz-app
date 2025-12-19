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
  totalQuestions: 60,
  questions: [
    {
      id: 1,
      question: "What is true of Agentforce Testing Center?",
      options: {
        "A": "Agentforce Testing Center can only be used in sandbox environments.",
        "B": "Agentforce Testing Center allows testing without consuming Einstein Requests.",
        "C": "Agentforce Testing Center can only be used in a production environment."
      },
      correctAnswer: "B",
      explanation: "Agentforce Testing Center allows teams to test agents safely without consuming Einstein Requests, making it ideal for large-scale and repeatable testing prior to production deployment."
    },
    {
      id: 2,
      question: "Universal Containers tests a new Einstein Generative AI feature for personalized emails. Draft emails sometimes contain placeholders for contact attributes. What is the most likely explanation?",
      options: {
        "A": "The merge field syntax is incorrect.",
        "B": "The user lacks field-level security or object permissions.",
        "C": "The user's locale language is not supported by Prompt Builder."
      },
      correctAnswer: "B",
      explanation: "When users lack field-level security or object permissions, Prompt Builder cannot resolve merge fields, resulting in placeholders appearing in generated content."
    },
    {
      id: 3,
      question: "What is the correct process to leverage Prompt Builder in a Salesforce org?",
      options: {
        "A": "Select template type, author prompt, add CRM grounding, choose model, validate outputs.",
        "B": "Connect Data Cloud to CRM records and test API calls.",
        "C": "Select a standard Salesforce prompt, associate it with an object, and link it to an action."
      },
      correctAnswer: "A",
      explanation: "Prompt Builder requires selecting the appropriate template type, authoring prompts in the workspace, grounding them with CRM data, choosing a model, and validating outputs through testing."
    },
    {
      id: 4,
      question: "UC configured PDF ingestion in Data Cloud and created a search index. While configuring a retriever, a required field is missing. How should UC resolve this?",
      options: {
        "A": "Add the missing field to the search index and reprocess.",
        "B": "Modify the retriever's field mapping to skip the missing field.",
        "C": "Create a new custom Data Cloud object that includes the field."
      },
      correctAnswer: "A",
      explanation: "Retrievers can only access fields that are included in the search index. The missing field must be added to the index and reprocessed."
    },
    {
      id: 5,
      question: "UC reports mismatches in AI-generated summaries for a custom object. Which prompt design practice should be prioritized?",
      options: {
        "A": "Use clear instructions, consistent structure, proper grounding, and iterative refinement.",
        "B": "Deploy a larger LLM model and increase token limits.",
        "C": "Submit a prompt review case to Salesforce and rely on Playground testing."
      },
      correctAnswer: "A",
      explanation: "Clear instructions, consistent structure, proper grounding, and iterative refinement are the most effective ways to reduce hallucinations and mismatches in generated output."
    },
    {
      id: 6,
      question: "What is the main benefit of using Knowledge articles in an Agentforce Data Library?",
      options: {
        "A": "They enable natural language search across all web content.",
        "B": "They allow indexing of external third-party databases.",
        "C": "They provide a structured, searchable repository of approved documents."
      },
      correctAnswer: "C",
      explanation: "Knowledge articles ensure agents retrieve trusted, curated, and approved information, improving accuracy and reliability of responses."
    },
    {
      id: 7,
      question: "What is the primary function of the reasoning engine in Agentforce?",
      options: {
        "A": "Interpret user intent and determine which topics and actions should be executed.",
        "B": "Store and manage conversation histories.",
        "C": "Providing real-time natural language responses."
      },
      correctAnswer: "A",
      explanation: "The reasoning engine interprets user intent and determines which topics and actions should be executed by the agent."
    },
    {
      id: 8,
      question: "When a customer chat is initiated, which Salesforce feature generates AI replies or draft emails based on recommended Knowledge articles?",
      options: {
        "A": "Einstein Knowledge Recommendations",
        "B": "Einstein Service Replies",
        "C": "Einstein Service Replies"
      },
      correctAnswer: "C",
      explanation: "Einstein Service Replies uses Knowledge articles to generate contextual replies and email drafts during customer service interactions."
    },
    {
      id: 9,
      question: "Leadership wants a dynamic form field populated by an LLM while keeping a human in the loop. Which prompt template type should be used?",
      options: {
        "A": "Field Generation",
        "B": "Record Summary",
        "C": "Sales Email"
      },
      correctAnswer: "A",
      explanation: "Field Generation templates populate CRM fields while allowing users to review and edit AI-generated content before saving."
    },
    {
      id: 10,
      question: "A Field Generation prompt works for many records but fails randomly with token limit errors. What is the cause?",
      options: {
        "A": "The template type does not support large datasets.",
        "B": "Different records produce different token volumes due to variable field lengths.",
        "C": "Token limits fluctuate with system demand."
      },
      correctAnswer: "B",
      explanation: "Different records produce different token volumes due to variable field lengths and related data, leading to intermittent token limit failures."
    },
    {
      id: 11,
      question: "In the context of retrievers and search indexes, what best describes the data preparation process in Data Cloud?",
      options: {
        "A": "Uploading raw data directly without preprocessing.",
        "B": "Loading source data, chunking content, generating embeddings, and storing in a vector database.",
        "C": "Real-time ingestion without preprocessing to enable dynamic grounding"
      },
      correctAnswer: "B",
      explanation: "Data preparation for retrievers includes loading source data, chunking content, generating embeddings, and storing it in a vector database optimized for semantic search."
    },
    {
      id: 12,
      question: "A Field Generation prompt template is active, but the Sparkle icon does not appear on the target field. What critical step was missed?",
      options: {
        "A": "The prompt template was not associated with the field on the Lightning Record Page.",
        "B": "The Lightning Experience is disabled.",
        "C": "Granting Edit permission on the field"
      },
      correctAnswer: "A",
      explanation: "Field Generation prompts must be explicitly associated with the field on the Lightning Record Page for the Sparkle icon to appear."
    },
    {
      id: 13,
      question: "Why is the Salesforce Knowledge option unavailable when configuring an Einstein Data Library?",
      options: {
        "A": "Salesforce Knowledge is not enabled at the org level.",
        "B": "A Data Cloud license has not been provisioned.",
        "C": "Lightning Experience is disabled"
      },
      correctAnswer: "A",
      explanation: "Einstein Data Libraries only expose Salesforce Knowledge as a data source when Salesforce Knowledge is enabled at the org level."
    },
    {
      id: 14,
      question: "Which tool is used to route a Service Agent conversation to a human agent queue?",
      options: {
        "A": "Agent Configuration Tool",
        "B": "Outbound Omni-Channel Flow",
        "C": "Screen Flow"
      },
      correctAnswer: "B",
      explanation: "Outbound Omni-Channel Flows are used to escalate or route conversations from AI agents to human agent queues."
    },
    {
      id: 15,
      question: "Why is the Preview button disabled for a Flex prompt template?",
      options: {
        "A": "The template has not been activated in production.",
        "B": "The template lacks a defined system prompt.",
        "C": "Related records required for grounding were not selected"
      },
      correctAnswer: "C",
      explanation: "Flex prompt previews require record context. Without selecting related records, Salesforce disables the preview option."
    },
    {
      id: 16,
      question: "An Agentforce Service Agent cannot assist with a new custom Product Replacement object. What change is required?",
      options: {
        "A": "Enable the object in Agentforce configuration.",
        "B": "Grant Read access to the object via profiles or permission sets.",
        "C": "Add the object to Prompt Builder"
      },
      correctAnswer: "B",
      explanation: "Agents can only reason over objects they have at least Read access to through profiles or permission sets."
    },
    {
      id: 17,
      question: "What is the correct method to assign an action to an Agent in Agentforce?",
      options: {
        "A": "Assign directly in the action definition.",
        "B": "Assign the action to a Topic in Agent Builder.",
        "C": "Assign the action in Action Builder only"
      },
      correctAnswer: "B",
      explanation: "Actions must first be assigned to Topics in Agent Builder. Agents use Topics to determine which actions they can execute."
    },
    {
      id: 18,
      question: "Which object stores the conversation transcript between the customer and the agent?",
      options: {
        "A": "Case",
        "B": "Conversation Record",
        "C": "Messaging Session"
      },
      correctAnswer: "C",
      explanation: "In Salesforce digital engagement, the Messaging Session object stores the full conversation transcript between the customer and the agent. The Case may be associated, but the transcript itself resides in Messaging Session."
    },
    {
      id: 19,
      question: "A Salesforce Administrator wants to generate personalized, targeted emails using LLMs and reuse templates for different products and customers. Which solution approach should the admin leverage?",
      options: {
        "A": "Prompt Builder with Record Snapshots",
        "B": "Custom Apex-based email generation",
        "C": "Create a Sales Email prompt template type"
      },
      correctAnswer: "C",
      explanation: "Sales Email prompt templates are designed specifically to generate AI-powered, personalized email content using LLMs while allowing reuse across products and customers."
    },
    {
      id: 20,
      question: "Universal Containers wants its AI agent to answer customer questions with precise and up-to-date information. How does an Agentforce Data Library enable this?",
      options: {
        "A": "By automatically ingesting, indexing data, and creating retrievers for grounding.",
        "B": "By manually validating each customer query response.",
        "C": "It performs taxonomical classification for keyword search only"
      },
      correctAnswer: "A",
      explanation: "Agentforce Data Libraries automatically ingest and index data, and create retrievers that agents and prompts use for grounding responses with relevant, up-to-date information."
    },
    {
      id: 21,
      question: "How is Data Cloud leveraged by the Answer Questions with Knowledge action in Agentforce?",
      options: {
        "A": "Data Cloud transforms Knowledge articles into vector embeddings.",
        "B": "Knowledge articles are indexed and stored in Data Cloud for efficient retrieval.",
        "C": "Data Cloud is not required because articles are accessed directly from CRM"
      },
      correctAnswer: "B",
      explanation: "When Knowledge is used with Agentforce, articles are indexed and stored in Data Cloud, enabling efficient retrieval and grounding during agent interactions."
    },
    {
      id: 22,
      question: "Universal Containers wants post-call visibility into mentions of competitors, products, and custom phrases. Which feature should be used?",
      options: {
        "A": "Call Insights",
        "B": "Call Insights",
        "C": "Call Explorer"
      },
      correctAnswer: "B",
      explanation: "Call Insights analyzes call transcripts to surface mentions of competitors, products, and key phrases, providing actionable intelligence to sales teams."
    },
    {
      id: 23,
      question: "Universal Containers wants its AI agent to return responses quickly and minimize latency when grounding responses. Which retriever configuration should be prioritized?",
      options: {
        "A": "Define retriever filters to reduce search scope.",
        "B": "Increase the maximum number of retriever results.",
        "C": "Enable dynamic retriever mode to modify index structure at runtime"
      },
      correctAnswer: "A",
      explanation: "Well-defined retriever filters reduce the search scope, improving query efficiency and minimizing response latency during grounding."
    },
    {
      id: 24,
      question: "Universal Containers wants to test a large, repeatable number of utterances before deploying agents to production. What should the Agentforce Specialist recommend?",
      options: {
        "A": "Create a CSV file with test cases and upload to Agentforce Testing Center.",
        "B": "Manually test utterances in Agent Builder.",
        "C": "Create a CSV file with test cases in Agentforce Testing Center using the testing template"
      },
      correctAnswer: "C",
      explanation: "The Agentforce Testing Center supports bulk and repeatable testing through CSV uploads, making it ideal for large-scale, pre-production agent validation."
    },
    {
      id: 25,
      question: "All sales users share the same profile, but one user cannot see the generative AI field icon next to a summary field. What is the most likely cause?",
      options: {
        "A": "The user's browser does not support JavaScript.",
        "B": "The user lacks the Prompt Template User permission set",
        "C": "The user lacks the Prompt Template User permission set"
      },
      correctAnswer: "B",
      explanation: "Visibility of generative AI field actions depends on the Prompt Template User permission set. Without it, the AI icon does not appear even if the profile is the same."
    },
    {
      id: 26,
      question: "Universal Containers launched a pilot with Agentforce Agents. How should the Agentforce Specialist monitor agent usability and action assignment?",
      options: {
        "A": "Review individual user chat logs manually.",
        "B": "Use Agent Analytics for built-in insights.",
        "C": "Query agent logs using the Metadata API"
      },
      correctAnswer: "B",
      explanation: "Agent Analytics provides built-in insights into agent performance, usability, action usage, and user interactions, making it the correct monitoring tool."
    },
    {
      id: 27,
      question: "Universal Containers (UC) users are complaining that agent answers are not satisfactory. The agent is using PDF files as a knowledge source. How should UC troubleshoot this issue?",
      options: {
        "A": "Check PDF file upload size and format.",
        "B": "Verify the retriever configuration is using default settings.",
        "C": "Verify the retriever's filter criteria and data source connection."
      },
      correctAnswer: "C",
      explanation: "Poor answers from PDF-based grounding are commonly caused by overly restrictive retriever filters or broken data source connections. Verifying retriever filters and connectivity ensures relevant documents are being retrieved and grounded correctly."
    },
    {
      id: 28,
      question: "Universal Containers wants to leverage the Record Snapshots grounding feature in a prompt template. What preparations are required?",
      options: {
        "A": "Configure the page layout of the master record type.",
        "B": "Enable Record Snapshots in Prompt Builder settings.",
        "C": "Create a field set for all the fields to be grounded."
      },
      correctAnswer: "A",
      explanation: "Record Snapshots use the page layout of the master record type to determine which fields are available for grounding. Proper page layout configuration is required before using this feature."
    },
    {
      id: 29,
      question: "How does the AI retriever function within Data Cloud?",
      options: {
        "A": "It searches indexed content contextually to retrieve relevant documents.",
        "B": "It stores raw data from multiple sources.",
        "C": "It automatically extracts and reformats raw data from diverse sources into standardized datasets for use in historical trend analysis and forecasting."
      },
      correctAnswer: "A",
      explanation: "The AI retriever searches indexed content contextually to retrieve the most relevant documents, which are then used to ground AI responses with accurate and verifiable information."
    },
    {
      id: 30,
      question: "Universal Containers currently tracks Leads with a custom object. UC is preparing to implement the Sales Development Representative (SDR) Agent. Which consideration should UC keep in mind?",
      options: {
        "A": "Agentforce SDR only supports the standard Lead object.",
        "B": "Agentforce SDR can use any custom object configured similarly to Leads.",
        "C": "Agentforce SDR only supports custom objects associated with Accounts."
      },
      correctAnswer: "A",
      explanation: "The Agentforce SDR is designed to work with the standard Lead object. Custom Lead objects are not supported, which is a critical consideration before implementation."
    },
    {
      id: 31,
      question: "Universal Containers is planning a marketing email about products that most closely match a customer's expressed interests. What should the company use to generate this email?",
      options: {
        "A": "Prompt Builder with a Sales Email template type",
        "B": "Custom sales email prompt templates",
        "C": "Standard email marketing template using Apex or flows for matching interest in products."
      },
      correctAnswer: "B",
      explanation: "Custom sales email prompt templates allow grounding with customer interests and product data, enabling personalized, AI-generated marketing emails."
    },
    {
      id: 32,
      question: "Universal Containers implements three custom actions to get three distinct types of sales summaries for its users. Users are complaining that they are not getting the right summary based on their utterances. What should the Agentforce Specialist investigate as the root cause?",
      options: {
        "A": "Ensure Action Instructions are unique and clearly differentiated.",
        "B": "Reduce the number of custom actions to avoid confusion.",
        "C": "Review that the custom action is assigned to an Agent."
      },
      correctAnswer: "A",
      explanation: "If multiple actions have similar or overlapping instructions, the LLM may invoke the wrong action. Ensuring unique and clearly differentiated Action Instructions is critical."
    },
    {
      id: 33,
      question: "Universal Containers plans to enhance the customer support team's productivity using AI. Which specific use case necessitates the use of Prompt Builder?",
      options: {
        "A": "Organizing customer complaint data.",
        "B": "Creating a draft of a support bulletin post for new product patches.",
        "C": "Creating a draft of a support bulletin post for new product patches."
      },
      correctAnswer: "B",
      explanation: "Prompt Builder is used for generative content creation such as drafting support bulletins, emails, or summaries, making it the correct choice for this use case."
    },
    {
      id: 34,
      question: "An Agentforce Specialist is creating a custom action for Agentforce. Which setting should the Specialist test and iterate on to ensure the action performs as expected?",
      options: {
        "A": "Action Instructions",
        "B": "Action Input/Output types",
        "C": "Action Input"
      },
      correctAnswer: "A",
      explanation: "Action Instructions guide the LLM on when and how to invoke the action. Iterating on these instructions is essential to ensure correct and consistent behavior."
    },
    {
      id: 35,
      question: "Universal Containers deployed the new Agentforce Sales Development Representative (SDR) into production, but sales reps are saying they cannot find it. What is causing this issue?",
      options: {
        "A": "The SDR Agent requires a separate app page.",
        "B": "Sales rep user profiles are missing the Use SDR Agent permission set.",
        "C": "Sales rep user profiles are missing the Allow SDR Agent permission."
      },
      correctAnswer: "B",
      explanation: "Access to the SDR Agent is controlled via a permission set. If users cannot see the agent, they are most likely missing the required 'Use SDR Agent' permission set."
    },
    {
      id: 36,
      question: "A sales manager is using Agent Assistant to streamline their daily tasks. They ask the agent to \"Show me a list of my open opportunities.\" How does the large language model (LLM) in Agentforce identify and execute the action to show the sales manager a list of open opportunities?",
      options: {
        "A": "The LLM uses a planner to interpret intent, identify relevant topics and actions, build a plan, and execute the necessary actions.",
        "B": "The LLM retrieves the action from a predefined list based on keyword matching.",
        "C": "Using a dialog pattern, the LLM matches the user query to the available topic and action and then performs the action."
      },
      correctAnswer: "A",
      explanation: "Agentforce uses an LLM-driven planner that dynamically interprets user intent, identifies relevant topics and actions, builds a plan, and executes the necessary actions to retrieve and present data."
    },
    {
      id: 37,
      question: "Universal Containers (UC) wants to use Flow to bring data from unified Data Cloud objects to prompt templates. Which type of flow should UC use?",
      options: {
        "A": "Record-triggered flow",
        "B": "Record-triggered flows",
        "C": "Template-triggered prompt flow"
      },
      correctAnswer: "C",
      explanation: "Template-triggered prompt flows are specifically designed to pass data from Data Cloud objects into prompt templates at runtime."
    },
    {
      id: 38,
      question: "An Agentforce Agent has been developed with multiple topics and Agent Actions that use flows and Apex. Which options are available for deploying these to production?",
      options: {
        "A": "Deploy using change sets or Salesforce CLI / Metadata API.",
        "B": "Deploy flows and Apex in change sets, then manually recreate agents.",
        "C": "Deploy flows and Apex normally and manually recreate agent-related items in production."
      },
      correctAnswer: "A",
      explanation: "Agentforce metadata, along with flows and Apex, can be deployed using standard Salesforce deployment mechanisms such as Change Sets or the Salesforce CLI/Metadata API."
    },
    {
      id: 39,
      question: "After configuring and saving a Salesforce Agentforce Data Library (regardless of the data source), which components are automatically created and available in Data Cloud?",
      options: {
        "A": "A data storage, a visualization dashboard, and a predictive model.",
        "B": "A data stream, a search index, and a retriever.",
        "C": "A data pipeline, an indexing engine, and a query processor"
      },
      correctAnswer: "B",
      explanation: "When an Agentforce Data Library is created, Data Cloud automatically provisions a data stream, builds a search index, and creates a retriever for grounding AI responses."
    },
    {
      id: 40,
      question: "An Agentforce Specialist is tasked with creating a prompt template for a sales team that generates a summary of all related opportunities for a given Account. Which grounding technique should be used?",
      options: {
        "A": "Prompt templates can directly reference standard related lists using merge fields.",
        "B": "Use API calls to fetch related opportunity data.",
        "C": "Use formula fields to reference the Einstein related list of opportunities."
      },
      correctAnswer: "A",
      explanation: "Prompt templates can directly reference standard related lists using merge fields, making this the correct and supported approach."
    },
    {
      id: 41,
      question: "Once a data source is chosen for an Agentforce Data Library, what is true about changing that data source later?",
      options: {
        "A": "The data source can be changed by re-configuring the library.",
        "B": "The data source can be changed by migrating to a new Data Library.",
        "C": "The data source cannot be changed after it is selected."
      },
      correctAnswer: "C",
      explanation: "After a data source is selected for a Data Library, it is locked and cannot be changed. A new Data Library must be created to use a different source."
    },
    {
      id: 42,
      question: "Universal Containers (UC) wants to make a marketing newsletter and directly use data from five unrelated objects (two standard and three custom) in a prompt template. How should UC accomplish this?",
      options: {
        "A": "Use a Flex prompt template type to support multiple unrelated object inputs.",
        "B": "Create five separate prompt templates and merge outputs.",
        "C": "Create a prompt template-triggered flow to access data from the five objects."
      },
      correctAnswer: "A",
      explanation: "Flex templates support multiple, unrelated object inputs, making them ideal for scenarios requiring data from several unrelated standard and custom objects."
    },
    {
      id: 43,
      question: "Based on the user utterance, \"Show me all the customers in New York,\" which standard Agent action will the planner service use?",
      options: {
        "A": "Query Records",
        "B": "Find Records",
        "C": "Select Records"
      },
      correctAnswer: "A",
      explanation: "The Query Records action is used when filtering records based on conditions such as location or field values."
    },
    {
      id: 44,
      question: "Universal Containers recently added a custom flow for processing returns and created a new Agent Action. What action is required to ensure the Agentforce Service Agent can run this flow?",
      options: {
        "A": "Assign the Flow User permission to the Agentforce Service Agent user.",
        "B": "Enable Flow execution in Agentforce settings.",
        "C": "Assign the Run Flows permission to the Agentforce Agent user."
      },
      correctAnswer: "C",
      explanation: "Agentforce agents require the Run Flows permission to execute flows as part of Agent Actions."
    },
    {
      id: 45,
      question: "A support team handles a high volume of chat interactions and needs fast, accurate responses grounded in the organization's knowledge base. Which Agentforce for Service feature should they use?",
      options: {
        "A": "Einstein Service Replies",
        "B": "Einstein Chat Responses",
        "C": "Einstein Knowledge Recommendations"
      },
      correctAnswer: "A",
      explanation: "Einstein Service Replies generates AI-driven responses grounded in knowledge articles, ensuring accuracy and consistency in customer support."
    },
    {
      id: 46,
      question: "Universal Containers (UC) has configured Agentforce Data Library using Knowledge articles. When testing in Agent Builder and the Experience Cloud site, the agent is not responding with grounded Knowledge article information. However, when tested in Prompt Builder, the response returns correctly. What should UC do to troubleshoot the issue?",
      options: {
        "A": "Reindex the Knowledge articles in Data Cloud.",
        "B": "Grant the Agentforce Service Agent user access to the prompt template.",
        "C": "Ensure the Data Cloud User permission set has been assigned to the Agentforce Service Agent User."
      },
      correctAnswer: "B",
      explanation: "If responses work in Prompt Builder but not in Agent Builder or Experience Cloud, the issue is typically permission-related. The Agentforce Service Agent user must have access to the prompt template used for grounding Knowledge articles."
    },
    {
      id: 47,
      question: "A sales manager needs to contact leads at scale with hyper-relevant solutions and customized communications in the most efficient manner possible. Which Salesforce solution best suits this need?",
      options: {
        "A": "Einstein Lead Follow-Up",
        "B": "Prompt Builder",
        "C": "Prompt Builder"
      },
      correctAnswer: "A",
      explanation: "Einstein Lead Follow-Up automates personalized outreach to leads at scale, generating hyper-relevant follow-up messages using AI."
    },
    {
      id: 48,
      question: "Before deploying a new custom Agent action, which testing approach should the Agentforce Specialist use?",
      options: {
        "A": "Deploy directly to production and monitor results.",
        "B": "Test real-world utterances in Model Playground or Agent Builder.",
        "C": "Submit a test request to Salesforce Support."
      },
      correctAnswer: "B",
      explanation: "Model Playground allows testing and evaluation of multiple real-world user utterances against the model to validate intent recognition and action selection."
    },
    {
      id: 49,
      question: "Universal Containers wants to find records similar to a given record in an Agent action. How should UC accomplish this?",
      options: {
        "A": "Write custom Apex to implement similarity matching.",
        "B": "Use the standard Agent action 'Find Similar Records'.",
        "C": "Create a custom flow to query related records."
      },
      correctAnswer: "B",
      explanation: "Salesforce provides a standard Agent action for finding similar records, making it unnecessary to build custom Apex or Flow logic."
    },
    {
      id: 50,
      question: "What is the difference between Prompt Template Manager and Prompt Template User permission sets?",
      options: {
        "A": "Both permission sets provide identical capabilities.",
        "B": "Template Manager allows creation, Template User allows execution.",
        "C": "Template User allows creation, Template Manager allows execution."
      },
      correctAnswer: "B",
      explanation: "Prompt Template Manager allows users to create and manage templates, while Prompt Template User enables execution of those templates."
    },
    {
      id: 51,
      question: "What is the minimum test code coverage requirement for Apex invoked by Agent actions?",
      options: {
        "A": "50% code coverage",
        "B": "75% code coverage",
        "C": "No coverage requirement for Agent Apex"
      },
      correctAnswer: "B",
      explanation: "All Apex deployed to production must meet Salesforce's 75% code coverage requirement, including Apex invoked by Agent Actions."
    },
    {
      id: 52,
      question: "Universal Containers wants to allow users to trigger backend system integrations via natural language queries. What should UC implement?",
      options: {
        "A": "A custom Agent action calling an existing autolaunched flow.",
        "B": "A REST API endpoint for direct integration.",
        "C": "A custom Apex class exposed as a web service."
      },
      correctAnswer: "A",
      explanation: "A custom Agent action calling an existing autolaunched flow allows natural language queries to trigger backend system integrations."
    },
    {
      id: 53,
      question: "What should be considered when using Record Snapshots for grounding?",
      options: {
        "A": "All fields from the record are included regardless of content.",
        "B": "Empty fields and sections are automatically filtered out.",
        "C": "Custom fields are excluded by default."
      },
      correctAnswer: "B",
      explanation: "Record Snapshots automatically filter out empty fields and sections to ensure only meaningful data is passed to the prompt."
    },
    {
      id: 54,
      question: "Which integration approach is recommended for connecting external systems to Salesforce generative AI capabilities?",
      options: {
        "A": "Use XML APIs for all integrations.",
        "B": "Use the REST API for integration.",
        "C": "Use SOAP APIs exclusively."
      },
      correctAnswer: "B",
      explanation: "The REST API is the recommended approach for integrating external systems with Salesforce generative AI capabilities."
    },
    {
      id: 55,
      question: "What benefit does enabling 'Enrich event logs with conversation data' provide for Agentforce specialists?",
      options: {
        "A": "Unlimited data retention for all conversations.",
        "B": "Automatic transcription of voice interactions.",
        "C": "Session-level conversation data visibility for up to seven days."
      },
      correctAnswer: "C",
      explanation: "Enabling 'Enrich event logs with conversation data' allows Agentforce Specialists to view recent session-level conversation data, including user inputs and agent responses, retained for up to seven days."
    },
    {
      id: 56,
      question: "How does the reasoning engine handle requests with multiple possible actions?",
      options: {
        "A": "It randomly selects one of the available actions.",
        "B": "It interprets intent, identifies relevant topics and actions, and determines execution order.",
        "C": "It requires manual user confirmation for each action."
      },
      correctAnswer: "B",
      explanation: "The LLM interprets user intent, identifies the most relevant topic and actions, and determines the appropriate execution order to fulfill the request."
    },
    {
      id: 57,
      question: "For which use case are Agentforce Data Libraries best suited?",
      options: {
        "A": "Real-time transactional data processing.",
        "B": "Grounding AI responses in curated, indexed documents like policies and procedures.",
        "C": "Storing unstructured customer feedback."
      },
      correctAnswer: "B",
      explanation: "Agentforce Data Libraries are optimized for grounding AI responses in curated, indexed, and continuously updated documents such as policies and procedures."
    },
    {
      id: 58,
      question: "What is the purpose of the 'Draft or Revise Sales Email' standard Agent action?",
      options: {
        "A": "Archive completed sales emails.",
        "B": "Generate personalized email content using historical communications and customer context.",
        "C": "Schedule emails for automatic delivery."
      },
      correctAnswer: "B",
      explanation: "The 'Draft or Revise Sales Email' standard Agent action generates personalized email content using historical communications and customer context."
    },
    {
      id: 59,
      question: "What is the first step when implementing a new Agentforce Data Library?",
      options: {
        "A": "Select a data source to ingest.",
        "B": "Configure search index filters.",
        "C": "Create retriever queries."
      },
      correctAnswer: "A",
      explanation: "The first step is selecting the appropriate data source for ingestion, which could be Knowledge articles, PDFs, or custom objects."
    },
    {
      id: 60,
      question: "How should organizations approach iterative refinement of prompt templates?",
      options: {
        "A": "Deploy once and monitor without changes.",
        "B": "Test outputs, analyze mismatches, refine instructions, and retest iteratively.",
        "C": "Replace templates entirely if results are unsatisfactory."
      },
      correctAnswer: "B",
      explanation: "Iterative refinement involving testing outputs, analyzing mismatches, refining instructions, and retesting is the most effective approach for improving prompt template accuracy."
    }
  ]
};
