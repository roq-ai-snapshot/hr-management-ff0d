import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  personal_info?: string;
  working_hours?: number;
  created_at?: any;
  updated_at?: any;
  performance_evaluation?: PerformanceEvaluationInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    performance_evaluation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  personal_info?: string;
}
