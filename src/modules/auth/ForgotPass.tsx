import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useForgotPassMutation } from '@/api/passApi';
import { ResponseError } from '@/models';
import { LoginField } from '@/modules/auth';

const schema = yup.object({
  email: yup
    .string()
    .email('Bạn phải nhập đúng định dạng email')
    .required('Vui lòng nhập email tài khoản của bạn'),
});

export function ForgotPass() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [handleForgotPass, { data, isLoading, error }] = useForgotPassMutation();

  useEffect(() => {
    if (data) {
      toast.success(data.message);
      navigate(`/forgot-pass/${data.data?.split('@')[0]}`);
    }
  }, [data]);

  useEffect(() => {
    const newError: ResponseError = error as ResponseError;
    if (error) {
      toast.error(newError.data.messageError);
    }
  }, [error]);

  const handleForgotPassword: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    handleForgotPass(values.email);
  };

  return (
    <form className="mx-11" onSubmit={handleSubmit(handleForgotPassword)}>
      <h1 className="text-2xl text-center leading-[45px] font-fontRoboto mb-5">Lấy lại mật khẩu</h1>
      <LoginField
        control={control}
        name="email"
        title="Nhập email tài khoản của bạn:"
        className="mb-5"
        type="email"
        errorMessage={errors.email && String(errors.email.message)}
      />
      <button
        type="submit"
        className="bg-[#F27024] text-white rounded-3xl text-xl font-bold font-fontRoboto leading-6 w-full py-3 mb-[63px]"
      >
        {isLoading ? (
          <div className="mx-auto w-8 h-8 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
        ) : (
          'Gửi mã'
        )}
      </button>
    </form>
  );
}
