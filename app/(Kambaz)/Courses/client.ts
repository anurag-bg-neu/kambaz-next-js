import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

type Course = {
  _id?: string,
  name?: string,
  number?: string,
  startDate?: Date,
  endDate?: Date,
  department?: string,
  credits?: number,
  description?: string
}

type Lesson = {
  _id?: string,
  name?: string,
  description?: string,
  module?: string,
}

type Module = {
  _id?: string,
  name?: string,
  description?: string,
  course?: string,
  editing?: boolean,
  lessons?: Array<Lesson>
}

type Assignment = {
  _id?: string,
  title?: string,
  course?: string,
  description?: string,
  points?: string,
  dueDate?: string,
  availableDate?: string,
  untilDate?: string
}

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
}

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const fetchMyEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
  return data;
};

export const createCourse = async (course: Course) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const createModuleForCourse = async (courseId: string, module: Module) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
}

export const createAssignmentForCourse = async (courseId: string, assignment: Assignment) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
}

export const enrollUserInCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/enrollments`, { courseId });
  return data;
}

export const updateCourse = async (course: Course) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const updateModule = async (module: Module) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
}

export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
 const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
 return response.data;
}

export const unEnrollUserFromCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${courseId}`);
  return data;
}
