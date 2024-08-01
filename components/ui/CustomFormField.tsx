"use client";


import { Control } from "react-hook-form";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "../Form/PatientForm";
import Image from "next/image";

interface CustomProps {
  control: Control<any>;
  FieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  username?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { FieldType, iconAlt, iconSrc, placeholder } = props;

  switch (FieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder="enter name"
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return <FormControl>
        <PhoneInput
      placeholder={placeholder}
      defaultCountry="US"
      international 
      withCountryCallingCode
      value={field.value}
      className="input-phone"
      onChange={field.onChange}/>
      </FormControl>;

    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, FieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {FieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
