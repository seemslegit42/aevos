// src/app/updates/page.tsx
'use client';

import type { ReactNode } from 'react';
import {
  WorkspaceGrid,
  type ZoneConfig,
} from '@/components/core/workspace-grid';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GitMerge,
  Rocket,
  Sparkle as Sparkles,
  ListChecks,
  Eye,
  Stack as Layers,
  Package,
  ChartBar as BarChartBig,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const updates = [
  {
    version: '1.1.0 "Orion"',
    date: '2023-11-15',
    type: 'Feature Release',
    highlights: [
      'New Loom Studio Canvas Tools',
      'Enhanced Agent Security Protocols',
      'UI Performance Boosts',
      'Improved AI Log Summarization',
    ],
    status: 'Live',
  },
  {
    version: '1.0.5 "Nebula"',
    date: '2023-10-28',
    type: 'Patch',
    highlights: [
      'Fixed critical bug in Command Cauldron',
      'Improved logging accuracy for Agent DataMinerX',
      'Security update for API Bridge module',
    ],
    status: 'Live',
  },
  {
    version: '1.2.0 "Pulsar" (Upcoming)',
    date: 'Q1 2024',
    type: 'Major Update',
    highlights: [
      'Spatial Zone Management (Beta)',
      'Advanced Agent Collaboration Framework',
      'AI-Powered Module Suggestions',
      'Decentralized Agent Identity Management',
    ],
    status: 'Planned',
  },
];

function OsChangelogContent(): ReactNode {
  return (
    <Card className="flex h-full flex-col border-none bg-transparent shadow-none">
      <CardHeader className="border-b border-border/60 p-2 md:p-3">
        <CardTitle className="text-md font-headline text-foreground">
          OS Upgrades & Changelog
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Current ΛΞVOS Version:{' '}
          <Badge className="bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            v1.1.0 "Orion"
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full">
          <div className="space-y-2 p-1 md:p-2">
            {updates.map((update, i) => (
              <Card
                key={i}
                className="rounded-2xl border border-primary/25 bg-card text-card-foreground shadow-[0_4px_30px_hsl(var(--primary)/0.12)] backdrop-blur-md transition-shadow hover:shadow-[0_6px_35px_hsl(var(--primary)/0.18)]"
              >
                <CardHeader className="p-2.5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-headline text-base text-primary">
                      {update.version}
                    </CardTitle>
                    <Badge
                      variant={update.status === 'Live' ? 'default' : 'outline'}
                      className={cn(
                        'h-5 px-2 py-0.5 text-xs leading-tight',
                        update.status === 'Live'
                          ? 'bg-green-500/80 text-white'
                          : 'border-primary text-primary'
                      )}
                    >
                      {update.status}
                    </Badge>
                  </div>
                  <CardDescription className="mt-0.5 text-xs text-muted-foreground">
                    {update.date} - {update.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2.5 pt-0">
                  <ul className="list-inside list-disc space-y-0.5 text-xs">
                    {update.highlights.map((hl, idx) => (
                      <li key={idx} className="text-foreground/90">
                        {hl}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function RoadmapPreviewContent(): ReactNode {
  return (
    <Card className="h-full border-none bg-transparent shadow-none">
      <CardHeader className="p-2 md:p-3">
        <CardTitle className="text-md font-headline text-foreground">
          Roadmap & Feature Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-2 text-sm md:p-3">
        <h3 className="mb-1.5 text-sm font-semibold text-foreground">
          Upcoming in v1.2.0 "Pulsar":
        </h3>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li className="flex items-center">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-accent" /> Spatial Zone
            Management (Beta)
          </li>
          <li className="flex items-center">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-accent" /> Advanced
            Agent Collaboration Framework
          </li>
          <li className="flex items-center">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-accent" /> AI-Powered
            Module Suggestions
          </li>
        </ul>
        <Image
          src="https://placehold.co/400x250.png"
          alt="Roadmap Visual Timeline"
          width={400}
          height={250}
          className="my-2 rounded-md border border-border/60 opacity-70"
          data-ai-hint="timeline graph future features"
        />
        <Button
          variant="outline"
          className="w-full bg-card text-xs hover:bg-muted/60"
          size="sm"
        >
          <Eye className="mr-2 h-4 w-4" /> Test Upcoming UX Modules (Beta
          Program)
        </Button>
      </CardContent>
    </Card>
  );
}

function AgentReleaseLogsContent(): ReactNode {
  return (
    <Card className="flex h-full flex-col border-none bg-transparent shadow-none">
      <CardHeader className="p-2 md:p-3">
        <CardTitle className="text-md font-headline text-foreground">
          Agent Framework & Core Module Updates
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Updates and improvements to core agent capabilities and pre-built
          modules.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-grow items-center justify-center rounded-md border border-dashed border-border/50 bg-muted/20 p-2 text-center md:p-3">
        <Image
          src="https://placehold.co/800x300.png"
          alt="Agent Release Logs / Changelog Diffusion Graph"
          width={800}
          height={300}
          className="rounded-md border border-border/60 opacity-70"
          data-ai-hint="network graph changes dependencies"
        />
      </CardContent>
      <CardFooter className="border-t border-border/60 p-2 md:p-3">
        <Button variant="link" size="sm" className="text-xs text-primary">
          View Detailed Agent SDK Changelog
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function UpdatesPage() {
  const updatesPageZoneConfigs: ZoneConfig[] = [
    {
      id: 'osChangelog',
      title: 'OS Upgrades & Changelog',
      icon: <GitMerge className="h-4 w-4" />,
      content: <OsChangelogContent />,
      defaultLayout: {
        lg: { x: 0, y: 0, w: 8, h: 14, minW: 4, minH: 8 },
        md: { x: 0, y: 0, w: 6, h: 14, minW: 4, minH: 8 },
        sm: { x: 0, y: 0, w: 6, h: 12, minW: 3, minH: 6 },
      },
    },
    {
      id: 'roadmapPreview',
      title: 'Roadmap & Beta UX Modules',
      icon: <Rocket className="h-4 w-4" />,
      content: <RoadmapPreviewContent />,
      defaultLayout: {
        lg: { x: 8, y: 0, w: 4, h: 14, minW: 3, minH: 8 },
        md: { x: 6, y: 0, w: 4, h: 14, minW: 3, minH: 8 },
        sm: { x: 0, y: 12, w: 6, h: 10, minW: 3, minH: 6 },
      },
    },
    {
      id: 'agentReleaseLogs',
      title: 'Agent & Module Release Logs',
      icon: <Package className="h-4 w-4" />,
      content: <AgentReleaseLogsContent />,
      defaultLayout: {
        lg: { x: 0, y: 14, w: 12, h: 8, minW: 6, minH: 5 },
        md: { x: 0, y: 14, w: 10, h: 8, minW: 5, minH: 5 },
        sm: { x: 0, y: 22, w: 6, h: 7, minW: 4, minH: 4 },
      },
    },
  ];

  return (
    <WorkspaceGrid
      zoneConfigs={updatesPageZoneConfigs}
      className="flex-grow p-1 md:p-2"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    />
  );
}
