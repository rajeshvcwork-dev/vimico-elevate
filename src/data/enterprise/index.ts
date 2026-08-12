import type { EnterpriseService } from "./types";
import { service as erpImplementation } from "./erp-implementation";
import { service as epm } from "./epm";
import { service as powerbi } from "./powerbi";
import { service as aiStrategy } from "./ai-strategy";
import { service as businessProcessAutomation } from "./business-process-automation";
import { service as businessTransformation } from "./business-transformation";
import { service as website } from "./website";
import { service as grc } from "./grc";
import { service as informationSecurityAudit } from "./information-security-audit";

export const enterpriseServices: EnterpriseService[] = [
  erpImplementation,
  epm,
  powerbi,
  aiStrategy,
  businessProcessAutomation,
  businessTransformation,
  website,
  grc,
  informationSecurityAudit,
];

export const enterpriseServiceBySlug = (slug: string): EnterpriseService | undefined =>
  enterpriseServices.find((s) => s.slug === slug);