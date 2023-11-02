import StackedList from "./StackedList";
import CreateScrapForm from "./create-scrap-form";

export default async function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <CreateScrapForm />
        <StackedList />
      </div>
    </div>
  );
}
