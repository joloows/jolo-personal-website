import imgUrl1 from "src/assets/img/todo-app.png";
import imgUrl2 from "src/assets/img/student-enrollment-system.png";

export default {
  projects: [
    {
      name: "Django Todo App",
      description:
        "A simple to-do app in a web browser with user authentication.",
      imageSrc: imgUrl1,
      alt: "todo-app.png",
      tags: ["python", "Django", "JavaScript", "jQuery", "HTML/CSS"],
    },
    {
      name: "Student Enrollment System",
      description:
        "An enrollment system made with VB6 and Microsoft Access as a database for the enrollees.",
      imageSrc: imgUrl2,
      alt: "student-enrollment-system.png",
      tags: ["VB6", "Access", "SQL"],
    },
  ],
};
