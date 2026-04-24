import type { DayPlan } from './types';

const globalNightBladeOptions = [
  'fiction / story reading',
  'light manga/comic reading for meetup',
  '5 meetup questions',
  'AI-assisted admin message',
  'pack bag',
  'clothes for tomorrow',
  '10-line journal',
  'music listening only',
  'calligraphy line practice max 10 min'
];

const brokenDayRules = [
  'Move body for 30 min.',
  'Leave house for 2 hours.',
  "Do the day's main field badly but honestly.",
  'Night Blade only.'
];

const dangerWarnings = [
  'philosophy essays',
  'AI/robotics deep learning',
  'coding',
  'dating analysis',
  'WhatsApp surveillance',
  'Tanya/Angelo checking',
  'sex panic research',
  'long political/AI arguments'
];

export const defaultWeekPlans: DayPlan[] = [
  {
    id: 'monday',
    dayName: 'Monday',
    theme: 'Adult Command / Driving / Money',
    mentor: 'Caesar',
    quote: 'Order first. A man who cannot order his day cannot command his life.',
    reminder:
      'Driver’s license = mobility, adulthood, confidence. PWD/admin = survival money and breathing room.',
    scheduleItems: [
      { time: '8:00', task: 'Wake. No phone spiral.' },
      { time: '8:30', task: 'Gym: weights — chest / back / legs.' },
      { time: '10:00', task: 'Shower + leave house.' },
      { time: '11:00', task: 'Driver’s license block.' },
      { time: '12:00', task: 'Driving logistics.' },
      { time: '1:00', task: 'PWD / money / admin block.' },
      { time: '2:00', task: 'Adult systems block.' },
      { time: '3:00', task: 'BCIT logistics.' },
      { time: '4:00', task: 'Weekly command map.' },
      { time: '5:00', task: 'Close day. Home or light evening.' },
      { time: '9:30', task: 'OMAD / night meal.' },
      { time: '10:00', task: 'Night Blade: easy admin with AI or fiction/story.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'tuesday',
    dayName: 'Tuesday',
    theme: 'Library / Meetup / Meditation',
    mentor: 'Marcus',
    quote: 'Do the duty in front of you. Do not decorate it with fear.',
    reminder: 'Tuesday is the day of the room. Hold the room. Do not perform for the room.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Leave for library.' },
      { time: '9:10', task: 'Book room.' },
      { time: '9:15', task: 'Stay at library. This is the worksite.' },
      { time: '10:00', task: 'Meetup reading block.' },
      { time: '11:00', task: 'Meetup reading continues.' },
      { time: '12:00', task: 'Event questions.' },
      { time: '1:00', task: 'Group growth/admin.' },
      { time: '2:00', task: 'Reading / light prep.' },
      { time: '3:00', task: 'Book reading meetup / reading block.' },
      { time: '4:00', task: 'Book reading continues if scheduled.' },
      { time: '5:00', task: 'Meditation meetup preparation.' },
      { time: '6:00', task: 'Meditation meetup.' },
      { time: '8:00', task: 'Post-meetup conversation max 15–20 min.' },
      { time: '8:30', task: 'Travel home.' },
      { time: '9:30', task: 'OMAD / night meal.' },
      { time: '10:00', task: 'Night Blade: 5 meditation notes or 5 lines journal.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'wednesday',
    dayName: 'Wednesday',
    theme: 'Robotics / AI / Future Money',
    mentor: 'Napoleon',
    quote: 'The future belongs to the man who concentrates his force before others even wake.',
    reminder:
      'Robotics is the bridge out. It gives skill, money, adulthood, and a future where life is not just feelings.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Gym: boxing/cardio.' },
      { time: '10:00', task: 'Shower + leave house.' },
      { time: '11:00', task: 'Robotics block 1.' },
      { time: '12:00', task: 'Robotics block 2.' },
      { time: '1:00', task: 'AI tools block.' },
      { time: '2:00', task: 'Mini-build block.' },
      { time: '3:00', task: 'BCIT prep.' },
      { time: '4:00', task: 'Write what I learned in 10 bullets.' },
      { time: '5:00', task: 'Travel / prepare for temple.' },
      { time: '6:40', task: 'Buddhist temple teaching.' },
      { time: '8:40', task: 'Travel home.' },
      { time: '9:45', task: 'OMAD / night meal.' },
      { time: '10:15', task: 'Night Blade: temple reflection or fiction reading.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'thursday',
    dayName: 'Thursday',
    theme: 'Writing / Book / Voice',
    mentor: 'Musashi',
    quote: 'One cut. Not ten swings. One cut done cleanly.',
    reminder: 'The book is proof that the inner world can become real. Pages, not fantasy.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Gym: weights — shoulders / arms / core.' },
      { time: '10:00', task: 'Shower + leave house.' },
      { time: '11:00', task: 'Writing block 1.' },
      { time: '12:00', task: 'Writing block 2.' },
      { time: '1:00', task: 'Writing block 3.' },
      { time: '2:00', task: 'Edit lightly.' },
      { time: '3:00', task: 'Next-scene outline.' },
      { time: '4:00', task: 'Book admin.' },
      { time: '5:00', task: 'Stop. Evening open.' },
      { time: '9:30', task: 'OMAD / night meal if home.' },
      { time: '10:00', task: 'Night Blade: fiction or 10 lines of tomorrow’s scene.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'friday',
    dayName: 'Friday',
    theme: 'Music / Calligraphy / Beauty',
    mentor: 'Venus-Mars',
    quote: 'Beauty is not decoration. Beauty is force given shape.',
    reminder: 'Friday keeps the artist alive. Taste, touch, sound, line.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Gym: mobility + lighter cardio.' },
      { time: '10:00', task: 'Shower + leave house.' },
      { time: '11:00', task: 'Music block 1.' },
      { time: '12:00', task: 'Music block 2.' },
      { time: '1:00', task: 'Music block 3.' },
      { time: '2:00', task: 'Calligraphy practice.' },
      { time: '3:00', task: 'Calligraphy or visual design/poster work.' },
      { time: '4:00', task: 'Weekend prep.' },
      { time: '5:00', task: 'Close.' },
      { time: '9:30', task: 'OMAD / night meal if home.' },
      { time: '10:00', task: 'Night Blade: listen to music draft or light fiction.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'saturday',
    dayName: 'Saturday',
    theme: 'Long Body / Date Field / Style',
    mentor: 'Napoleon',
    quote: 'Morale is a weapon. Dress, move, and act like the campaign matters.',
    reminder: 'Saturday is body and presence. A date is not a court trial.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Long run / marathon prep.' },
      { time: '10:30', task: 'Shower.' },
      { time: '11:00', task: 'Light work outside if needed.' },
      { time: '12:00', task: 'Continue prep or style/grooming errands.' },
      {
        time: '1:00',
        task: 'Clothes, haircut, laundry, grooming, dating presentation.'
      },
      { time: '2:00', task: 'Light reading / event planning.' },
      { time: '3:00', task: 'Open block.' },
      { time: '4:00', task: 'Prepare for date or evening.' },
      { time: '5:00', task: 'Date / social / event lane.' },
      { time: '9:30', task: 'OMAD / night meal if home.' },
      { time: '10:00', task: 'Night Blade: fiction, shower, no sex panic research.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  },
  {
    id: 'sunday',
    dayName: 'Sunday',
    theme: 'Meetup Performance / Community / Optional Date',
    mentor: 'Caesar',
    quote: 'The forum belongs to the man who can stand in it without begging for approval.',
    reminder: 'Sunday is performance, not preparation. You are the host.',
    scheduleItems: [
      { time: '8:00', task: 'Wake.' },
      { time: '8:30', task: 'Shower, clothes, bag, notes.' },
      { time: '9:00', task: 'Final review.' },
      { time: '10:00', task: 'Travel.' },
      { time: '11:00', task: 'Meetup block begins.' },
      { time: '1:00', task: 'Meetup / social / discussion.' },
      { time: '3:00', task: 'Meetup / second event.' },
      { time: '5:00', task: 'Final meetup / close.' },
      { time: '6:00', task: 'Optional date or home recovery.' },
      { time: '9:30', task: 'OMAD / night meal.' },
      { time: '10:00', task: 'Night Blade: 5 bullet meetup review.' },
      { time: '11:30', task: 'Shutdown.' },
      { time: '12:00', task: 'Bed target.' }
    ],
    nightBladeOptions: globalNightBladeOptions,
    dangerWarnings,
    brokenDayRules
  }
];

export const weekOrder = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
] as const;
