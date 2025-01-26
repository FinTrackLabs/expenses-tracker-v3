import {VisitType} from "@views/dashboards/analytics/data";

export type StateType = {
  title: string
  value: string
  icon: string
  isShared: boolean,
  currency?: string,
  description?: {
    percentage: string
    text: string
    trend: string
  },
  users: Users[],
}

export type Users = {
  id: string;
  name: string;
}



export const stateData: StateType[] = [
  {
    title: 'Cash',
    value: '0.00',
    icon: 'iconoir-hand-cash',
    isShared: false,
    users: [
      {
        id: '1',
        name: 'Chathuranga ',
      }
    ],
  },
  {
    title: 'USD Account',
    value: '6000.00',
    icon: 'iconoir-dollar-circle',
    isShared: false,
    currency: 'USD',
    users: [
      {
        id: '1',
        name: 'Chathuranga ',
      }
    ],
  },
  {
    title: 'Debit Card',
    value: '14,000.00',
    icon: 'iconoir-credit-card',
    isShared: false,
    users: [
      {
        id: '1',
        name: 'Chathuranga ',
      }
    ],
  },
  {
    title: 'Credit Card',
    value: '52000.00',
    icon: 'iconoir-credit-cards',
    isShared: false,
    users: [
      {
        id: '1',
        name: 'Chathuranga ',
      }
    ],
  },
  {
    title: 'Wife Account',
    value: '25000.00',
    icon: 'iconoir-profile-circle',
    isShared: true,
    users: [
      {
        id: '1',
        name: 'Chathuranga ',
      },
      {
        id: '2',
        name: 'Nittawi',
      },
    ],
  }
];

export const VisitsList: VisitType[] = [
  {
    channel: 'Organic search',
    sessions: {
      count: 10853,
      percentage: 52,
    },
    prev_period: {
      count: 566,
      percentage: 92,
    },
    change: {
      percentage: 52.8,
      trend: 'up',
    },
  },
  {
    channel: 'Direct',
    sessions: {
      count: 2545,
      percentage: 47,
    },
    prev_period: {
      count: 498,
      percentage: 81,
    },
    change: {
      percentage: -17.2,
      trend: 'down',
    },
  },
  {
    channel: 'Referal',
    sessions: {
      count: 1836,
      percentage: 38,
    },
    prev_period: {
      count: 455,
      percentage: 74,
    },
    change: {
      percentage: 41.12,
      trend: 'up',
    },
  },
  {
    channel: 'Email',
    sessions: {
      count: 1958,
      percentage: 31,
    },
    prev_period: {
      count: 361,
      percentage: 61,
    },
    change: {
      percentage: -8.24,
      trend: 'down',
    },
  },
  {
    channel: 'Social',
    sessions: {
      count: 1566,
      percentage: 26,
    },
    prev_period: {
      count: 299,
      percentage: 49,
    },
    change: {
      percentage: 29.33,
      trend: 'up',
    },
  },
]

