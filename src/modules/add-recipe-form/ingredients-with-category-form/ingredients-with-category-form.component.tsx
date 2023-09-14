import { Button, IconButton } from "@mui/material";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";

import TextInput from "../../../common/components/text-input";
import { FormValues } from "../add-recipe-form.component";
import IngredientsForm from "../ingredient-form/ingredients-form.component";
import { AddInputOnEnterEvent } from "../../../common/helpers/add-input-on-enter";

type Props = {
  form: UseFormReturn<FormValues, any, any>;
};

const IngredientsWithCategoryForm = ({ form }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
    control: form.control,
  });

  return (
    <div className='flex-col mb-2'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 items-center'">
        {fields.map((field, index) => {
          return (
            <div className='mb-4 p-3  bg-gray rounded-lg'>
              <div className='flex items-center justify-end mb-2'>
                <IconButton
                  tabIndex={-1}
                  onClick={() => {
                    remove(index);
                  }}
                  className='flex items-center justify-center m-1  '
                  color='secondary'>
                  <ClearIcon />
                </IconButton>
              </div>
              <div
                onKeyDown={event => {
                  AddInputOnEnterEvent(event, () => {
                    append({ name: "", items: [] });
                  });
                }}
                key={field.id}
                className='flex items-center justify-center mb-4'>
                <TextInput
                  {...form.register(`ingredients.${index}.name` as const)}
                  rules={{ required: true }}
                  control={form.control}
                  label='Nazwa kategorii'
                />
              </div>
              <IngredientsForm categoryIndex={index} form={form} />
            </div>
          );
        })}
      </div>
      <div>
        <Button
          tabIndex={-1}
          onClick={() => {
            append({ name: "", items: [] });
          }}
          variant='contained'>
          Dodaj kategorię
        </Button>
      </div>
    </div>
  );
};

export default IngredientsWithCategoryForm;
