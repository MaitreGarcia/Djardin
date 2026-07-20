import { Flowers } from "../entities/flowers/Flower";
import { fetchFlowers } from "../shared/api/flowers";
import LogoHeader from "../shared/LogoHeader";

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
    <main>
      <LogoHeader />
      <Flowers flowers={loaderData as Flower[]} />
    </main>
  );
}
