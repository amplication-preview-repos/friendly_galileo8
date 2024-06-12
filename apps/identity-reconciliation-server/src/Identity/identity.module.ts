import { Module } from "@nestjs/common";
import { IdentityService } from "./identity.service";
import { IdentityController } from "./identity.controller";
import { IdentityResolver } from "./identity.resolver";

@Module({
  controllers: [IdentityController],
  providers: [IdentityService, IdentityResolver],
  exports: [IdentityService],
})
export class IdentityModule {}
