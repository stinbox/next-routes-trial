import { FC, ReactNode } from "react";

const Layout: FC<{
  list: ReactNode;
  detail: ReactNode;
}> = ({ list, detail }) => {
  return (
    <main className="p-16">
      {list}
      {detail}
    </main>
  );
};

export default Layout;
