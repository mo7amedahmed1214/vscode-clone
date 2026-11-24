import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import RenderFileIcon from "./RenderFileIcon";
import { IoIosClose } from "react-icons/io";
import { setActiveTab, setClickedFile, setOpenedFiles } from "../redux/feature/TreeSlice";
import type { IFile } from "../interfaces";
import FileSyntaxHighlighter from "./SyntaxHighlighter";

export default function OpenedFileBar() {
  const dispatch = useDispatch();

  const { openedFile, activeTab, clickedFile } = useSelector((state: RootState) => state.tree);

  const onClick = (file: IFile) => {
    const { id, name, content } = file;

    dispatch(
      setClickedFile({
        fileContent: content,
        fileName: name,
      }),
    );

    dispatch(setActiveTab(id));
  };

  // remove tab of closed file
  const onRemove = (id: string) => {
    const filterFile = openedFile.filter((file) => file.id !== id);

    dispatch(setOpenedFiles(filterFile));

    if (filterFile.length === 0) {
      dispatch(setActiveTab(""));
      dispatch(
        setClickedFile({
          fileName: "",
          fileContent: "",
        }),
      );
      return;
    }

    if (activeTab === id) {
      const lastFile = filterFile[filterFile.length - 1];

      dispatch(setActiveTab(lastFile.id));

      dispatch(
        setClickedFile({
          fileName: lastFile.name,
          fileContent: lastFile.content ?? "",
        }),
      );
    }
  };

  return (
    <div className="spay-5">
      <ul className="flex h-10 items-center">
        {openedFile.map((file) => (
          <li
            onClick={() => onClick(file)}
            className={`text-xl  flex items-center gap-1 cursor-pointer p-1 hover:bg-[#a8a4a450] transition-colors duration-150 ${
              activeTab === file.id
                ? "border-b border-b-blue-500 bg-[#a8a4a450]"
                : "border-b-transparent border-b"
            }`}
            key={file.id}
          >
            <RenderFileIcon fileName={file.name} />

            {file.name}

            <IoIosClose
              size={25}
              className="hover:bg-[#ffffff65] transition-colors duration-150 rounded-full "
              onClick={(e) => {
                e.stopPropagation();
                onRemove(file.id);
              }}
            />
          </li>
        ))}
      </ul>

      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
}
