import { ReactElement, useState } from "react";
import Modal from "../components/shared/Modal";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default function useModal() {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggle = () => setIsShowing(prev => !prev);

  const close = () => isShowing && setIsShowing(false);

  const modal = (
    content: JSX.Element,
    className?: string,
    auto?: boolean
  ): JSX.Element => {
    // console.log({ content });
    return (
      <Modal
        isShowing={isShowing}
        className={className}
        auto={auto}
        closeable={false}
      >
        {content}
      </Modal>
    );
  };

  return {
    isShowing,
    close,
    toggle,
    modal,
  };
}
