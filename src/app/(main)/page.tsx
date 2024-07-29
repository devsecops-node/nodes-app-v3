import Presentation from "@/components/main/Presentation";
import RenderNotes from "@/components/main/RenderNotes";
import style from "@/styles/main.module.css"
import { Suspense } from "react";
import LoadingExample from "../Loadingexample";
import CreateNoteButton from "@/components/main/CreateNoteButton";

export default function Home() {
  return (
    <main className={`${style.home}`}>
      <Presentation />
      <Suspense fallback={<LoadingExample />}>
        <RenderNotes />
      </Suspense>
      <CreateNoteButton/>
    </main>
  );
}
