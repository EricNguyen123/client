import { Suspense } from "react";
import AccountLoading from "./loading";

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Suspense fallback={<AccountLoading/>}>
      {children}
    </Suspense>
  );
}
