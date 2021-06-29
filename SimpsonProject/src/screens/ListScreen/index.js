import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SimpsonCard} from './components/SimpsonCard';
import {simpsonActions} from '../../services/redux/simpson/action';
import {useSelector, useDispatch} from 'react-redux';
import {Header, PlusButton, ButtonWrapper, PageTitle} from './styles';
import PlusIcon from '../../assets/svgIcons/PlusIcon';
import {UrlScreen} from '../../utils/UrlScreen';

export const ListScreen = () => {
  const {simpsons} = useSelector(state => state.simpson);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    simpsons.length > 0 ? null : dispatch(simpsonActions.getSimpsonList());
  }, [simpsons, dispatch]);
  console.log(simpsons);
  return (
    <>
      <ScrollView>
        <Header>
          <PageTitle>Simpsons</PageTitle>
        </Header>
        {simpsons.map((item, idx) => (
          <SimpsonCard key={idx} id={item.id} props={item} />
        ))}
      </ScrollView>
      <ButtonWrapper onPress={() => navigation.navigate(UrlScreen.add)}>
        <PlusButton>
          <PlusIcon />
        </PlusButton>
      </ButtonWrapper>
    </>
  );
};
