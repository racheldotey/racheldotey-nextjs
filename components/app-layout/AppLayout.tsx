import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default AppLayout;
