import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText,
} from './styles';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <SignText>Acessar conta</SignText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
