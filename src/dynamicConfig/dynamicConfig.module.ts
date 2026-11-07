import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { FeatureFlaginterceptor } from "../featureFlag/featureFlag.interceptor.js";

@Module({
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: FeatureFlaginterceptor
        }
    ]
})
export class DynamicConfigModule { }