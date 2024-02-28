import './AccountList.css';

// const Accounts = () => [
//   {
//     account: "x8349",
//     name: "Argent Bank Checking",
//     balance: 2082.79,
//     description: "Available Balance"
//   },
//   {
//     account: "x6712",
//     name: "Argent Bank Savings",
//     balance: 10928.42,
//     description: "Available Balance"
//   },
//   {
//     account: "x8349",
//     name: "Argent Bank Credit Card",
//     balance: 184.30,
//     description: "Current Balance"
//   }
// ]




export function AccountList({ name, balance, description }) {

  return (
    <>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{name}</h3>
          <p className="account-amount">${balance}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">

          <button className="transaction-button">View transactions</button>
        </div>
      </section>

    </>
  );
};