import Logo from 'components/Logo'
import * as S from './Auth.styles'

type AuthProps = {
  children?: React.ReactNode
  title?: string
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Content>
        {!!title && <h1>{title}</h1>}
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
