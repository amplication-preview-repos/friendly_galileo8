import { Injectable } from "@nestjs/common";
import { ContactDto } from "../identity/ContactDto";

@Injectable()
export class IdentityService {
  constructor() {}
  async IdentifyContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ReconcileContact(args: ContactDto): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
}
