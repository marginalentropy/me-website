export const DonateButton = ({ className }: { className?: string }) => {
  return (
    <a
      className={`btn btn-secondary ${className}`}
      href="https://www.paypal.com/donate/?hosted_button_id=9WD47FSBYCV3N"
    >Donate</a>
  );
};

// background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);