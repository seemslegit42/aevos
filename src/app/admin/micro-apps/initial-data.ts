// src/app/admin/micro-apps/initial-data.ts
import type { MicroApp } from '@/types/micro-app';

export const mockMicroApps: MicroApp[] = [
  {
    id: 'autopilot_v1',
    internalName: 'autopilot',
    displayName: 'Autopilot Workflow Builder',
    icon: 'Workflow',
    description:
      'Visually create and manage multi-step AI-powered automations and task chains.',
    category: 'Automation',
    status: 'enabled',
    tags: ['workflow', 'ai', 'visual-editor', 'automation', 'low-code'],
    agentDependencies: ['Orion', 'Proxy'],
    authRequired: true,
    isVisible: true,
    requiresSubscription: true,
    monetization: {
      enabled: true,
      price: 29,
      billingCycle: 'monthly',
      billingAgent: 'BillingProxy',
      pricingTierId: 'tier_pro_monthly',
      stripeProductId: 'prod_XyZ123Abc',
      accessControlFlags: ['pro_tier_access'],
    },
    flags: { isFeatured: true, requiresBetaFeature: false },
    version: '1.1.0',
    entryPoint: '/loom-studio?app=autopilot',
    deployableTo: ['loom-studio', 'dashboard'],
    defaultLayout: { lg: { x: 0, y: 0, w: 4, h: 4 } }, // Example layout for generic use
    permissionsRequired: ['agent:execute', 'workflow:create'],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'guardian_sec_v2.3',
    internalName: 'guardian-security-center',
    displayName: 'Guardian Security Center',
    icon: 'ShieldCheck',
    description:
      'Monitor system threats, analyze security logs, and manage access controls.',
    category: 'Security',
    status: 'enabled',
    tags: ['security', 'monitoring', 'rbac', 'threat-detection'],
    agentDependencies: ['Aegis', 'LogSentinel'],
    authRequired: true,
    isVisible: true, // Might be true but filtered by dashboard logic
    requiresSubscription: false,
    monetization: null,
    flags: { systemInternal: true },
    version: '2.3.1',
    entryPoint: '/security',
    deployableTo: ['dedicated-tab'],
    defaultLayout: { lg: { x: 4, y: 0, w: 4, h: 4 } },
    permissionsRequired: ['security:admin', 'logs:view_sensitive'],
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'pulse_monitor_v0.9b',
    internalName: 'system-pulse',
    displayName: 'System Pulse Monitor',
    icon: 'RadioTower',
    description:
      'Live overview of system health, agent activity, and key performance metrics.',
    category: 'Monitoring',
    status: 'enabled',
    tags: ['monitoring', 'health', 'real-time', 'kpi'],
    agentDependencies: [],
    authRequired: true,
    isVisible: true,
    requiresSubscription: false,
    monetization: null,
    flags: { requiresBetaFeature: false }, // Assuming beta features are now stable for this app
    version: '1.0.0', // Promoted from beta
    entryPoint: '/pulse',
    deployableTo: ['dedicated-tab', 'dashboard'],
    defaultLayout: { lg: { x: 8, y: 0, w: 4, h: 4 } },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'dev_tools_alpha',
    internalName: 'developer-sandbox',
    displayName: 'Developer Sandbox',
    icon: 'TerminalSquare',
    description:
      'Experimental tools and features for NexOS developers. Use with caution.',
    category: 'Development',
    status: 'enabled',
    tags: ['experimental', 'debug', 'tools'],
    agentDependencies: [],
    authRequired: true,
    isVisible: true,
    requiresSubscription: false,
    monetization: null,
    flags: { isDevOnly: false }, // Assuming it's now generally available if on dashboard
    version: '0.2.0', // Incremented version
    entryPoint: '/app/developer-sandbox',
    deployableTo: ['dashboard'],
    defaultLayout: { lg: { x: 0, y: 4, w: 4, h: 4 } },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'smart-lead-tracker', // Consistent ID
    internalName: 'smart-lead-tracker',
    displayName: 'Smart Lead Tracker',
    icon: 'Users', // Updated icon
    description:
      'Capture, tag, and track leads with actionable insights. Auto-suggest follow-ups, import/export, and segment contacts.', // Updated description
    category: 'Productivity',
    status: 'enabled',
    tags: ['CRM', 'Sales', 'Lightweight'], // Updated tags
    agentDependencies: [],
    authRequired: true,
    isVisible: true,
    requiresSubscription: false,
    monetization: null,
    flags: { isFeatured: false },
    version: '1.0.0',
    entryPoint: '/micro-apps/smart-lead-tracker',
    deployableTo: ['dashboard'],
    defaultLayout: { lg: { x: 0, y: 8, w: 4, h: 8, minW: 3, minH: 6 } },
    permissionsRequired: ['data:read', 'data:write'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'security-surface-scan-app', // Unique ID for the new app
    internalName: 'security-surface-scan',
    displayName: 'Security Surface Scan',
    icon: 'ShieldAlert', // Example Lucide icon
    description: 'Perform security surface scans on domains or URLs.',
    category: 'Security',
    status: 'enabled',
    tags: ['security', 'scan', 'vulnerability', 'web'],
    agentDependencies: [], // Can add specific security agents if needed
    authRequired: true,
    isVisible: true, // Make it visible on the dashboard
    requiresSubscription: false,
    monetization: null,
    flags: { isFeatured: false },
    version: '1.0.0',
    entryPoint: '/micro-apps/security-surface-scan-app', // Convention for micro-app entry points
    deployableTo: ['dashboard'], // Deployable to the main dashboard
    defaultLayout: { lg: { x: 4, y: 4, w: 4, h: 6, minW: 3, minH: 4 } }, // Example layout
    permissionsRequired: ['network:scan'], // Example permission
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'performance-monitor-v1',
    internalName: 'performance-monitor',
    displayName: 'Performance Monitor',
    icon: 'Activity',
    description:
      'Real-time performance monitoring dashboard with FPS, memory usage, cache metrics, and issue detection.',
    category: 'Monitoring',
    status: 'enabled',
    tags: [
      'performance',
      'monitoring',
      'optimization',
      'metrics',
      'diagnostics',
    ],
    agentDependencies: [],
    authRequired: true,
    isVisible: true,
    requiresSubscription: false,
    monetization: null,
    flags: { isFeatured: true, isDevOnly: false },
    version: '1.0.0',
    entryPoint: '/micro-apps/performance-monitor',
    deployableTo: ['dashboard', 'dedicated-tab'],
    defaultLayout: { lg: { x: 8, y: 4, w: 4, h: 6, minW: 3, minH: 4 } },
    permissionsRequired: ['system:monitor'], // Permission to monitor system performance
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
