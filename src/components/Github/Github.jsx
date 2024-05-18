import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="text-center bg-red-600 text-white font-bold">
      Github followers : {data.followers}
      <img
        src={data.avatar_url}
        alt="github image"
        className="w-56 text-center p-7"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/akashmondal2000");
  return responce.json();
};
