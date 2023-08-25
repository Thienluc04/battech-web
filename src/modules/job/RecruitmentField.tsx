import { Control, FieldValues, useController, Path, PathValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface RecruitmentFieldProps<T extends FieldValues> {
  name: Path<T>;
  title: string;
  placeholder: string;
  icon: React.ReactNode;
  control: Control<T>;
  type?: string;
  errorMessage?: string;
}

export function RecruitmentField<T extends FieldValues>({
  name,
  control,
  title,
  placeholder,
  icon,
  type = 'text',
  errorMessage = '',
}: RecruitmentFieldProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  const { t } = useTranslation();

  return (
    <label>
      <h3>
        {title} <span className="text-[#D80027]">*</span>
      </h3>
      <label className="flex items-center h-[42px] gap-4 border border-[rgba(0,_0,_0,_0.25)] px-3 rounded-md">
        <span className="w-5 h-5">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full ${type === 'file' ? 'w-0 h-0 hidden' : ''}`}
          {...field}
        />
        {type === 'file' && (
          <span className="block text-gray97">{field.value || t('Chọn file CV của bạn')}</span>
        )}
      </label>
      <span className="text-sm font-bold text-red-500">{errorMessage}</span>
    </label>
  );
}
