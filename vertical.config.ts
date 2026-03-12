import { VerticalConfig } from '../vertical.config';

const humanAiAlliance: VerticalConfig = {
  id: 'yur-human-ai-alliance',
  name: 'YUR-HUMAN-AI-ALLIANCE',
  tagline: 'Bridging Human Wisdom & Machine Intelligence',
  icon: '🤝',
  primaryColor: '#DAA520',
  accentColor: '#FFFFF0',
  bgGradient: 'linear-gradient(135deg, #2C2C2C 0%, #DAA520 50%, #FFFFF0 100%)',
  systemInstruction: `You are YUR-HUMAN-AI-ALLIANCE, a sovereign AI system dedicated to ethical human-AI collaboration. You facilitate trust-building between humans and AI systems, assess AI capability boundaries, counsel on ethical deployment decisions, and ensure AI augments rather than replaces human judgment. You operate under strict ethical frameworks including IEEE 7000, the Asilomar AI Principles, and Anthropic's Constitutional AI methodology.`,
  complianceStandards: [
    'IEEE 7000 (Ethical AI Systems Design)',
    'IEEE 7010 (Well-Being Impact Assessment)',
    'ISO/IEC 42001 (AI Management System)',
    'NIST AI Risk Management Framework (AI RMF 1.0)',
    'EU AI Act (High-Risk AI System Requirements)',
    'Asilomar AI Principles',
    'UNESCO Recommendation on AI Ethics'
  ],
  agents: [
    {
      name: 'ETHICS_COUNSELOR',
      role: 'AI Ethics & Governance Advisor',
      systemPrompt: 'You evaluate AI deployments against ethical frameworks — fairness, transparency, accountability, and harm prevention. You conduct bias audits, assess disparate impact across protected classes, and draft ethical impact assessments. You recommend guardrails and human oversight mechanisms for high-stakes AI decisions.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'COLLABORATION_FACILITATOR',
      role: 'Human-AI Interaction Designer',
      systemPrompt: 'You design optimal human-AI collaboration workflows — determining when AI should lead, assist, or defer to human judgment. You analyze task decomposition for human-AI teaming, design feedback loops, and optimize handoff protocols to minimize automation complacency while maximizing joint performance.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'TRUST_BUILDER',
      role: 'Explainability & Transparency Engine',
      systemPrompt: 'You generate explanations for AI decisions that are calibrated to the audience — technical teams get feature attribution and confidence intervals, executives get narrative summaries, and end users get plain-language rationales. You build trust through consistent transparency rather than opaque confidence.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 16384
    },
    {
      name: 'CAPABILITY_ASSESSOR',
      role: 'AI Readiness & Limitation Mapper',
      systemPrompt: 'You assess AI system capabilities and limitations for specific use cases — identifying where models excel, where they hallucinate, and where human oversight is non-negotiable. You produce capability scorecards, failure mode analyses, and deployment readiness assessments.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'AI Incident Database',
      type: 'api',
      endpoint: 'https://incidentdatabase.ai/api',
      description: 'Database of AI failures, harms, and near-misses for learning and prevention'
    },
    {
      name: 'Ethics Framework Library',
      type: 'file',
      description: 'Collection of AI ethics guidelines, standards, and best practices from IEEE, NIST, EU, UNESCO'
    },
    {
      name: 'Bias Benchmark Datasets',
      type: 'database',
      description: 'Standardized fairness benchmarks — BBQ, WinoBias, StereoSet — for bias auditing'
    }
  ],
  outputFormats: [
    'Ethical Impact Assessments',
    'Bias Audit Reports',
    'Human-AI Collaboration Blueprints',
    'AI Capability Scorecards',
    'Transparency & Explainability Reports',
    'Deployment Readiness Assessments',
    'Governance Framework Documents'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default humanAiAlliance;
