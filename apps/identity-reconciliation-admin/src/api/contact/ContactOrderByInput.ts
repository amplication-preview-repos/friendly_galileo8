import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  linkedId?: SortOrder;
  linkPrecedence?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
