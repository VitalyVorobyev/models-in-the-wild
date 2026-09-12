/*
 * The deck sequence. This array is the contract: its order and length must
 * match docs/slide-map.md, and adding or moving a slide means updating that
 * file in the same change.
 */
import Title from "./01-title";
import FiveArtifacts from "./02-five-artifacts";
import TheQuestion from "./03-the-question";
import TheWorkflow from "./04-the-workflow";
import ContextBackbone from "./05-context-backbone";
import RigidVsFlexible from "./06-rigid-vs-flexible";
import CvAtlasOpener from "./07-cv-atlas-opener";
import CvAtlasWhy from "./08-cv-atlas-why";
import CvAtlasPipeline from "./09-cv-atlas-pipeline";
import CvAtlasDemo from "./10-cv-atlas-demo";
import CompanyImplication from "./11-company-implication";
import FamilyDocumentsOpener from "./12-family-documents-opener";
import FamilyDocumentsTeaches from "./13-family-documents-teaches";
import DeutschAtlasOpener from "./14-deutsch-atlas-opener";
import DeutschAtlasTeaches from "./15-deutsch-atlas-teaches";
import CvTechRadarOpener from "./16-cv-tech-radar-opener";
import CvTechRadarTeaches from "./17-cv-tech-radar-teaches";
import ScoreQuantOpener from "./18-scorequant-opener";
import ScoreQuantTeaches from "./19-scorequant-teaches";
import FiveCapabilities from "./20-five-capabilities";
import BeyondCoding from "./21-beyond-coding";
import Closing from "./22-closing";

export const slides = [
  Title,
  FiveArtifacts,
  TheQuestion,
  TheWorkflow,
  ContextBackbone,
  RigidVsFlexible,
  CvAtlasOpener,
  CvAtlasWhy,
  CvAtlasPipeline,
  CvAtlasDemo,
  CompanyImplication,
  FamilyDocumentsOpener,
  FamilyDocumentsTeaches,
  DeutschAtlasOpener,
  DeutschAtlasTeaches,
  CvTechRadarOpener,
  CvTechRadarTeaches,
  ScoreQuantOpener,
  ScoreQuantTeaches,
  FiveCapabilities,
  BeyondCoding,
  Closing,
];
