import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export const AppLayout = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default AppLayout;
