//@ts-nocheck

import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';

import { DialogContent, ModalDialog } from '@mui/joy';

interface ModalBlockProps {
  isVisible: boolean;
  close: () => void;
  children: React.ReactElement;
  videoRef?: HTMLVideoElement | null;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({videoRef, isVisible, close, children }) => {

  if (!isVisible)
    return

  React.useEffect( () => {
    if(isVisible){
      const videoref = document.getElementById('video-palyed');

      if(videoref){
        setTimeout(() => {
          videoRef.muted = false
          videoref?.play()
        },1000)
      }
    }
  }, [videoRef, isVisible])
  

  return (
    <React.Fragment>
      <Modal open={isVisible} onClose={close}>
        <ModalDialog>
          {children}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  )
}

