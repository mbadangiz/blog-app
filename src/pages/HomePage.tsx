import { useChangeTitle } from "@hooks/useChangeTitle";

function HomePage() {
  useChangeTitle("خانه");
  return <div className="text-4xl"> یک متن تست</div>;
}

export default HomePage;
