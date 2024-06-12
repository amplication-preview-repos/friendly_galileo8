import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  linkedId?: StringNullableFilter;
  linkPrecedence?: "Option1";
  phoneNumber?: StringNullableFilter;
};
