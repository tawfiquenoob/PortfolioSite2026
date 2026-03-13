import { prisma } from "../prisma";

export async function trackPageView(path: string) {
  return prisma.eventLog.create({
    data: {
      eventType: "page_view",
      path
    }
  });
}

export async function getAnalyticsSummary() {
  const totalPageViews = await prisma.eventLog.count({
    where: { eventType: "page_view" }
  });

  const viewsByPath = await prisma.eventLog.groupBy({
    by: ["path"],
    _count: { path: true },
    where: { eventType: "page_view" },
    orderBy: { _count: { path: "desc" } }
  });

  const rows = await prisma.$queryRaw<
    Array<{ day: Date; count: bigint }>
  >`SELECT DATE("createdAt") AS day, COUNT(*)::bigint AS count
    FROM "EventLog"
    WHERE "eventType" = 'page_view'
    GROUP BY DATE("createdAt")
    ORDER BY day DESC
    LIMIT 30`;

  return {
    totalPageViews,
    viewsByPath: viewsByPath.map((row) => ({
      path: row.path,
      count: row._count.path
    })),
    last30Days: rows.map((row) => ({
      day: row.day.toISOString().slice(0, 10),
      count: Number(row.count)
    }))
  };
}
