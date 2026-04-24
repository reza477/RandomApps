import { defaultWeekPlans } from './data';
import type { AppSettings, DayPlan } from './types';

const PLANS_KEY = 'runway-command:plans:v1';
const CHECKS_KEY = 'runway-command:checks:v1';
const CHECK_DATE_KEY = 'runway-command:checks-date:v1';
const SETTINGS_KEY = 'runway-command:settings:v1';

const defaultSettings: AppSettings = {
  badNightOptions: defaultWeekPlans[0].dangerWarnings
};

export const loadPlans = (): DayPlan[] => {
  const raw = localStorage.getItem(PLANS_KEY);
  if (!raw) return defaultWeekPlans;

  try {
    const parsed = JSON.parse(raw) as DayPlan[];
    return parsed.length ? parsed : defaultWeekPlans;
  } catch {
    return defaultWeekPlans;
  }
};

export const savePlans = (plans: DayPlan[]): void => {
  localStorage.setItem(PLANS_KEY, JSON.stringify(plans));
};

export const loadChecks = (): Record<string, Record<number, boolean>> => {
  const today = new Date().toISOString().slice(0, 10);
  const lastDate = localStorage.getItem(CHECK_DATE_KEY);
  if (lastDate !== today) {
    localStorage.setItem(CHECK_DATE_KEY, today);
    localStorage.setItem(CHECKS_KEY, JSON.stringify({}));
    return {};
  }

  const raw = localStorage.getItem(CHECKS_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw) as Record<string, Record<number, boolean>>;
  } catch {
    return {};
  }
};

export const saveChecks = (checks: Record<string, Record<number, boolean>>): void => {
  localStorage.setItem(CHECKS_KEY, JSON.stringify(checks));
};

export const loadSettings = (): AppSettings => {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return defaultSettings;

  try {
    return { ...defaultSettings, ...(JSON.parse(raw) as AppSettings) };
  } catch {
    return defaultSettings;
  }
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};
