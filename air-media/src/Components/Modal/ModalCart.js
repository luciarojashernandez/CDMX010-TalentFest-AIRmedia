import { useDialog } from "react-st-modal";
import React from 'react'

export default function ModalCart() {
    const dialog = useDialog();
    return (
        <div>
            <h1>Hola</h1>
            <button onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
          
        }}>
            </button>
        </div>
    )
}
