import type { EnterpriseService } from "./types";
import { service as erpImplementation } from "./erp-implementation";
import { service as epm } from "./epm";
import { service as powerbi } from "./powerbi";
import { service as aiStrategy } from "./ai-strategy";
import { service as businessProcessAutomation } from "./business-process-automation";
import { service as businessTransformation } from "./business-transformation";
import { service as agileTransformation } from "./agile-transformation";
import { service as jiraConsulting } from "./jira-consulting";
import { service as website } from "./website";
import { service as grc } from "./grc";
import { service as informationSecurityAudit } from "./information-security-audit";
import { service as portfolioBranding } from "./portfolio-branding";
import { service as businessTechnologyConsulting } from "./business-technology-consulting";

export const enterpriseServices: EnterpriseService[] = [
  erpImplementation,
  epm,
  powerbi,
  aiStrategy,
  businessProcessAutomation,
  businessTransformation,
  agileTransformation,
  jiraConsulting,
  website,
  grc,
  informationSecurityAudit,
  portfolioBranding,
  businessTechnologyConsulting,
];

export const enterpriseServiceBySlug = (slug: string): EnterpriseService | undefined =>
  enterpriseServices.find((s) => s.slug === slug);