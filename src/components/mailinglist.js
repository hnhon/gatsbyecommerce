import React from "react";
import ConvertKitForm from "convertkit-react";
import * as styles from "../style/mailinglist.module.css";

export default function Mailinglist() {
  const config = {
    formId: 3128050,
    template: "Poplar",
    emailPlaceholder: "Enter your email address",
    submitText: "Subscribe",
    headingText: "Join our mailing list.😍",
    backgroundImage:
      "https://images.unsplash.com/photo-1568150491977-b06e2fdf84cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
  };
  return (
    <div>
      <ConvertKitForm className={styles.form} {...config}>
        <p>Get our latest discounts by one click!.</p>
      </ConvertKitForm>
    </div>
  );
}
