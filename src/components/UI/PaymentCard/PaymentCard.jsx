import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  AddFreeJob,
  AddTransaction,
  useCompanyDetails,
  VerifyJobPayment,
} from "../../../Hooks/Company";
import { payment } from "../../../api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import swal from "sweetalert";
import rswal from "@sweetalert/with-react";
import toast from "react-hot-toast";
import { convert } from "current-currency";
import StripeCheckout from "react-stripe-checkout";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const loadScript = (src) => {
  console.log("loading script");
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("Script load true");
      resolve(true);
    };
    script.onerror = (err) => {
      console.log("Script load err");
      console.log("Error  : ", err);
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const PaymentCard = ({
  small,
  colored,
  popular,
  planName,
  amount,
  days,
  paid,
}) => {
  const [company, setCompany] = useState(
    JSON.parse(localStorage.getItem("company"))
  );
  const { isLoading, isError, error, data } = useCompanyDetails(
    company?.company._id
  );
  const { mutate: verifyPayment } = VerifyJobPayment();
  const { mutate: addFreePlan } = AddFreeJob();
  const { mutate: transactionAdd } = AddTransaction();
  const location = useLocation();
  const history = useHistory();

  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {}, []);

  async function displayRazorpay(e) {
    e.preventDefault();

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) return alert("Razorpay SDK failed to load. Are you online ?");

    const order = await payment({ amount: amount }, data?.data.company._id);

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount,
      name: data?.data.company.companyName,
      currency: order.data.currency,
      amount: order.data.amount.toString(),
      description: planName,
      image: "http://localhost:4000/logo.jpg",
      order_id: order.data.id,
      handler: function (response) {
        const transactionDetails = {
          id: company._id,
          companyName: data?.data.company.companyName,
          amount,
          jobId: location.state.jobDetails._id,
          jobTitle: location.state.jobDetails.jobTitle,
          planName,
          paymnentGateWay: "razorpay",
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
        };
        verifyPayment({ response, order, transactionDetails });
        history.push("/jobs");
        toast.success("Job Added");
      },
      prefill: {
        name: data?.data.company.companyName,
        email: data?.data.company.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#008FAE",
      },
    };
    var paymantObject = new window.Razorpay(options);
    paymantObject.open();
  }

  const handleClick = (e) => {
    e.preventDefault();
    swal({
      title: "This is a Free Plan?",
      text: "The Job will only be shown for 3 days to the users.",
      icon: "warning",
      buttons: true,
      buttons: ["Get Extra Features", "Proceed with Free"],
      dangerMode: false,
    }).then((proceed) => {
      if (proceed) {
        addFreePlan({ jobId: location.state.jobDetails._id });
        history.push("/jobs");
        toast.success("Job Added");
      } else {
        swal("Choose a paid plan You prefers.");
      }
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: convertedAmount,
          },
        },
      ],
    });
  };

  const onApprove = (datas, actions) => {
    return actions.order.capture().then((orderData) => {
      if (orderData.status == "COMPLETED") {
        const transactionDetails = {
          id: company._id,
          companyName: data?.data.company.companyName,
          amount,
          jobId: location.state.jobDetails._id,
          jobTitle: location.state.jobDetails.jobTitle,
          planName,
          paymnentGateWay: "paypal",
          paypal_orderData_id: orderData.id,
        };
        transactionAdd(transactionDetails);
        swal.close()
        history.push("/jobs");
        toast.success("Job Added");
      } else {
        toast.error("Payment Failed , Try Again");
      }
    });
  };

  const handlePaypal = (e) => {
    e.preventDefault();
    convert("INR", amount, "USD").then((res) => {
      const value = res.amount.toFixed(2);
      setConvertedAmount(value);
    });
    if (convertedAmount !== 0) {
        rswal({
          text: "Choose an option to your payment.",
          buttons: {
            cancel: "Close",
          },
          content: (
            <>
              <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
              <input id="paypal-button-container" hidden />
            </>
          ),
        });
    }
  };


  return (
    <div
      className={`w-3/4 m-8 h-${
        small ? "80" : "96"
      } shadow-xl rounded-xl flex flex-col justify-between p-6 ${
        colored && "text-white"
      }`}
      style={
        !colored
          ? { border: ".5px solid #0A0047" }
          : { backgroundColor: "#0A0047" }
      }
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-xl w-full">{planName}</h4>
        {popular && (
          <span className="text-sm bg-success py-1 px-4 rounded-2xl text-white ">
            Popular
          </span>
        )}
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex items-end">
          <p className="text-6xl font-semibold flex items-center">
            <Icon
              icon="bx:bx-rupee"
              color="black"
              height="54"
              className="p-0 m-0"
              color={colored && "#f8f8f8"}
            />
            {amount}
          </p>
          <span className="text-secondary text-sm mb-3">/job</span>
        </div>
        <p className="mt-2">Jobs Show for {days} days</p>
      </div>
      <div className="">
        {!paid && (
          <Link
            className="bg-primary w-full rounded-md h-10 flex items-center justify-center text-white font-semibold bg-primary"
            onClick={handleClick}
          >
            Select Plan
          </Link>
        )}
        {paid && (
          <>
            <Link
              className="bg-primary w-full rounded-md h-10 flex items-center justify-center text-white font-semibold mt-2"
              style={{ backgroundColor: "#5B40FF" }}
              onClick={displayRazorpay}
            >
              Pay with Razorpay
            </Link>
            <Link
              className="bg-primary w-full rounded-md h-10 flex items-center justify-center text-white font-semibold mt-2"
              style={{ backgroundColor: "#85d996" }}
              onClick={handlePaypal}
            >
              Pay with payPal
            </Link>
            <input type="" name="" id="paaypal-button-container" hidden />
            <Link
              className="bg-primary w-full rounded-md h-10 flex items-center justify-center text-white font-semibold mt-2"
              style={{ backgroundColor: "#24a0ed" }}
              to={{
                pathname : "/stripe-payment" ,
                state : planName
              }}
            >
              Pay with Stripe
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
