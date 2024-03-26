<div align="left">

[![Visit Lucca](./header.png)](https://lucca-hr.com)

# [Lucca](https://lucca-hr.com)<a id="lucca"></a>

Welcome on the documentation for the Timmi Timesheet API.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`luccatimmitimesheet.reports.createBasedOnTemplate`](#luccatimmitimesheetreportscreatebasedontemplate)
  * [`luccatimmitimesheet.reports.downloadCsvReport`](#luccatimmitimesheetreportsdownloadcsvreport)
  * [`luccatimmitimesheet.reports.downloadExcelReport`](#luccatimmitimesheetreportsdownloadexcelreport)
  * [`luccatimmitimesheet.timeEntries.createMultiple`](#luccatimmitimesheettimeentriescreatemultiple)
  * [`luccatimmitimesheet.timeEntries.deleteMultiple`](#luccatimmitimesheettimeentriesdeletemultiple)
  * [`luccatimmitimesheet.timeEntries.getById`](#luccatimmitimesheettimeentriesgetbyid)
  * [`luccatimmitimesheet.timeEntries.listTimeEntries`](#luccatimmitimesheettimeentrieslisttimeentries)
  * [`luccatimmitimesheet.timeEntries.removeById`](#luccatimmitimesheettimeentriesremovebyid)
  * [`luccatimmitimesheet.timeEntries.updateById`](#luccatimmitimesheettimeentriesupdatebyid)
  * [`luccatimmitimesheet.timeEntries.updateMultiple`](#luccatimmitimesheettimeentriesupdatemultiple)
  * [`luccatimmitimesheet.timesheets.list`](#luccatimmitimesheettimesheetslist)
  * [`luccatimmitimesheet.timesheets.listDue`](#luccatimmitimesheettimesheetslistdue)
  * [`luccatimmitimesheet.workflow.approveTimesheetsById`](#luccatimmitimesheetworkflowapprovetimesheetsbyid)
  * [`luccatimmitimesheet.workflow.cancelTimesheetById`](#luccatimmitimesheetworkflowcanceltimesheetbyid)
  * [`luccatimmitimesheet.workflow.denyTimesheetById`](#luccatimmitimesheetworkflowdenytimesheetbyid)
  * [`luccatimmitimesheet.workflow.invalidateTimesheetById`](#luccatimmitimesheetworkflowinvalidatetimesheetbyid)
  * [`luccatimmitimesheet.workflow.sendReminderEmail`](#luccatimmitimesheetworkflowsendreminderemail)
  * [`luccatimmitimesheet.workflow.submitTimesheet`](#luccatimmitimesheetworkflowsubmittimesheet)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lucca&serviceName=Timmi%20Timesheet&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { LuccaTimmiTimesheet } from "lucca-timmi-timesheet-typescript-sdk";

const luccatimmitimesheet = new LuccaTimmiTimesheet({
  // Defining the base path is optional and defaults to https://example.ilucca.net
  // basePath: "https://example.ilucca.net",
  apiKey: "API_KEY",
});

const createBasedOnTemplateResponse =
  await luccatimmitimesheet.reports.createBasedOnTemplate({
    status: "pending",
    templateId: "templateId_example",
  });

console.log(createBasedOnTemplateResponse);
```

## Reference<a id="reference"></a>


### `luccatimmitimesheet.reports.createBasedOnTemplate`<a id="luccatimmitimesheetreportscreatebasedontemplate"></a>

<!-- theme: info -->
> This endpoint does not adhere to the "v3 API endpoints" principles. The "fields" query parameter is not supported, but all fields are systematically returned.

A report can only be created based on an existing report-template. So you first need to retrieve the report-template unique identifier `templateId`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBasedOnTemplateResponse =
  await luccatimmitimesheet.reports.createBasedOnTemplate({
    status: "pending",
    templateId: "templateId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

##### id: `number`<a id="id-number"></a>

##### status: `string`<a id="status-string"></a>

##### name: `string`<a id="name-string"></a>

##### startsOn: `string`<a id="startson-string"></a>

##### endsOn: `string`<a id="endson-string"></a>

##### filters: [`ReportFiltersInner`](./models/report-filters-inner.ts)[]<a id="filters-reportfiltersinnermodelsreport-filters-innerts"></a>

##### columns: [`ReportColumnsInner`](./models/report-columns-inner.ts)[]<a id="columns-reportcolumnsinnermodelsreport-columns-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Report](./models/report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-timesheet/api/reports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.reports.downloadCsvReport`<a id="luccatimmitimesheetreportsdownloadcsvreport"></a>

<!-- theme: info -->
> This endpoint does not adhere to the "v3 API endpoints" principles.

Download a report content as an CSV file `.csv`.

Column delimiter and numbers formating depends on the authentified user's culture.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadCsvReportResponse =
  await luccatimmitimesheet.reports.downloadCsvReport({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportId: `number`<a id="reportid-number"></a>

Identifier of the report.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-timesheet/api/reports/{reportId}/download-csv` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.reports.downloadExcelReport`<a id="luccatimmitimesheetreportsdownloadexcelreport"></a>

<!-- theme: info -->
> This endpoint does not adhere to the "v3 API endpoints" principles.

Download a report content as an Excel file `.xls`.

Column delimiter and numbers formating depends on the authentified user's culture.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadExcelReportResponse =
  await luccatimmitimesheet.reports.downloadExcelReport({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportId: `number`<a id="reportid-number"></a>

Identifier of the report.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-timesheet/api/reports/{reportId}/download-excel` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.createMultiple`<a id="luccatimmitimesheettimeentriescreatemultiple"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1services~1time-entries/put)

You can create a single or multiple TimeEntries for a given user.

Beware, a new TimeEntry cannot intersect with a submitted or approved timesheet.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMultipleResponse =
  await luccatimmitimesheet.timeEntries.createMultiple({
    startsAt: "2022-01-01T08:00:00",
    duration: "03:45:00",
    unit: 0,
    ownerId: 1,
    creationSource: 2,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Unique identifier for this object.

##### startsAt: `string`<a id="startsat-string"></a>

The timeEntry start date and time. Please do NOT send any offset/timezone information (\\\"Z\\\", \\\"+01:00\\\", etc...).

##### duration: `string`<a id="duration-string"></a>

Format: d.hh:mm:ss. Max: \\\"1.00:00:00\\\" (ie 24 hours).

##### unit: `number`<a id="unit-number"></a>

0: Days (eg \\\"1/2 day\\\"). 1: Hours (eg \\\"8h15min\\\"). 2: Time (eg \\\"23:45:00\\\").

##### endsAt: `string`<a id="endsat-string"></a>

##### ownerId: `number`<a id="ownerid-number"></a>

The user\\\'s unique identifier.

##### authorId: `number`<a id="authorid-number"></a>

Identifier of the user who initially created this TimeEntry.

##### createdAt: `string`<a id="createdat-string"></a>

##### creationSource: `number`<a id="creationsource-number"></a>

0: Fallback on theoretical TimeEntries. 1: Application of bookmarked week. 2: Manual creation. 3: Import

##### modifierId: `number`<a id="modifierid-number"></a>

The unique identifier of the user who last updated the TimeEntry.

##### modifiedAt: `number`<a id="modifiedat-number"></a>

Date and time when TimeEntry was last modified.

##### layer: `number`<a id="layer-number"></a>

0: Actual. 1: Theoretical

##### axisSections: [`AxisSection`](./models/axis-section.ts)[]<a id="axissections-axissectionmodelsaxis-sectionts"></a>

When not in activity mode, send an empty array, or do not serialize this property.

##### comment: [`TimeEntryComment`](./models/time-entry-comment.ts)<a id="comment-timeentrycommentmodelstime-entry-commentts"></a>

##### timeTypeId: `any`<a id="timetypeid-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeEntriesCreateMultipleResponse](./models/time-entries-create-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.deleteMultiple`<a id="luccatimmitimesheettimeentriesdeletemultiple"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1services~1time-entries/put)

Delete one or several TimeEntries. The "id" field of each TimeEntry must be sent and correspond to an existing TimeEntry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMultipleResponse =
  await luccatimmitimesheet.timeEntries.deleteMultiple([
    {
      id: 0,
    },
  ]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`TimeEntriesDeleteMultipleRequestInner`](./models/time-entries-delete-multiple-request-inner.ts)[]

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.getById`<a id="luccatimmitimesheettimeentriesgetbyid"></a>

Retrieve a single TimeEntry identified by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccatimmitimesheet.timeEntries.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeEntryId: `number`<a id="timeentryid-number"></a>

Identifier of the TimeEntry.

#### 🔄 Return<a id="🔄-return"></a>

[TimeEntriesGetByIdResponse](./models/time-entries-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries/{timeEntryId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.listTimeEntries`<a id="luccatimmitimesheettimeentrieslisttimeentries"></a>

Retrieve a list of TimeEntries.

The `startsAt` query parameter can operate comparisons with a given date-time value:
- `?startsAt=2021-01-01`: strict equality.
- `?startsAt=since,2021-01-01`: greater than or equal.
- `?startsAt=until,2021-01-01`: lower than or equal.
- `?startsAt=between,2021-01-01,2021-01-31`: comprised between two dates.

To retrieve the total count of all TimeEntries (on all pages), please include the field `?field=collection.count`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTimeEntriesResponse =
  await luccatimmitimesheet.timeEntries.listTimeEntries({
    paging: "100,0",
    startsAt: "between,2021-01-01,2021-02-01",
    modifiedAt: "since,2021-01-01T08:45:23Z",
    archivedAt: "since,2021-01-01T08:45:23Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### ownerId: `any`<a id="ownerid-any"></a>
               `any`[]

User\'s identifier

##### startsAt: `string`<a id="startsat-string"></a>

{comparator},{date-time}

##### axisSectionsId: `any`<a id="axissectionsid-any"></a>
                      `any`[]

Filter on a comma-separated list of AxisSections identifiers.

##### axisSectionsCode: `any`<a id="axissectionscode-any"></a>
                        `any`[]

Filter on a comma-separated list of AxisSections codes.

##### modifiedAt: `string`<a id="modifiedat-string"></a>

{comparator},{date-time}

##### archivedAt: `string`<a id="archivedat-string"></a>

{comparator},{date-time}

#### 🔄 Return<a id="🔄-return"></a>

[TimeEntriesListTimeEntriesResponse](./models/time-entries-list-time-entries-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.removeById`<a id="luccatimmitimesheettimeentriesremovebyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1services~1time-entries/put)

Delete a single TimeEntry. Deletion is irrevocable.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await luccatimmitimesheet.timeEntries.removeById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeEntryId: `number`<a id="timeentryid-number"></a>

Identifier of the TimeEntry.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries/{timeEntryId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.updateById`<a id="luccatimmitimesheettimeentriesupdatebyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1services~1time-entries/put)

Update fields of a single TimeEntry identified by its unique id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await luccatimmitimesheet.timeEntries.updateById({
  startsAt: "2022-01-01T08:00:00",
  duration: "03:45:00",
  unit: 0,
  ownerId: 1,
  creationSource: 2,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startsAt: `string`<a id="startsat-string"></a>

The timeEntry start date and time. Please do NOT send any offset/timezone information (\\\"Z\\\", \\\"+01:00\\\", etc...).

##### duration: `string`<a id="duration-string"></a>

Format: d.hh:mm:ss. Max: \\\"1.00:00:00\\\" (ie 24 hours).

##### unit: `number`<a id="unit-number"></a>

0: Days (eg \\\"1/2 day\\\"). 1: Hours (eg \\\"8h15min\\\"). 2: Time (eg \\\"23:45:00\\\").

##### ownerId: `number`<a id="ownerid-number"></a>

The user\\\'s unique identifier.

##### timeEntryId: `number`<a id="timeentryid-number"></a>

Identifier of the TimeEntry.

##### id: `number`<a id="id-number"></a>

Unique identifier for this object.

##### endsAt: `string`<a id="endsat-string"></a>

##### authorId: `number`<a id="authorid-number"></a>

Identifier of the user who initially created this TimeEntry.

##### createdAt: `string`<a id="createdat-string"></a>

##### creationSource: `number`<a id="creationsource-number"></a>

0: Fallback on theoretical TimeEntries. 1: Application of bookmarked week. 2: Manual creation. 3: Import

##### modifierId: `number`<a id="modifierid-number"></a>

The unique identifier of the user who last updated the TimeEntry.

##### modifiedAt: `number`<a id="modifiedat-number"></a>

Date and time when TimeEntry was last modified.

##### layer: `number`<a id="layer-number"></a>

0: Actual. 1: Theoretical

##### axisSections: [`AxisSection`](./models/axis-section.ts)[]<a id="axissections-axissectionmodelsaxis-sectionts"></a>

When not in activity mode, send an empty array, or do not serialize this property.

##### comment: [`TimeEntryComment`](./models/time-entry-comment.ts)<a id="comment-timeentrycommentmodelstime-entry-commentts"></a>

##### timeTypeId: `any`<a id="timetypeid-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeEntriesUpdateByIdResponse](./models/time-entries-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries/{timeEntryId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timeEntries.updateMultiple`<a id="luccatimmitimesheettimeentriesupdatemultiple"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1services~1time-entries/put)

Update one or several TimeEntries. The "id" field must be sent and correspond to an existing TimeEntry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMultipleResponse =
  await luccatimmitimesheet.timeEntries.updateMultiple({
    startsAt: "2022-01-01T08:00:00",
    duration: "03:45:00",
    unit: 0,
    ownerId: 1,
    creationSource: 2,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Unique identifier for this object.

##### startsAt: `string`<a id="startsat-string"></a>

The timeEntry start date and time. Please do NOT send any offset/timezone information (\\\"Z\\\", \\\"+01:00\\\", etc...).

##### duration: `string`<a id="duration-string"></a>

Format: d.hh:mm:ss. Max: \\\"1.00:00:00\\\" (ie 24 hours).

##### unit: `number`<a id="unit-number"></a>

0: Days (eg \\\"1/2 day\\\"). 1: Hours (eg \\\"8h15min\\\"). 2: Time (eg \\\"23:45:00\\\").

##### endsAt: `string`<a id="endsat-string"></a>

##### ownerId: `number`<a id="ownerid-number"></a>

The user\\\'s unique identifier.

##### authorId: `number`<a id="authorid-number"></a>

Identifier of the user who initially created this TimeEntry.

##### createdAt: `string`<a id="createdat-string"></a>

##### creationSource: `number`<a id="creationsource-number"></a>

0: Fallback on theoretical TimeEntries. 1: Application of bookmarked week. 2: Manual creation. 3: Import

##### modifierId: `number`<a id="modifierid-number"></a>

The unique identifier of the user who last updated the TimeEntry.

##### modifiedAt: `number`<a id="modifiedat-number"></a>

Date and time when TimeEntry was last modified.

##### layer: `number`<a id="layer-number"></a>

0: Actual. 1: Theoretical

##### axisSections: [`AxisSection`](./models/axis-section.ts)[]<a id="axissections-axissectionmodelsaxis-sectionts"></a>

When not in activity mode, send an empty array, or do not serialize this property.

##### comment: [`TimeEntryComment`](./models/time-entry-comment.ts)<a id="comment-timeentrycommentmodelstime-entry-commentts"></a>

##### timeTypeId: `any`<a id="timetypeid-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeEntriesUpdateMultipleResponse](./models/time-entries-update-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timeentries` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timesheets.list`<a id="luccatimmitimesheettimesheetslist"></a>

List all timesheets satisfying query filters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await luccatimmitimesheet.timesheets.list({
  startsOn: "between,2022-01-01,2022-02-01",
  endsOn: "until,2022-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerId: []<a id="ownerid-"></a>

User\'s identifier.

##### startsOn: `string`<a id="startson-string"></a>

Filter on the start date of the timesheet.

##### status: []<a id="status-"></a>

Filter on the timesheet workflow status.

##### endsOn: `string`<a id="endson-string"></a>

Filter on the end date of the timesheet.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsListResponse](./models/timesheets-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timmitimesheets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.timesheets.listDue`<a id="luccatimmitimesheettimesheetslistdue"></a>

List timesheet that are not yet submitted (status: 0). 
You must filter on either `ownerIds`, `managerIds` or `legalEntityIds`.
As long as a timesheet is not submitted, its unique identifier is equal to zero.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDueResponse = await luccatimmitimesheet.timesheets.listDue({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerIds: `number`[]<a id="ownerids-number"></a>

List unique identifier of submitters.

##### legalEntityIds: `number`[]<a id="legalentityids-number"></a>

List unique identifier of submitters\' legal establishments.

##### managerIds: `number`[]<a id="managerids-number"></a>

List unique identifier of submitters\' manager.

##### start: `string | Date`<a id="start-string--date"></a>

Prevent older timesheets to be returned.

##### end: `string | Date`<a id="end-string--date"></a>

Prevent earlier timesheets to be returned (date excluded). Defaults to today when not sent.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsListDueResponse](./models/timesheets-list-due-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/timmitimesheets/remindable` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.approveTimesheetsById`<a id="luccatimmitimesheetworkflowapprovetimesheetsbyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](../reference/Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1api~1timesheets~1{id}~1approve/post)

Multiple approvals can be required, depending on the configuration.

Once all approvals needed are satisfied, the timesheet status is set to `2: Approved`.

Comprised TimeEntries can only be modified by rejecting the timesheet through the "invalidate" operation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveTimesheetsByIdResponse =
  await luccatimmitimesheet.workflow.approveTimesheetsById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowApproveTimesheetsByIdRequestTimesheetsInner`](./models/workflow-approve-timesheets-by-id-request-timesheets-inner.ts)[]<a id="timesheets-workflowapprovetimesheetsbyidrequesttimesheetsinnermodelsworkflow-approve-timesheets-by-id-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.cancelTimesheetById`<a id="luccatimmitimesheetworkflowcanceltimesheetbyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](../reference/Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1api~1timesheets~1{id}~1cancel/post)

Cancel a timesheet's submission. Can only be achieved by the original submitter as long as the timesheet's not approved.

Sets the timesheet status to `3` (rejected).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelTimesheetByIdResponse =
  await luccatimmitimesheet.workflow.cancelTimesheetById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowCancelTimesheetByIdRequestTimesheetsInner`](./models/workflow-cancel-timesheet-by-id-request-timesheets-inner.ts)[]<a id="timesheets-workflowcanceltimesheetbyidrequesttimesheetsinnermodelsworkflow-cancel-timesheet-by-id-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.denyTimesheetById`<a id="luccatimmitimesheetworkflowdenytimesheetbyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](../reference/Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1api~1timesheets~1{id}~1deny/post)

Denies a submitted timesheet pending approval. Sets its status to `3` (rejected) and a new timesheet may be submitted for this User and [StartsOn - EndsOn[.

Comment is mandatory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const denyTimesheetByIdResponse =
  await luccatimmitimesheet.workflow.denyTimesheetById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowDenyTimesheetByIdRequestTimesheetsInner`](./models/workflow-deny-timesheet-by-id-request-timesheets-inner.ts)[]<a id="timesheets-workflowdenytimesheetbyidrequesttimesheetsinnermodelsworkflow-deny-timesheet-by-id-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/deny` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.invalidateTimesheetById`<a id="luccatimmitimesheetworkflowinvalidatetimesheetbyid"></a>

<!-- theme: warning --> 
>#### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](../reference/Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1api~1timesheets~1{id}~1invalidate/post)

Rejects an approved timesheet. Sets its status to `3` (rejected). A new timesheet may then be submitted for this User and [StartsOn - EndsOn[.

Comment is mandatory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invalidateTimesheetByIdResponse =
  await luccatimmitimesheet.workflow.invalidateTimesheetById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowCancelTimesheetByIdRequestTimesheetsInner`](./models/workflow-cancel-timesheet-by-id-request-timesheets-inner.ts)[]<a id="timesheets-workflowcanceltimesheetbyidrequesttimesheetsinnermodelsworkflow-cancel-timesheet-by-id-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/invalidate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.sendReminderEmail`<a id="luccatimmitimesheetworkflowsendreminderemail"></a>

Remind user of a due timesheet. Sends him/her an email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendReminderEmailResponse =
  await luccatimmitimesheet.workflow.sendReminderEmail({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowSendReminderEmailRequestTimesheetsInner`](./models/workflow-send-reminder-email-request-timesheets-inner.ts)[]<a id="timesheets-workflowsendreminderemailrequesttimesheetsinnermodelsworkflow-send-reminder-email-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/remind` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmitimesheet.workflow.submitTimesheet`<a id="luccatimmitimesheetworkflowsubmittimesheet"></a>

<!-- theme: warning -->
> #### Warning
> This endpoint will soon be deprecated, please use [Timmi Timesheet v4 API](../reference/Timmi-Timesheet.yaml/paths/~1timmi-timesheet~1api~1timesheets~1submit/post)

Timesheet is created and its status is set to `1` (pending approval). In some cases, timesheet may then be automatically approved (`status: 2`), depending on the application settings.

Once submitted, all comprised TimeEntries for user can no longer be modified. In order to be able to modify them, the timesheet must first be rejected through `cancel`, `deny` or `invalidate` operations (depends on the current timesheet status).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitTimesheetResponse =
  await luccatimmitimesheet.workflow.submitTimesheet({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheets: [`WorkflowSubmitTimesheetRequestTimesheetsInner`](./models/workflow-submit-timesheet-request-timesheets-inner.ts)[]<a id="timesheets-workflowsubmittimesheetrequesttimesheetsinnermodelsworkflow-submit-timesheet-request-timesheets-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowSendReminderEmailResponse](./models/workflow-send-reminder-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi/services/workflow/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
