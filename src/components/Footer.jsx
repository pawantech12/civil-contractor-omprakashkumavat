const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Civil Services | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
