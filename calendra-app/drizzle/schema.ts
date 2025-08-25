import { DAYS_OF_WEEK_IN_ORDER } from "@/constants";
import { relations } from "drizzle-orm";
import { union } from "drizzle-orm/gel-core";
import {
  boolean,
  integer,
  pgTable,
  text,
  uuid,
  index,
  timestamp,
  unique,
  pgEnum,
} from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();

const updatedAt = timestamp("updatedAt")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());

export const EventTable = pgTable(
  "events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description"),
    durationInMinutes: text("durationInMinutes").notNull(),
    clerkUserId: text("clerkUserId").notNull(),
    isActive: boolean("isActive").notNull().default(true),

    createdAt,
    updatedAt,
  },
  (table) => [index("clerkUserIdIndex").on(table.clerkUserId)]
);

export const ScheduleTable = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  timezone: text("timezone").notNull(),
  clerkuserId: text("clerkUserId").notNull().unique(),
  createdAt,
  updatedAt,
});

export const scheduleRelations = relations(ScheduleTable, ({ many }) => ({
  availabilities: many(ScheduleAvailabilityTable),
}));

export const scheduleDayOfWeekEnum = pgEnum("day", DAYS_OF_WEEK_IN_ORDER);

export const ScheduleAvailabilityTable = pgTable(
  "scheduleAvailabilities",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    scheduleId: uuid("scheduleId")
      .notNull()
      .references(() => ScheduleTable.id, { onDelete: "cascade" }),

    startTime: text("startTime").notNull(), // Minutes from midnight
    endTime: text("endTime").notNull(), // Minutes from midnight
    dayOfWeek: scheduleDayOfWeekEnum("dayOfWeek").notNull(), // 0 (Sunday) to 6 (Saturday)

    createdAt,
    updatedAt,
  },
  (table) => [index("scheduleIdIndex").on(table.scheduleId)]
);

export const scheduleAvailabilityRelations = relations(
  ScheduleAvailabilityTable,
  ({ one }) => ({
    schedule: one(ScheduleTable, {
      fields: [ScheduleAvailabilityTable.scheduleId],
      references: [ScheduleTable.id],
    }),
  })
);
