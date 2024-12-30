import getAnnotationsCookie from "@/actions/getAnnotationsCookie";
import GameTabs from "@/components/gameTabs/GameTabs";

export default async function Home() {
  const currentAnnotations = await getAnnotationsCookie();

  return (
    <div className="w-full h-full p-2 md:p-4 flex flex-col items-center">
      <title>Clue</title>

      <h1 className="text-3xl text-sky-500 font-bold">CLUE</h1>

      <GameTabs currentAnnotations={currentAnnotations} />
    </div>
  );
}
