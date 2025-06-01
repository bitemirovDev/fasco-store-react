import CheckoutContact from './CheckoutContact/CheckoutContact';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import CheckoutDelivery from './CheckoutDelivery/CheckoutDelivery';
import CheckoutPayment from './CheckoutPayment/CheckoutPayment';
import { Button } from '@/components/shared/Button';
import styles from './CheckoutSection.module.scss';
import { Container, PageTitle } from '@/components/shared';

export default function CheckoutSection() {
  return (
    <div className={styles.checkout}>
      <Container className="container">
        <PageTitle title="FASCO Demo Checkout" />

        <div className={styles.container}>
          <div className={styles.blocks}>
            <CheckoutContact />
            <CheckoutDelivery />
            <CheckoutPayment />
            <Button className="btn--wide btn--primary btn--md">Pay Now</Button>
            <div className={styles.copyright}>
              <p>Copyright © 2024 BitemirovDev . All Rights Reseved.</p>
            </div>
          </div>
          <CheckoutSummary />
        </div>
      </Container>
    </div>
  );
}
