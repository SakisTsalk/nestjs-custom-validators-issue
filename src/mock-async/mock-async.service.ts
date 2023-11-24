import { Injectable } from "@nestjs/common";

@Injectable()
export class MockAsyncService {

    public async mockAsyncOperation(): Promise<void> {
        // This is to mock business logic
        await new Promise((r) => setTimeout(r, 50));
    }
}