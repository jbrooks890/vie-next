// import "../../styles/blocks/Img.css";
import styles from "../../styles/Img.module.css";
import useModal from "../../hooks/useModal";
import Image, { StaticImageData } from "next/image";

type PropsType = {
  src: string;
  altText: string;
  caption?: string;
  size?: string;
  lightbox?: boolean;
  id?: string;
  className?: string;
  shadow?: boolean;
  cover?: boolean;
  // props: any[];
};

export default function Img({
  src,
  altText,
  caption = altText,
  size,
  lightbox = true,
  id,
  className,
  shadow = false,
  cover = false,
  ...props
}: PropsType) {
  const { toggle, isShowing, modal } = useModal();
  const output = (
    <Image
      src={src}
      alt={altText}
      width={480} // TODO
      height={480} // TODO
      id={id}
      className={`${styles.img} ${
        lightbox ? styles.lightbox : styles["no-lightbox"]
      } ${shadow ? styles.shadow : styles["no-shadow"]} ${
        cover ? styles.cover : styles.contain
      } ${className ?? ""}`}
      onClick={lightbox ? toggle : undefined}
      {...props}
    />
  );

  return (
    <>
      {output}
      {lightbox && isShowing && modal(output)}
    </>
  );
}
