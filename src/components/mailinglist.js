import React from "react";
import ConvertKitForm from "convertkit-react";
import * as styles from "../style/mailinglist.module.css";

export default function Mailinglist() {
  const config = {
    formId: 3128050,
    hideName: true,
    submitText: "Jump on the train",
    newTab: false,
  };
  return (
    <div>
      <ConvertKitForm className={styles.form} {...config}>
        <p>Get our latest discounts by one click!.</p>
      </ConvertKitForm>
    </div>
  );
}
