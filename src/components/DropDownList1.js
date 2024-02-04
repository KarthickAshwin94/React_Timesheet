import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Dropdown_1() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'BAU_001 Training & Project Knowledge', code: '1'},
        { name: 'BAU_002 People', code: '2' },
        { name: 'BAU_003 Delivery', code: '3' },
        { name: 'BAU_004 Sales', code: '4' },
        { name: 'BAU_005 Event', code: '5' },
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Project" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
        </div>    
    )
}
        