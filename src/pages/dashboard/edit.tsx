import { useRouter } from "next/router";
import { useEffect,useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
};

export default function EditProject() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setTitle(data.title);
          setDescription(data.description);
          setImageUrl(data.imageUrl);
          setDetails(data.details);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!project) {
      return;
    }
    const updatedProject = { ...project, title, description, imageUrl, details };
    fetch(`/api/projects/${project.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => {
        if (res.ok) {
          router.push("/");
        } else {
          throw new Error("Failed to update project");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-lg mx-auto">
      {project && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">
              Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-gray-700 font-bold mb-2">
              Details
              </label>
              <input
              id="imageUrl"
              type="text"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          </form>
      )}
    </div>
  );
}
