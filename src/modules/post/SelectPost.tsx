import { ChangeEvent, ComponentProps } from 'react';
import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { Author, Topic } from '@/models';

export interface SelectPostProps<T extends FieldValues> extends ComponentProps<'select'> {
  control: Control<T>;
  name: Path<T>;
  list: Topic[] | Author[];
}

export function SelectPost<T extends FieldValues>({
  name,
  control,
  onChange: externalOnchange,
  className = '',
  list,
}: SelectPostProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  return (
    <select
      className={twMerge('w-full h-8 border rounded px-p10 border-borderAdmin', className)}
      {...field}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        field.onChange(e);
        if (externalOnchange) {
          externalOnchange(e);
        }
      }}
    >
      <option>Chọn {name === 'topic' ? 'chủ đề' : 'tác giả'}</option>
      {list.length > 0 &&
        list.map((item) => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
    </select>
  );
}
