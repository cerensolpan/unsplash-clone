import ReactDOM from "react-dom";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({ open, handleClose, selectedPhoto }) => {
  const modalRoot = document.getElementById("modal-root")!;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return ReactDOM.createPortal(
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 text-gray-700">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative">
                  <img
                    src={selectedPhoto?.urls?.full}
                    height={selectedPhoto?.height}
                    width="100%"
                  />
                  <div className="absolute top-0 left-0 right-0">
                    <div className="flex justify-between bg-white bg-opacity-90 p-4">
                      <div className="">{selectedPhoto?.user?.name}</div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="w-5 h-5 text-red-500" />
                        {selectedPhoto?.likes}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0">
                    <div className="bg-white bg-opacity-90 p-4">
                      <div className="capitalize">
                        {selectedPhoto?.description}
                      </div>
                      <div className="flex items-center gap-1 capitalize text-base">
                        {selectedPhoto?.alt_description}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>,
    modalRoot
  );
};

export default Modal;
