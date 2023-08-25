import "styles/globals.css";
import type { AppProps } from "next/app";
import { redhat } from "configs/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={redhat.variable}>
      <QueryClientProvider client={queryClient}>
        <main className="font-redhat">
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </main>
  );
}
