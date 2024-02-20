const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 w-full">
      <div className="flex justify-center">
        <a href="https://instagram.com" className="mx-2">
          <img src="https://via.placeholder.com/30" alt="Instagram" />
        </a>
        <a href="https://facebook.com" className="mx-2">
          <img src="https://via.placeholder.com/30" alt="Facebook" />
        </a>
        <a href="https://twitter.com" className="mx-2">
          <img src="https://via.placeholder.com/30" alt="Twitter" />
        </a>
      </div>
     <p className="text-center mt-2">© 204 Lamburghinie. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

