import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useHandleFetchMeMutation, useHandleLoginMutation } from '@/api/authApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Checkbox } from '@/components/checkbox';
import { authAction, selectCurrentUser, selectRememberPass } from '@/features/auth/authSlice';
import { AuthLogin, ResponseError } from '@/models';
import { LoginField } from '@/modules/auth';
import { saveSession, saveToken } from '@/utils/auth';

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
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation();
  const [login, { data: dataLogin, error: errorLogin, isLoading }] = useHandleLoginMutation();
  const [fetchMe, { data: dataFetchMe }] = useHandleFetchMeMutation();

  const currentUser = useAppSelector(selectCurrentUser);
  const rememberPass = useAppSelector(selectRememberPass);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentUser) navigate('/manage/posts');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (dataLogin) {
        if (rememberPass) {
          saveToken(dataLogin.accessToken, dataLogin.refreshToken);
        } else {
          saveSession(dataLogin.accessToken, dataLogin.refreshToken);
        }
        await fetchMe(dataLogin.accessToken);
        toast.success('Đăng nhập thành công');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLogin]);

  useEffect(() => {
    const error: ResponseError = errorLogin as ResponseError;
    if (error) {
      toast.error(error.data.messageError);
    }
  }, [errorLogin]);

  useEffect(() => {
    if (dataFetchMe) {
      dispatch(authAction.setCurrentUser(dataFetchMe));
      navigate('/manage/posts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFetchMe]);

  const handleLoginForm: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    login(values as AuthLogin);
  };

  if (currentUser) return null;

  return (
    <form className="mx-11" onSubmit={handleSubmit(handleLoginForm)}>
      <h1 className="xl:text-3xl text-2xl font-bold text-center xl:text-left leading-[45px] font-fontRoboto mb-4">
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
      <div className="flex flex-col items-center justify-between gap-3 mb-6 md:gap-0 md:flex-row">
        <Checkbox onChange={() => dispatch(authAction.setRememberPass(!rememberPass))}>
          Nhớ mật khẩu
        </Checkbox>
        <Link to={'/forgot-pass'} className="leading-6 underline text-blueText font-fontRoboto">
          Quên mật khẩu
        </Link>
      </div>
      <button
        type="submit"
        className="bg-[#F27024] text-white rounded-3xl text-xl font-bold font-fontRoboto leading-6 w-full py-3 mb-[63px]"
      >
        {isLoading ? (
          <div className="w-8 h-8 mx-auto border-2 border-white rounded-full animate-spin border-t-transparent"></div>
        ) : (
          'Đăng nhập'
        )}
      </button>
    </form>
  );
}
