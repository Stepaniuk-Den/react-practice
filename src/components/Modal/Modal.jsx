import React from 'react';
import { StyledBtn, StyledModal, StyledOverlay } from './Modal.styled';

const Modal = (user, close) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <StyledBtn type="button" onClick={close}>
          &times;
        </StyledBtn>
        <div>
          <p>{String(user.hasJob)}</p>
          <p>{user.name}</p>
        </div>
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
