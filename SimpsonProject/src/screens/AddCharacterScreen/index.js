import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {BackHeader} from '../../components/BackHeader';
import {simpsonActions} from '../../services/redux/simpson/action';
import {
  Wrapper,
  InformationWrapper,
  PrimaryButton,
  PrimaryButtonText,
  TitleText,
  CenterView,
  CustomTextInput,
  AddressTextInput,
} from './styles';

export const AddCharacterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [about, setAbout] = useState('');
  const [url, setUrl] = useState('');
  let randomValue = Math.floor(Math.random() * 100 + 1).toString();
  const [counter, setCounter] = useState(randomValue);

  const simpsonAdd = () => {
    dispatch(
      simpsonActions.addSimpson([
        {
          id: counter,
          name: name,
          avatar: url,
          job: job,
          about: about,
        },
      ]),
    );
    setName('');
    setJob('');
    setAbout('');
    setUrl('');
  };

  return (
    <>
      <BackHeader goBack title="Add New Character" />
      <Wrapper>
        <InformationWrapper>
          <CenterView>
            <TitleText>Name Surname:</TitleText>
            <CustomTextInput
              value={name}
              onChangeText={setName}
              placeholder="Name Surname"
              size="small"
            />
          </CenterView>
          <CenterView>
            <TitleText>Job Title:</TitleText>
            <CustomTextInput
              value={job}
              onChangeText={setJob}
              placeholder="Job Title"
              size="small"
            />
          </CenterView>
          <CenterView>
            <TitleText>About Him/Her:</TitleText>
            <AddressTextInput
              value={about}
              onChangeText={setAbout}
              numberOfLines={4}
              multiline={true}
              placeholder="About Him/Her"
              size="small"
            />
          </CenterView>
          <CenterView>
            <TitleText>Image Link:</TitleText>
            <CustomTextInput
              value={url}
              onChangeText={setUrl}
              placeholder="Image Link"
              size="small"
            />
          </CenterView>
        </InformationWrapper>
        <View>
          <PrimaryButton
            onPress={() => {
              simpsonAdd();
              navigation.goBack();
            }}>
            <PrimaryButtonText>Add Character</PrimaryButtonText>
          </PrimaryButton>
        </View>
      </Wrapper>
    </>
  );
};
