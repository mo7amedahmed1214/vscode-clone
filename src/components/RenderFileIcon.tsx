import { extensionIconPaths } from "../constants";
import ImgIcon from "./ImgIcon";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  // return extension
  const extension = fileName.split(".").pop();

  // to check extension find in pathsConstants and return the photo of extension
  if (extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <ImgIcon src={iconPath} />;
  }

  if (isFolder && isOpen) return <ImgIcon src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <ImgIcon src="/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
