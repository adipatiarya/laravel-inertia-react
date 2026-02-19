import { disable } from '@/routes/two-factor';
import { cn } from '@@/lib/util';
import React from 'react';

type TextInputProps = {
    name: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    size?: 'large' | 'small';
    type: 'email' | 'text' | 'password';
};

export const TextInput: React.FC<TextInputProps> = ({
    name,
    value,
    onChange,
    error,
    placeholder,
    required,
    disabled,
    className,
    size = 'large',
    type = 'text',
}) => {
    return (
        <>
            <input
                id={name}
                name={name}
                className={cn('form-control', size && `form-control-${size == 'large' ? 'lg' : 'sm'}`, error && 'is-invalid', className)}
                placeholder={placeholder}
                required={required}
                value={value}
                disabled={disabled}
                type={type}
                autoComplete="off"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};
