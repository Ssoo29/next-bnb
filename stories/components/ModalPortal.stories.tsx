import React from "react";
import SingUpModal from "../../components/auths/SignUpModal";
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
