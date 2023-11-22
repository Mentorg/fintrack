const billsSummarySchema = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "billName",
    headerName: "Bill Name",
    type: "string",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "paymentDate",
    headerName: "Payment Date",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    description: "The date by which the bill payment is due.",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "notes",
    headerName: "Notes",
    type: "string",
    sortable: false,
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
];

const billsSummaryData = [
  {
    id: 1,
    billName: "Electricity",
    vendor: "ABC Electric",
    status: "Paid",
    paymentDate: "2021-01-12",
    dueDate: "2021-02-01",
    amount: 100,
    frequency: "Monthly",
    paymentMethod: "Credit Card",
    category: "Utilities",
    notes: "Usage charge for January",
  },
  {
    id: 2,
    billName: "Phone",
    vendor: "XYZ Telecom",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2021-02-15",
    amount: 50,
    frequency: "Monthly",
    paymentMethod: "Direct Debit",
    category: "Utilities",
    notes: "Includes data and calling plan",
  },
  {
    id: 3,
    billName: "Rent",
    vendor: "XYZ Apartments",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2021-03-01",
    amount: 1000,
    frequency: "Monthly",
    paymentMethod: "Bank Transfer",
    category: "Housing",
    notes: "Due at the beginning of each month",
  },
  {
    id: 4,
    billName: "Internet",
    vendor: "XYZ Telecom",
    status: "Paid",
    paymentDate: "2021-01-18",
    dueDate: "2021-02-05",
    amount: 60,
    frequency: "Monthly",
    paymentMethod: "Direct Debit",
    category: "Utilities",
    notes: "High-speed unlimited plan",
  },
  {
    id: 5,
    billName: "Gym Membership",
    vendor: "Fitness Club",
    status: "Paid",
    paymentDate: "2021-01-25",
    dueDate: "2021-02-10",
    amount: 80,
    frequency: "Monthly",
    paymentMethod: "Credit Card",
    category: "Health & Fitness",
    notes: "Access to gym and fitness classes",
  },
  {
    id: 6,
    billName: "Insurance",
    vendor: "ABC Insurance",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2021-03-20",
    amount: 200,
    frequency: "Quarterly",
    paymentMethod: "Cheque",
    category: "Insurance",
    notes: "Car insurance premium",
  },
  {
    id: 7,
    billName: "Credit Card",
    vendor: "Bank XYZ",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2021-02-28",
    amount: 150,
    frequency: "Monthly",
    paymentMethod: "Online Payment",
    category: "Credit Card",
    notes: "Last month's expenses",
  },
  {
    id: 8,
    billName: "Subscription",
    vendor: "XYZ Streaming",
    status: "Paid",
    paymentDate: "2021-01-15",
    dueDate: "2021-02-01",
    amount: 15,
    frequency: "Monthly",
    paymentMethod: "Online Payment",
    category: "Entertainment",
    notes: "Access to movies and shows",
  },
];

const billPaymentTrendsData = [
  {
    id: "Rent",
    color: "hsl(261, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 400,
      },
      {
        x: "Feb",
        y: 400,
      },
      {
        x: "Mar",
        y: 400,
      },
      {
        x: "Apr",
        y: 400,
      },
      {
        x: "May",
        y: 400,
      },
      {
        x: "Jun",
        y: 500,
      },
      {
        x: "Jul",
        y: 500,
      },
      {
        x: "Aug",
        y: 500,
      },
      {
        x: "Sep",
        y: 500,
      },
      {
        x: "Oct",
        y: 500,
      },
      {
        x: "Nov",
        y: 500,
      },
      {
        x: "Dec",
        y: 500,
      },
    ],
  },
  {
    id: "Utilities",
    color: "hsl(111, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 525,
      },
      {
        x: "Feb",
        y: 600,
      },
      {
        x: "Mar",
        y: 350,
      },
      {
        x: "Apr",
        y: 385,
      },
      {
        x: "May",
        y: 410,
      },
      {
        x: "Jun",
        y: 470,
      },
      {
        x: "Jul",
        y: 510,
      },
      {
        x: "Aug",
        y: 430,
      },
      {
        x: "Sep",
        y: 590,
      },
      {
        x: "Oct",
        y: 550,
      },
      {
        x: "Nov",
        y: 450,
      },
      {
        x: "Dec",
        y: 590,
      },
    ],
  },
  {
    id: "Internet",
    color: "hsl(20, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 489,
      },
      {
        x: "Feb",
        y: 437,
      },
      {
        x: "Mar",
        y: 471,
      },
      {
        x: "Apr",
        y: 578,
      },
      {
        x: "May",
        y: 550,
      },
      {
        x: "Jun",
        y: 536,
      },
      {
        x: "Jul",
        y: 675,
      },
      {
        x: "Aug",
        y: 613,
      },
      {
        x: "Sep",
        y: 400,
      },
      {
        x: "Oct",
        y: 675,
      },
      {
        x: "Nov",
        y: 684,
      },
      {
        x: "Dec",
        y: 450,
      },
    ],
  },
  {
    id: "Phone",
    color: "hsl(258, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 220,
      },
      {
        x: "Feb",
        y: 284,
      },
      {
        x: "Mar",
        y: 217,
      },
      {
        x: "Apr",
        y: 312,
      },
      {
        x: "May",
        y: 344,
      },
      {
        x: "Jun",
        y: 339,
      },
      {
        x: "Jul",
        y: 319,
      },
      {
        x: "Aug",
        y: 597,
      },
      {
        x: "Sep",
        y: 553,
      },
      {
        x: "Oct",
        y: 551,
      },
      {
        x: "Nov",
        y: 593,
      },
      {
        x: "Dec",
        y: 656,
      },
    ],
  },
  {
    id: "Other",
    color: "hsl(101, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 622,
      },
      {
        x: "Feb",
        y: 610,
      },
      {
        x: "Mar",
        y: 635,
      },
      {
        x: "Apr",
        y: 653,
      },
      {
        x: "May",
        y: 657,
      },
      {
        x: "Jun",
        y: 700,
      },
      {
        x: "Jul",
        y: 696,
      },
      {
        x: "Aug",
        y: 688,
      },
      {
        x: "Sep",
        y: 670,
      },
      {
        x: "Oct",
        y: 652,
      },
      {
        x: "Nov",
        y: 535,
      },
      {
        x: "Dec",
        y: 666,
      },
    ],
  },
];

export { billsSummarySchema, billsSummaryData, billPaymentTrendsData };
