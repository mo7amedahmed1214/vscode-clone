import type { ReactNode } from "react";
import { Group, Panel, Separator, useDefaultLayout } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[];
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const { defaultLayout: savedLayout, onLayoutChange } = useDefaultLayout({
    groupId: "editor-layout",
    storage: localStorage,
    panelIds: showLeftPanel ? ["sidebar", "editor"] : ["editor"],
  });

  return (
    <Group
      orientation="horizontal"
      className="h-full w-full scrollbar-hide"
      defaultLayout={savedLayout}
      onLayoutChange={onLayoutChange}
    >
      {showLeftPanel && (
        <>
          <Panel id="sidebar" defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>

          <Separator className="border-r-2 border-[#ffffff1f] cursor-col-resize" />
        </>
      )}

      <Panel
        id="editor"
        className="min-w-0 min-h-0 overflow-hidden"
        defaultSize={showLeftPanel ? defaultLayout[1] : 100}
      >
        {rightPanel}
      </Panel>
    </Group>
  );
};

export default ResizablePanel;
