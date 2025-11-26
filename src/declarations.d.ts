import "@fullpage/react-fullpage";

declare module "@fullpage/react-fullpage" {
  interface FullPageProps {
    credits?: { enabled: boolean };
  }
}
