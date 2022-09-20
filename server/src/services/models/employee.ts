
export interface EmployeeType {
  id?: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender: string;
  email: string;
  phone: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: Hair;
  domain?: string;
  ip?: string;
  address: Address;
  macAddress?: string;
  university?: string;
  bank?: Bank;
  company?: Company;
  ein?: string;
  ssn?: string;
  userAgent?: string;
}
export interface Hair {
  color?: string;
  type?: string;
}
export interface Address {
  address: string;
  city: string;
  coordinates?: Coordinates;
  postalCode: string;
  state: string;
}
export interface Coordinates {
  lat?: number;
  lng?: number;
}
export interface Bank {
  cardExpire?: string;
  cardNumber?: string;
  cardType?: string;
  currency?: string;
  iban?: string;
}
export interface Company {
  address: Address;
  department: EmployeeDepartmentEnum;
  name: string;
  title: EmployeeTitleEnum;
  employeeType: EmployeeTypeEnum
  dateOfJoining: Date
  status: EmployeeStatusEnum;
}

export enum EmployeeStatusEnum {
  Active = 'Active',
  Terminated_Dismissed = 'Terminated-Dismissed',
  Terminated_Resigned = 'Terminated-Resigned',
  On_Leave = 'On-Leave'
}

export enum EmployeeTypeEnum {
  Contract = 'Contract',
  Full_time = 'Full-time',
  Part_time = 'Part-time',
  Seasonal = 'Seasonal'
}


export enum EmployeeDepartmentEnum {
  Accounting = 'Accounting',
  BusinessDevelopment = 'Business Development',
  Engineering = 'Engineering',
  HumanResources = 'Human Resources',
  Legal = 'Legal',
  Marketing = 'Marketing',
  ProductManagement = 'Product Management',
  ResearchandDevelopment = 'Research and Development',
  Sales = 'Sales',
  Services = 'Services',
  Support = 'Support',
  Training = 'Training'
}

export enum EmployeeTitleEnum {
  AccountCoordinator = 'Account Coordinator',
  AccountExecutive = 'Account Executive',
  AccountRepresentativeI = 'Account Representative I',
  AccountRepresentativeII = 'Account Representative II',
  AccountantIII = 'Accountant III',
  AdministrativeAssistantII = 'Administrative Assistant II',
  AnalystProgrammer = 'Analyst Programmer',
  AssistantManager = 'Assistant Manager',
  AssistantProfessor = 'Assistant Professor',
  AssociateProfessor = 'Associate Professor',
  AutomationSpecialistI = 'Automation Specialist I',
  BiostatisticianIV = 'Biostatistician IV',
  ChiefDesignEngineer = 'Chief Design Engineer',
  CivilEngineer = 'Civil Engineer',
  ClinicalSpecialist = 'Clinical Specialist',
  CommunityOutreachSpecialist = 'Community Outreach Specialist',
  CompensationAnalyst = 'Compensation Analyst',
  CostAccountant = 'Cost Accountant',
  DesignEngineer = 'Design Engineer',
  DeveloperII = 'Developer II',
  DirectorofSales = 'Director of Sales',
  EnvironmentalSpecialist = 'Environmental Specialist',
  ExecutiveSecretary = 'Executive Secretary',
  FinancialAdvisor = 'Financial Advisor',
  FinancialAnalyst = 'Financial Analyst',
  FoodChemist = 'Food Chemist',
  GISTechnicalArchitect = 'GIS Technical Architect',
  GeologicalEngineer = 'Geological Engineer',
  GeologistIII = 'Geologist III',
  GraphicDesigner = 'Graphic Designer',
  HelpDeskOperator = 'Help Desk Operator',
  HelpDeskTechnician = 'Help Desk Technician',
  JuniorExecutive = 'Junior Executive',
  LegalAssistant = 'Legal Assistant',
  Librarian = 'Librarian',
  MarketingAssistant = 'Marketing Assistant',
  MechanicalSystemsEngineer = 'Mechanical Systems Engineer',
  MediaManagerIV = 'Media Manager IV',
  NursePracticioner = 'Nurse Practicioner',
  Operator = 'Operator',
  Paralegal = 'Paralegal',
  PaymentAdjustmentCoordinator = 'Payment Adjustment Coordinator',
  PhysicalTherapyAssistant = 'Physical Therapy Assistant',
  Professor = 'Professor',
  ProgrammerAnalystI = 'Programmer Analyst I',
  ProgrammerAnalystIV = 'Programmer Analyst IV',
  ProjectManager = 'Project Manager',
  QualityControlSpecialist = 'Quality Control Specialist',
  QualityEngineer = 'Quality Engineer',
  RecruitingManager = 'Recruiting Manager',
  RegisteredNurse = 'Registered Nurse',
  ResearchAssociate = 'Research Associate',
  ResearchNurse = 'Research Nurse',
  SalesAssociate = 'Sales Associate',
  SalesRepresentative = 'Sales Representative',
  SeniorCostAccountant = 'Senior Cost Accountant',
  SeniorEditor = 'Senior Editor',
  SeniorQualityEngineer = 'Senior Quality Engineer',
  SeniorSalesAssociate = 'Senior Sales Associate',
  SoftwareConsultant = 'Software Consultant',
  SoftwareTestEngineerIV = 'Software Test Engineer IV',
  SpeechPathologist = 'Speech Pathologist',
  StructuralAnalysisEngineer = 'Structural Analysis Engineer',
  TechnicalWriter = 'Technical Writer',
  VPAccounting = 'VP Accounting',
  VPQualityControl = 'VP Quality Control',
  VPSales = 'VP Sales',
  WebDeveloperI = 'Web Developer I',
}
