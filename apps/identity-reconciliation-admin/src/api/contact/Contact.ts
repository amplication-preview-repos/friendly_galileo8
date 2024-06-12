export type Contact = {
  createdAt: Date;
  deletedAt: Date | null;
  email: string | null;
  id: string;
  linkedId: string | null;
  linkPrecedence?: "Option1" | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
