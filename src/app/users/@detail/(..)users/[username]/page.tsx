import { Octokit } from "@octokit/rest";
import { FC } from "react";
import { PageContent } from "./PageContent";

const Page: FC<{
  params: { username: string };
}> = async ({ params }) => {
  const octokit = new Octokit();
  const user = await octokit.users.getByUsername({ username: params.username });

  return (
    <PageContent
      user={{
        avatar_url: user.data.avatar_url,
        name: user.data.name ?? "",
      }}
    />
  );
};

export default Page;
