import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/button';
import {
  AttachmentIcon,
  EmailIcon,
  LiveHelpIcon,
  PhoneIcon,
  TagIcon,
  UserIcon,
} from '@/components/icons';
import { Textarea } from '@/components/textarea';
import { phoneRegExp } from '@/constants/general';
import { vn } from '@/constants/languages';

import { RecruitmentField } from '.';

export interface RecruitmentFormProps {}

const schema = yup
  .object({
    fullName: yup.string().required('Vui lòng nhập họ tên của bạn'),
    email: yup
      .string()
      .email('Bạn phải nhập đúng định dạng email')
      .required('Vui lòng nhập email vào trường này'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Số điện thoại không đúng định dạng'),
    fileCV: yup.string().required('Bạn chưa chọn tệp CV'),
    socialMedia: yup.string().required('Bạn chưa nhập trường này'),
    whereKnown: yup.string().required('Bạn chưa nhập trường này'),
    note: yup.string(),
  })
  .required();

export function RecruitmentForm(props: RecruitmentFormProps) {
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

  const handleApplyJob: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log('RecruitmentForm ~ values:', values);
    reset({
      email: '',
      fileCV: '',
      fullName: '',
      phoneNumber: '',
      socialMedia: '',
      whereKnown: '',
      note: '',
    });
    toast.success(t(vn.toast.CV_SUCCESS));
  };

  return (
    <form
      onSubmit={handleSubmit(handleApplyJob)}
      className="p-6 border rounded-[10px] border-primary mb-6"
      {...props}
    >
      <h2 className="mb-4 text-2xl font-bold text-textPrimary">{t(vn.job.DETAIL_FORM_TITLE)}</h2>
      <div className="mb-3">
        <RecruitmentField
          name="fullName"
          control={control}
          title={t(vn.job.DETAIL_FORM_FULLNAME)}
          icon={<UserIcon type="outline"></UserIcon>}
          placeholder="Bùi Văn A"
          errorMessage={errors.fullName && t(String(errors.fullName?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-3">
        <RecruitmentField
          name="email"
          type="email"
          control={control}
          title="Email"
          icon={<EmailIcon type="outline"></EmailIcon>}
          placeholder="123@gmail.com"
          errorMessage={errors.email && t(String(errors.email?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-3">
        <RecruitmentField
          name="phoneNumber"
          type="tel"
          control={control}
          title={t(vn.job.DETAIL_FORM_PHONE)}
          icon={<PhoneIcon variant="#AAAAAA"></PhoneIcon>}
          placeholder="0123456789"
          errorMessage={errors.phoneNumber && t(String(errors.phoneNumber?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-3">
        <RecruitmentField
          name="fileCV"
          control={control}
          type="file"
          title={t(vn.job.DETAIL_FORM_CV)}
          icon={<AttachmentIcon variant="gray"></AttachmentIcon>}
          placeholder="bui van A.pdf"
          errorMessage={errors.fileCV && t(String(errors.fileCV?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-3">
        <RecruitmentField
          name="socialMedia"
          control={control}
          title={t(vn.job.DETAIL_FORM_ADDRESS) + ' Facebook/Skype/Linked'}
          icon={<TagIcon variant="#AAAAAA"></TagIcon>}
          placeholder="facebook.com"
          errorMessage={errors.socialMedia && t(String(errors.socialMedia?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-4">
        <RecruitmentField
          name="whereKnown"
          control={control}
          title={t(vn.job.DETAIL_FORM_WHERE)}
          icon={<LiveHelpIcon variant="#AAAAAA"></LiveHelpIcon>}
          placeholder={t(vn.job.DETAIL_FORM_WHERE_PLACEHOLDER) + '...'}
          errorMessage={errors.whereKnown && t(String(errors.whereKnown?.message))}
        ></RecruitmentField>
      </div>
      <div className="mb-5">
        <Textarea
          control={control}
          name="note"
          placeholder={t(vn.job.DETAIL_FORM_WHERE_PLACEHOLDER) + '...'}
        ></Textarea>
      </div>
      <Button variant="primary" className="w-full rounded-md">
        Apply
      </Button>
    </form>
  );
}
