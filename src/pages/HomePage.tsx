import { useEffect } from 'react';

import { useGetNewestListQuery, useGetNewsEventListQuery } from '@/api/newsApi';
import { useAppDispatch } from '@/app/hooks';
import { newsActions } from '@/features/news/newsSlice';
import { PartnersSection, RegisterInfoSection } from '@/modules';
import { HeroSection, IntroduceSection, NewsSection, OrientationSection } from '@/modules/home';

export default function HomePage() {
  const dispatch = useAppDispatch();

  const { data: newestResponse } = useGetNewestListQuery({
    _page: 1,
    _limit: 3,
  });

  const { data: newsEventResponse } = useGetNewsEventListQuery({
    _page: 1,
    _limit: 6,
  });

  useEffect(() => {
    if (newestResponse?.data) {
      dispatch(newsActions.setListNewest(newestResponse?.data));
    }
  }, [dispatch, newestResponse]);

  useEffect(() => {
    if (newsEventResponse && newsEventResponse?.data.length > 0) {
      dispatch(newsActions.setListEvent(newsEventResponse.data));
    }
  }, [dispatch, newsEventResponse]);

  return (
    <>
      <HeroSection></HeroSection>
      <IntroduceSection></IntroduceSection>
      <OrientationSection></OrientationSection>
      <NewsSection></NewsSection>
      <RegisterInfoSection></RegisterInfoSection>
      <PartnersSection></PartnersSection>
    </>
  );
}
