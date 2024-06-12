import * as graphql from "@nestjs/graphql";
import { ContactDto } from "../identity/ContactDto";
import { IdentityService } from "./identity.service";

export class IdentityResolver {
  constructor(protected readonly service: IdentityService) {}

  @graphql.Query(() => String)
  async IdentifyContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.IdentifyContact(args);
  }

  @graphql.Mutation(() => ContactDto)
  async ReconcileContact(
    @graphql.Args()
    args: ContactDto
  ): Promise<ContactDto> {
    return this.service.ReconcileContact(args);
  }
}
