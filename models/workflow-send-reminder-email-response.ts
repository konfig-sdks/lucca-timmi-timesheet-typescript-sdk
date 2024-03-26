/*
Timmi Timesheet API

Welcome on the documentation for the Timmi Timesheet API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkflowSendReminderEmailResponseItemsInner } from './workflow-send-reminder-email-response-items-inner';

/**
 * 
 * @export
 * @interface WorkflowSendReminderEmailResponse
 */
export interface WorkflowSendReminderEmailResponse {
    /**
     * HTTP status code.
     * @type {number}
     * @memberof WorkflowSendReminderEmailResponse
     */
    'Status'?: number;
    /**
     * Human readable error message (when error).
     * @type {any}
     * @memberof WorkflowSendReminderEmailResponse
     */
    'Message'?: any;
    /**
     * 
     * @type {Array<WorkflowSendReminderEmailResponseItemsInner>}
     * @memberof WorkflowSendReminderEmailResponse
     */
    'Items'?: Array<WorkflowSendReminderEmailResponseItemsInner>;
}

