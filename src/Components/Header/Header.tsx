export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <i className="mdi mdi-account-group-outline fs-4 me-1" />
          <span className="fs-4">Proxy Seller</span>
        </a>
      </header>
    </div>
  );
}
