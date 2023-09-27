import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useForgotPassCheckMutation } from '@/api/passApi';
import { ArrowLeftIcon } from '@/components/icons';
import { ResponseError } from '@/models';
import { LoginField } from '@/modules/auth';

const schema = yup.object({
  code: yup.number().required('Bạn phải nhập mã xác nhận'),
});

export function ForgotPassConfirm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { email } = useParams();
  const navigate = useNavigate();

  const [handleForgotPassCheck, { data: response, isLoading, error }] =
    useForgotPassCheckMutation();

  useEffect(() => {
    if (response) {
      toast.success(response.message);
      navigate(`/reset-pass/${email}`);
    }
  }, [response]);

  useEffect(() => {
    const newError: ResponseError = error as ResponseError;
    if (error) {
      toast.error(newError.data.messageError);
    }
  }, [error]);

  const handleForgotPasswordConfirm: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    handleForgotPassCheck({ code: values.code as number, email: email as string });
  };

  return (
    <form className="mx-11" onSubmit={handleSubmit(handleForgotPasswordConfirm)}>
      <Link to={'/forgot-pass'} className="inline-flex items-center gap-1">
        <ArrowLeftIcon variant="gray"></ArrowLeftIcon>
        <span className="text-lg text-gray-500">Quay lại</span>
      </Link>
      <h1 className="text-2xl text-center leading-[45px] font-fontRoboto mb-5">Lấy lại mật khẩu</h1>
      <LoginField
        control={control}
        name="code"
        title="Nhập mã xác nhận bạn nhận được:"
        className="mb-5"
        type="number"
        errorMessage={errors.code && String(errors.code.message)}
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
