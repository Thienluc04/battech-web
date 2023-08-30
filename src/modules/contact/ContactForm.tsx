import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { vn } from '@/constants/languages';

export interface ContactFormProps {}

const schema = yup
  .object({
    fullName: yup.string().required('Vui lòng nhập tên của bạn'),
    email: yup
      .string()
      .email('Bạn phải nhập đúng định dạng email')
      .required('Vui lòng nhập email vào trường này'),
    phoneNumber: yup.string(),
    content: yup.string(),
  })
  .required();

export function ContactForm(props: ContactFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation();

  const handleSendMessageContact: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
    reset({
      content: '',
      email: '',
      fullName: '',
      phoneNumber: '',
    });
    toast.success(t(vn.toast.MESSAGE_SUCCESS) + '!');
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMessageContact)}
      className="flex flex-col gap-8 mx-5 xl:flex-row xl:items-start xl:mx-0"
      {...props}
    >
      <div className="flex-1">
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium leading-6">
            {t(vn.contact.FORM_NAME)} <span className="text-[#F92323]">*</span>
          </label>
          <Input
            name="fullName"
            control={control}
            errorMessage={errors.fullName && t(String(errors.fullName?.message))}
            placeholder={t(vn.contact.FORM_NAME_PLACEHOLDER)}
          ></Input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium leading-6">
            Email <span className="text-[#F92323]">*</span>
          </label>
          <Input
            name="email"
            control={control}
            errorMessage={errors.email && t(String(errors.email?.message))}
            placeholder={t(vn.contact.FORM_EMAIL_PLACEHOLDER)}
          ></Input>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium leading-6">{t(vn.contact.PHONE)}</label>
          <Input
            name="phoneNumber"
            control={control}
            errorMessage={errors.phoneNumber && t(String(errors.phoneNumber?.message))}
            placeholder={t(vn.contact.FORM_PHONE_PLACEHOLDER)}
          ></Input>
        </div>
      </div>
      <div className="flex-1 xl:mt-7">
        <div className="mb-10">
          <Textarea
            name="content"
            control={control}
            placeholder={t(vn.contact.FORM_CONTENT_PLACEHOLDER)}
            errorMessage={errors.content?.message}
            className="h-[140px] rounded-[18px] p-3"
          ></Textarea>
        </div>
        <Button variant="primary" className="w-full">
          {t(vn.contact.FORM_BUTTON_TEXT)}
        </Button>
      </div>
    </form>
  );
}
