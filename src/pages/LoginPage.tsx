import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useHandleFetchMeMutation, useHandleLoginMutation } from '@/api/authApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Checkbox } from '@/components/checkbox';
import { authAction, selectCurrentUser } from '@/features/auth/authSlice';
import { AuthLogin } from '@/models';
import { LoginField } from '@/modules/login';
import { saveToken } from '@/utils/auth';

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
  const [login, { data: dataLogin }] = useHandleLoginMutation();
  const [fetchMe, { data: dataFetchMe }] = useHandleFetchMeMutation();

  const currentUser = useAppSelector(selectCurrentUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentUser) navigate('/manage/posts');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataLogin) {
      fetchMe(dataLogin.accessToken);
      saveToken(dataLogin.accessToken, dataLogin.refreshToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLogin]);

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
