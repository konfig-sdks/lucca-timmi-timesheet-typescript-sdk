/*
Timmi Timesheet API

Welcome on the documentation for the Timmi Timesheet API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimesheetUser } from './timesheet-user';

/**
 * 
 * @export
 * @interface TimesheetOwnerAllOf
 */
export interface TimesheetOwnerAllOf {
    /**
     * 
     * @type {TimesheetUser}
     * @memberof TimesheetOwnerAllOf
     */
    'manager'?: TimesheetUser;
}

