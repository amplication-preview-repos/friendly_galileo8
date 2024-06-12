import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IdentityService } from "./identity.service";
import { ContactDto } from "../identity/ContactDto";

@swagger.ApiTags("identities")
@common.Controller("identities")
export class IdentityController {
  constructor(protected readonly service: IdentityService) {}

  @common.Get("/:id/identify-contact")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IdentifyContact(
    @common.Body()
    body: ContactDto
  ): Promise<string> {
        return this.service.IdentifyContact(body);
      }

  @common.Post("/reconcile")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReconcileContact(
    @common.Body()
    body: ContactDto
  ): Promise<ContactDto> {
        return this.service.ReconcileContact(body);
      }
}
