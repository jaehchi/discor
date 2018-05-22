import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Links from '../links';
import Feed from './feed';
import People from './people';
import Inbox from './inbox';
import Settings from './settings';
import Premium from './premium';

const ContentSwitcher = () => (
  <div className="content__switcher">
    <Links />
    <Switch>
      <Route path="/home/people" component={People} />
      <Route path="/home/inbox" component={Inbox} />
      <Route path="/home/premium" component={Premium} />
      <Route path="/home/settings" component={Settings} />
      <Route path="/home" component={Feed} />
    </Switch>
  </div>
);

export default ContentSwitcher;