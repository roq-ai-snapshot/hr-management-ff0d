import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  personal_info: yup.string(),
  working_hours: yup.number().integer(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
