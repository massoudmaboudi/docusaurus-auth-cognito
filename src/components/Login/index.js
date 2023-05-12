// components/Login.js
import React, { useState } from "react";

import { Authenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Redirect, useHistory, useLocation } from '@docusaurus/router';

import './styles.css';
import { BASE, LOGIN_PATH } from "../../utils/constants";

export function Login() {

    const location = useLocation();
    const history = useHistory();

    let from = location.pathname;
    let to = history.location.pathname === LOGIN_PATH ? BASE : history.location.pathname;

    return (
        <View className="auth-wrapper">
            <Authenticator>
                {<Redirect to={to} from={from} />}
            </Authenticator>
        </View>
    );
}
