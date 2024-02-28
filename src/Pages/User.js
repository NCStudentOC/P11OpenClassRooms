import { UserWelcome } from '../Components/Structure/UserWelcome/UserWelcome';
import { AccountList } from '../Components/Structure/AccountList/AccountList';
import { Header } from '../Components/Structure/Header/Header';
export function User() {

  return (<>
    {/* <Header /> */}

    <main className="main bg-dark">
      <UserWelcome />

      <h2 className="sr-only">Accounts</h2>
      <AccountList account="x8349"
        name="Argent Bank Checking"
        balance="2082.79"
        description="Available Balance" />

      <AccountList account="x6712"
        name="Argent Bank Savings"
        balance="10928.42"
        description="Available Balance" />


      <AccountList account="x8349"
        name="Argent Bank Credit Card"
        balance="184.30"
        description="Current Balance" />
    </main>
  </>
  );

}
