import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { GlobalAlertDataProvider } from './context/GlobalAlertData';
import { MobileProvider } from './context/Mobile';
import { ThemeProvider } from './context/Theme';
import GlobalStyle from './styles/global';
import { GlobalAlert } from './components';
import RoutesComponent from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <MobileProvider>
        <GlobalAlertDataProvider>
          <AuthProvider>
              <BrowserRouter>
                <RoutesComponent />
                <GlobalStyle />
                <GlobalAlert />
              </BrowserRouter>
          </AuthProvider>
        </GlobalAlertDataProvider>
      </MobileProvider>
    </ThemeProvider>
  );
};

export default App;
