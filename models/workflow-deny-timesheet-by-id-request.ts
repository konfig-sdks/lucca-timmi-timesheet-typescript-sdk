/*
Timmi Timesheet API

Welcome on the documentation for the Timmi Timesheet API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkflowDenyTimesheetByIdRequestTimesheetsInner } from './workflow-deny-timesheet-by-id-request-timesheets-inner';

/**
 * 
 * @export
 * @interface WorkflowDenyTimesheetByIdRequest
 */
export interface WorkflowDenyTimesheetByIdRequest {
    /**
     * 
     * @type {Array<WorkflowDenyTimesheetByIdRequestTimesheetsInner>}
     * @memberof WorkflowDenyTimesheetByIdRequest
     */
    'timesheets'?: Array<WorkflowDenyTimesheetByIdRequestTimesheetsInner>;
}

