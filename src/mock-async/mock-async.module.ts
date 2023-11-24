import { Module } from "@nestjs/common";
import { MockAsyncService } from "./mock-async.service";

@Module({
    providers: [MockAsyncService],
    exports: [MockAsyncService],
})
export class MockAsyncModule {}