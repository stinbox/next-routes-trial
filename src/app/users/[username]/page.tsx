import { Octokit } from "@octokit/rest";
import { FC } from "react";

const Page: FC<{
  params: { username: string };
}> = async ({ params }) => {
  const octokit = new Octokit();
  const user = await octokit.users.getByUsername({ username: params.username });

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        <img
          src={user.data.avatar_url}
          className="aspect-square rounded-full w-16"
          alt={user.data.name ?? ""}
        />
        <h1 className="text-2xl font-bold">{user.data.name}</h1>
      </div>
    </div>
  );
};

export default Page;
