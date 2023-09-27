import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useResetPassMutation } from '@/api/passApi';
import { ArrowLeftIcon } from '@/components/icons';
import { ResponseError } from '@/models';

import { LoginField } from '.';

const schema = yup.object({
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu mới của bạn')
    .min(8, 'Mật khẩu phải chứa ít nhất 8 kí tự'),
  rePassword: yup
    .string()
    .required('Vui lòng lại nhập mật khẩu mới của bạn')
    .min(8, 'Mật khẩu phải chứa ít nhất 8 kí tự'),
});

export function ResetPass() {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const { email } = useParams();

  const [resetPassword, { data: response, isLoading, error }] = useResetPassMutation();

  useEffect(() => {
    if (response) {
      toast.success(response.message);
      navigate('/login');
    }
  }, [response]);

  useEffect(() => {
    const newError: ResponseError = error as ResponseError;
    if (error) {
      toast.error(newError.data.messageError);
    }
  }, [error]);

  const handleResetPassword: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    if (values.password === values.rePassword) {
      resetPassword({ email: email as string, newPass: values.password });
    } else {
      toast.error('Mật khẩu mới và mật khẩu nhập lại phải trùng khớp');
    }
  };

  return (
    <form className="mx-11" onSubmit={handleSubmit(handleResetPassword)}>
      <Link to={'/login'} className="inline-flex items-center gap-1">
        <ArrowLeftIcon variant="gray"></ArrowLeftIcon>
        <span className="text-lg text-gray-500">Quay lại</span>
      </Link>
      <h1 className="text-2xl text-center leading-[45px] font-fontRoboto mb-5">Đặt mật khẩu mới</h1>
      <LoginField
        control={control}
        name="password"
        title="Nhập mật khẩu mới của bạn:"
        className="mb-5"
        type="password"
        errorMessage={errors.password && String(errors.password.message)}
      />
      <LoginField
        control={control}
        name="rePassword"
        title="Nhập lại mật khẩu mới của bạn:"
        className="mb-5"
        type="password"
        errorMessage={errors.rePassword && String(errors.rePassword.message)}
      />
      <button
        type="submit"
        className="bg-[#F27024] text-white rounded-3xl text-xl font-bold font-fontRoboto leading-6 w-full py-3 mb-[63px]"
      >
        {isLoading ? (
          <div className="w-8 h-8 mx-auto border-2 border-white rounded-full animate-spin border-t-transparent"></div>
        ) : (
          'Gửi mã'
        )}
      </button>
    </form>
  );
}
