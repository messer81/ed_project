import React, { useState } from "react";
import { Modal, Button } from "@mui/joy";
import { keyframes } from "@mui/system";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOutScale = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const AnimatedModal = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setVisible(true);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const onAnimationEnd = () => {
        if (!open) {
            setVisible(false);
        }
    };

    return (
        <>
            <Button variant="outlined" onClick={openModal}>
                Открыть модалку
            </Button>

            {visible && (
                <Modal
                    open={true}
                    onClose={closeModal}
                    slotProps={{
                        root: {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                        },
                        backdrop: {
                            sx: {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                backdropFilter: "blur(4px)",
                            },
                        },
                    }}
                >
                    <div
                        onAnimationEnd={onAnimationEnd}
                        style={{
                            animation: `${open ? fadeInScale : fadeOutScale} 300ms forwards ease`,
                            backgroundColor: "white",
                            padding: 24,
                            borderRadius: 12,
                            maxWidth: 400,
                            margin: "auto",
                        }}
                    >
                        <h2>Плавная анимация в Joy UI</h2>
                        <p>Модалка плавно появляется и исчезает с масштабированием.</p>
                        <Button variant="solid" onClick={closeModal} sx={{ mt: 2 }}>
                            Закрыть
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    );
};
