"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Lightbulb, CheckCircle, ExternalLink } from "lucide-react"

const projectData = {
  "mytelkomsel-ux": {
    title: "MyTelkomsel UX Case Study",
    category: "UX Research & Design Thinking",
    period: "Sep 2024 - Dec 2024",
    team: "Personal Project",
    role: "UX Researcher",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    image: "/images/mytelkomsel-ux-case-study.jpeg",
    tags: ["Design Thinking", "Figma", "User Research", "Prototyping", "Customer-Centric Design", "Usability Testing"],
    overview: {
      description:
        "Conducted a comprehensive UX case study for MyTelkomsel application to understand and solve user problems following the app's transformation into a Super App. This study employed a customer-centric design thinking approach to improve user experience in accessing core features such as quota checking, package purchases, and issue reporting.",
      objectives: [
        "Understand user pain points after Super App transformation",
        "Improve accessibility of core features like quota check and package purchase",
        "Enhance user experience through customer-centric design thinking",
        "Redesign homepage to prioritize essential user needs",
      ],
    },
    problem: {
      description:
        "Despite MyTelkomsel being the main gateway for Telkomsel's digital transactions, the latest version received numerous user complaints. The app's transformation into a Super App created usability issues that frustrated users.",
      challenges: [
        "Non-intuitive interface: core features like quota check and package purchase were hard to access",
        "Poor app performance: frequent lag, crashes, and slow loading times",
        "Hidden help feature (Veronika): users confused about how to report issues",
        "63% of Google Play users gave 1-star ratings, indicating high frustration levels",
        "58.8% of users still visit GraPARI stores because the app doesn't meet expectations",
      ],
      impact:
        "These usability issues were driving users away from digital channels back to physical stores, undermining Telkomsel's digital transformation goals and increasing operational costs.",
    },
    process: {
      description:
        "This study was conducted using a comprehensive Design Thinking approach, focusing on understanding user needs and creating customer-centric solutions for the MyTelkomsel application.",
      phases: [
        {
          title: "Empathize & Define",
          duration: "3 weeks",
          activities: [
            "Conducted surveys with 19 Gen Z and millennial users from Jabodetabek and outer Java",
            "Identified core user needs: quota/credit check, package purchase, bill check, and issue reporting",
            "Analyzed user behavior patterns and pain points",
            "Mapped current user journey and identified friction points",
          ],
        },
        {
          title: "Ideate",
          duration: "2 weeks",
          activities: [
            "Created solution sketches to prioritize core features on homepage",
            "Redesigned positioning of Veronika feature, point check, and package purchase for better visibility",
            "Brainstormed information architecture improvements",
            "Developed multiple design concepts based on user needs",
          ],
        },
        {
          title: "Prototype",
          duration: "4 weeks",
          activities: [
            "Redesigned MyTelkomsel homepage using Figma",
            "Adapted design to match core user requirements",
            "Created high-fidelity prototypes with improved navigation",
            "Integrated point check and point exchange in unified location",
          ],
        },
        {
          title: "Validate (Future Recommendation)",
          duration: "Planned",
          activities: [
            "Recommended usability testing as next phase",
            "Proposed A/B testing for redesigned features",
            "Suggested user feedback collection methodology",
            "Planned iterative design improvements based on testing results",
          ],
        },
      ],
    },
    results: {
      description:
        "The UX case study delivered a comprehensive redesign of MyTelkomsel's homepage, prioritizing user needs and improving feature accessibility based on design thinking principles.",
      metrics: [
        { label: "User Rating Issues", before: "63% 1-star", after: "Redesigned", improvement: "Addressed" },
        { label: "Core Feature Access", before: "Hidden/Complex", after: "Prioritized", improvement: "Improved" },
        { label: "GraPARI Dependency", before: "58.8%", after: "Reduced Target", improvement: "Strategy" },
        { label: "Design Approach", before: "Feature-focused", after: "User-centric", improvement: "Transformed" },
      ],
      outcomes: [
        "Redesigned MyTelkomsel homepage to make core features more visible and accessible",
        "Reorganized feature hierarchy based on user impact and needs: quota check, package purchase, and reporting",
        "Proposed integration of point check and point exchange in unified location",
        "Identified that 58.8% of users still visit GraPARI due to unmet app expectations",
        "Created customer-centric design framework for future MyTelkomsel improvements",
        "Established foundation for usability testing and iterative design improvements",
      ],
    },
  },
  "business-process-transformation": {
    title: "Microservices Enterprise Architecture Design with AI-Powered OCR",
    category: "Enterprise Architecture & System Integration",
    period: "Jul 2024 - Aug 2024",
    team: "3 People",
    role: "Lead Enterprise Architect & System Designer",
    gradient: "from-teal-500 via-cyan-500 to-blue-500",
    image: "/images/ieee-logo.jpeg",
    tags: ["TOGAF", "Microservices", "OCR", "AI Integration", "Enterprise Architecture", "System Design"],
    link: "https://ieeexplore.ieee.org/document/10933216",
    overview: {
      description:
        "Led the design of a comprehensive microservices-based enterprise architecture integrating AI-powered OCR and Natural Language Processing (NLP) with Integrated Customer Management System (ICMS) and Knowledge Management System (KMS). This research utilized TOGAF framework to create a scalable solution that automates complaint category identification and solution retrieval through intelligent document processing. The OCR system works by automatically extracting text from Standard Operating Procedure (SOP) documents, converting them into machine-readable format, and feeding this data into the knowledge management system for instant retrieval during customer service interactions.",
      objectives: [
        "Design scalable microservices architecture using TOGAF framework",
        "Integrate AI-powered OCR for automated SOP document processing and data extraction",
        "Implement NLP-based complaint categorization system with intelligent text analysis",
        "Optimize customer complaint handling processes through automated knowledge retrieval",
      ],
    },
    problem: {
      description:
        "The telecommunications company faced significant operational challenges in handling customer complaints through newly designed touchpoints following Fixed Mobile Convergence (FMC) strategy adoption. Performance reports showed critical inefficiencies in customer service operations.",
      challenges: [
        "Average social media response time reached 19.28 minutes (target: 5 minutes)",
        "Fragmented systems causing operational inefficiencies",
        "Manual processes for retrieving knowledge base information from SOP documents",
        "Lack of integration across customer service platforms",
        "Inconsistent complaint handling procedures across touchpoints",
        "Time-consuming manual document processing and information extraction",
      ],
      impact:
        "These inefficiencies were causing customer dissatisfaction, increased operational costs, and undermining the company's digital transformation goals in the competitive telecommunications landscape.",
    },
    process: {
      description:
        "Implemented Design Science Research Methodology (DSRM) combined with TOGAF Architecture Development Method (ADM) to systematically design and validate the enterprise architecture solution. The OCR integration involved creating an intelligent document processing pipeline that automatically scans, extracts, and indexes SOP content for real-time access during customer service operations.",
      phases: [
        {
          title: "Problem Identification & Requirements Analysis",
          duration: "2 weeks",
          activities: [
            "Conducted stakeholder mapping using Mendelow matrix classification",
            "Analyzed existing business processes and identified manual document handling inefficiencies",
            "Developed Goal/Objective/Requirement diagrams for OCR integration",
            "Created comprehensive requirement catalog for automated document processing system",
          ],
        },
        {
          title: "Architecture Design & TOGAF Implementation",
          duration: "4 weeks",
          activities: [
            "Designed business architecture with optimized OCR-enabled process flows",
            "Created data architecture with entity relationship modeling for document management",
            "Developed application architecture using microservices patterns with OCR service integration",
            "Designed technology architecture with cloud-based OCR and document processing capabilities",
          ],
        },
        {
          title: "AI Integration & OCR Implementation",
          duration: "1 week",
          activities: [
            "Integrated Google Vertex AI for advanced NLP processing and text analysis",
            "Implemented OCR technology for automated SOP document scanning and text extraction",
            "Developed AI-powered recommendation system using processed document data for complaint resolution",
            "Created API ecosystem enabling real-time document processing and knowledge retrieval",
          ],
        },
        {
          title: "Validation & Architecture Roadmap",
          duration: "1 week",
          activities: [
            "Validated OCR-enhanced architecture using Enterprise Architecture Benefits Model (EABM)",
            "Conducted stakeholder evaluation with structured assessments of document processing efficiency",
            "Developed 3-year implementation roadmap including OCR system deployment phases",
            "Created comprehensive project catalog for phased OCR and microservices deployment",
          ],
        },
      ],
    },
    results: {
      description:
        "The microservices-based enterprise architecture successfully addressed critical gaps in customer service operations, delivering a scalable and efficient solution that aligns with organizational goals and industry best practices. The OCR integration significantly improved document processing efficiency and knowledge retrieval speed.",
      metrics: [
        { label: "Stakeholder Validation Score", before: "N/A", after: "4.25/5", improvement: "Excellent" },
        { label: "System Integration", before: "Fragmented", after: "Unified", improvement: "100%" },
        { label: "Process Automation", before: "Manual", after: "AI-Powered OCR", improvement: "Automated" },
        { label: "Architecture Compliance", before: "Ad-hoc", after: "TOGAF-Aligned", improvement: "Standardized" },
      ],
      outcomes: [
        "Designed comprehensive enterprise architecture using TOGAF ADM methodology",
        "Successfully integrated AI-powered OCR with microservices architecture for automated document processing",
        "Created automated complaint categorization using NLP and machine learning algorithms",
        "Developed scalable API ecosystem supporting real-time OCR data processing and knowledge retrieval",
        "Established 3-year implementation roadmap with 5 strategic projects including OCR deployment phases",
        "Achieved 4.25/5 stakeholder validation score across all evaluation criteria",
        "Created reusable architecture framework with OCR capabilities applicable across telecommunications industry",
        "Published research findings in IEEE conference proceedings for academic and industry reference",
      ],
    },
  },
  "customer-sentiment-analytics": {
    title: "MyTelkomsel Sentiment Analysis Dashboard",
    category: "Data Analytics & AI Research",
    period: "Jun 2025 - Present",
    team: "Personal Project",
    role: "Technical Lead & Data Analyst",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "/images/mytelkomsel-sentiment-analysis.jpeg",
    tags: ["IBM Granite AI", "Python", "Streamlit", "Data Scraping", "NLP", "Sentiment Analysis"],
    link: "https://hacktiv8-capstoneproject-mytelkomsel-inkaspuspadarma.streamlit.app/",
    overview: {
      description:
        "Developed an AI-powered sentiment analysis system using IBM Granite to uncover user complaints and opinions about MyTelkomsel's transformation into a Super App. This capstone project analyzed thousands of Google Play Store reviews to identify key user issues and provide data-driven UX and performance improvement recommendations through an interactive Streamlit dashboard.",
      objectives: [
        "Analyze public sentiment toward MyTelkomsel Super App transformation using advanced AI",
        "Identify and categorize main user complaints and pain points systematically",
        "Classify complaint urgency levels and prioritize issues for resolution",
        "Provide actionable, data-driven recommendations for UX and performance improvements",
      ],
    },
    problem: {
      description:
        "Despite contributing over 95% of Telkomsel's digital transactions, MyTelkomsel's transformation into a Super App received numerous complaints from users. The app's latest version was perceived as slow, complex, and unstable, leading to decreased user comfort and satisfaction, but there was no systematic way to analyze this feedback at scale.",
      challenges: [
        "Why did this critical app experience decreased usability after Super App transformation?",
        "What specific types of complaints are most frequently reported by users?",
        "How urgent are these complaints and what priority should be given to each issue?",
        "Need for systematic analysis of thousands of user feedback entries at scale",
        "Lack of structured insights from unstructured review data for strategic decision-making",
        "Manual analysis of user reviews was time-consuming and prone to bias",
      ],
      impact:
        "The usability issues were directly affecting user satisfaction, potentially impacting Telkomsel's digital transaction volume, customer retention, and overall digital transformation strategy in the competitive telecommunications market.",
    },
    process: {
      description:
        "Implemented a comprehensive AI-powered sentiment analysis pipeline using IBM Granite 3-8b-instruct model to process and analyze thousands of user reviews from Google Play Store, creating an end-to-end solution from data collection to actionable insights visualization.",
      phases: [
        {
          title: "Data Scraping & Collection",
          duration: "1 week",
          activities: [
            "Scraped comprehensive MyTelkomsel reviews dataset from Google Play Store using automated tools",
            "Collected review metadata including ratings, timestamps, and user demographics",
            "Ensured data quality, completeness, and compliance with platform terms of service",
            "Established robust data collection pipeline for ongoing analysis",
          ],
        },
        {
          title: "Data Cleaning & Preprocessing",
          duration: "1 week",
          activities: [
            "Removed unnecessary columns and performed comprehensive text data cleaning",
            "Applied advanced NLP preprocessing: stopword removal, lemmatization, and tokenization",
            "Cleaned emojis, special characters, and normalized text formatting",
            "Standardized text format optimized for IBM Granite AI model processing",
          ],
        },
        {
          title: "AI Analysis with IBM Granite",
          duration: "2 weeks",
          activities: [
            "Implemented sophisticated sentiment classification (Negative, Neutral, Positive) using IBM Granite",
            "Developed complaint categorization system (Login, Payment, Bug, Performance, UI/UX, Promo)",
            "Applied intelligent urgency labeling algorithm (Urgent vs Not Urgent) based on sentiment intensity",
            "Generated comprehensive analysis including top 5 most frequent and agreed complaints with statistical significance",
          ],
        },
        {
          title: "Visualization & Dashboard Development",
          duration: "2 weeks",
          activities: [
            "Built comprehensive interactive Streamlit dashboard with multiple visualization components",
            "Created dynamic data visualizations including sentiment distribution, complaint categories, and trend analysis",
            "Developed actionable insight summary with specific UX improvement recommendations",
            "Deployed production-ready dashboard with user-friendly interface for stakeholder access",
          ],
        },
      ],
    },
    results: {
      description:
        "The sentiment analysis revealed critical insights about MyTelkomsel's user experience issues, providing clear, data-driven direction for product improvements and strategic decision-making. The interactive dashboard became a valuable tool for ongoing user feedback monitoring and analysis.",
      metrics: [
        { label: "Negative Sentiment Identified", before: "Unknown", after: "93%", improvement: "Quantified" },
        { label: "Urgent Complaints Classified", before: "Unknown", after: "86%", improvement: "Prioritized" },
        { label: "Review Processing Speed", before: "Manual", after: "Automated", improvement: "100x Faster" },
        { label: "Analysis Accuracy", before: "N/A", after: "95%", improvement: "AI-Powered Precision" },
      ],
      outcomes: [
        "Identified 93% negative sentiment with main issues categorized as: Performance (35%), UI/UX (28%), and Bugs (22%)",
        "Classified 86% of complaints as urgent requiring immediate attention and resource allocation",
        "Provided specific, actionable recommendations for homepage redesign and navigation improvement",
        "Recommended targeted login optimization with 'Remember Me' feature implementation and OTP system fixing",
        "Suggested performance improvements and removal of unnecessary features to prevent crashes and improve stability",
        "Created publicly accessible interactive dashboard at hacktiv8-capstoneproject-mytelkomsel-inkaspuspadarma.streamlit.app",
        "Established framework for ongoing sentiment monitoring and trend analysis for product development teams",
        "Demonstrated practical application of IBM Granite AI for business intelligence and user experience optimization",
      ],
    },
  },
  "klinfield-agritech": {
    title: "KlinField AgriTech Platform",
    category: "Product Strategy",
    period: "Sep 2024 - Dec 2024",
    team: "4 People",
    role: "Project and Product Manager",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    image: "/images/klinfield-presentation.jpeg",
    tags: ["Product Strategy", "Market Research", "Stakeholder Management", "Go-to-Market", "IoT", "AI/ML"],
    overview: {
      description:
        "Winner of 1st Place National Business Plan Competition for innovative agritech solution. Led comprehensive product strategy development for AI-powered agricultural platform combining artificial intelligence, IoT sensors, and mobile technologies to revolutionize pest detection and crop management for Indonesian farmers. Managed cross-functional team and stakeholder relationships to deliver award-winning business plan.",
      objectives: [
        "Develop comprehensive business plan and go-to-market strategy for agritech innovation",
        "Design scalable AI-powered agricultural solution addressing real farmer pain points",
        "Create detailed market analysis and competitive positioning in Indonesian agriculture sector",
        "Present compelling value proposition to competition judges and potential investors",
      ],
    },
    problem: {
      description:
        "Indonesian farmers were facing significant crop losses due to pest infestations, with limited access to modern detection and management technologies. Traditional pest management methods were reactive rather than preventive, leading to substantial economic losses and reduced agricultural productivity across the country.",
      challenges: [
        "30% average crop loss due to undetected and untreated pest infestations",
        "Limited access to modern agricultural technology and digital solutions",
        "Lack of early pest detection systems causing delayed intervention",
        "High cost of traditional pest management solutions beyond small farmer budgets",
        "Need for scalable, affordable solution accessible to Indonesian farming communities",
        "Gap between agricultural technology innovation and practical farmer implementation",
      ],
      impact:
        "These challenges were directly affecting farmer livelihoods, reducing Indonesia's agricultural productivity, and contributing to food security concerns while limiting economic opportunities in rural communities.",
    },
    process: {
      description:
        "Developed comprehensive product strategy combining extensive market research, stakeholder engagement, technical feasibility analysis, and financial modeling to create a viable and scalable agritech solution addressing real-world agricultural challenges in Indonesia.",
      phases: [
        {
          title: "Market Research & Problem Analysis",
          duration: "2 weeks",
          activities: [
            "Conducted extensive research on Indonesian agricultural challenges and pest management issues",
            "Analyzed current pest management problems, existing solutions, and market gaps",
            "Studied target market demographics, farmer pain points, and technology adoption patterns",
            "Assessed technical feasibility, market opportunity size, and competitive landscape analysis",
          ],
        },
        {
          title: "Solution Design & Business Model Development",
          duration: "3 weeks",
          activities: [
            "Designed innovative AI-powered pest detection concept using advanced YOLO algorithm for image recognition",
            "Developed comprehensive IoT integration strategy for automated crop monitoring and data collection",
            "Created user-friendly mobile platform concept ensuring accessibility for farmers with varying tech literacy",
            "Established sustainable business model with multiple revenue streams and clear value propositions",
          ],
        },
        {
          title: "Financial Planning & Strategic Framework",
          duration: "2 weeks",
          activities: [
            "Developed detailed financial projections including startup costs, operational expenses, and revenue forecasts",
            "Created comprehensive go-to-market strategy with phased rollout plan and market penetration approach",
            "Designed strategic partnership framework with agricultural cooperatives, government agencies, and technology providers",
            "Established competitive pricing strategy balancing affordability for farmers with business sustainability",
          ],
        },
        {
          title: "Presentation Development & Competition Success",
          duration: "1 week",
          activities: [
            "Prepared compelling business plan presentation highlighting innovation, market potential, and social impact",
            "Created professional pitch deck with clear problem-solution fit and scalable business model",
            "Presented to competition judges, industry experts, and potential investors with confidence and clarity",
            "Successfully won 1st Place National Business Plan Competition against strong competition",
          ],
        },
      ],
    },
    results: {
      description:
        "KlinField's strategic development successfully secured recognition and positioned the platform for potential commercial success in Indonesia's agricultural technology market. The comprehensive business plan demonstrated clear market opportunity and scalable solution architecture.",
      metrics: [
        { label: "Competition Ranking", before: "N/A", after: "1st Place", improvement: "National Winner" },
        { label: "Business Plan Evaluation", before: "N/A", after: "95/100", improvement: "Excellent Score" },
        {
          label: "Market Potential Identified",
          before: "Unknown",
          after: "$50M TAM",
          improvement: "Quantified Opportunity",
        },
        { label: "Judge & Expert Feedback", before: "N/A", after: "Outstanding", improvement: "Industry Recognition" },
      ],
      outcomes: [
        "Won 1st Place National Business Plan Competition, demonstrating exceptional strategic planning and execution",
        "Developed comprehensive business plan for AI-powered agritech solution with clear implementation roadmap",
        "Created detailed market analysis identifying $50M total addressable market in Indonesian agriculture sector",
        "Designed innovative YOLO-based pest detection concept with projected 92% accuracy rate for early intervention",
        "Established strategic framework for IoT integration and mobile platform ensuring farmer accessibility and adoption",
        "Received recognition and validation from industry experts, agricultural stakeholders, and potential investors",
        "Created solid foundation for potential future development, funding acquisition, and commercial implementation",
        "Demonstrated leadership in cross-functional team management and stakeholder relationship building",
      ],
    },
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleImageClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />

      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-white">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              {project.category}
            </Badge>

            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{project.team}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>{project.role}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-white/30 text-white bg-white/10">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            {project.link && (
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-purple-700 hover:bg-pink-50 shadow-lg">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Project
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`relative ${project.link ? "cursor-pointer group" : ""}`} onClick={handleImageClick}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className={`w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 ${
                  project.link ? "group-hover:scale-105" : ""
                }`}
              />
              {project.link && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-purple-700 hover:bg-pink-50 shadow-lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open External Link
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Overview</h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.overview.description}
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Objectives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.overview.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Problem</h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.problem.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Challenges</h3>
              <div className="space-y-3">
                {project.problem.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Business Impact</h4>
                <p className="text-red-700 dark:text-red-300">{project.problem.impact}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Process</h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.process.description}
            </p>

            <div className="space-y-8">
              {project.process.phases.map((phase, index) => (
                <Card key={index} className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-green-800 dark:text-green-200">
                        Phase {index + 1}: {phase.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        {phase.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Results</h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.results.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Key Metrics</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {project.results.metrics.map((metric, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        <span className="font-semibold">{metric.label}</span>: {metric.before} → {metric.after}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{metric.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Outcomes</h3>
              </div>

              <div className="space-y-4">
                {project.results.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
