import React, { useState } from "react";
import * as styles from '../style/sub-form.module.css'

const SubscriptionForm = () => {
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');

    const FORM_URL = `https://app.convertkit.com/forms/3128050/subscriptions`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            const response = await fetch(
                FORM_URL,
                {
                    method: 'post',
                    body: data,
                    headers: {
                        accept: 'application/json',
                    },
                }
            );
            setEmail('');
            const json = await response.json();
            if (json.status === 'success') {
                setStatus('SUCCESS');
                return;
            }
        } catch (err) {
            setStatus('ERROR');
            console.log(err);
        }
    };

    const handleInputChange = event => {
        const {value} = event.target;
        setEmail(value);
    }

    return (
        <div className={styles.subContainer}>
            <div className={styles.heading}>Join our mailing list.😍</div>
            <p className={styles.content}>
            Get our latest discounts by one click!.
            </p>

            {status === 'SUCCESS' && <p className={styles.submsg}>Success! Now check your email to confirm your subscription.</p>}
            {status === 'ERROR' && <p className={styles.submsg}>Oops, Something went wrong! try again.</p>}

            <form className={`${styles.subform} ${status === 'SUCCESS' ? styles.hide : '' }`}
                action={FORM_URL}
                method="post"
                onSubmit={handleSubmit}
            >
                <input
                    className={styles.input}
                    type="email"
                    aria-label="Your email"
                   //The name attribute should be the same as on you selected form.
                    name="email_address"
                    placeholder="Your email address"
                    onChange={handleInputChange}
                    value={email}
                    required
                />

                <button className={styles.button} type="submit">
                Subscribe
                </button>
            </form>
        </div>
    );
};

export default SubscriptionForm