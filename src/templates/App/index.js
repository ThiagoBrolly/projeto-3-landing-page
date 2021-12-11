import * as Styled from './styles';
import Heading from '../../components/Heading';

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading colorDark={false}>Hello</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
