import React, { useState } from "react";
import { Modal, Button } from "@mui/joy";

export const SimpleModalJoy: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Открыть модалку
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={{ padding: 20, backgroundColor: "white", borderRadius: 8, maxWidth: 400 }}>
                    <h2>Это модальное окно с анимацией из Joy UI</h2>
                    <p>Здесь можно разместить любую информацию.</p>
                    <Button variant="solid" onClick={() => setOpen(false)} style={{ marginTop: 20 }}>
                        Закрыть
                    </Button>
                </div>
            </Modal>
        </>
    );
};
