import { useSession, signIn } from "next-auth/react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get("/api/projects");
  return data;
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const { data: projects, isLoading } = useQuery("projects", fetchProjects, {
    enabled: status === "authenticated", // Only fetch projects if authenticated
  });

  if (status === "loading") return <div>Loading session...</div>;

  if (status === "unauthenticated") {
    return (
      <div>
        <p>You must be signed in to view this page</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  if (isLoading) return <div>Loading projects...</div>;

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