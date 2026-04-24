export type ScheduleItem = {
  time: string;
  task: string;
  note?: string;
};

export type DayPlan = {
  id: string;
  dayName: string;
  theme: string;
  mentor: string;
  quote: string;
  reminder: string;
  scheduleItems: ScheduleItem[];
  nightBladeOptions: string[];
  dangerWarnings: string[];
  brokenDayRules: string[];
};

export type AppSettings = {
  badNightOptions: string[];
};

export type PageKey = 'today' | 'week' | 'edit' | 'settings';
