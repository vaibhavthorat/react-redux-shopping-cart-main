import React from "react";

export default function Footer() {
  return (
    <footer class="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
      <div class="container pt-4">
        <section class="mb-4">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-facebook-f" />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-twitter" />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-google" />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-instagram" />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-linkedin" />
          </a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-github" />
          </a>
        </section>
      </div>

      <div
        class="text-center text-dark p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
      >
        <a class="text-dark" href="https://mdbootstrap.com/">
          Online Shopping
        </a>
      </div>
    </footer>
  );
}
