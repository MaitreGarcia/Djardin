import { Flowers } from "../entities/flowers/Flower";
import { fetchFlowers } from "../shared/api/flowers";
import LogoHeader from "../shared/components/LogoHeader";

export function meta() {
  return [
    { title: "Home | Djardin" },
  ];
}

export async function loader() {
  return await fetchFlowers();
}

// TODO: The any here should be typed
export default function Home({ loaderData }: any) {
  return (
    <main className="flex flex-col gap-2">
      <LogoHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        <Flowers flowers={loaderData as Flower[]} />
      </div>
    </main>
  );
}
