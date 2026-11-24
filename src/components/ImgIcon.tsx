type Props = {
  src: string;
  className?: string;
};

export default function ImgIcon({ src, className = "size-5 " }: Props) {
  return <img src={src} className={className} />;
}
