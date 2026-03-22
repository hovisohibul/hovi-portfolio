import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../../layout/ContextLayout";

export default function Close() {
  const { closeOverlay } = useAppContext();
  return (
    <button onClick={closeOverlay} type="button" className="cursor-pointer">
      <IoMdClose size={24} />
    </button>
  );
}
