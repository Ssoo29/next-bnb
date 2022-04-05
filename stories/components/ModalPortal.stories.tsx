import React from "react";
import SingUpModal from "../../components/SingUpModal";
import useModal from "../../hooks/useModal";

const { ModalPortal } = useModal();

export default {
  title: "Components/ModalPortal",
  compoenent: ModalPortal,
};

export const ModalCompo = () => (
  <ModalPortal>
    <SingUpModal />
  </ModalPortal>
);
