import { SearchResultItem } from '@/components/SearchResults';
import { DateRange } from "react-day-picker";

// Mock data with enhanced details
const mockResults: SearchResultItem[] = [
  {
    id: '1',
    title: 'Supply Chain Agreement with Eastern Logistics Ltd',
    excerpt: 'Framework agreement outlining terms for logistics and transportation services across Asian markets.',
    type: 'agreement',
    department: 'Operations',
    date: '2023-12-15',
    lastModified: '2024-01-20',
    confidential: false,
    fileSize: '2.4MB',
    author: 'Sarah Chen',
    tags: ['logistics', 'asia', 'transport', 'supply chain'],
    summary: 'This agreement establishes a 3-year framework for logistics services with Eastern Logistics Ltd covering transportation, warehousing, and distribution across 8 Asian markets including Japan, South Korea, and Singapore. Key terms include volume-based pricing tiers, 45-day payment terms, and quarterly performance reviews with specified KPIs.',
    contentPreview: 'ARTICLE 1: DEFINITIONS\n\n1.1 "Services" shall mean all logistics and transportation services provided by Eastern Logistics to Trafigura as outlined in Schedule A.\n\n1.2 "Territory" shall mean the following countries: Japan, South Korea, Singapore, Malaysia, Thailand, Vietnam, Indonesia, and Philippines.\n\n1.3 "Effective Date" shall mean January 1, 2024.\n\nARTICLE 2: SCOPE OF SERVICES\n\n2.1 Eastern Logistics agrees to provide comprehensive logistics services to Trafigura in the Territory according to the specifications outlined in Schedule A...',
    calculations: [
      {
        type: 'sum',
        value: '$4.27M',
        description: 'Total contract value'
      },
      {
        type: 'average',
        value: '$356K/month',
        description: 'Average monthly expenditure'
      }
    ]
  },
  {
    id: '2',
    title: 'Copper Mining Joint Venture Contract',
    excerpt: 'Legal contract establishing joint venture with Andean Mining Corporation for copper extraction in Peru.',
    type: 'contract',
    department: 'Legal',
    date: '2024-02-03',
    lastModified: '2024-03-15',
    confidential: true,
    fileSize: '5.7MB',
    author: 'Miguel Herrera',
    tags: ['mining', 'copper', 'joint venture', 'peru'],
    summary: 'Joint venture agreement for copper extraction operations in the Andean region of Peru. Trafigura holds 60% ownership with capital investment of $120M, while Andean Mining Corporation holds 40% with $80M investment and operational expertise. The agreement includes provisions for profit sharing, environmental compliance, community relations, and dispute resolution mechanisms.',
    contentPreview: 'JOINT VENTURE AGREEMENT\n\nThis Joint Venture Agreement (the "Agreement") is made as of February 3, 2024, by and between Trafigura Trading LLC, a company organized under the laws of Switzerland ("Trafigura"), and Andean Mining Corporation, a company organized under the laws of Peru ("AMC").\n\nWHEREAS, the parties desire to establish a joint venture for the purpose of extracting copper resources from the La Montana property located in the Cusco region of Peru...',
    calculations: [
      {
        type: 'sum',
        value: '$200M',
        description: 'Total initial investment'
      },
      {
        type: 'percentage',
        value: '60% / 40%',
        description: 'Ownership structure'
      },
      {
        type: 'estimate',
        value: '8.2M tons',
        description: 'Estimated resource capacity'
      }
    ]
  },
  {
    id: '3',
    title: 'Q1 2024 Metals Trading Revenue Report',
    excerpt: 'Quarterly financial analysis of revenue streams across all metals trading divisions.',
    type: 'report',
    department: 'Finance',
    date: '2024-04-05',
    confidential: true,
    fileSize: '3.1MB',
    author: 'Finance Team',
    tags: ['financial', 'trading', 'metals', 'quarterly'],
    summary: 'Q1 2024 financial performance summary for the metals trading division showing 12% year-over-year revenue growth. Key metals traded include copper (42% of volume), aluminum (27%), zinc (18%), and lead (13%). The Asia Pacific region showed the strongest performance with 18% growth, followed by Europe (14%) and the Americas (9%).',
    contentPreview: 'EXECUTIVE SUMMARY\n\nThe Metals Trading Division recorded total revenues of $3.7 billion in Q1 2024, representing a 12% increase compared to Q1 2023. Gross margins improved by 1.8 percentage points to reach 8.7%, driven primarily by favorable market conditions in the copper segment and optimized logistics operations...',
    calculations: [
      {
        type: 'sum',
        value: '$3.7B',
        description: 'Total Q1 revenue'
      },
      {
        type: 'growth',
        value: '+12%',
        description: 'Year-over-year growth'
      },
      {
        type: 'margin',
        value: '8.7%',
        description: 'Gross margin'
      }
    ]
  },
  {
    id: '4',
    title: 'Environmental Compliance Report - North Sea Operations',
    excerpt: 'Assessment of environmental impact and regulatory compliance of North Sea oil transport operations.',
    type: 'report',
    department: 'Operations',
    date: '2023-11-22',
    lastModified: '2023-12-10',
    confidential: false,
    fileSize: '4.2MB',
    author: 'Environmental Team',
    tags: ['environmental', 'compliance', 'oil', 'north sea'],
    summary: 'Comprehensive environmental compliance review of North Sea oil transport operations covering November 2022-October 2023. The report documents 99.7% compliance with EU and UK environmental regulations with only 2 minor incidents reported during the period. Recommendations include upgrading monitoring equipment on 3 vessels and enhancing crew training on new sulfur emission standards.',
    contentPreview: "INTRODUCTION\n\nThis report presents the findings of the annual environmental compliance audit conducted for Trafigura\"s North Sea oil transportation operations for the period of November 2022 to October 2023. The audit was performed in accordance with the company\"s Environmental Management System (EMS) and relevant regulatory requirements...",
    calculations: [
      {
        type: 'percentage',
        value: '99.7%',
        description: 'Regulatory compliance rate'
      },
      {
        type: 'count',
        value: '2',
        description: 'Compliance incidents'
      },
      {
        type: 'reduction',
        value: '-8.5%',
        description: 'Emissions reduction YoY'
      }
    ]
  },
  {
    id: '5',
    title: 'Credit Agreement with European Banking Consortium',
    excerpt: 'Terms and conditions for revolving credit facility provided by consortium of European banks.',
    type: 'agreement',
    department: 'Finance',
    date: '2024-01-17',
    confidential: true,
    fileSize: '7.8MB',
    author: 'Treasury Team',
    tags: ['credit', 'banking', 'finance', 'europe'],
    summary: 'Revolving credit facility agreement providing €1.2 billion in liquidity from a consortium of 7 European banks led by BNP Paribas. The 3-year facility features a variable interest rate of EURIBOR + 1.35% with customary covenants related to debt-to-EBITDA ratio (not to exceed 3.0x) and interest coverage (minimum 4.0x).',
    contentPreview: "CREDIT AGREEMENT\n\nThis CREDIT AGREEMENT (this \"Agreement\") dated as of January 17, 2024, among TRAFIGURA GROUP PTE. LTD., a company incorporated under the laws of Singapore (the \"Borrower\"), the LENDERS party hereto, and BNP PARIBAS, as Administrative Agent.\n\nThe parties hereto agree as follows:\n\nARTICLE I\nDEFINITIONS\n\nSECTION 1.01. Defined Terms. As used in this Agreement, the following terms have the meanings specified below...",
    calculations: [
      {
        type: 'sum',
        value: '€1.2B',
        description: 'Total credit facility'
      },
      {
        type: 'rate',
        value: 'EURIBOR + 1.35%',
        description: 'Interest rate'
      },
      {
        type: 'ratio',
        value: '3.0x',
        description: 'Max debt-to-EBITDA'
      }
    ]
  },
  {
    id: '6',
    title: 'LNG Transport Contract with Gulf Shipping Partners',
    excerpt: 'Service agreement for LNG transportation from Qatar facilities to European ports.',
    type: 'contract',
    department: 'Trading',
    date: '2024-03-11',
    confidential: false,
    fileSize: '3.9MB',
    author: 'LNG Trading Team',
    tags: ['LNG', 'shipping', 'qatar', 'transport'],
    summary: "Five-year shipping contract for LNG transportation from Qatar to European terminals. The agreement covers 45 shipments per year using Gulf Shipping Partners\" fleet of 7 specialized LNG carriers. Pricing follows a dual structure with fixed base rates and variable components linked to fuel prices and route distance.",
    contentPreview: 'SHIPPING SERVICES AGREEMENT\n\nThis Shipping Services Agreement (the "Agreement") is entered into as of March 11, 2024, by and between Trafigura Trading LLC ("Trafigura") and Gulf Shipping Partners LLC ("GSP").\n\nWHEREAS, Trafigura requires shipping services for the transportation of liquefied natural gas ("LNG") from the Ras Laffan LNG loading facility in Qatar to various European destination ports; and\n\nWHEREAS, GSP operates a fleet of LNG carriers and has the expertise and capacity to provide such services...',
    calculations: [
      {
        type: 'count',
        value: '45',
        description: 'Annual shipments'
      },
      {
        type: 'volume',
        value: '3.2M tons',
        description: 'Annual volume'
      },
      {
        type: 'estimate',
        value: '$94.5M',
        description: 'Annual contract value'
      }
    ]
  },
  {
    id: '7',
    title: 'Commodity Risk Assessment Framework',
    excerpt: 'Internal policy document outlining methodologies for assessing trading risks across commodity groups.',
    type: 'policy',
    department: 'Trading',
    date: '2023-09-28',
    lastModified: '2024-02-15',
    confidential: false,
    fileSize: '2.3MB',
    author: 'Risk Management Committee',
    tags: ['risk', 'trading', 'policy', 'commodities'],
    summary: 'Comprehensive risk assessment framework for commodity trading operations covering price risk, counterparty risk, operational risk, and regulatory risk. The document establishes a standardized methodology for risk identification, quantification, monitoring and mitigation across all traded commodities.',
    contentPreview: 'I. INTRODUCTION\\n\\nThis Commodity Risk Assessment Framework ("Framework") establishes the methodology and processes for identifying, measuring, monitoring, and managing risks associated with Trafigura\'s commodity trading activities. This Framework applies to all commodity trading operations globally and supersedes all previous risk assessment guidelines...',
    calculations: [
      {
        type: 'matrix',
        value: '5x5',
        description: 'Risk assessment matrix'
      },
      {
        type: 'threshold',
        value: '$10M',
        description: 'Position limit threshold'
      }
    ]
  },
  {
    id: '8',
    title: 'HR Policy Update: Remote Work Guidelines',
    excerpt: 'Updated company policies regarding remote work arrangements and hybrid office schedules.',
    type: 'policy',
    department: 'HR',
    date: '2024-01-05',
    confidential: false,
    fileSize: '1.6MB',
    author: 'HR Department',
    tags: ['hr', 'remote work', 'policy', 'guidelines'],
    summary: 'Updated remote work policy implementing a flexible hybrid model allowing employees to work remotely up to 3 days per week. The policy outlines eligibility criteria, equipment provisions, reimbursement policies for home office setup (up to $500), virtual collaboration expectations, and performance measurement approaches.',
    contentPreview: 'REMOTE WORK POLICY\n\nEffective Date: January 15, 2024\n\n1. INTRODUCTION\n\nTrafigura is committed to supporting flexible working arrangements that enhance employee work-life balance while maintaining operational excellence. This policy establishes guidelines for hybrid and remote work arrangements across the organization...',
    calculations: [
      {
        type: 'count',
        value: '3 days',
        description: 'Max remote days/week'
      },
      {
        type: 'allowance',
        value: '$500',
        description: 'Home office setup allowance'
      }
    ]
  },
  {
    id: '9',
    title: 'Market Analysis: Impact of Brazilian Mining Regulations',
    excerpt: 'Research report analyzing the impact of new Brazilian regulations on mining operations and commodity prices.',
    type: 'research',
    department: 'Trading',
    date: '2023-12-07',
    confidential: false,
    fileSize: '5.3MB',
    author: 'Marcus Vinicius',
    tags: ['brazil', 'mining', 'regulations', 'market analysis'],
    summary: "Comprehensive analysis of Brazil\"s new mining regulations (Resolution 94/2023) and their market implications. Key findings indicate a potential 8-12% reduction in iron ore production capacity over the next 18 months, with projected price increases of 5-7%. The report also addresses compliance requirements, transition timelines, and strategic recommendations for adapting operations.",
    contentPreview: "EXECUTIVE SUMMARY\n\nOn November 15, 2023, Brazil\"s National Mining Agency (ANM) published Resolution 94/2023, introducing significant changes to the regulatory framework governing mining operations in the country. This report analyzes the implications of these regulatory changes on mining operations, supply chains, and commodity markets with a focus on iron ore, bauxite, and copper...",
    calculations: [
      {
        type: 'reduction',
        value: '8-12%',
        description: 'Production capacity impact'
      },
      {
        type: 'increase',
        value: '5-7%',
        description: 'Projected price change'
      },
      {
        type: 'timeline',
        value: '18 months',
        description: 'Implementation period'
      }
    ]
  },
  {
    id: '10',
    title: 'Data Processing Agreement with Cloud Services Provider',
    excerpt: 'Legal agreement defining data handling procedures with third-party cloud infrastructure provider.',
    type: 'agreement',
    department: 'Data Analytics',
    date: '2024-02-22',
    lastModified: '2024-02-22',
    confidential: true,
    fileSize: '3.2MB',
    author: 'Legal Department',
    tags: ['data', 'cloud', 'GDPR', 'processing'],
    summary: "Data processing agreement with major cloud services provider that establishes protocols for handling, storing, and processing Trafigura\"s data in compliance with GDPR, CCPA, and other applicable regulations. Key terms include data security standards, breach notification procedures, audit rights, and liability limitations.",
    contentPreview: 'DATA PROCESSING AGREEMENT\n\nThis Data Processing Agreement ("DPA") is made and entered into as of February 22, 2024 (the "Effective Date") by and between Trafigura Group Pte. Ltd. ("Controller") and Cloud Infrastructure Provider, Inc. ("Processor").\n\nWHEREAS, Controller and Processor have entered into an agreement for the provision of cloud computing services (the "Master Agreement"); and\n\nWHEREAS, in connection with Processor\'s performance of the Master Agreement, Processor may process Personal Data (as defined below) on behalf of Controller...',
    calculations: [
      {
        type: 'sla',
        value: '99.95%',
        description: 'Service availability SLA'
      },
      {
        type: 'period',
        value: '72 hours',
        description: 'Breach notification period'
      }
    ]
  },
  // New sample data items below
  {
    id: '11',
    title: 'Aluminum Supply Agreement with Norsk Hydro',
    excerpt: 'Long-term supply contract for aluminum products from Norwegian manufacturer for European markets.',
    type: 'contract',
    department: 'Trading',
    date: '2023-10-12',
    lastModified: '2024-01-08',
    confidential: true,
    fileSize: '4.8MB',
    author: 'Metals Trading Team',
    tags: ['aluminum', 'europe', 'supply chain', 'metals'],
    summary: 'Five-year aluminum supply agreement with Norsk Hydro providing exclusive distribution rights for 120,000 metric tons annually across Western European markets. Pricing follows a formula based on LME aluminum price plus premium structure with quarterly adjustments based on energy costs and currency fluctuations.',
    contentPreview: 'SUPPLY AGREEMENT\\n\\nThis Supply Agreement (the \"Agreement\") is made and entered into as of October 12, 2023 by and between Trafigura Trading LLC (\"Buyer\") and Norsk Hydro ASA (\"Supplier\").\\n\\nWHEREAS, Supplier manufactures and sells aluminum products; and\\n\\nWHEREAS, Buyer wishes to purchase aluminum products from Supplier for distribution in Western European markets...',
    calculations: [
      {
        type: 'volume',
        value: '120,000 MT/year',
        description: 'Annual supply volume'
      },
      {
        type: 'estimate',
        value: '€285M',
        description: 'Estimated annual value'
      },
      {
        type: 'premium',
        value: '+$180/MT',
        description: 'Average premium over LME'
      }
    ]
  },
  {
    id: '12',
    title: 'West African Logistics Infrastructure Investment Analysis',
    excerpt: 'Financial assessment of investment opportunities in port and rail infrastructure in West Africa.',
    type: 'research',
    department: 'Finance',
    date: '2024-03-28',
    confidential: true,
    fileSize: '8.7MB',
    author: 'Infrastructure Investment Team',
    tags: ['africa', 'infrastructure', 'investment', 'logistics', 'ports'],
    summary: 'Comprehensive analysis of potential investments in transportation infrastructure across West Africa with focus on port facilities in Ghana, Côte d\'Ivoire, and Senegal. The report evaluates capacity expansion opportunities, modernization needs, and strategic partnerships with local governments. Financial models suggest 14-18% IRR potential with 7-10 year investment horizon.',
    contentPreview: 'EXECUTIVE SUMMARY\\n\\nThis report presents a detailed analysis of strategic investment opportunities in West African logistics infrastructure, specifically focusing on port facilities and connecting rail networks in Ghana (Tema Port), Côte d\'Ivoire (Abidjan Port), and Senegal (Port of Dakar)...',
    calculations: [
      {
        type: 'irr',
        value: '14-18%',
        description: 'Internal Rate of Return'
      },
      {
        type: 'payback',
        value: '7-10 years',
        description: 'Investment payback period'
      },
      {
        type: 'capex',
        value: '$430-580M',
        description: 'Required capital expenditure'
      }
    ]
  },
  {
    id: '13',
    title: 'Sustainability Compliance Framework 2024-2030',
    excerpt: 'Strategic plan for meeting and exceeding global sustainability standards and reporting requirements.',
    type: 'policy',
    department: 'Operations',
    date: '2024-02-04',
    lastModified: '2024-02-04',
    confidential: false,
    fileSize: '5.2MB',
    author: 'Sustainability Committee',
    tags: ['ESG', 'sustainability', 'compliance', 'carbon', 'reporting'],
    summary: 'Comprehensive sustainability strategy framework outlining compliance pathways for evolving ESG regulations including EU CSRD, ISSB standards, and anticipated global carbon reporting requirements. The framework establishes data collection protocols, verification procedures, emission reduction targets, and stakeholder engagement processes.',
    contentPreview: 'I. INTRODUCTION\\n\\nTrafigura\'s Sustainability Compliance Framework 2024-2030 (\"Framework\") establishes a comprehensive approach to environmental, social, and governance (ESG) compliance across all global operations. This Framework addresses current and anticipated regulatory requirements while positioning the organization to exceed baseline standards...',
    calculations: [
      {
        type: 'reduction',
        value: '45% by 2030',
        description: 'Carbon emission reduction target'
      },
      {
        type: 'investment',
        value: '$210M',
        description: 'Sustainability program investment'
      },
      {
        type: 'ratio',
        value: '2.3x',
        description: 'Environmental ROI multiple'
      }
    ]
  },
  {
    id: '14',
    title: 'Iron Ore Price Hedging Strategy Document',
    excerpt: 'Risk management strategy outlining approach to hedging iron ore price volatility in Asian markets.',
    type: 'policy',
    department: 'Trading',
    date: '2023-11-02',
    confidential: true,
    fileSize: '2.9MB',
    author: 'Risk Management Team',
    tags: ['hedging', 'iron ore', 'risk', 'derivatives', 'asia'],
    summary: 'Strategic framework for managing price risk exposure in iron ore trading activities across Asian markets. The document outlines a three-tiered hedging approach using futures, options, and structured derivatives with specific thresholds for position sizes, timing parameters, and authorization levels for various market conditions.',
    contentPreview: 'IRON ORE PRICE RISK MANAGEMENT STRATEGY\\n\\n1. EXECUTIVE SUMMARY\\n\\nThis document establishes the strategic framework and operational guidelines for managing price risk associated with Trafigura\'s iron ore trading activities in Asian markets. The strategy aims to protect trading margins while maintaining appropriate market exposure through a dynamic hedging approach...',
    calculations: [
      {
        type: 'threshold',
        value: '65% max',
        description: 'Maximum hedge ratio'
      },
      {
        type: 'var',
        value: '$14.2M',
        description: 'Daily Value at Risk limit'
      },
      {
        type: 'correlation',
        value: '0.72',
        description: 'SGX futures correlation factor'
      }
    ]
  },
  {
    id: '15',
    title: 'Digital Transformation Initiative: Phase II Implementation Plan',
    excerpt: 'Strategic plan for implementing advanced digital technologies across global trading operations.',
    type: 'report',
    department: 'Data Analytics',
    date: '2024-01-30',
    lastModified: '2024-02-22',
    confidential: false,
    fileSize: '6.1MB',
    author: 'Digital Transformation Team',
    tags: ['digital', 'technology', 'AI', 'blockchain', 'analytics'],
    summary: 'Implementation roadmap for Phase II of the enterprise digital transformation initiative focused on deploying advanced technologies across trading operations. Key components include AI-powered predictive analytics for market insights, blockchain solutions for supply chain transparency, and machine learning algorithms for operational optimization.',
    contentPreview: 'DIGITAL TRANSFORMATION: PHASE II IMPLEMENTATION\\n\\nI. INTRODUCTION\\n\\nFollowing the successful completion of Phase I foundation-building activities, this document outlines the strategic approach, resource requirements, technology architecture, and implementation timeline for Phase II of Trafigura\'s Digital Transformation Initiative...',
    calculations: [
      {
        type: 'roi',
        value: '287%',
        description: 'Projected 5-year ROI'
      },
      {
        type: 'budget',
        value: '$78.5M',
        description: 'Total implementation budget'
      },
      {
        type: 'productivity',
        value: '+23%',
        description: 'Projected efficiency improvement'
      }
    ]
  },
  {
    id: '16',
    title: 'US Renewable Energy Tax Credit Investment Strategy',
    excerpt: 'Financial analysis and strategic framework for tax-advantaged investments in renewable energy projects.',
    type: 'research',
    department: 'Finance',
    date: '2024-02-19',
    confidential: true,
    fileSize: '4.5MB',
    author: 'Tax Strategy Team',
    tags: ['renewable', 'tax', 'investment', 'solar', 'wind', 'IRA'],
    summary: 'Comprehensive strategy for optimizing tax position through structured investments in US renewable energy projects eligible for IRA (Inflation Reduction Act) incentives. The analysis outlines investment criteria for solar, wind, and battery storage projects, focusing on optimizing Production Tax Credits (PTCs) and Investment Tax Credits (ITCs) across diverse geographic regions.',
    contentPreview: 'US RENEWABLE ENERGY TAX CREDIT INVESTMENT STRATEGY\\n\\nEXECUTIVE SUMMARY\\n\\nThis document presents a comprehensive strategy for Trafigura to optimize its tax position through strategic investments in qualifying US renewable energy projects. Following the passage of the Inflation Reduction Act (IRA) of 2022, significant tax incentives are available for investments in clean energy infrastructure...',
    calculations: [
      {
        type: 'tax benefit',
        value: '$145-180M',
        description: 'Potential tax benefit range'
      },
      {
        type: 'allocation',
        value: '60/25/15%',
        description: 'Solar/Wind/Storage allocation'
      },
      {
        type: 'credit rate',
        value: '30-40%',
        description: 'Effective tax credit rate'
      }
    ]
  },
  {
    id: '17',
    title: 'Global Compliance Training Program Documentation',
    excerpt: 'Comprehensive training materials for global trade compliance and ethical business conduct.',
    type: 'policy',
    department: 'Legal',
    date: '2023-12-10',
    lastModified: '2024-03-01',
    confidential: false,
    fileSize: '3.8MB',
    author: 'Compliance Department',
    tags: ['compliance', 'training', 'ethics', 'regulations', 'sanctions'],
    summary: 'Enterprise-wide compliance training curriculum and implementation guide covering anti-corruption practices, sanctions compliance, anti-money laundering protocols, and ethical business conduct. The program includes role-specific modules, assessment methodologies, certification requirements, and documentation standards for regulatory purposes.',
    contentPreview: 'GLOBAL COMPLIANCE TRAINING PROGRAM\\n\\nI. PROGRAM OVERVIEW\\n\\nTrafigura\'s Global Compliance Training Program (\"Program\") provides comprehensive education on regulatory requirements, compliance standards, and ethical business practices for all employees, contractors, and relevant third parties. This Program reflects Trafigura\'s commitment to conducting business with the highest standards of integrity and in full compliance with all applicable laws and regulations...',
    calculations: [
      {
        type: 'frequency',
        value: 'Quarterly',
        description: 'Training refresh cycle'
      },
      {
        type: 'duration',
        value: '18 hours',
        description: 'Annual training requirement'
      },
      {
        type: 'threshold',
        value: '95%',
        description: 'Minimum pass rate'
      }
    ]
  },
  {
    id: '18',
    title: 'Merger & Acquisition Analysis: GreenTech Logistics',
    excerpt: 'Detailed valuation and strategic fit assessment for potential acquisition of GreenTech Logistics Inc.',
    type: 'report',
    department: 'Finance',
    date: '2024-04-10',
    confidential: true,
    fileSize: '9.2MB',
    author: 'M&A Team',
    tags: ['M&A', 'acquisition', 'logistics', 'valuation', 'due diligence'],
    summary: 'Comprehensive analysis of GreenTech Logistics as an acquisition target, including detailed financial valuation, strategic fit assessment, synergy potential, integration planning, and risk evaluation. The target company specializes in carbon-neutral logistics solutions with proprietary route optimization technology and established operations across North America.',
    contentPreview: 'GREENTECH LOGISTICS ACQUISITION ANALYSIS\\n\\nCONFIDENTIAL\\n\\nI. EXECUTIVE SUMMARY\\n\\nThis report presents a comprehensive analysis of GreenTech Logistics Inc. (\"GreenTech\") as a potential acquisition target for Trafigura. GreenTech is a rapidly growing logistics provider specializing in carbon-neutral transportation solutions with operations across 37 metropolitan areas in North America...',
    calculations: [
      {
        type: 'valuation',
        value: '$620-680M',
        description: 'Enterprise value range'
      },
      {
        type: 'multiple',
        value: '8.4x EBITDA',
        description: 'Valuation multiple'
      },
      {
        type: 'synergies',
        value: '$42M annual',
        description: 'Expected synergies'
      },
      {
        type: 'payback',
        value: '5.2 years',
        description: 'Acquisition payback period'
      }
    ]
  },
  {
    id: '19',
    title: 'Carbon Trading Desk Establishment Proposal',
    excerpt: 'Business plan for establishing a dedicated carbon credits and emissions trading operation.',
    type: 'report',
    department: 'Trading',
    date: '2024-03-15',
    confidential: true,
    fileSize: '5.6MB',
    author: 'Strategic Development Team',
    tags: ['carbon', 'emissions', 'trading', 'climate', 'ETS'],
    summary: 'Comprehensive proposal for establishing a dedicated carbon trading desk focusing on EU ETS, UK ETS, and voluntary carbon markets. The plan includes trading strategy development, risk management frameworks, personnel requirements, technology infrastructure, compliance considerations, and financial projections for the first three years of operations.',
    contentPreview: 'CARBON TRADING DESK ESTABLISHMENT PROPOSAL\\n\\nEXECUTIVE SUMMARY\\n\\nThis proposal outlines the business case, operational requirements, and implementation roadmap for establishing a dedicated Carbon Trading Desk at Trafigura. The proposed desk would focus on emissions allowances trading across the EU ETS, UK ETS, and emerging voluntary carbon markets...',
    calculations: [
      {
        type: 'investment',
        value: '$23.5M',
        description: 'Initial investment required'
      },
      {
        type: 'breakeven',
        value: 'Year 2 Q3',
        description: 'Expected breakeven point'
      },
      {
        type: 'revenue',
        value: '$78M',
        description: 'Year 3 revenue projection'
      },
      {
        type: 'margin',
        value: '12.4%',
        description: 'Target profit margin'
      }
    ]
  },
  {
    id: '20',
    title: 'Automation Initiative for Back Office Operations',
    excerpt: 'Technical implementation plan for robotic process automation across finance and administrative functions.',
    type: 'report',
    department: 'Operations',
    date: '2023-11-28',
    lastModified: '2024-01-15',
    confidential: false,
    fileSize: '3.4MB',
    author: 'Process Optimization Team',
    tags: ['automation', 'RPA', 'efficiency', 'back office', 'digital'],
    summary: 'Strategic roadmap for implementing robotic process automation (RPA) across financial, administrative, and operational back-office functions. The initiative targets 47 distinct processes for automation with projected efficiency improvements of 65-80% for manual tasks, error reduction of 92%, and annual cost savings of $4.2 million when fully implemented.',
    contentPreview: 'BACK OFFICE AUTOMATION INITIATIVE\\n\\nI. INTRODUCTION\\n\\nThis document outlines Trafigura\'s strategic approach to implementing Robotic Process Automation (RPA) across key back-office functions. The initiative aims to enhance operational efficiency, reduce error rates, accelerate processing times, and optimize resource allocation through targeted automation of repetitive tasks...',
    calculations: [
      {
        type: 'efficiency',
        value: '65-80%',
        description: 'Task efficiency improvement'
      },
      {
        type: 'reduction',
        value: '92%',
        description: 'Error rate reduction'
      },
      {
        type: 'savings',
        value: '$4.2M annual',
        description: 'Projected cost savings'
      },
      {
        type: 'roi',
        value: '340%',
        description: '3-year ROI projection'
      }
    ]
  }
];

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface for search options
interface SearchOptions {
  query: string;
  filters: {
    documentType: string[];
    department: string[];
    confidentiality: string[];
    dateRange: DateRange;
    fileSize: string[];
    [key: string]: any;
  };
  persona: string;
  nestedQueries?: {
    type: string;
    value: string;
  }[];
  calculationRequests?: {
    type: string;
    field: string;
  }[];
}

// Search documents with advanced capabilities
export const searchDocuments = async (
  query: string, 
  filters: any,
  persona: string
): Promise<SearchResultItem[]> => {
  console.log('Searching with:', { query, filters, persona });
  
  // Create search options object
  const searchOptions: SearchOptions = {
    query,
    filters: {
      ...filters,
      documentType: filters.documentType ? [filters.documentType] : [],
      department: filters.department ? [filters.department] : [],
      confidentiality: [],
      fileSize: [],
      dateRange: filters.dateRange || { from: undefined, to: undefined }
    },
    persona,
    
    // Parse for nested queries - in a real implementation, these would be 
    // extracted from the query string using NLP techniques
    nestedQueries: query.toLowerCase().includes('within') ? [
      { type: 'context', value: 'last quarter financial reports' }
    ] : undefined,
    
    // Parse for calculation requests
    calculationRequests: query.toLowerCase().includes('calculate') || 
                       query.toLowerCase().includes('sum') || 
                       query.toLowerCase().includes('average') ? [
      { type: 'sum', field: 'values' }
    ] : undefined
  };
  
  // Simulate API delay
  await delay(1000);
  console.log(searchOptions)
  return performSearch(searchOptions);
};

// Advanced search implementation
const performSearch = (options: SearchOptions): SearchResultItem[] => {
  let results = [...mockResults];
  
  // Basic keyword search
  if (options.query) {
    const lowercaseQuery = options.query.toLowerCase();
    
    // Check if query contains calculation requests
    const hasCalculationRequest = 
      lowercaseQuery.includes('calculate') || 
      lowercaseQuery.includes('sum') || 
      lowercaseQuery.includes('average') ||
      lowercaseQuery.includes('total');
      
    // Check if query contains time-based filters
    const hasTimeFilter = 
      lowercaseQuery.includes('last year') || 
      lowercaseQuery.includes('this month') || 
      lowercaseQuery.includes('past quarter') ||
      lowercaseQuery.includes('since');
      
    // Check for nested query patterns
    const hasNestedQuery = 
      lowercaseQuery.includes('within') || 
      lowercaseQuery.includes('containing') ||
      lowercaseQuery.includes('that have');
    
    // Apply contextual search weightings based on query characteristics
    results = results.filter(
      item => {
        // Basic text match
        const basicMatch = 
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.excerpt.toLowerCase().includes(lowercaseQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));
          
        // Check document content if available
        const contentMatch = item.contentPreview?.toLowerCase().includes(lowercaseQuery) || false;
        
        // Special handling for calculation requests
        if (hasCalculationRequest && item.calculations) {
          return true;
        }
        
        // Handle temporal queries specially
        if (hasTimeFilter) {
          const itemDate = new Date(item.date);
          const now = new Date();
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(now.getFullYear() - 1);
          
          if (lowercaseQuery.includes('last year') && itemDate >= oneYearAgo) {
            return true;
          }
        }
        
        // Handle nested queries
        if (hasNestedQuery && options.nestedQueries) {
          // This is simplified - in a real system this would involve much more complex 
          // semantic understanding of the nested parts of the query
          return basicMatch || contentMatch;
        }
        
        return basicMatch || contentMatch;
      }
    );
  }
  
  // Filter by document type (if specific types are selected)
  // if (options.filters.documentType?.length > 0) {
  //   results = results.filter(item => 
  //     options.filters.documentType.includes(item.type)
  //   );
  // }
  
  // Filter by department
  // if (options.filters.department?.length > 0) {
  //   results = results.filter(item =>
  //     options.filters.department.some(dept => 
  //       item.department.toLowerCase() === dept.toLowerCase()
  //     )
  //   );
  // }
  
  // Filter by confidentiality
  // if (options.filters.confidentiality?.length > 0) {
  //   results = results.filter(item => {
  //     if (options.filters.confidentiality.includes('confidential')) {
  //       return item.confidential === true;
  //     }
  //     if (options.filters.confidentiality.includes('public')) {
  //       return item.confidential === false;
  //     }
  //     return true;
  //   });
  // }
  
  // Filter by file size
  if (options.filters.fileSize?.length > 0) {
    results = results.filter(item => {
      if (!item.fileSize) return false;
      
      const size = parseFloat(item.fileSize);
      if (options.filters.fileSize.includes('small') && size < 2) {
        return true;
      }
      if (options.filters.fileSize.includes('medium') && size >= 2 && size <= 5) {
        return true;
      }
      if (options.filters.fileSize.includes('large') && size > 5) {
        return true;
      }
      return false;
    });
  }
  
  // Filter by date range
  // if (options.filters.dateRange?.from || options.filters.dateRange?.to) {
  //   results = results.filter(item => {
  //     const itemDate = new Date(item.date);
      
  //     if (options.filters.dateRange.from && options.filters.dateRange.to) {
  //       return itemDate >= options.filters.dateRange.from && 
  //              itemDate <= options.filters.dateRange.to;
  //     } 
  //     else if (options.filters.dateRange.from) {
  //       return itemDate >= options.filters.dateRange.from;
  //     }
  //     else if (options.filters.dateRange.to) {
  //       return itemDate <= options.filters.dateRange.to;
  //     }
      
  //     return true;
  //   });
  // }
  
  // Filter by persona
  // if (options.persona !== 'all') {
  //   // Convert persona to department name format
  //   const personaToDeptMap: Record<string, string[]> = {
  //     'trading': ['Trading'],
  //     'legal': ['Legal'],
  //     'operations': ['Operations'],
  //     'finance': ['Finance'],
  //     'data': ['Data Analytics'],
  //     'hr': ['HR']
  //   };
    
  //   const relevantDepartments = personaToDeptMap[options.persona] || [];
  //   if (relevantDepartments.length > 0) {
  //     results = results.filter(item => relevantDepartments.includes(item.department));
  //   }
  // }
  
  return results;
};
