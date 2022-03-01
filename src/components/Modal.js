import React, { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: hidden;
`
const ModalBody = styled.div`
    background-color: #1F2023;
    opacity: 95%;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`


export default function Modal({ children, name }) {
    const [shouldShow, setShouldShow] = useState(false)

    return (
        <>
            <button
                onClick={() => setShouldShow(true)}>
                    {name}
            </button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                    <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}
