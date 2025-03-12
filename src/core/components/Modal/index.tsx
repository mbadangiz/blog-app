import { In_ModalProps } from "@typesDef/interfaces";

function Modal({
  children,
  onClose,
  isOpen,
  backBlur,
  isCenteredChildren,
}: In_ModalProps) {
  if (isOpen)
    return (
      <div
        className={`fixed left-0 top-0 h-svh w-full bg-black/20 ${isCenteredChildren && "flex flex-wrap content-center items-center justify-center"}`}
        style={{ backdropFilter: backBlur ? "blur(2px)" : "0" }}
        onClick={onClose ? onClose : () => {}}
      >
        {children}
      </div>
    );

  return null;
}

export default Modal;
