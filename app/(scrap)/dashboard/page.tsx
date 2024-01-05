import { fetchScrapSummary } from "../../lib/data";
import CreateScrapForm from "./create-scrap-form";
import { ScrapSummary } from "../../_components/ScrapSummary";

export default async function Dashboard() {
  const scrapSummary = await fetchScrapSummary();

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm bg-white p-4">
        <CreateScrapForm />
        <ScrapSummary scraps={scrapSummary} />
      </div>
    </div>
  );
}
