import { MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import { CircleX } from "lucide-react";
import Portal, { createContainer } from "../Portal/Portal";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  title?: string;
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const { onClose, children } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} data-testid="wrap" className=" overlay flex justify-center items-center fixed w-full h-full z-10 top-0 left-0 bg-[#000000ad]">
        <div className="z-20 bg-slate-100 rounded-lg p-4 flex flex-col justify-end gap-y-2 border-[#7786ef] border">
          <button
            type="button"
            onClick={handleClose}
            data-testid="modal-close-button"
            className="self-end mb-3"
          >
            <CircleX />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;