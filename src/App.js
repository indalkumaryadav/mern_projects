import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import Home from "./pages/dashboard/Home";

// settings
import Settings from "./pages/dashboard/Settings";
import GeneralSettings from "./pages/dashboard/Settings/General";
import CheackoutSettings from "./pages/dashboard/Settings/Checkouts";
import ShippingSettings from "./pages/dashboard/Settings/ShippingAndDelivery";
import TaxesSettings from "./pages/dashboard/Settings/Taxes";
import LocationSettings from "./pages/dashboard/Settings/Locations";
import NotificationSettings from "./pages/dashboard/Settings/Notifications";
import FileSettings from "./pages/dashboard/Settings/Files";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* settings */}
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/settings/general" component={GeneralSettings} />
        <Route exact path="/settings/checkout" component={CheackoutSettings} />
        <Route exact path="/settings/shipping" component={ShippingSettings} />
        <Route exact path="/settings/taxes" component={TaxesSettings} />
        <Route exact path="/settings/locations" component={LocationSettings} />
        <Route exact path="/settings/files" component={FileSettings} />
        <Route
          exact
          path="/settings/notifications"
          component={NotificationSettings}
        />
      </Switch>
    </>
  );
};

export default App;
