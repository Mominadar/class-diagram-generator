import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { ReactFlowProvider } from "react-flow-renderer";
import "../styles/globals.css";
import { AppRouter } from "./api/trpc/[trpc]";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactFlowProvider>
      <Component {...pageProps} />
    </ReactFlowProvider>
  );
}

export const getBaseUrl = () => {
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: `${getBaseUrl()}/api/trpc`,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
