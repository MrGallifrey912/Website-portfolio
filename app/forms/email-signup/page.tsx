import Head from "next/head";


export default function LoginPage() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
                <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            </Head>
            <main>
            <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          {/** Container for the demo */}
                <div
                  className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop"
                >
                  <div
                    className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white"
                  >
                    <h2 className="mdl-card__title-text">
                      Firebase Email &amp; Password Authentication
                    </h2>
                  </div>
                  <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                    <p>
                      Enter an email and password below and either sign in to an
                      existing account or sign up
                    </p>

                    <input
                      className="mdl-textfield__input"
                      style={{display: 'inline', width: 'auto'}}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <input
                      className="mdl-textfield__input"
                      style={{display: 'inline', width: 'auto'}}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <br /><br />
                    <button
                      disabled
                      className="mdl-button mdl-js-button mdl-button--raised"
                      id="quickstart-sign-in"
                      name="signin"
                    >
                      Sign In
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="mdl-button mdl-js-button mdl-button--raised"
                      id="quickstart-sign-up"
                      name="signup"
                    >
                      Sign Up
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="mdl-button mdl-js-button mdl-button--raised"
                      disabled
                      id="quickstart-verify-email"
                      name="verify-email"
                    >
                      Send Email Verification
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="mdl-button mdl-js-button mdl-button--raised"
                      id="quickstart-password-reset"
                      name="verify-email"
                    >
                      Send Password Reset Email
                    </button>

                    {/**Container where we'll display the user details */}
                    <div className="quickstart-user-details-container">
                      Firebase sign-in status:
                      <span id="quickstart-sign-in-status">Unknown</span>
                      <div>Firebase auth <code>currentUser</code> object value:</div>
                      <pre><code id="quickstart-account-details">null</code></pre>
                    </div>
                  </div>
                </div>
            </div>
            </main>
        </div>
    );

}