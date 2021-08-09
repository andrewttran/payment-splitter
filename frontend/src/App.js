import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { domain, clientId } from './config/Auth0Config';
import ProtectedRoute from './components/ProtectedRoute';
import Friend from './pages/Friend';
import Friends from './pages/Friends';
import Group from './pages/Group';
import Groups from './pages/Groups';
import Home from './pages/Home';
import Loading from './pages/Loading';
import NewSplit from './pages/AddSplit';
import history from './utils/history';

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <Switch>
          <ProtectedRoute path="/new-split" component={NewSplit} />
          <ProtectedRoute path="/group/:groupId" component={Group} />
          <ProtectedRoute path="/groups" component={Groups} />
          <ProtectedRoute path="/friend/:username" component={Friend} />
          <ProtectedRoute path="/friends" component={Friends} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Auth0Provider>
  );
};

export default App;
