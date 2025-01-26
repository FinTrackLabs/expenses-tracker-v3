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
