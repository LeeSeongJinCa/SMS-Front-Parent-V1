import { ResDefault } from "../index";
import { EMERGENCY, NORMAL } from "../../../../components/Parent/Approve";

export type SituationType = typeof NORMAL | typeof EMERGENCY;

export interface ResHistoryItem {
  end_time: number;
  outing_situation: string;
  outing_status: string;
  outing_uuid: string;
  place: string;
  reason: string;
  start_time: number;
}
export interface ResHistory {
  outings: ResHistoryItem[];
}
export interface ResOutingInfo {
  outing_uuid: string;
  place: string;
  reason: string;
  start_time: number;
  end_time: number;
  outing_situation: SituationType | "";
}

export interface ResOutingInfoWithDefault extends ResOutingInfo, ResDefault {}
export interface ResHistoryWithDefault extends ResHistory, ResDefault {}
