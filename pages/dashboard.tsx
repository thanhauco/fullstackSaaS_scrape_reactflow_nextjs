import { useQuery } from "react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get("/api/projects");
  return data;
};

export default function Dashboard() {
  const { data: projects, isLoading } = useQuery("projects", fetchProjects);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project: any) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}