import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Checkbox } from '@/components/checkbox';
import { LoginField } from '@/modules/login';

const schema = yup.object({
  email: yup
    .string()
    .email('Bạn phải nhập đúng định dạng email')
    .required('Vui lòng nhập email vào trường này'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu vào trường này')
    .min(8, 'Mật khẩu phải có ít nhất 8 kí tự'),
});

export default function LoginPage() {
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

  const handleLoginForm: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
    reset({
      email: '',
      password: '',
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blueBg">
      <div className="absolute">
        <img src="/images/login-bg.png" alt="logo-bg" />
      </div>
      <div className="z-10 w-[508px] rounded-3xl bg-white shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <Link to={'/'} className="my-[58px] flex justify-center">
          <img src="/images/login-logo.png" alt="login-logo" />
        </Link>
        <form className="mx-11" onSubmit={handleSubmit(handleLoginForm)}>
          <h1 className="text-3xl font-bold leading-[45px] font-fontRoboto mb-4">
            Đăng nhập tài khoản
          </h1>
          <LoginField
            control={control}
            name="email"
            title="Email"
            className="mb-5"
            type="email"
            errorMessage={errors.email && t(String(errors.email.message))}
          />
          <LoginField
            control={control}
            name="password"
            title="Mật khẩu"
            className="mb-5"
            type="password"
            errorMessage={errors.password && t(String(errors.password.message))}
          />
          <div className="flex justify-between mb-6">
            <Checkbox>Nhớ mật khẩu</Checkbox>
            <Link to={''} className="leading-6 underline text-blueText font-fontRoboto">
              Quên mật khẩu
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#F27024] text-white rounded-3xl text-xl font-bold font-fontRoboto leading-6 w-full py-3 mb-[63px]"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
