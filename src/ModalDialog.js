import { useEffect, useRef } from 'react';

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    console.log(isOpen)
    if (!isOpen) {
    return () => {
      console.log("isOpen false return")
    };
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      console.log("isOpen true return")
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
