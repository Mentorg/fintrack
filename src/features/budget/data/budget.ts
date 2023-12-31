const incomeSourcesSchema = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
  },
  {
    field: "sourceName",
    headerName: "Source name",
    type: "string",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount ($)",
    type: "number",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    editable: true,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    type: "string",
    sortable: true,
    flex: 0.3,
    minWidth: 160,
    maxWidth: 150,
    editable: true,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 90,
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
  },
  {
    field: "received",
    headerName: "Received",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "description",
    headerName: "Description",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "nextPayment",
    headerName: "Next Payment",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "taxRate",
    headerName: "Tax Rate (%)",
    type: "number",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
  },
];

const incomeSourcesData = [
  {
    id: 1,
    amount: 1000,
    paymentMethod: "credit card",
    sourceName: "Job Salary",
    status: "Active",
    frequency: "Monthly",
    received: "05.01.2023",
    category: "Employment ",
    description: "Monthly pay",
    nextPayment: "05.02.2023",
    taxRate: 20,
  },
  {
    id: 2,
    amount: 500,
    paymentMethod: "online",
    sourceName: "Freelance Work",
    status: "Active",
    frequency: "Weekly",
    received: "07.01.2023",
    category: "Freelance",
    description: "Web design",
    nextPayment: "14.01.2023",
    taxRate: 30,
  },
  {
    id: 3,
    amount: 300,
    paymentMethod: "online",
    sourceName: "Rental Income",
    status: "Active",
    frequency: "Monthly",
    received: "15.01.2023",
    category: "Property ",
    description: "Rent",
    nextPayment: "15.02.2023",
    taxRate: 20,
  },
  {
    id: 4,
    amount: 300,
    paymentMethod: "Venmo",
    sourceName: "Side Gig",
    status: "Active",
    frequency: "Weekly",
    received: "31.12.2022",
    category: "Business",
    description: "Photography",
    nextPayment: "01.03.2023",
    taxRate: 15,
  },
  {
    id: 5,
    amount: 150,
    paymentMethod: "cash",
    sourceName: "Side Hustle",
    status: "Active",
    frequency: "Bi-weekly",
    received: "01.01.2023",
    category: "Gig",
    description: "Event DJ",
    nextPayment: "14.01.2023",
    taxRate: 10,
  },
  {
    id: 6,
    amount: 100,
    paymentMethod: "credit card",
    sourceName: "Gift Money",
    status: "Active",
    frequency: "One-time",
    received: "01.01.2023",
    category: "Personal",
    description: "Birthday",
    nextPayment: null,
    taxRate: 5,
  },
  {
    id: 7,
    amount: 250,
    paymentMethod: "Bank Transfer",
    sourceName: "Dividend",
    status: "Active",
    frequency: "Yearly",
    received: "29.12.2023",
    category: "Investment",
    description: "Stocks",
    nextPayment: "2024.01.15",
    taxRate: 10,
  },
  {
    id: 8,
    amount: 400,
    paymentMethod: "PayPal",
    sourceName: "Rent",
    status: "Active",
    frequency: "Monthly",
    received: "03.02.2023",
    category: "Housing",
    description: "Apartment",
    nextPayment: "03.03.2023",
    taxRate: 15,
  },
  {
    id: 9,
    amount: 400,
    paymentMethod: "PayPal",
    sourceName: "Sale",
    status: "Active",
    frequency: "One-time",
    received: "20.01.2023",
    category: "Personal",
    description: "Electronics",
    nextPayment: null,
    taxRate: 20,
  },
];

const budgetAllocationData = [
  {
    id: "Electricity",
    label: "Electricity",
    value: 19,
    color: "hsl(173, 70%, 50%)",
  },
  {
    id: "Phone",
    label: "Phone",
    value: 7,
    color: "hsl(352, 70%, 50%)",
  },
  {
    id: "Gas",
    label: "Gas",
    value: 10,
    color: "hsl(180, 70%, 50%)",
  },
  {
    id: "WaterSewer",
    label: "Water and sewer",
    value: 18,
    color: "hsl(128, 70%, 50%)",
  },
  {
    id: "Cable",
    label: "Cable",
    value: 5,
    color: "hsl(269, 70%, 50%)",
  },
  {
    id: "Waste",
    label: "Waste removal",
    value: 6,
    color: "hsl(24, 85%, 56%)",
  },
  {
    id: "Other",
    label: "Other",
    value: 35,
    color: "hsl(240, 9%, 81%)",
  },
];

const expenseLimitsData = [
  { title: "Housing", currentValue: "2,500", limit: "3,000" },
  { title: "Utilities", currentValue: "600", limit: "1,500" },
  { title: "Transportation", currentValue: "900", limit: "2,000" },
  { title: "Food", currentValue: "1,250", limit: "2,500" },
  { title: "Health Insurance", currentValue: "500", limit: "1,500" },
  { title: "Personal Care", currentValue: "80", limit: "500" },
  { title: "Clothing", currentValue: "200", limit: "500" },
  { title: "Entertainment", currentValue: "50", limit: "300" },
  { title: "Travel", currentValue: "1,200", limit: "5,000" },
  { title: "Education", currentValue: "800", limit: "2,000" },
  { title: "Debt Repayment", currentValue: "3,000", limit: "4,000" },
  { title: "Insurance", currentValue: "1,750", limit: "3,000" },
  { title: "Phone Bill", currentValue: "2,500", limit: "3,000" },
  { title: "Internet Bill", currentValue: "2,500", limit: "3,000" },
  { title: "Charity and Donations", currentValue: "500", limit: "1,000" },
];

const savingsSchema = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 110,
    maxWidth: 130,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
  { field: "goal", headerName: "Goal", flex: 1, minWidth: 110, maxWidth: 130 },
  {
    field: "targetDate",
    headerName: "Target Date",
    flex: 1,
    minWidth: 130,
    maxWidth: 160,
  },
  { field: "progress", headerName: "Progress" },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    minWidth: 130,
    maxWidth: 160,
  },
];

const savingsData = [
  {
    id: 1,
    title: "Emergency",
    amount: "$1000",
    description: "Emergency Fund",
    goal: "$5000",
    targetDate: "12.31.2023",
    progress: "20%",
    category: "General",
    status: "Incomplete",
  },
  {
    id: 2,
    title: "Vacation",
    amount: "$2000",
    description: "Saving for vacation",
    goal: "$5000",
    targetDate: "06.30.2024",
    progress: "40%",
    category: "Travel",
    status: "Incomplete",
  },
  {
    id: 3,
    title: "Car",
    amount: "$500",
    description: "Saving for a new car",
    goal: "$10000",
    targetDate: "10.15.2024",
    progress: "5%",
    category: "Vehicle",
    status: "Incomplete",
  },
  {
    id: 4,
    title: "Education",
    amount: "$2500",
    description: "College fund",
    goal: "$15000",
    targetDate: "12.31.2024",
    progress: "16.67%",
    category: "Education",
    status: "Incomplete",
  },
];

export {
  incomeSourcesSchema,
  incomeSourcesData,
  budgetAllocationData,
  expenseLimitsData,
  savingsSchema,
  savingsData,
};
