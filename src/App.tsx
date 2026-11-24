import { useSelector } from "react-redux";
import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import type { RootState } from "./redux/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFile } = useSelector((state: RootState) => state.tree);
  return (
    <section className="flex h-screen">
      <ResizablePanel
        showLeftPanel
        leftPanel={
          <div className="w-full h-full min-w-0 overflow-auto scrollbar-none p-2">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={openedFile.length === 0 ? <WelcomeTab /> : <OpenedFileBar />}
      />
    </section>
  );
}

export default App;
