import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { vn } from '@/constants/languages';

export interface RegisterInfoSectionProps {}

const schema = yup
  .object({
    fullName: yup.string().required('Vui lòng nhập họ tên của bạn'),
    email: yup
      .string()
      .email('Bạn phải nhập đúng định dạng email')
      .required('Vui lòng nhập email của bạn'),
  })
  .required();

export function RegisterInfoSection(props: RegisterInfoSectionProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation();

  const handleRegisterInfo: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log('RegisterInfoSection ~ values:', values);
    reset({
      email: '',
      fullName: '',
    });
    toast.success(t(vn.toast.SUCCESS) + '!');
  };

  return (
    <section
      className="info-bg max-lg:bg-green-600 xl:py-[270px] py-[160px] xl:mb-[144px] mb-20 xl:px-0 px-5"
      {...props}
    >
      <form onSubmit={handleSubmit(handleRegisterInfo)} className="max-w-[584px] mx-auto">
        <h2 className="mb-8 text-xl font-bold leading-7 text-center text-white xl:mb-10 xl:text-2xl">
          {t(vn.home.REGISTER_TITLE)}
        </h2>
        <div className="mb-4">
          <Input
            name="fullName"
            control={control}
            placeholder={t(vn.home.REGISTER_NAME_PLACEHOLDER)}
            className="text-[#606060] bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] border-none w-full"
            errorMessage={errors.fullName && t(String(errors.fullName?.message))}
          ></Input>
        </div>
        <div className="xl:mb-[60px] mb-10">
          <Input
            name="email"
            type="email"
            control={control}
            placeholder={t(vn.home.REGISTER_EMAIL_PLACEHOLDER)}
            className="text-[#606060] bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] border-none w-full"
            errorMessage={errors.email && t(String(errors.email?.message))}
          ></Input>
        </div>
        <Button variant="primary" className="block mx-auto">
          {t(vn.home.REGISTER_BUTTON_TEXT)}
        </Button>
      </form>
    </section>
  );
}
