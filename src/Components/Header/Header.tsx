export default function Header() {
  return (
    <header className="d-flex py-3 mb-4 border-bottom border-2 bg-primary-subtle">
      <div className="container">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <i className="mdi mdi-account-group-outline fs-4 me-1" />
          <span className="fs-4">Proxy Seller</span>
        </a>
      </div>
    </header>
  );
}
