const employees = [
  {
    "id": 1,
    "firstname": "Gaurav",
    "email": "gaurav@example.com",
    "password": "123456",
    "tasks": [
      {
        "taskTitle": "Update Monthly Report",
        "taskDescription": "Update the monthly performance report for the team.",
        "taskDate": "2025-01-25",
        "category": "Reporting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting to discuss progress.",
        "taskDate": "2025-01-22",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Call",
        "taskDescription": "Follow up with the client regarding feedback on the project.",
        "taskDate": "2025-01-21",
        "category": "Client",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Budget Planning",
        "taskDescription": "Plan the budget for the upcoming quarter.",
        "taskDate": "2025-02-05",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "System Upgrade",
        "taskDescription": "Upgrade the internal software to the latest version.",
        "taskDate": "2025-02-10",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Ishita",
    "email": "ishita@example.com",
    "password": "123456",
    "tasks": [
      {
        "taskTitle": "Complete Code Review",
        "taskDescription": "Review the code pushed by the team for quality and performance.",
        "taskDate": "2025-01-20",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Prepare for Presentation",
        "taskDescription": "Prepare slides for the upcoming project presentation to clients.",
        "taskDate": "2025-01-22",
        "category": "Presentations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix the bugs reported by the QA team in the latest release.",
        "taskDate": "2025-01-23",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Customer Feedback Analysis",
        "taskDescription": "Analyze feedback received from customers on the recent release.",
        "taskDate": "2025-01-24",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Performance Monitoring",
        "taskDescription": "Monitor the performance of the latest software update in production.",
        "taskDate": "2025-01-26",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 0,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Kartikey",
    "email": "kartikey@example.com",
    "password": "123456",
    "tasks": [
      {
        "taskTitle": "Product Research",
        "taskDescription": "Research competitors' products and prepare a comparison report.",
        "taskDate": "2025-01-20",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare User Manual",
        "taskDescription": "Write the user manual for the new software release.",
        "taskDate": "2025-01-22",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Customer Support",
        "taskDescription": "Provide support for customer issues related to the product.",
        "taskDate": "2025-01-23",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Market Trend Analysis",
        "taskDescription": "Analyze market trends and prepare a report.",
        "taskDate": "2025-02-02",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Product Demo for Clients",
        "taskDescription": "Organize a product demo for a key client.",
        "taskDate": "2025-02-03",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Khushi",
    "email": "khushi@example.com",
    "password": "123456",
    "tasks": [
      {
        "taskTitle": "System Maintenance",
        "taskDescription": "Perform scheduled maintenance on company servers.",
        "taskDate": "2025-01-20",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Project Planning",
        "taskDescription": "Prepare the initial project plan for the upcoming project launch.",
        "taskDate": "2025-01-21",
        "category": "Project Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Coordination",
        "taskDescription": "Coordinate with team members on their tasks and deadlines.",
        "taskDate": "2025-01-22",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "New Tool Research",
        "taskDescription": "Research new tools that can be used by the team for better productivity.",
        "taskDate": "2025-01-24",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Risk Management Plan",
        "taskDescription": "Develop a risk management plan for the new project.",
        "taskDate": "2025-02-06",
        "category": "Project Management",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Parag",
    "email": "parag@example.com",
    "password": "123456",
    "tasks": [
      {
        "taskTitle": "Training Session",
        "taskDescription": "Complete the mandatory compliance training session.",
        "taskDate": "2025-01-20",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the documentation for the latest product changes.",
        "taskDate": "2025-01-21",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Market Research",
        "taskDescription": "Conduct market research on current trends in the industry.",
        "taskDate": "2025-01-22",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Conduct a detailed analysis of top competitors.",
        "taskDate": "2025-02-01",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Customer Satisfaction Survey",
        "taskDescription": "Create and distribute a customer satisfaction survey.",
        "taskDate": "2025-02-05",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  }
];


  
const admin = [
    {
      "id": 1,
      "firstname": "ITElites",
      "email": "itelites@example.com",
      "password": "123456",
    }
];
  

export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employee: employee || [], admin: admin || [] };
};

export const initializeLocalStorage = () => {
  if (!localStorage.getItem("employee")) {
    localStorage.setItem("employee", JSON.stringify(employees))
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin))
  }
}
