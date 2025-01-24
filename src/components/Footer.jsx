const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Civil Services | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
