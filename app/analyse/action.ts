import prisma from "@/lib/db";

export async function action(area: string) {
  return await prisma.request.create({
    data: { area: area, timestamp: new Date() },
  });
}
