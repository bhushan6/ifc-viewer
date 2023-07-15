// import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { useLoading } from "../Context";

export const ToastNotification = () => {
  const [loading, setLoading] = useLoading();

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="ToastRoot"
        open={loading}
        onOpenChange={setLoading}
      >
        <Toast.Title className="ToastTitle">Loading...</Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};
