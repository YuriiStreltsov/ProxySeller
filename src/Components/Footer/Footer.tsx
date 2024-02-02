export default function Footer() {
  return (
    <footer className="d-flex py-3 mt-auto border-bottom border-2 bg-primary-subtle">
      <div className="container">
        <p className="mb-0 text-center text-dark">
          Powered by{" "}
          <a
            href="mailto: strela.yurii@gmail.com"
            className="fw-bold link-success"
          >
            Yurii Streltsov
          </a>
          . To view the source code,{" "}
          <a
            href="https://github.com/YuriiStreltsov/ProxySeller"
            className="link-secondary"
          >
            click here
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
