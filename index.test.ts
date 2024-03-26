import { LuccaTimmiTimesheet } from "./index";

describe("lucca-timmi-timesheet-typescript-sdk", () => {
    it("initialize client", async () => {
        const luccatimmitimesheet = new LuccaTimmiTimesheet({
            apiKey: "API_KEY",
        });
    });
});
