"use client";

import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal";
import { FC } from "react";

export const PageContent: FC<{
  user: {
    name: string;
    avatar_url: string;
  };
}> = ({ user }) => {
  const router = useRouter();

  return (
    <Modal isOpen onClose={() => router.back()}>
      <div className="space-y-5">
        <div className="flex gap-2">
          <img
            src={user.avatar_url}
            className="aspect-square rounded-full w-16"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
      </div>
    </Modal>
  );
};
