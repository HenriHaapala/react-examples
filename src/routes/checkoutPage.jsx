import '../css/cover.css';
import Checkout from '../components/checkout/checkout';

export default function CheckoutPage() {

    return (
      <main className="inner cover">
        <div class="container">

            <div class="py-5 text-center">
              <h2>Checkout form</h2>
              <p class="lead">Multistep form example</p>
            </div>

            <div class="row g-5">
              <div class="col-md-7 col-lg-8">
          
                <Checkout/>

              </div>
            </div>
        </div>
      </main>
    );
  }