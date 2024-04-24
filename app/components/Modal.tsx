
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => true | void;
  children: React.ReactNode;
}


const Modal:React.FC<ModalProps> = ({modalOpen, setModalOpen,children}) => {
  return (
    <div>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box w-11/12 max-w-xl ">
          <form method="dialog">
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
}

export default Modal
