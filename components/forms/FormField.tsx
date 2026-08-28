"use client";

import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
};

const fieldClasses =
  "peer w-full rounded-xl border bg-white/70 px-4 pb-2.5 pt-6 text-sm text-ink outline-none transition-colors placeholder:text-transparent focus:border-blue";

function labelClasses(hasError?: boolean) {
  return clsx(
    "pointer-events-none absolute left-4 top-4 text-sm text-ink/50 transition-all duration-200",
    "peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-blue",
    "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]",
    hasError && "text-red-600"
  );
}

export function TextField({
  label,
  name,
  error,
  required,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        placeholder={label}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(fieldClasses, error ? "border-red-400" : "border-navy/15")}
        {...rest}
      />
      <label htmlFor={name} className={labelClasses(!!error)}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  error,
  required,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative">
      <textarea
        id={name}
        name={name}
        placeholder={label}
        required={required}
        rows={4}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(fieldClasses, "resize-none", error ? "border-red-400" : "border-navy/15")}
        {...rest}
      />
      <label htmlFor={name} className={labelClasses(!!error)}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function CheckboxGroupField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset>
      <legend className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-4 py-2 text-sm text-ink/80 transition-colors has-[:checked]:border-blue has-[:checked]:bg-blue/10 has-[:checked]:text-ink"
          >
            <input type="checkbox" name={name} value={option} className="h-3.5 w-3.5 accent-blue" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function SelectField({
  label,
  name,
  error,
  required,
  children,
  ...rest
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(
          "w-full rounded-xl border bg-white/70 px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-blue",
          error ? "border-red-400" : "border-navy/15"
        )}
        {...rest}
      >
        <option value="" disabled>
          Select an option
        </option>
        {children}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
