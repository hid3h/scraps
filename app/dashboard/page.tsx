import { fetchScrapSummary } from "../lib/data";
import StackedList from "./StackedList";
import CreateScrapForm from "./create-scrap-form";

export default async function Dashboard() {
  const scrapSummary = await fetchScrapSummary();

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <CreateScrapForm />
        <StackedList scraps={scrapSummary} />
      </div>
    </div>
  );
}
