import React, {useRef} from 'react';


const Select = ({options, defaultValue, value, onChange}:any) => {
    const defaultStatus = useRef(false);
    function disableDefaultOption(value:any) {
        defaultStatus.current = true;
        onChange(value)
    }
    return (
        <select
            value={value}
            onChange={event => disableDefaultOption(event.target.value)}
        >
            <option disabled={defaultStatus.current} onChange={disableDefaultOption}>
                {defaultValue}
            </option>
            {
                options.map(function (option:any) {
                        return <option key={option.value} value={option.value}>
                            {option.name}
                        </option>;
                    }
                )
            }
        </select>
    );
};

export default Select;