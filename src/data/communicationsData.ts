const notificationsData = [
  {
    id: 1,
    type: "expense",
    title: "New Expense",
    message: "You spent $50 on groceries.",
    date: "2022-10-05",
    read: false,
  },
  {
    id: 2,
    type: "income",
    title: "New Income",
    message: "You received $500 from XYZ Company.",
    date: "2022-10-06",
    read: false,
  },
  {
    id: 3,
    type: "budget",
    title: "Budget Alert",
    message: "You have exceeded your monthly budget for eating out.",
    date: "2022-10-10",
    read: false,
  },
  {
    id: 4,
    type: "reminder",
    title: "Bill Reminder",
    message: "Your phone bill payment is due in 3 days.",
    date: "2022-10-15",
    read: true,
  },
  {
    id: 5,
    type: "savings",
    title: "Savings Goal Progress",
    message: "You have saved 50% towards your vacation goal.",
    date: "2022-10-20",
    read: true,
  },
  {
    id: 6,
    type: "balance",
    title: "Account Balance",
    message: "Your current account balance is $1000.",
    date: "2022-10-25",
    read: true,
  },
  {
    id: 7,
    type: "investing",
    title: "Investment Alert",
    message: "Your stock XYZ has reached its target price.",
    date: "2022-10-30",
    read: true,
  },
]

const messagesData = [
  {
    id: 1,
    sender: 'John Doe',
    content: 'Congratulations! You have received a bonus of $500. Keep up the good work!',
    timestamp: '2022-01-10 14:30:00',
    read: false,
  },
  {
    id: 2,
    sender: 'Jane Smith',
    content: 'Reminder: Your monthly mortgage payment of $1500 is due on January 15th.',
    timestamp: '2022-01-09 10:15:00',
    read: false,
  },
  {
    id: 3,
    sender: 'Credit Card Company',
    content: 'Your credit card payment of $200 is due on January 20th.',
    timestamp: '2022-01-08 18:45:00',
    read: true,
  },
  {
    id: 4,
    sender: 'John Doe',
    content: 'Congratulations! Your investment portfolio has gained 10% in the past month.',
    timestamp: '2022-01-05 09:20:00',
    read: true,
  },
  {
    id: 5,
    sender: 'Jane Smith',
    content: 'A new transaction of $50 has been made on your credit card.',
    timestamp: '2022-01-04 15:55:00',
    read: true,
  }
];

export { notificationsData, messagesData }