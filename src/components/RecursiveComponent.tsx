import { useState } from "react";
import type { IFile } from "../interfaces";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import {} from "react-icons/io";

import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setActiveTab, setClickedFile, setOpenedFiles } from "../redux/feature/TreeSlice";
import { doesFileExist } from "../utils/functions";

type Props = { fileTree: IFile };

const RecursiveComponent = ({ fileTree }: Props) => {
  // Redux
  const dispatch = useDispatch();
  const { openedFile, activeTab } = useSelector((state: RootState) => state.tree);

  // Variables
  const { id, isFolder, name, children, content } = fileTree;

  // to determined the file is open or not
  const exists = doesFileExist(openedFile, id);

  // States
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Functions
  const toggle = () => setIsOpen((prev) => !prev);
  const clickedFile = () => {
    dispatch(setActiveTab(id));

    dispatch(
      setClickedFile({
        fileContent: content ?? "",
        fileName: name,
      }),
    );
    if (exists) return;
    dispatch(setOpenedFiles([...openedFile, fileTree]));
  };

  return (
    <div className=" ml-2">
      {/* Line */}
      <div
        className={`flex items-center  p-1 cursor-pointer hover:bg-[#b6b4b44b] transition-colors duration-150 ${id === activeTab && "bg-[#b6b4b44b]"}`}
      >
        {isFolder ? (
          <div className="flex items-center " onClick={toggle}>
            {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            <span className="mr-2">
              <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen} />
            </span>
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center  " onClick={clickedFile}>
            <span className="mr-2">
              <RenderFileIcon fileName={name} />
            </span>
            <span>{name}</span>
          </div>
        )}
      </div>

      {/* Nested Lines */}
      {isOpen && children?.map((file, indx) => <RecursiveComponent fileTree={file} key={indx} />)}
    </div>
  );
};

export default RecursiveComponent;
