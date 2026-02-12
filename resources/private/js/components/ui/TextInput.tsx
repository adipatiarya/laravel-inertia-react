import { disable } from '@/routes/two-factor';
import { cn } from '@@/lib/util';
import React, { useEffect, useState } from 'react';

type TextInputProps = {
    name: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({ name, label, value, onChange, error, placeholder, required, disabled }) => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                className={cn('form-control form-control-lg', error && 'is-invalid')}
                placeholder={placeholder}
                required={required}
                value={value}
                disabled={disabled}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};
