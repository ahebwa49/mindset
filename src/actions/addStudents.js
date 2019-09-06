const ADD = "ADD";

const addStudents = students => {
  return {
    type: ADD,
    students: students
  };
};
export default addStudents;
