import { prisma } from "../prisma";

type ContactInput = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export async function createContactMessage(data: ContactInput) {
  return prisma.contactMessage.create({ data });
}

export async function listContactMessages() {
  return prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" }
  });
}

export async function deleteContactMessage(id: number) {
  return prisma.contactMessage.delete({
    where: { id }
  });
}
