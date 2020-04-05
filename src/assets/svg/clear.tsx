import React from "react";

interface Props {
    onClick(): void
}

export default function ({onClick} : Props) {
    return (
        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" className="clear-svg" onClick={onClick}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M21.9067049,19.3298571 C22.6259342,20.0550714 22.6259342,21.2306429 21.9067049,21.9558571 C21.5466298,22.3189286 21.0760458,22.5 20.6045408,22.5 C20.1330358,22.5 19.6615308,22.3189286 19.3023767,21.9558571 L16,18.626 L12.6976233,21.9558571 C12.3375483,22.3189286 11.8669642,22.5 11.3954592,22.5 C10.9239542,22.5 10.4524493,22.3189286 10.0932951,21.9558571 C9.37406581,21.2306429 9.37406581,20.0550714 10.0932951,19.3298571 L13.3956717,16 L10.0932951,12.6701429 C9.37406581,11.9449286 9.37406581,10.7693571 10.0932951,10.0441429 C10.8125244,9.31892857 11.9783941,9.31892857 12.6976233,10.0441429 L16,13.374 L19.3023767,10.0441429 C20.0216059,9.31892857 21.1874756,9.31892857 21.9067049,10.0441429 C22.6259342,10.7693571 22.6259342,11.9449286 21.9067049,12.6701429 L18.6043283,16 L21.9067049,19.3298571 Z M27.6780363,10.3951429 C25.1961889,5.46535714 20.5980944,3 16,3 C11.4019056,3 6.80381114,5.46535714 4.32196366,10.3951429 C2.55934545,13.8967857 2.55934545,18.1032143 4.32196366,21.6057857 C6.80381114,26.5355714 11.4019056,29 16,29 C20.5980944,29 25.1961889,26.5346429 27.6780363,21.6048571 C29.4406546,18.1032143 29.4406546,13.8967857 27.6780363,10.3951429 L27.6780363,10.3951429 Z"
                    fill="#CCD0D1"/>
            </g>
        </svg>
    )
}