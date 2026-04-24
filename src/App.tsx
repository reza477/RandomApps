import { useEffect, useMemo, useState } from 'react';
import { defaultWeekPlans, weekOrder } from './data';
import { loadChecks, loadPlans, loadSettings, saveChecks, savePlans, saveSettings } from './storage';
import type { DayPlan, PageKey, ScheduleItem } from './types';

const todayName = weekOrder[new Date().getDay()];

const emptyScheduleRow: ScheduleItem = { time: '', task: '', note: '' };

function App() {
  const [plans, setPlans] = useState<DayPlan[]>(() => loadPlans());
  const [checks, setChecks] = useState<Record<string, Record<number, boolean>>>(() => loadChecks());
  const [settings, setSettings] = useState(() => loadSettings());
  const [page, setPage] = useState<PageKey>('today');
  const [showBroken, setShowBroken] = useState(false);
  const [selectedEditId, setSelectedEditId] = useState(() => {
    const found = plans.find((p) => p.dayName === todayName);
    return found?.id ?? plans[0].id;
  });

  const todayPlan = useMemo(() => {
    return plans.find((p) => p.dayName === todayName) ?? plans[0];
  }, [plans]);

  const selectedPlan = plans.find((p) => p.id === selectedEditId) ?? plans[0];

  const toggleCheck = (planId: string, idx: number) => {
    const current = checks[planId] ?? {};
    const nextChecks = {
      ...checks,
      [planId]: {
        ...current,
        [idx]: !current[idx]
      }
    };
    setChecks(nextChecks);
    saveChecks(nextChecks);
  };

  const saveEditedPlan = (next: DayPlan) => {
    const updated = plans.map((p) => (p.id === next.id ? next : p));
    setPlans(updated);
    savePlans(updated);
  };

  const resetDefaults = () => {
    setPlans(defaultWeekPlans);
    setChecks({});
    savePlans(defaultWeekPlans);
    saveChecks({});
    localStorage.removeItem('runway-command:checks-date:v1');
  };

  const updateSettings = (value: string) => {
    const options = value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
    const next = { ...settings, badNightOptions: options };
    setSettings(next);
    saveSettings(next);
  };

  return (
    <div className="app-shell">
      <header className="header">
        <h1>Runway Command</h1>
        <p>{todayName} Protocol</p>
      </header>

      <main className="main">
        {page === 'today' && (
          <TodayPage
            plan={todayPlan}
            checks={checks[todayPlan.id] ?? {}}
            onToggleCheck={toggleCheck}
            onToggleBroken={() => setShowBroken((prev) => !prev)}
            showBroken={showBroken}
            badNightOptions={settings.badNightOptions}
          />
        )}
        {page === 'week' && <WeekPage plans={plans} />}
        {page === 'edit' && (
          <EditPage
            plans={plans}
            selectedPlan={selectedPlan}
            onSelectPlan={setSelectedEditId}
            onSavePlan={saveEditedPlan}
          />
        )}
        {page === 'settings' && (
          <SettingsPage
            badNightOptions={settings.badNightOptions}
            onUpdateSettings={updateSettings}
            onResetDefaults={resetDefaults}
          />
        )}
      </main>

      <nav className="tab-bar">
        {[
          ['today', 'Today'],
          ['week', 'Week'],
          ['edit', 'Edit'],
          ['settings', 'Settings']
        ].map(([key, label]) => (
          <button
            key={key}
            className={page === key ? 'tab active' : 'tab'}
            onClick={() => setPage(key as PageKey)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

function TodayPage({
  plan,
  checks,
  onToggleCheck,
  onToggleBroken,
  showBroken,
  badNightOptions
}: {
  plan: DayPlan;
  checks: Record<number, boolean>;
  onToggleCheck: (planId: string, idx: number) => void;
  onToggleBroken: () => void;
  showBroken: boolean;
  badNightOptions: string[];
}) {
  return (
    <section className="stack">
      <article className="card quote-card">
        <h2>{plan.dayName}</h2>
        <p className="quote">“{plan.quote}”</p>
        <p className="meta">Mentor: {plan.mentor}</p>
      </article>

      <article className="card mission-card">
        <h3>Main Mission</h3>
        <p>{plan.theme}</p>
        <p className="reminder">{plan.reminder}</p>
      </article>

      <article className="card">
        <div className="card-row">
          <h3>Hour-by-Hour Command</h3>
          <button onClick={onToggleBroken} className="secondary-btn">
            Broken Day Mode
          </button>
        </div>
        <ul className="schedule-list">
          {plan.scheduleItems.map((item, idx) => (
            <li key={`${item.time}-${idx}`} className="schedule-item">
              <label>
                <input
                  type="checkbox"
                  checked={Boolean(checks[idx])}
                  onChange={() => onToggleCheck(plan.id, idx)}
                />
                <span className="time">{item.time}</span>
                <span className="task">{item.task}</span>
              </label>
              {item.note && <small>{item.note}</small>}
            </li>
          ))}
        </ul>
      </article>

      <article className="card warning-card">
        <h3>Danger Warning</h3>
        <ul>
          {badNightOptions.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </article>

      <article id="night-blade" className="card night-card">
        <h3>Night Blade</h3>
        <ul>
          {plan.nightBladeOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </article>

      <button className="primary-btn" onClick={() => document.getElementById('night-blade')?.scrollIntoView()}>
        Night Blade Jump
      </button>

      {showBroken && (
        <article className="card broken-card">
          <h3>Broken Day Rule</h3>
          <ol>
            {plan.brokenDayRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </article>
      )}
    </section>
  );
}

function WeekPage({ plans }: { plans: DayPlan[] }) {
  const sorted = [...plans].sort(
    (a, b) => weekOrder.indexOf(a.dayName as (typeof weekOrder)[number]) - weekOrder.indexOf(b.dayName as (typeof weekOrder)[number])
  );

  return (
    <section className="stack">
      {sorted.map((plan) => (
        <article key={plan.id} className="card week-card">
          <h3>{plan.dayName}</h3>
          <p className="meta">{plan.theme}</p>
          <p className="quote">“{plan.quote}”</p>
        </article>
      ))}
    </section>
  );
}

function EditPage({
  plans,
  selectedPlan,
  onSelectPlan,
  onSavePlan
}: {
  plans: DayPlan[];
  selectedPlan: DayPlan;
  onSelectPlan: (id: string) => void;
  onSavePlan: (plan: DayPlan) => void;
}) {
  const [draft, setDraft] = useState<DayPlan>(selectedPlan);

  useEffect(() => {
    setDraft(selectedPlan);
  }, [selectedPlan]);

  const updateSchedule = (index: number, key: keyof ScheduleItem, value: string) => {
    const next = draft.scheduleItems.map((item, idx) =>
      idx === index
        ? {
            ...item,
            [key]: value
          }
        : item
    );
    setDraft({ ...draft, scheduleItems: next });
  };

  const addItem = () => {
    setDraft({ ...draft, scheduleItems: [...draft.scheduleItems, emptyScheduleRow] });
  };

  return (
    <section className="stack">
      <article className="card">
        <h3>Edit Schedule</h3>
        <select value={selectedPlan.id} onChange={(e) => onSelectPlan(e.target.value)}>
          {plans.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.dayName}
            </option>
          ))}
        </select>

        <label>Theme</label>
        <input value={draft.theme} onChange={(e) => setDraft({ ...draft, theme: e.target.value })} />
        <label>Mentor</label>
        <input value={draft.mentor} onChange={(e) => setDraft({ ...draft, mentor: e.target.value })} />
        <label>Quote</label>
        <textarea value={draft.quote} onChange={(e) => setDraft({ ...draft, quote: e.target.value })} />
        <label>Reminder</label>
        <textarea value={draft.reminder} onChange={(e) => setDraft({ ...draft, reminder: e.target.value })} />
      </article>

      <article className="card">
        <h3>Schedule Items</h3>
        {draft.scheduleItems.map((item, idx) => (
          <div key={`${draft.id}-${idx}`} className="schedule-edit-row">
            <input
              value={item.time}
              onChange={(e) => updateSchedule(idx, 'time', e.target.value)}
              placeholder="time"
            />
            <input
              value={item.task}
              onChange={(e) => updateSchedule(idx, 'task', e.target.value)}
              placeholder="task"
            />
          </div>
        ))}
        <button className="secondary-btn" onClick={addItem}>
          Add Row
        </button>
      </article>

      <button className="primary-btn" onClick={() => onSavePlan(draft)}>
        Save Day Plan
      </button>
    </section>
  );
}

function SettingsPage({
  badNightOptions,
  onUpdateSettings,
  onResetDefaults
}: {
  badNightOptions: string[];
  onUpdateSettings: (value: string) => void;
  onResetDefaults: () => void;
}) {
  return (
    <section className="stack">
      <article className="card">
        <h3>Bad Night Options</h3>
        <p className="meta">One item per line. Stored locally on this device.</p>
        <textarea
          value={badNightOptions.join('\n')}
          onChange={(e) => onUpdateSettings(e.target.value)}
          rows={10}
        />
      </article>

      <article className="card">
        <h3>Storage</h3>
        <p className="meta">Data is local-first using your phone browser localStorage.</p>
        <button className="danger-btn" onClick={onResetDefaults}>
          Reset All to Defaults
        </button>
      </article>
    </section>
  );
}

export default App;
