import MouseGlow from "@/components/MouseGlow";
import IntegrationsNetwork from "@/components/IntegrationsNetwork";

export default function IntegrationsPage() {
  return (
    <>
      <MouseGlow />
      <main className="min-h-screen flex flex-col items-center justify-center py-16">
        <div className="wrap text-center mb-4">
          <h1 className="text-[2.1rem] md:text-[2.6rem] mb-3">
            One inbox. <span className="gradient-text">Every channel.</span>
          </h1>
          <p className="text-bone-soft text-[1.02rem] max-w-[52ch] mx-auto">
            Connected to the tools you already work in — email, chat, social, and commerce, all
            routed through one place.
          </p>
        </div>
        <IntegrationsNetwork />
      </main>
    </>
  );
}
