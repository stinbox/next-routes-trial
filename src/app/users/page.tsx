import { Octokit } from "@octokit/rest";
import Link from "next/link";
import { FC } from "react";

const Page: FC<{
  searchParams: { page: string };
}> = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const octokit = new Octokit();
  const users = await octokit.orgs.listMembers({
    org: "facebook",
    per_page: 5,
    page,
  });

  return (
    <div>
      <div className="flex gap-4 mb-5">
        <Link
          className="font-bold text-blue-500"
          href={`/users?page=${page - 1}`}
        >
          {"< Previous"}
        </Link>
        <Link
          className="font-bold text-blue-500"
          href={`/users?page=${page + 1}`}
        >
          {"Next >"}
        </Link>
      </div>
      <ul className="space-y-4">
        {users.data.map((user) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.login}`}
              className="text-blue-500 underline"
            >
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
