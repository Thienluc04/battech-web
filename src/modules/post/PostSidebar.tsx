import { ComponentProps, useEffect, useState } from 'react';
import { Control, FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { twMerge } from 'tailwind-merge';

import { useGetListAuthorQuery } from '@/api/authorApi';
import { useLazyGetListTagQuery } from '@/api/tagApi';
import { useGetListTopicQuery } from '@/api/topicApi';
import { Author, Tag, Topic } from '@/models';

import { SelectPost } from '.';

interface PostSidebarProps<T extends FieldValues> extends ComponentProps<'div'> {
  setValue: UseFormSetValue<T>;
  date: string;
  listTag?: string[];
  control: Control<T>;
  nameTopic: Path<T>;
  nameAuthor: Path<T>;
}

interface Option {
  value: string;
  label: string;
}

export function PostSidebar<T extends FieldValues>({
  setValue,
  date,
  control,
  nameTopic,
  listTag,
  nameAuthor,
  className = '',
}: PostSidebarProps<T>) {
  const [listTopic, setListTopic] = useState<Topic[]>([]);
  const [listAuthor, setListAuthor] = useState<Author[]>([]);

  const [listOption, setListOption] = useState<Option[]>([]);
  const [listChoosed, setListChoosed] = useState<Option[]>([]);

  const { data: responseTopic } = useGetListTopicQuery({ sort: 'asc' });
  const { data: responseAuthor } = useGetListAuthorQuery({ sort: 'asc' });
  const [getListTag, { data: responseTag }] = useLazyGetListTagQuery();

  const animatedComponents = makeAnimated();

  useEffect(() => {
    getListTag({ sort: 'asc' });
  }, []);

  useEffect(() => {
    if (listTag && listTag?.length > 0) {
      const newTags: Option[] = [];
      listTag?.forEach((item) => {
        newTags.push({ value: item, label: item });
      });
      setListChoosed(newTags);
    }
  }, [listTag]);

  useEffect(() => {
    if (responseTopic) {
      setListTopic(responseTopic);
    }
  }, [responseTopic]);

  useEffect(() => {
    if (responseAuthor) {
      setListAuthor(responseAuthor);
    }
  }, [responseAuthor]);

  useEffect(() => {
    if (responseTag) {
      const tags = responseTag as Tag[];
      tags.forEach((item) => {
        setListOption((prev) => [...prev, { label: item.name, value: item.name }]);
      });
    }
  }, [responseTag]);

  return (
    <div
      className={twMerge(
        'w-[320px] border border-borderAdmin rounded-md bg-white mb-auto',
        className,
      )}
    >
      <h2 className="px-3 py-2 font-bold border-b border-b-borderAdmin font-fontRoboto">
        Thông tin
      </h2>
      <div className="px-3 py-p10">
        <div className="mb-3">
          <h3 className="mb-2 font-fontRoboto">Chủ đề</h3>
          <div className="overflow-hidden max-h-10">
            <SelectPost control={control} name={nameTopic} list={listTopic}></SelectPost>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="mb-2 font-fontRoboto">Tác giả</h3>
          <SelectPost control={control} name={nameAuthor} list={listAuthor}></SelectPost>
        </div>
        <div>
          <h3 className="mb-2 font-fontRoboto">Tag</h3>
          <Select
            components={animatedComponents}
            placeholder="Chọn tag..."
            isMulti
            options={listOption}
            defaultValue={listChoosed}
            onChange={(tags) => {
              const list = tags as Option[];
              const newTags: string[] = [];
              list.forEach((item) => {
                newTags.push(item.value);
              });
              setValue('tags' as Path<T>, newTags as PathValue<T, Path<T>>);
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-t-borderAdmin">
        <p className="font-fontRoboto">Ngày viết:</p>
        <p className="font-medium font-fontRoboto">{date}</p>
      </div>
    </div>
  );
}
