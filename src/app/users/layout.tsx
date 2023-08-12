import { FC, ReactNode } from "react";

const Layout: FC<{
  children: ReactNode;
  detail: ReactNode;
}> = ({ children, detail }) => {
  return (
    <main className="p-16">
      {children}
      {detail}
    </main>
  );
};

export default Layout;
